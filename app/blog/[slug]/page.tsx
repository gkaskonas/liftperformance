import { gql } from "graphql-request";
import { hygraph } from "../../utils/hygraph";

import type { Metadata, ResolvingMetadata } from "next";
import Blog from "../components/blog";
import React, { Suspense } from "react";
import LoadingTemplate from "../components/loading";
import { IBlogPost, IPost } from "@/interfaces/blog";
import "@/styles/globals.css"
import { getBlogs } from "../page";
import Analytics from "@/components/analytics";

type Props = {
  params: { slug: string };
  searchParams: { [ key: string ]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  const blog: IBlogPost = await hygraph.request(gql`
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
  const blog: IBlogPost = await hygraph.request(gql`
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

export async function generateStaticParams() {
  const posts = await getBlogs();

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Page({ params }: Props) {
  const blog = await getBlog(params.slug);

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
