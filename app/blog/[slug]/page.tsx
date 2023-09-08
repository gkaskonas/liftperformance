import { gql } from "graphql-request";
import { IPost } from "../page";
import { hygraph } from "../utils/hygraph";
import Head from "next/head";
import Image from "next/image"
import dynamic from "next/dynamic";



interface IBlogPost {
    post: IPost
}



async function getBlog(id: string): Promise<IPost> {
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


export default async function Page({ params }: { params: { slug: string } }) {

    const CalendlyButton = dynamic(() => import("../../components/booking2"), {
        ssr: false,
    });

    const blog = await getBlog(params.slug)

    const length = blog.content.json?.children.length

    return (
        <div className="" data-theme="light">
            <Head>
                <title>{blog.title}</title>
                <link
                    rel="canonical"
                    href={`https://liftperformance.net/blog/${params.slug}`}
                    key="canonical"
                    title="canonical link"
                />
            </Head>
            <div className="container my-24 mx-auto md:px-6">
                <section className="">
                    <Image src={blog.coverImage.url} width={blog.coverImage.width} height={blog.coverImage.height}
                        className="mb-6 xl:w-2/3 rounded-lg shadow-lg dark:shadow-black/20" alt="cover image" />

                    <div className="mb-6 flex items-center">
                        <div>
                            <span> Published <u>{new Date(blog.publishedAt).toDateString()}</u> by </span>
                            <p className="font-medium">{blog.publishedBy?.name ?? "liftperformance"}</p>
                        </div>
                    </div>

                    <h1 className="mb-6 text-3xl font-bold">
                        {blog.title}
                    </h1>

                    <article className="prose flex flex-col w-full text-lg text-justify max-w-4xl">
                        {blog.content.json?.children.map((child, index: number) => {
                            if (child.type === "paragraph") {
                                return (<div className="flex flex-col items-center">

                                    <p className="mt-2 mb-0">{child.children[ 0 ].text}</p>
                                    {index === length! - 1 && <CalendlyButton buttonClassNames="mt-10 btn btn-ghost flex px-10 bg-black text-white text-bold text-2xl text-center" />}
                                </div>)
                            }
                            if (child.type === "heading-two" || child.type === "heading-three") {
                                return <h2 className="bold text-left">{child.children[ 0 ].text}</h2>
                            }
                            if (child.type === "image") {
                                return (<div className="flex flex-col items-center">
                                    <Image src={child.src} width={child.width} height={child.height} alt="image" />
                                    <CalendlyButton buttonClassNames="mb-5 btn btn-ghost flex px-10 bg-black text-white text-bold text-xl text-center" />

                                </div>)
                            }
                        })}
                    </article>
                </section >
            </div >
        </div>
    )
}