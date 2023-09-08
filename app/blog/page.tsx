

import { gql } from 'graphql-request';
import { hygraph } from "./utils/hygraph";
import { remark } from 'remark';
import html from 'remark-html';
import Head from "next/head";
import Image from "next/image"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lift Performance Blog",
  description:
    "Discover fitness tips, workout plans, nutrition guides, and expert advice to achieve your gym goals. Elevate your fitness journey with our gym blog's valuable insights and stay motivated on the path to a healthier you.",
  metadataBase: new URL("https://liftperformance.net"),
  alternates: {
    canonical: "/blog",
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon-16x16.png",
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      url: "/favicon-32x32.png",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      url: "/site.webmanifest",
      sizes: "180x180",
    },
    {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
    }
  ]
};

export interface IBlog {
  posts: IPost[]
}

export interface IPost {
  id: string
  excerpt: string;
  title: string
  publishedAt: string
  publishedBy: {
    id: string
    name: string
  }
  coverImage: {
    id: string;
    height: number;
    width: number;
    url: string;
  }
  content: {
    markdown?: string;
    html?: string;
    json?: {
      children: [
        {
          type: string;
          src: string;
          title: string;
          width: number;
          height: number;
          mimeType: string;
          children: [
            {
              text: string;
            }
          ]
        }
      ]
    }
  }
}

const QUERY = gql`
  {
    posts(orderBy: createdAt_DESC) {
    id
    title
    excerpt
    publishedAt
    publishedBy {
      id
      name
    }
    coverImage {
      id
      height
      width
      url
    }
    content {
      markdown
    }
  }
  }
`

async function getBlogs(): Promise<IPost[]> {
  const blogs: IBlog = await hygraph.request(QUERY)

  blogs.posts.map(async (post) => {

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(post.content);
    const contentHtml = processedContent.toString();
    post.content.html = contentHtml
  });

  return blogs.posts
}

export default async function Page() {

  const blogs = await getBlogs()

  return (
    <div className="" data-theme="light">
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <h2 className="mb-16 text-center text-2xl font-bold">Latest Blogs</h2>

          {blogs.map((blog) => (
            <div className="mb-16 flex flex-wrap">
              <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                <div
                  className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init data-te-ripple-color="light">
                  <Image src={blog.coverImage.url} width={blog.coverImage.width} height={blog.coverImage.height} className="w-full" alt="Louvre" />
                  <a href={`/blog/${blog.id}`}>
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    </div>
                  </a>
                </div>
              </div>

              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
                <a href={`/blog/${blog.id}`} className="mb-4 text-2xl font-bold">{blog.title}</a>
                <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
                  Published <u>{new Date(blog.publishedAt).toDateString()}</u> by {blog.publishedBy.name}
                </p>
                <p className="mb-6">
                  {blog.excerpt}
                </p>
              </div>
            </div>
          ))
          }
        </section >
      </div >
    </div >
  );
}
