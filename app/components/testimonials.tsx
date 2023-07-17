import { createRef, useRef } from "react";

export type Testimonial = {
  name: string;
  text: string;
};

export default function Testimonials() {
  "use client";
  const carouselElement = createRef<HTMLDivElement>();

  const scrollCarousel = (targetImageNumber: number): void => {
    if (!carouselElement) {
      return;
    }
    carouselElement.current?.scrollTo({
      left: (targetImageNumber - 1) * carouselElement.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section aria-label="Testimonials" className="my-12" id="testimonials">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="mb-12 text-center text-4xl font-bold  sm:text-5xl">
          Testimonials
        </h3>
      </div>
      <div
        className="carousel w-full scroll-smooth  text-center"
        ref={carouselElement}
      >
        <div
          id="item1"
          className="carousel-item flex w-full flex-col  items-center"
        >
          <p className="mx-auto w-3/4 sm:max-w-xl xl:max-w-3xl text-sm italic  sm:text-lg">
            "Lift Performance is conveniently located in Central and the
            equipment is just exactly what I need. The scale is just about right
            and it won't make you feel it's too crowded at one time. The
            trainers understand their clients needs and won't overdo nor
            oversell anything. It just ticks all the boxes!"
          </p>
          <p className="mt-5 text-sm">- Cathy W.</p>
        </div>
        <div
          id="item2"
          className="carousel-item flex w-full flex-col  items-center"
        >
          <p className="mx-auto max-w-xl text-sm italic  sm:text-lg">
            "My PT sessions with Jane have always been tough, but measured. She
            has increased my strength, corrected imbalance and my form. I have
            benefited from her consistent dedication to learning her craft!"
          </p>
          <p className="mt-5 text-sm">- Bradley</p>{" "}
        </div>
        <div
          id="item3"
          className="carousel-item flex w-full flex-col  items-center"
        >
          <p className="mx-auto max-w-xl text-sm italic  sm:text-lg">
            "Ever since I started training with Eunice I look forward to every
            session and the consistency is definitely paying off! She knows how
            to push me while always looking out my form and accommodating my
            personal needs. Oh and the products in the shower area are great
            too!"
          </p>
          <p className="mt-5 text-sm">- Kasia</p>{" "}
        </div>
        <div
          id="item4"
          className="carousel-item flex w-full flex-col  items-center"
        >
          <p className="mx-auto max-w-xl text-sm italic  sm:text-lg">
            "LIFT is a stylishly renovated boutique gym, in a great Central
            location. The instructors are passionate, experienced and go out of
            their way to make me feel welcome there."
          </p>
          <p className=" mb-7">- JK</p>{" "}
        </div>
        <div
          id="item5"
          className="carousel-item flex w-full flex-col  items-center"
        >
          <p className="mx-auto max-w-xl text-sm italic  sm:text-lg">
            "Dennis is an incredible trainer who is very passionate about his
            clients and programs. His encouragement and constant motivation push
            me to heights I never thought possible. I find myself always looking
            forward to his next session."
          </p>
          <p className="mt-5 text-sm">- Clara</p>
        </div>
        <div
          id="item6"
          className="carousel-item flex w-full flex-col items-center"
        >
          <p className="mx-auto max-w-xl text-sm italic  sm:text-lg">
            "I have been training with Brian for three years now, and having
            worked with several trainers before he is by far the best. I love
            training with him because of his great attitude and his attention to
            form and technique."
          </p>
          <p className="mt-5 text-sm">- Jon</p>
        </div>
      </div>
      <div className="mt-10 flex w-full justify-center gap-4 py-2">
        <button onClick={() => scrollCarousel(1)} className="btn-xs btn">
          1
        </button>
        <button onClick={() => scrollCarousel(2)} className="btn-xs btn">
          2
        </button>
        <button onClick={() => scrollCarousel(3)} className="btn-xs btn">
          3
        </button>
        <button onClick={() => scrollCarousel(4)} className="btn-xs btn">
          4
        </button>
        <button onClick={() => scrollCarousel(5)} className="btn-xs btn">
          5
        </button>
        <button onClick={() => scrollCarousel(6)} className="btn-xs btn">
          6
        </button>
      </div>
    </section>
  );
}
