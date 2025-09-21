"use client";

import Image, { StaticImageData } from "next/image";
import attiya_testimonial from "../../public/photos/attiya_clipped.jpg";
import clara_testimonial from "../../public/photos/clara_testimonial_clipped.jpg";
import kochun_testimonial from "../../public/photos/kochun_clipped.jpg";
import jon_clipped from "../../public/photos/jon_clipped.jpg";
import simon_clipped from "../../public/photos/simon_clipped.jpg";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

export type Testimonial = {
  name: string;
  text: string;
  image: StaticImageData;
};

const testimonialsData: Testimonial[] = [
  {
    name: "Clara",
    text: "“Dennis is an incredible trainer who is very passionate about his clients and programs. His encouragement and constant motivation push me to heights I never thought possible. I find myself always looking forward to his next session”",
    image: clara_testimonial,
  },
  {
    name: "Ko Chun",
    text: "“Every session with Dennis is a guaranteed good work out - I have definitely noticed an improved physique and strength over time!”",
    image: kochun_testimonial,
  },
  {
    name: "Attiya",
    text: "“After training with Eunice, I have tried a lot more new exercises, ones i wouldn’t have tried or done by myself if it wasn’t for her. I wouldn’t have the discipline to achieve my goals.”",
    image: attiya_testimonial,
  },
  {
    name: "Simon",
    text: "“Having a PT helps me attend the gym regularly, and the variety of exercises and careful building of strength and flexibility have worked really well for me.”",
    image: simon_clipped,
  },
  {
    name: "Jonathan",
    text: "“Brian is good at pushing me outside of my comfort zone, but not too much that it discourages me. And now, I feel as fit as I did 30 years ago.”",
    image: jon_clipped,
  },
];

export default function Testimonials() {
  return (
    <section aria-label="Testimonials" className="mt-0" id="testimonials">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="mb-12 text-center text-4xl font-bold  sm:text-5xl">Testimonials</h3>
      </div>
      <div className="container mx-auto md:px-6">
        <Carousel className="w-full " opts={{ loop: true }}>
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-0">
                    <CardContent className="p-0">
                      <section className="text-center md:text-left">
                        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] xl:w-3/4 xl:items-center xl:justify-center xl:mx-auto">
                          <div className="flex flex-wrap items-center">
                            <div className="block w-full  basis-auto sm:flex sm:w-6/12 xl:w-4/12">
                              <Image
                                src={testimonial.image}
                                alt={`${testimonial.name} Testimonial`}
                                placeholder={"blur"}
                                width={1024}
                                quality={60}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                onLoad={image => image.currentTarget.classList.remove("opacity-0")}
                                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg transition-opacity opacity-0 duration-[0.5s]"
                              />
                            </div>
                            <div className="w-full shrink-0 grow-0 basis-auto sm:w-6/12 xl:w-8/12">
                              <div className="mt-5 md:px-12">
                                <h2 className="mb-2 text-3xl font-bold text-red-700">{testimonial.name}</h2>
                                <p className="mb-6 text-black text-lg sm:text-xl">{testimonial.text}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
          <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
