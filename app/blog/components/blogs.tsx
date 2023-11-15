"use client";

import { IPost } from "@/interfaces/blog";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

function Blogs({ currentBlogs }: { currentBlogs: IPost[] }) {
  return (
    <>
      {currentBlogs &&
        currentBlogs.map((blog, index) => (
          <div className="mb-16 flex flex-wrap" key={index}>
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <Image
                  src={blog.coverImage.url}
                  width={blog.coverImage.width}
                  height={blog.coverImage.height}
                  className="w-full transition-opacity opacity-0 duration-[0.5s]"
                  alt="Blog Cover Image"
                  priority
                  onLoad={image => image.currentTarget.classList.remove("opacity-0")}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Link href={`/blog/${blog.slug}`}>
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </Link>
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
              <Link href={`/blog/${blog.slug}`} className="mb-4 text-2xl font-bold">
                <h2>{blog.title}</h2>
              </Link>
              <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
                Published <u>{new Date(blog.date).toDateString()}</u> by {blog.publishedBy.name}
              </p>
              <p className="mb-6">{blog.excerpt}</p>
            </div>
          </div>
        ))}
    </>
  );
}

export default function PaginatedBlogs({ blogs, itemsPerPage }: { blogs: IPost[]; itemsPerPage: number }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [ itemOffset, setItemOffset ] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = blogs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(blogs.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="">
        <h1 className="mb-16 text-center text-2xl font-bold">Latest Blogs</h1>
        <Blogs currentBlogs={currentItems} />
        <ReactPaginate
          className="flex justify-center my-10 gap-x-5"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </section>
    </div>
  );
}
