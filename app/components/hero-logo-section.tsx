"use client";

import { getBookingButtonText } from "@/lib/utils";
import dynamic from "next/dynamic";
import React, { useState } from "react";

export default function HeroLogoSection() {

  const [buttonText, setButtonText] = useState(getBookingButtonText);
  const CalendlyButton = dynamic(() => import("../components/booking2"), {
    ssr: false,
  });

  return (
    <div className="flex flex-col items-start justify-start min-h-[80vh] px-6 sm:px-8 md:px-12 lg:px-16 pt-24 sm:pt-32 md:pt-40 lg:pt-48">
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight drop-shadow-lg" style={{ textShadow: '1px 1px 0 rgba(255,255,255,0.3), -1px -1px 0 rgba(255,255,255,0.3), 1px -1px 0 rgba(255,255,255,0.3), -1px 1px 0 rgba(255,255,255,0.3)' }}>
          Unleash your potential with our expert trainers
        </h1>

        <div className="pt-2">
          <CalendlyButton
            buttonClassNames="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl min-w-[200px]"
            text={buttonText}
          />
        </div>
      </div>
    </div>
  );
}
