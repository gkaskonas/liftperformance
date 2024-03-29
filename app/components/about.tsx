"use client";
import Image from "next/image";
import about from "../../public/photos/why_lift.jpg";
import React from "react";
import { Fade } from "react-awesome-reveal"

export default function About() {
  return (
    <div className="container mx-auto my-0 w-4/5 md:px-6 ">
      <section className="mb-12">
        <div className="container mx-auto text-center lg:text-left xl:px-32">
          <div className="flex items-center flex-row w-full sm:gap-x-10">

            <Fade direction="left">
              <div className="mb-12 lg:mb-0">
                <div className="prose relative z-[1] block rounded-lg bg-slate-50 px-6 py-12 text-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] shadow-black/20 backdrop-blur-[30px] sm:px-2 3xl:py-24">
                  <h1 className="mb-8 text-center text-3xl font-bold ">Why LIFT?</h1>
                  <p className="mb-2 pb-2 text-sm  tracking-tighter lg:pb-0 lg:text-lg">
                    At Lift Performance, our elite coaches have one goal in mind - to elevate every aspect of your health
                    and fitness. From the training sessions, to follow ups during your daily life, we are committed to
                    keep you on track of your goals.
                  </p>

                  <div className="mx-auto mb-8 flex flex-col  font-bold md:flex-row md:justify-around lg:justify-between">
                    <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 lg:text-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-2 h-5 w-5 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Best team
                    </p>

                    <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 lg:text-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-2 h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Best quality
                    </p>

                    <p className="mx-auto mb-2 flex items-center  md:mx-0 lg:mb-0 lg:text-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-2 h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Best experience
                    </p>
                  </div>

                  <p className="mb-0  text-sm   tracking-tight lg:text-lg">
                    We believe the best way to do so is through a holistic approach. From fitness, to nutrition, to
                    mindset - we strive to provide you the best information along with accountability and support, so
                    you're going in the right direction FAST, CONSISTENTLY. Areas we specialise in are Body Composition,
                    Rehabilitation and Athletic Performance.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade direction="right">
              <Image
                src={about}
                className="mx-auto hidden rounded-lg shadow-lg shadow-black/20 sm:block transition-opacity opacity-0 duration-[0.5s]"
                alt="about us image"
                loading="lazy"
                placeholder="blur"
                width={650}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onLoad={image => image.currentTarget.classList.remove("opacity-0")}
              />
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
}
