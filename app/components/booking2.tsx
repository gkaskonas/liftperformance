"use client";
import { getBookingButtonText } from "@/lib/utils";
import { Suspense, useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

export default function CalendlyButton({ buttonClassNames }: { buttonClassNames: string }) {
  const getRootEelement = () => {
    const element = document.getElementById("root");

    if (!element) {
      throw new Error("Root element not found");
    }
    return element;
  };

  const [ showModal, setShowModal ] = useState(false);

  const [ buttonText ] = useState(getBookingButtonText());


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <button
        onClick={() => setShowModal(true)}
        className={buttonClassNames}
      >
        {buttonText}
      </button>
      <PopupModal
        url="https://calendly.com/liftperformancehk/consultation"
        onModalClose={() => setShowModal(false)}
        open={showModal}
        rootElement={getRootEelement()}
        pageSettings={{
          hideEventTypeDetails: true,
          hideGdprBanner: true,
          hideLandingPageDetails: true,
        }}
      />
    </Suspense >
  );
}
