"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import { SiInstagram } from "react-icons/si";

export default function BlogNavBar() {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
    if (!showMe) {
      // @ts-ignore
      window.my_modal_5.showModal();
    } else {
      // @ts-ignore
      window.my_modal_5.close();
    }
  }

  const CalendlyButton = dynamic(() => import("../../components/booking2"), {
    ssr: false,
  });

  return (
    <div className="navbar absolute top-0 z-10 text-lg text-white ">
      <div className="navbar-start"></div>
      <div className="navbar-center"></div>
      <div className="navbar-end mr-10 hidden xl:flex flex-grow w-2/3">
        <ul className="menu menu-horizontal space-x-4 text-black  shadow-sm sm:text-base lg:text-xl items-center">
          <Link href="/" className="group  transition duration-300">
            Home
            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
          <Link href="/blog" className="group  transition duration-300">
            Blog
            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
          <Link href="https://www.instagram.com/liftperformancehk" className="group">
            <SiInstagram size={25} />
            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
          <CalendlyButton
            buttonClassNames="flex bg-black text-white text-center text-base p-4 text-bold text-xl rounded-lg hover:shadow hover:bg-slate-700 "
            text="Book Your Free Consult"
          />
        </ul>
      </div>
      <div className="navbar-end xl:hidden">
        <label tabIndex={0} className="btn-ghost btn xl:hidden" onClick={toggle}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        {/* Open the modal using ID.showModal() method */}
        <dialog id="my_modal_5" className="modal modal-bottom">
          <form method="dialog" className="modal-box bg-black bg-opacity-50">
            <ul className="flex flex-col gap-y-10">
              <Link
                href="/"
                className="btn border-none bg-transparent text-2xl lg:text-4xl text-white"
                onClick={toggle}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="btn border-none bg-transparent text-2xl lg:text-4xl text-white"
                onClick={toggle}
              >
                Blog
              </Link>
              <CalendlyButton
                buttonClassNames="btn border-none bg-transparent text-2xl lg:text-4xl text-white"
                text="Book Your Free Consult"
              />
            </ul>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}
