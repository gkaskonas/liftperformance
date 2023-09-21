import { gql } from "graphql-request";
import { hygraph } from "./utils/hygraph";
import { Metadata } from "next";
import PaginatedBlogs from "./components/blogs";
import React, { Suspense } from "react";
import LoadingTemplate from "./components/loading";
import { IPost, IBlog } from "@/interfaces/blog";

export const metadata: Metadata = {
  title: "Lift Performance Blog",
  description: "Discover fitness tips, workout plans, nutrition guides, and expert advice to achieve your gym goals",
  alternates: {
    canonical: "https://liftperformance.net/blog",
  },
};

const QUERY = gql`
  {
    posts(orderBy: date_DESC) {
      id
      slug
      title
      excerpt
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
    }
  }
`;

async function getBlogs(): Promise<IPost[]> {
  const blogs: IBlog = await hygraph.request(QUERY);

  return blogs.posts;
}

export default async function Page() {
  const blogs = await getBlogs();

  return (
    <div className="" data-theme="light">
      <Suspense fallback={<LoadingTemplate />}>
        <PaginatedBlogs itemsPerPage={10} blogs={blogs} />
      </Suspense>
    </div>
  );
}
