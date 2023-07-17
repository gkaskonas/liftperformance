"use client";
import { Suspense, useState } from "react";
import { PopupModal } from "react-calendly";
import Skeleton from "react-loading-skeleton";

export default function CalendlyButton() {
  const getRootEelement = () => {
    const element = document.getElementById("root");

    if (!element) {
      throw new Error("Root element not found");
    }
    return element;
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <button
        onClick={() => setShowModal(true)}
        className="bg-white  uppercase btn flex items-center justify-center text-center text-xl lg:text-2xl text-black"
      >
        Book now
      </button>
      <PopupModal
        url="https://calendly.com/liftperformancehk/consultation"
        onModalClose={() => setShowModal(false)}
        open={showModal}
        
        rootElement={getRootEelement()}

        pageSettings={
          {
            hideEventTypeDetails: true,
             hideGdprBanner: true,
             hideLandingPageDetails: true,

          }
        }
      />
    </Suspense>
  );
}
