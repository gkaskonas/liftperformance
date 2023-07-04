import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/lift-logo-1.png";

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
    <div className="navbar sticky text-xl text-white">
      <div className="navbar-start">
        <Link href="#hero" className="">
          <Image
            loading="lazy"
            src={logo}
            alt="logo"
            className="w-1/4 sm:w-1/2 xl:w-1/4"
          />
        </Link>
      </div>
      <div className="navbar-center hidden flex-row sm:flex ">
        <ul className="menu menu-horizontal space-x-7 px-1 text-white  sm:text-lg lg:text-2xl xl:text-3xl ">
          <Link href="#team" className="hover:opacity-80">
            Team
          </Link>
          <Link href="#booking" className="hover:opacity-80">
            Booking
          </Link>
          <Link href="#services" className="hover:opacity-80">
            Services
          </Link>
          <Link href="#testimonials" className="hover:opacity-80">
            Testimonials
          </Link>
          <Link href="#contact" className="hover:opacity-80">
            Contact
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
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
          className="modal modal-bottom text-white"
        >
          <form method="dialog" className="modal-box modal-bottom">
            <ul className="flex flex-col gap-y-5">
            
              <Link href="#team" className="btn bg-transparent border-none" onClick={toggle}>Team</Link>
              <Link href="#booking" className="btn bg-transparent border-none" onClick={toggle}>Booking</Link>
              <Link href="#services" className="btn bg-transparent border-none" onClick={toggle}>Services</Link>
              <Link href="#testimonials" className="btn bg-transparent border-none" onClick={toggle}>Testimonials</Link>
              <Link href="#contact" className="btn bg-transparent border-none" onClick={toggle}>Contact</Link>
              </ul>
          </form>
        </dialog>
      </div>
    </div>
  );
}
