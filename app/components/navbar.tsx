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
    }
    else {
      //@ts-ignore
    window.my_modal_5.close();
    }


  
  }
  return (
    <div className="navbar top-0 z-10 absolute text-xl text-white">
      <div className="navbar-start">
        <Link href="#hero" className="">
          <Image
            loading="lazy"
            src={logo}
            alt="logo"
            className="w-1/4 sm:w-1/3 lg:w-1/5 xl:w-1/6 ml-10"
          />
        </Link>
      </div>
      <div className="navbar-center hidden flex-row sm:flex ">
        <ul className="menu menu-horizontal space-x-7 px-1 text-white  sm:text-lg lg:text-xl transition duration-300">
          <Link href="#team" className="group text-white transition duration-300">
            Team
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </Link>
          <Link href="#booking" className="group text-white transition duration-300">
            Booking
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </Link>
          <Link href="#services" className="group text-white transition duration-300">
            Services
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </Link>
          <Link href="#testimonials" className="group text-white transition duration-300">
            Testimonials
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </Link>
          <Link href="#contact" className="group text-white transition duration-300">
            Contact
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
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
        <dialog
          id="my_modal_5"
          className="modal modal-middle"
        >
          <form method="dialog" className="modal-box bg-transparent">
            <ul className="flex flex-col gap-y-5">
            
              <Link href="#team" className="text-2xl btn bg-transparent border-none text-white" onClick={toggle}>Team</Link>
              <Link href="#booking" className="text-2xl text-white hover:underline btn bg-transparent border-none" onClick={toggle}>Booking</Link>
              <Link href="#services" className="text-2xl text-white hover:underline btn bg-transparent border-none" onClick={toggle}>Services</Link>
              <Link href="#testimonials" className="text-2xl text-white hover:underline btn bg-transparent border-none" onClick={toggle}>Testimonials</Link>
              <Link href="#contact" className="text-2xl text-white hover:underline btn bg-transparent border-none" onClick={toggle}>Contact</Link>
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
