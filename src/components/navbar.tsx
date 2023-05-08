import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      aria-label="Site Header"
      className="sticky top-0 z-10 bg-gray-700 text-white"
    >
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="text-3xl font-medium">
          <Link href="/">🏋️ LiftPerformance</Link>
        </h1>
        <div>
          <button
            id="mobile-open-button"
            className="text-3xl focus:outline-none sm:hidden"
          >
            &#9776;
          </button>
          <nav className="hidden space-x-8 text-xl sm:block" aria-label="main">
            <Link href="/" className="hover:opacity-80">
              Home
            </Link>
            <Link href="#team" className="hover:opacity-80">
              Meet the Team
            </Link>
            <Link href="#booking" className="hover:opacity-80">
              Booking
            </Link>
          </nav>
        </div>
        {/* <div className="flex items-center justify-between max-w-4xl mx-auto p-4 text-xl">
          <Link href="/">Home</Link>
        </div> */}
      </section>
    </header>
  );
}
