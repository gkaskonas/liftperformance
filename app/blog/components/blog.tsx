'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'
import React from 'react'
import { IPost } from '@/interfaces/blog'

export default function Blog ({ blog }: { blog: IPost }) {
  const CalendlyButton = dynamic(() => import('../../components/booking2'), {
    ssr: false
  })

  const length = blog.content.json?.children.length

  return (
        <div className="container my-24 mx-auto md:px-6">
            <section className="">
                <Image src={blog.coverImage.url} width={blog.coverImage.width} height={blog.coverImage.height}
                    className="mb-6 xl:w-2/3 rounded-lg shadow-lg dark:shadow-black/20 transition-opacity opacity-0 duration-[0.5s]" alt="cover image" priority onLoadingComplete={(image) => image.classList.remove('opacity-0')} />

                <div className="mb-6 flex items-center">
                    <div>
                        <span> Published <u>{new Date(blog.date).toDateString()}</u> by </span>
                        <p className="font-medium">{blog.publishedBy?.name ?? 'liftperformance'}</p>
                    </div>
                </div>

                <h1 className="mb-6 text-3xl font-bold">
                    {blog.title}
                </h1>

                <article className="prose flex flex-col w-full text-lg text-justify max-w-4xl">
                    {blog.content.json?.children.map((child, index: number) => {
                      if (child.type === 'paragraph') {
                        return (<div className="flex flex-col items-center" key={index}>

                                <p className="mt-2 mb-0">{child.children[0].text}</p>
                                {index === length! - 1 && <CalendlyButton buttonClassNames="mt-10 btn btn-ghost flex px-10 bg-black text-white text-bold text-xl sm:text-2xl text-center" />}
                            </div>)
                      }
                      if (child.type === 'heading-two' || child.type === 'heading-three') {
                        return <h2 className="bold text-left" key={index}>{child.children[0].text}</h2>
                      }
                      if (child.type === 'image') {
                        return (<div className="flex flex-col items-center" key={index}>
                                <Image src={child.src} width={child.width} height={child.height} alt="image" className="transition-opacity opacity-0 duration-[0.5s]" onLoadingComplete={(image) => image.classList.remove('opacity-0')} />
                                <CalendlyButton buttonClassNames="mb-5 btn btn-ghost flex px-10 bg-black text-white text-bold text-xl sm:text-2xl text-center" />

                            </div>)
                      }
                      return ''
                    })}
                </article>
            </section >
        </div >
  )
}
