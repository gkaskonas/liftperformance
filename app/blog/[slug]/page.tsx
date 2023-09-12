import { gql } from 'graphql-request'
import { hygraph } from '../utils/hygraph'

import type { Metadata, ResolvingMetadata } from 'next'
import Blog from '../components/blog'
import React, { Suspense } from 'react'
import LoadingTemplate from '../components/loading'
import { IBlogPost, IPost } from '@/interfaces/blog'
type Props = {
  params: { slug: string }
  searchParams: { [ key: string ]: string | string[] | undefined }
}

export async function generateMetadata (
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  const blog: IBlogPost = await hygraph.request(gql`
    {
      post(where: {slug: "${slug}"}) {
      id
      slug
      title
      excerpt
      description
      }
    }
  `)

  return {
    title: blog.post.title,
    description: blog.post.description,
    alternates: {
      canonical: `https://djrmsjgzumyjo.cloudfront.net/blog/${slug}`
    }
  }
}

async function getBlog (slug: string): Promise<IPost> {
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
  `)

  return blog.post
}

export default async function Page ({ params, searchParams }: Props) {
  const blog = await getBlog(params.slug)

  return (
    <div className="" data-theme="light">
      <Suspense fallback={<LoadingTemplate/>}>
        <Blog blog={blog} />
      </Suspense>
    </div>
  )
}
