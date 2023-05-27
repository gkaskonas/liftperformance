import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }

  return (
    <header
      aria-label="Site Header"
      className="sticky top-0 z-10 bg-gradient-to-r from-gray-800 to-red-800 text-white"
    >
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="text-2xl font-medium sm:text-2xl">
          <Link href="#hero" className="tracking-wide">
            🏋️ Lift Performance
          </Link>
        </h1>
        <div>
          <button
            id="hamburger-button"
            className="text-3xl focus:outline-none lg:hidden"
            onClick={toggle}
          >
            &#9776;
          </button>
          <nav
            className="text-md hidden space-x-3 md:text-xl lg:block"
            aria-label="main"
          >
            <Link href="#hero" className="hover:opacity-80">
              Home
            </Link>
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
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        onClick={toggle}
        style={{ display: showMe ? "block" : "none" }}
        className="top-68 justify-content-center animate-open-menu absolute hidden w-full origin-top flex-col bg-black text-3xl lg:text-5xl"
      >
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
        >
          <Link
            href="#hero"
            className="w-full py-3 text-center hover:opacity-90"
          >
            Home
          </Link>
          <Link
            href="#team"
            className="w-full py-3 text-center hover:opacity-90"
          >
            Meet the Team
          </Link>
          <Link
            href="#booking"
            className="w-full py-3 text-center hover:opacity-90"
          >
            Booking
          </Link>
          <Link
            href="#services"
            className="w-full py-3 text-center hover:opacity-90"
          >
            Services
          </Link>
          <Link
            href="#testimonials"
            className="w-full py-3 text-center hover:opacity-90"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="w-full py-3 text-center hover:opacity-90"
          >
            Contact
          </Link>
        </nav>
      </section>
    </header>
  );
}
