"use client";

import Image from "next/image";
import bradley_testimonial from "../../public/photos/bradley_testimonial_clipped.jpg"
import attiya_testimonial from "../../public/photos/attiya_clipped.jpg"
import clara_testimonial from "../../public/photos/clara_testimonial_clipped.jpg"
import kochun_testimonial from "../../public/photos/kochun_clipped.jpg"
import christopher_testimonial from "../../public/photos/christopher_testimonial.jpg"
import jon_clipped from "../../public/photos/jon_clipped.jpg"
import chen_clipped from "../../public/photos/chen_clipped.jpg"
import simon_clipped from "../../public/photos/simon_clipped.jpg"
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
    <section aria-label="Testimonials" className="mt-0" id="testimonials">
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
                      <div className="block w-full  basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                        <Image src={bradley_testimonial} alt="Bradley Testimonial" width={512} height={512}
                          className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                        <div className="mt-5 md:px-12">
                          <h2 className="mb-6 text-3xl font-bold text-red-700">
                            Bradley
                          </h2>
                          <p className="mb-6 text-black text-lg sm:text-xl">
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
                      <div className="block w-full  basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                        <Image src={clara_testimonial} alt="Bradley Testimonial" width={512} height={512}
                          className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                        <div className="mt-5 md:px-12">
                          <h2 className="mb-2 text-3xl font-bold text-red-700">
                            Clara
                          </h2>
                          <p className="mb-6 text-black text-lg sm:text-xl">
                            “Dennis is an incredible trainer who is very passionate about his clients and programs. His encouragement and constant motivation push me to heights I never thought possible. I find myself always looking forward to his next session”
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
                      <div className="block w-full  basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                        <Image src={kochun_testimonial} alt="Bradley Testimonial" width={512} height={512}
                          className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                        <div className="mt-6 md:px-12">
                          <h2 className="mb-2 text-3xl font-bold text-red-700">
                            Ko Chun
                          </h2>
                          <p className="mb-20 text-black text-lg sm:text-xl">
                            “Every session with Dennis is a guaranteed good work out - I have definitely noticed an improved physique and strength over time!”
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
                        <Image src={attiya_testimonial} alt="Bradley Testimonial" width={512} height={512}
                          className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                        <div className="mt-5 md:px-12">
                          <h2 className="mb-2 text-3xl font-bold text-red-700">
                            Attiya
                          </h2>
                          <p className="mb-6 text-black text-lg sm:text-xl">
                            “After training with Eunice, I have tried a lot more new exercises, ones i wouldn’t have tried or done by myself if it wasn’t for her. I wouldn’t have the discipline to achieve my goals.”
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
                        <Image src={christopher_testimonial} alt="Bradley Testimonial" width={512} height={512}
                          className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                        <div className="mt-5 md:px-12">
                          <h2 className="mb-2 text-3xl font-bold text-red-700">
                            Christopher
                          </h2>
                          <p className="mb-12 text-black text-lg sm:text-xl">
                            “Lift is a fantastic environment for 1-1 training. No queueing for machines and working around others. Couple that with a fantastic trainer, in Brian, and you have all you could want from a PT session. And the clear progress on all my lifts show how effective the trainings have been.”
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
                        <Image src={simon_clipped} alt="Bradley Testimonial" width={512} height={512}
                          className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                        <div className="mt-5 md:px-12">
                          <h2 className="mb-2 text-3xl font-bold text-red-700">
                            Simon
                          </h2>
                          <p className="mb-6 text-black text-lg sm:text-xl">
                            “Having a PT helps me attend the gym regularly, and the variety of exercises and careful building of strength and flexibility have worked really well for me.”
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
                        <Image src={jon_clipped} alt="Bradley Testimonial" width={512} height={512}
                          className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                        <div className="mt-5 md:px-12">
                          <h2 className="mb-2 text-3xl font-bold text-red-700">
                            Jonathan
                          </h2>
                          <p className="mb-6 text-black text-lg sm:text-xl">
                            “Brian is good at pushing me outside of my comfort zone, but not too much that it discourages me. And now, I feel as fit as I did 30 years ago.”
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
                        <Image src={chen_clipped} alt="Bradley Testimonial" width={512} height={512}
                          className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                        <div className="mt-5 md:px-12">
                          <h2 className="mb-2 text-3xl font-bold text-red-700">
                            Chen
                          </h2>
                          <p className="mb-6 text-black text-lg sm:text-xl">
                            “Without training with Brian, someone to really push me every workout every day, there’s no way I’ll workout nearly as hard.”
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <button
              className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-neutral-500 sm:text-slate-100 opacity-75 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-100 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button" data-te-target="#carouselExampleCaptions" data-te-slide="prev">
              <span className="inline-block h-8 w-8">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                  className="text-neutral-100  ">
                  <path fill="currentColor"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
              </span>
            </button>
            <button
              className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-slate-500 opacity-75 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-100 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button" data-te-target="#carouselExampleCaptions" data-te-slide="next">
              <span className="inline-block h-8 w-8">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                  className="text-neutral-100 sm:text-neutral-500">
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
