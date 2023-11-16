"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import React from "react";
import { IPost } from "@/interfaces/blog";
import { RichText } from "@graphcms/rich-text-react-renderer";

export default function Blog({ blog }: { blog: IPost }) {
  const CalendlyButton = dynamic(() => import("../../components/booking2"), {
    ssr: false,
  });

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="">
        <Image
          src={blog.coverImage.url}
          width={blog.coverImage.width}
          height={blog.coverImage.height}
          className="mb-6 xl:w-2/3 rounded-lg shadow-lg dark:shadow-black/20 transition-opacity opacity-0 duration-[0.5s]"
          alt="cover image"
          priority
          onLoad={image => image.currentTarget.classList.remove("opacity-0")}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="mb-6 flex items-center">
          <div>
            <span>
              {" "}
              Published <u>{new Date(blog.date).toDateString()}</u> by{" "}
            </span>
            <p className="font-medium">{blog.publishedBy?.name ?? "liftperformance"}</p>
          </div>
        </div>

        <h1 className="mb-6 text-3xl font-bold">{blog.title}</h1>

        <article className="prose flex flex-col w-full text-lg text-justify max-w-4xl">
          <RichText content={blog.content.json?.children} renderers={{
            img: ({ src, altText, height, width }) => (
              <div>
                <Image
                  loading="lazy"
                  src={src ?? ""}
                  alt={altText ?? ""}
                  height={height ?? 0}
                  width={width ?? 0}
                  className="transition-opacity opacity-0 duration-[0.5s]"
                  onLoad={image => image.currentTarget.classList.remove("opacity-0")}
                />
                <CalendlyButton buttonClassNames="mb-5 btn btn-ghost flex px-10 bg-black text-white text-bold text-xl sm:text-2xl text-center" />
              </div>
            ),
          }} />
        </article>
      </section>
    </div>
  );
}
