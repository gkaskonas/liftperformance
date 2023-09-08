"use client";

import Image from "next/image";
import testimonial from "../../public/photos/personal.jpeg"
import { useEffect } from "react";

export type Testimonial = {
  name: string;
  text: string;
};

export default function Testimonials() {

  useEffect(() => {
    const init = async () => {
      const { Carousel, initTE } = await import("tw-elements");
      initTE({ Carousel });
    };
    init();
  }, []);

  return (
    <section aria-label="Testimonials" className="my-12" id="testimonials">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="mb-12 text-center text-4xl font-bold  sm:text-5xl">
          Testimonials
        </h3>
      </div>
      <div className="container mx-auto md:px-6">
        <section className="mb-0 text-center">

          <div id="carouselExampleCaptions" className="relative" data-te-carousel-init data-te-carousel-slide>
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-active data-te-carousel-item style={{ backfaceVisibility: "hidden" }}>
                <section className="mb-10 text-center md:text-left">
                  <div
                    className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                    <div className="flex flex-wrap items-center">
                      <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                        <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/026.jpg" alt="Trendy Pants and Shoes"
                          className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                        <div className="px-6 py-12 md:px-12">
                          <h2 className="mb-2 text-3xl font-bold text-red-700">
                            Bradley
                          </h2>
                          <p className="mb-6 text-black">
                            "My PT sessions with Jane have always been tough, but measured. She has increased my strength, corrected imbalance and my form. I have benefited from her consistent dedication to learning her craft!"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item style={{ backfaceVisibility: "hidden" }}>
                <section className="mb-10 text-center md:text-left">
                  <div
                    className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                    <div className="flex flex-wrap items-center">
                      <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                        <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/027.jpg" alt="Trendy Pants and Shoes"
                          className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                        <div className="px-6 py-12 md:px-12">
                          <h2 className="mb-2 text-3xl font-bold text-red-700">
                            Cathy W
                          </h2>
                          <p className="mb-6 text-black">
                            "Lift Performance is conveniently located in Central and the equipment is just exactly what I need. The scale is just about right and it won't make you feel it's too crowded at one time. The trainers understand their clients needs and won't overdo nor oversell anything. It just ticks all the boxes!"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item style={{ backfaceVisibility: "hidden" }}>
                <section className="mb-10 text-center md:text-left">
                  <div
                    className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                    <div className="flex flex-wrap items-center">
                      <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Jessica_Ennis_%28May_2010%29_cropped.jpg" alt="Trendy Pants and Shoes"
                          className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                        <div className="px-6 py-12 md:px-12">
                          <h2 className="mb-2 text-3xl font-bold text-red-700">
                            Kasia
                          </h2>
                          <p className="mb-6 text-black">
                            "Ever since I started training with Eunice I look forward to every session and the consistency is definitely paying off! She knows how to push me while always looking out my form and accommodating my personal needs. Oh and the products in the shower area are great too!"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <button
              className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button" data-te-target="#carouselExampleCaptions" data-te-slide="prev">
              <span className="inline-block h-8 w-8">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                  className="text-neutral-600 dark:text-neutral-300">
                  <path fill="currentColor"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
              </span>
              <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
            </button>
            <button
              className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button" data-te-target="#carouselExampleCaptions" data-te-slide="next">
              <span className="inline-block h-8 w-8">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                  className="text-neutral-600 dark:text-neutral-300">
                  <path fill="currentColor"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </span>
              <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
