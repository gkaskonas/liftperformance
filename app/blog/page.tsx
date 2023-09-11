

import { gql } from 'graphql-request';
import { hygraph } from "./utils/hygraph";
import { remark } from 'remark';
import html from 'remark-html';
import { Metadata } from 'next';
import Blogs from './components/blogs';

export const metadata: Metadata = {
  title: "Lift Performance Blog",
  description:
    "Discover fitness tips, workout plans, nutrition guides, and expert advice to achieve your gym goals. Elevate your fitness journey with our gym blog's valuable insights and stay motivated on the path to a healthier you.",
  metadataBase: new URL("https://https://djrmsjgzumyjo.cloudfront.net"),
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
      <Blogs blogs={blogs} />
    </div >
  );
}
