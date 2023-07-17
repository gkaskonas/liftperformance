import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/photos/lift-logo-1.png";

export default function NavBar() {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
    if (!showMe) {
      //@ts-ignore
      window.my_modal_5.showModal();
    } else {
      //@ts-ignore
      window.my_modal_5.close();
    }
  }
  return (
    <div className="navbar absolute top-0 z-10 text-lg text-white ">
      <div className="navbar-start">
        <Link href="#hero" className="">
          <Image
            loading="lazy"
            src={logo}
            alt="logo"
            className="ml-10 w-1/4 sm:w-1/3 lg:w-1/3"
          />
        </Link>
      </div>
      <div className="navbar-end hidden flex-row sm:flex mr-10">
        <ul className="menu menu-horizontal space-x-7 px-1 text-white  transition duration-300 sm:text-base lg:text-lg xl:text-xl">
          <Link
            href="#team"
            className="group text-white transition duration-300"
          >
            Team
            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
          <Link
            href="#services"
            className="group text-white transition duration-300"
          >
            Services
            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
          <Link
            href="#testimonials"
            className="group text-white transition duration-300"
          >
            Testimonials
            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
          <Link
            href="#contact"
            className="group text-white transition duration-300"
          >
            Contact
            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
        </ul>
      </div>
      <div className="navbar-end sm:hidden">
        <label
          tabIndex={0}
          className="btn-ghost btn sm:hidden"
          onClick={toggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        {/* Open the modal using ID.showModal() method */}
        <dialog id="my_modal_5" className="modal modal-bottom">
          <form method="dialog" className="modal-box bg-black bg-opacity-50">
            <ul className="flex flex-col gap-y-5">
              <Link
                href="#team"
                className="btn border-none bg-transparent text-2xl text-white"
                onClick={toggle}
              >
                Team
              </Link>

              <Link
                href="#services"
                className="btn border-none bg-transparent text-2xl text-white hover:underline"
                onClick={toggle}
              >
                Services
              </Link>
              <Link
                href="#testimonials"
                className="btn border-none bg-transparent text-2xl text-white hover:underline"
                onClick={toggle}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="btn border-none bg-transparent text-2xl text-white hover:underline"
                onClick={toggle}
              >
                Contact
              </Link>
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
