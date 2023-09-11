"use client";

import Image from "next/image"
import { IPost } from "../page"


export default function Blogs({ blogs }: { blogs: IPost[] }) {
    return (<div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
            <h2 className="mb-16 text-center text-2xl font-bold">Latest Blogs</h2>

            {blogs.map((blog) => (
                <div className="mb-16 flex flex-wrap">
                    <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                        <div
                            className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                            data-te-ripple-init data-te-ripple-color="light">
                            <Image src={blog.coverImage.url} width={blog.coverImage.width} height={blog.coverImage.height} className="w-full transition-opacity opacity-0 duration-[0.5s]" alt="Blog Cover Image" onLoadingComplete={(image) => image.classList.remove("opacity-0")} />
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
    </div >)
}