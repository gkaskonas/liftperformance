"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { SiInstagram } from "react-icons/si";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import logo from "../../public/photos/logo.png";

export default function NavBar() {
  const CalendlyButton = dynamic(() => import("../components/booking2"), {
    ssr: false,
    loading: () => (
      <div className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-white rounded-lg">
        Book Free Consult
      </div>
    ),
  });

  return (
    <header className="absolute top-0 w-full z-20">
      <div className="container flex h-24 items-center px-4">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src={logo} alt="Lift Performance Logo" width={100} height={100} />
        </Link>

        {/* Spacer to push everything to the right */}
        <div className="flex-1"></div>

        {/* Desktop Right Side with Navigation and Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="#team"
            className="transition-colors hover:text-black text-gray-800 text-xl font-medium"
          >
            Team
          </Link>
          <Link
            href="#services"
            className="transition-colors hover:text-black text-gray-800 text-xl font-medium"
          >
            Our Service
          </Link>
          <Link
            href="#testimonials"
            className="transition-colors hover:text-black text-gray-800 text-xl font-medium"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-black text-gray-800 text-xl font-medium"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="transition-colors hover:text-black text-gray-800 text-xl font-medium"
          >
            Blog
          </Link>
          <Link
            href="https://www.instagram.com/liftperformancehk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black transition-colors"
          >
            <SiInstagram size={28} />
          </Link>
          <CalendlyButton
            buttonClassNames="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-md text-lg font-medium border border-gray-200"
            text="Book Free Consult"
          />
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="ml-auto md:hidden"
              size="sm"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link
                href="#team"
                className="text-xl font-medium text-gray-800 hover:text-black transition-colors"
              >
                Team
              </Link>
              <Link
                href="#services"
                className="text-xl font-medium text-gray-800 hover:text-black transition-colors"
              >
                Our Service
              </Link>
              <Link
                href="#testimonials"
                className="text-xl font-medium text-gray-800 hover:text-black transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-xl font-medium text-gray-800 hover:text-black transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-xl font-medium text-gray-800 hover:text-black transition-colors"
              >
                Blog
              </Link>
              <div className="flex items-center space-x-4 pt-4">
                <Link
                  href="https://www.instagram.com/liftperformancehk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-black transition-colors"
                >
                  <SiInstagram size={28} />
                </Link>
                <CalendlyButton
                  buttonClassNames="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-md text-lg font-medium border border-gray-200"
                  text="Book Free Consult"
                />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
