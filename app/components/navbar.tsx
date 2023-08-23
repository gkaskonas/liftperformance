import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { SiInstagram } from "react-icons/si";

export default function NavBar() {
  const [ showMe, setShowMe ] = useState(false);
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

  const CalendlyButton = dynamic(() => import("../components/booking2"), {
    ssr: false,
  });

  return (
    <div className="navbar absolute top-0 z-10 text-lg text-white ">
      <div className="navbar-start"></div>
      <div className="navbar-center"></div>
      <div className="navbar-end mr-10 hidden xl:flex flex-grow w-2/3">
        <ul className="menu menu-horizontal space-x-4 text-black  shadow-sm transition duration-300 sm:text-base lg:text-lg">
          <Link
            href="#team"
            className="group  transition duration-300"
          >
            Team
            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
          <Link
            href="#services"
            className="group  transition duration-300"
          >
            Our Service
            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
          <Link
            href="#testimonials"
            className="group  transition duration-300"
          >
            Testimonials
            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
          <Link
            href="#contact"
            className="group  transition duration-300"
          >
            Contact
            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
          <Link
            href="/blog"
            className="group  transition duration-300"
          >
            Blog
            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
          <Link
            href="https://www.instagram.com/liftperformancehk"
            className="group"
          >
            <SiInstagram size={25} />
            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>

          </Link>
          <CalendlyButton buttonClassNames="flex bg-white text-center text-base px-1 py-0 text-bold rounded-lg hover:shadow hover:bg-slate-100" />

        </ul>
      </div>
      <div className="navbar-end xl:hidden">
        <label
          tabIndex={0}
          className="btn-ghost btn xl:hidden"
          onClick={toggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
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
