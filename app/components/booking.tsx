"use client";

import { getBookingButtonText } from "@/lib/utils";
import { PopupWidget } from "react-calendly";
import React, { useState } from "react";

export default function Calendly() {
  const getRootEelement = () => {
    const element = document.getElementById("root");

    if (!element) {
      throw new Error("Root element not found");
    }
    return element;
  };
  const [buttonText] = useState(getBookingButtonText());

  return (
    <PopupWidget
      url="https://calendly.com/liftperformancehk/free-inperson-video-consultation"
      rootElement={getRootEelement()}
      text={buttonText}
      textColor="#ffffff"
      color="#BF1E2C"
      branding={false}
      pageSettings={{
        hideEventTypeDetails: true,
        hideGdprBanner: true,
        hideLandingPageDetails: true,
      }}
    />
  );
}
