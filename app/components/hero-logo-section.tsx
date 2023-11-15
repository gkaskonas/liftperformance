"use client";

import dynamic from "next/dynamic";
import logo from "../../public/photos/logo.png";
import Image from "next/image";

import React from "react";

export default function HeroLogoSection() {
  const CalendlyButton = dynamic(() => import("../components/booking2"), {
    ssr: false,
  });

  return (
    <div className="z-0 inset-x-0 flex flex-col w-[90%] min-h-[80vh] sm:min-h-[80vh]">
      <Image
        loading="lazy"
        src={logo}
        alt="logo"
        className="flex mb-10 mt-14 xl:mt-0 w-1/5 sm:w-[10%] lg:w-[10%] xl:w-[6%] 2xl:w-[6%] transition-opacity opacity-0 duration-[0.5s]"
        placeholder="blur"
        onLoad={image => image.currentTarget.classList.remove("opacity-0")}
      />
      <h1
        className="mb-16 text-xl font-bold text-slate-950 sm:text-2xl md:text-4xl 2xl:text-5xl w-2/3 xl:w-1/2 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.9)]
"
      >
        Unleash your potential with our expert trainers
      </h1>
      <CalendlyButton buttonClassNames="btn btn-ghost flex w-2/3 xl:w-1/4 sm:w-1/3 bg-black text-white text-bold text-center text-base sm:text-lg" />
    </div>
  );
}
