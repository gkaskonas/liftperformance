import { gql } from "graphql-request";
import { rateLimitedHygraph } from "../../utils/rate-limited-hygraph";
import { getBlogs } from "../page";

import type { Metadata, ResolvingMetadata } from "next";
import Blog from "../components/blog";
import React, { Suspense } from "react";
import LoadingTemplate from "../components/loading";
import { IBlogPost, IPost } from "@/interfaces/blog";
import "@/styles/globals.css"
import Analytics from "@/components/analytics";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  const blog: IBlogPost = await rateLimitedHygraph.request(gql`
    {
      post(where: {slug: "${slug}"}) {
      id
      slug
      title
      description
      }
    }
  `);

  return {
    title: blog.post.title,
    description: blog.post.description,
    alternates: {
      canonical: `https://liftperformance.net/blog/${slug}`,
    },
  };
}

async function getBlog(slug: string): Promise<IPost> {
  const blog: IBlogPost = await rateLimitedHygraph.request(gql`
    {
      post(where: {slug: "${slug}"}) {
      id
      title
      publishedAt
      publishedBy {
        id
        name
      }
      date
      coverImage {
        id
        height
        width
        url
      }
      content {
        json
      }
    }
    }
  `);

  return blog.post;
}

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const posts = await getBlogs();

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const blog = await getBlog((await params).slug);

  return (
    <div className="" data-theme="light">
      <Suspense>
        <Analytics />
      </Suspense>
      <Suspense fallback={<LoadingTemplate />}>
        <Blog blog={blog} />
      </Suspense>
    </div>
  );
}
