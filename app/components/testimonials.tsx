import { StaticImageData } from "next/image";
import { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";

export type Testimonial = {
  name: string;
  text: string;
  image: StaticImageData;
};
export default function Testimonials() {
  useEffect(() => {
    initTE({ Carousel });
  }, []);

  return (
    <section aria-label="Testimonials" className="my-12 p-6" id="testimonials">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="mb-12 text-center text-4xl font-bold text-white sm:text-5xl">
          Testimonials
        </h3>
      </div>
      <div
        id="carouselExampleCaptions"
        className="relative mx-auto w-4/5 sm:w-2/3"
        data-te-carousel-init
        data-te-carousel-slide
      >
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-active
            data-te-carousel-item
            data-te-pause={false}
            data-te-interval="4000"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="mx-auto max-w-4xl text-sm italic text-slate-200 sm:text-xl">
              "I've been a member of Lift for over a year now, and it's been the
              best decision I've ever made for my health and fitness. The
              trainers are incredibly knowledgeable and supportive, and the
              facility is always clean and well-maintained. I've seen amazing
              results in my strength and endurance, and I can't imagine going
              anywhere else. Thanks, Lift!"
            </p>
            <p className="text-slate-200">- Emily K.</p>
          </div>

          <div
            className="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-pause={false}
            data-te-interval="4000"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="mx-auto max-w-4xl text-xl italic text-slate-200">
              "As a new mom, I was nervous about getting back into exercise, but
              Lift's Pre and Postnatal Training program was exactly what I
              needed. The trainers are so understanding and supportive, and the
              workouts are challenging but not overwhelming. I feel stronger and
              more confident than ever before, and I'm grateful to Lift for
              helping me through this journey!"
            </p>
            <p className="text-slate-200">- Sarah L.</p>
          </div>

          <div
            className="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-pause={false}
            data-te-interval="4000"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="mx-auto max-w-4xl text-xl italic text-slate-200">
              "I've tried a lot of gyms over the years, but Lift is by far the
              best. The trainers truly care about your success and are always
              pushing you to be your best self. The variety of classes and
              equipment is amazing, and the community of members is so friendly
              and welcoming. I always leave Lift feeling energized and
              accomplished. Highly recommend!"
            </p>
            <p className="text-slate-200">- Michael B.</p>
          </div>
        </div>

        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </section>
  );
}
