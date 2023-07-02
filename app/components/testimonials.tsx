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
              "Lift Performance is conveniently located in Central and the
              equipment is just exactly what I need. The scale is just about
              right and it won’t make you feel it’s too crowded at one time. The
              trainers understand their clients needs and won’t overdo nor
              oversell anything. It just ticks all the boxes!"
            </p>
            <p className="text-slate-200">- Cathy W.</p>
          </div>

          <div
            className="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-pause={false}
            data-te-interval="4000"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="mx-auto max-w-4xl text-sm italic text-slate-200 sm:text-xl">
              "My PT sessions with Jane have always been tough, but measured.
              She has increased my strength, corrected imbalance and my form. I
              have benefited from her consistent dedication to learning her
              craft!"
            </p>
            <p className="text-slate-200">- Bradley</p>
          </div>

          <div
            className="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-pause={false}
            data-te-interval="4000"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="mx-auto max-w-4xl text-sm italic text-slate-200 sm:text-xl">
              "Ever since I started training with Eunice I look forward to every
              session and the consistency is definitely paying off! She knows
              how to push me while always looking out my form and accommodating
              my personal needs. Oh and the products in the shower area are
              great too!"
            </p>
            <p className="text-slate-200">- Kasia</p>
          </div>

          <div
            className="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-pause={false}
            data-te-interval="4000"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="mx-auto max-w-4xl text-sm italic text-slate-200 sm:text-xl">
              "LIFT is a stylishly renovated boutique gym, in a great Central
              location. The instructors are passionate, experienced and go out
              of their way to make me feel welcome there."
            </p>
            <p className="text-slate-200">- JK</p>
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-pause={false}
            data-te-interval="4000"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="mx-auto max-w-4xl text-sm italic text-slate-200 sm:text-xl">
              "Dennis is an incredible trainer who is very passionate about his
              clients and programs. His encouragement and constant motivation
              push me to heights I never thought possible. I find myself always
              looking forward to his next session."
            </p>
            <p className="text-slate-200">- Clara</p>
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-pause={false}
            data-te-interval="4000"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="mx-auto max-w-4xl text-sm italic text-slate-200 sm:text-xl">
              "I have been training with Brian for three years now, and having
              worked with several trainers before he is by far the best. I love
              training with him because of his great attitude and his attention
              to form and technique."
            </p>
            <p className="text-slate-200">- Jon</p>
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
