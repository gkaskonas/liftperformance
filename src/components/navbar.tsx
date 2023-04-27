import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header aria-label="Site Header" className="bg-gray-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex items-center justify-between">
        <h1 className="text-3xl font-medium">
          <Link href="/">
            🏋️ LiftPerformance</Link>
        </h1>
        <div>
          <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">&#9776;</button>
          <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
            <Link href="/" className="hover:opacity-80">Home</Link>
            <Link href="#services" className="hover:opacity-80">Services</Link>
            <Link href="#team" className="hover:opacity-80">Meet the Team</Link>
          </nav>
        </div>
        {/* <div className="flex items-center justify-between max-w-4xl mx-auto p-4 text-xl">
          <Link href="/">Home</Link>
        </div> */}
      </section>
    </header >
  );
}
