"use client";

import Image, { StaticImageData } from "next/image";
import group from "../../public/photos/group.jpeg";
import natal from "../../public/photos/natal2.jpeg";
import service1 from "../../public/photos/personal.jpeg";
import pilates from "../../public/photos/pilates.jpeg";
import flexibility from "../../public/photos/flexibility_clipped.jpg";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Card, CardContent } from "./ui/card";

type Service = {
  name: string;
  image: StaticImageData | string;
  description: string;
};

export default function Services() {
  const services: Service[] = [
    {
      name: "1-to-1 Training",
      description:
        "Get personalized results with One-to-One Training! Our coaches will design a program tailored to your body, starting with a 1-hour consultation. From the training floor to check-ins, we're committed to helping you achieve your goals.",
      image: service1,
    },
    {
      name: "Small Group Training ",
      description:
        "Join Lift's Small Group Trainings for big results! Build muscle, improve cardio fitness, and lose weight in a supportive and motivating environment. Our coaches and your group will keep you working hard towards your helth and fitness goals.",
      image: group,
    },
    {
      name: "Reformer Pilates Training",
      description:
        "Transform your body with Reformer Pilates training! Improve your body awareness, posture, flexibility, and develop a strong core. Our Reformers allow for greater range of motion and resistance during exercises for even better results.",
      image: pilates,
    },
    {
      name: "Pre & Post-Natal Training",
      description:
        "Prepare for motherhood and recover with our Pre and Postnatal Training! Our program addresses common pregnancy-related injuries, stabilizes your pelvis postpartum, and repairs and strengthens your muscles. Trust us to support you on this journey!",
      image: natal,
    },
    {
      name: "Flexibility & Mobility Training",
      description:
        "Enhance your flexibility and mobility with our transformative training program. From beginners to advanced practitioners, our class offers a diverse range of exercises that cater to all skill levels. Join us today and unlock the full potential of your body's movement capabilities!",
      image: flexibility,
    },
  ];
  return (
    <section id="services" aria-label="Services" className="my-12">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-2 text-center text-4xl font-bold  sm:text-5xl">Services</h1>
      </div>
      <div className="gap-6 sm:gap-8 mt-8 sm:mt-10 max-w-6xl mx-auto px-4 sm:px-6">
        {services.map((service: Service, index: number) => (
          <Fade direction={index % 2 === 0 ? "left" : "right"} key={index} duration={1500}>
            <Card className={`overflow-hidden border-0 shadow-none mb-6 sm:mb-8 ${index % 2 === 0
              ? "flex flex-col sm:flex-row"
              : "flex flex-col sm:flex-row-reverse"
              } motion-safe:animate-fadeIn`}>
              <figure className="flex w-full sm:w-1/2 sm:justify-center p-2 sm:p-4">
                <div className="w-full max-w-sm sm:max-w-none sm:w-96 sm:h-96 h-80 overflow-hidden rounded-lg mx-auto">
                  <Image
                    className="w-full h-full object-cover transition-opacity opacity-0 duration-[0.5s]"
                    src={service.image}
                    alt={`${service.name} service image`}
                    loading="lazy"
                    placeholder="blur"
                    width={384}
                    height={384}
                    sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, 384px"
                    onLoad={image => image.currentTarget.classList.remove("opacity-0")}
                    quality={60}
                  />
                </div>
              </figure>
              <CardContent className="flex-1 p-4 sm:p-6 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">{service.name}</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">{service.description}</p>
              </CardContent>
            </Card>
          </Fade>
        ))}
      </div>
    </section>
  );
}
