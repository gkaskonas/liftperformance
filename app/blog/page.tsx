import { gql } from 'graphql-request'
import { hygraph } from './utils/hygraph'
import { Metadata } from 'next'
import Blogs from './components/blogs'
import React, { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Lift Performance Blog',
  description:
    "Discover fitness tips, workout plans, nutrition guides, and expert advice to achieve your gym goals. Elevate your fitness journey with our gym blog's valuable insights and stay motivated on the path to a healthier you.",
  metadataBase: new URL('https://djrmsjgzumyjo.cloudfront.net'),
  alternates: {
    canonical: '/blog'
  },
  icons: [
    {
      rel: 'icon',
      url: '/favicon-16x16.png',
      type: 'image/png',
      sizes: '16x16'
    },
    {
      rel: 'icon',
      url: '/favicon-32x32.png',
      type: 'image/png',
      sizes: '32x32'
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
      type: 'image/png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      url: '/site.webmanifest',
      sizes: '180x180'
    },
    {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg'
    }
  ]
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
  description: string;
  date: string;
  slug: string;
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

export interface IBlog {
  posts: IPost[]
}

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
`

async function getBlogs (): Promise<IPost[]> {
  const blogs: IBlog = await hygraph.request(QUERY)

  return blogs.posts
}

export default async function Page () {
  const blogs = await getBlogs()

  return (
    <div className="" data-theme="light">
      <Suspense fallback={<div>Loading...</div>}>
        <Blogs blogs={blogs} />
      </Suspense>
    </div >
  )
}
