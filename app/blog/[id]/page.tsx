import { gql } from 'graphql-request'
import { IPost } from '../page'
import { hygraph } from '../utils/hygraph'

import type { Metadata, ResolvingMetadata } from 'next'
import Blog from '../components/blog'
import React from 'react'
type Props = {
  params: { id: string }
  searchParams: { [ key: string ]: string | string[] | undefined }
}

interface IBlogPost {
  post: IPost
}

export async function generateMetadata (
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  const blog: IBlogPost = await hygraph.request(gql`
    {
      post(where: {id: "${id}"}) {
      id
      title
      excerpt
      }
    }
  `)

  return {
    title: blog.post.title,
    description: blog.post.excerpt,
    alternates: {
      canonical: `https://djrmsjgzumyjo.cloudfront.net/blog/${id}`
    }
  }
}

async function getBlog (id: string): Promise<IPost> {
  const blog: IBlogPost = await hygraph.request(gql`
    {
      post(where: {id: "${id}"}) {
      id
      title
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
        json
      }
    }
    }
  `)

  return blog.post
}

export default async function Page ({ params, searchParams }: Props) {
  const blog = await getBlog(params.id)

  return (
    <div className="" data-theme="light">
      <Blog blog={blog} />
    </div>
  )
}