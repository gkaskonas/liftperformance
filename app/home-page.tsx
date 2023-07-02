"use client";

import dynamic from "next/dynamic";
import Booking from "./components/booking";
import Footer from "./components/footer";
import Hero2 from "./components/hero2";
import NavBar from "./components/navbar";
import Services from "./components/services";
import Team from "./components/team";

import { Inter } from "next/font/google";
import Head from "next/head";
import About from "./components/about";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ year }: { year: number }) {
  const Testimonials = dynamic(() => import("./components/testimonials"), {
    ssr: false,
  });

  return (
    <div className="bg-black">
      <Head>
        <title>Lift Performance</title>
        <link
          rel="canonical"
          href="https://liftperformance.net/"
          key="canonical"
          title="canonical link"
        />
      </Head>
      <NavBar />
      <Hero2 />
      <hr className="mx-auto w-1/2 bg-white sm:w-1/3 mt-12 md:mt-2"></hr>
      <Team />
      <About />
      <hr className="mx-auto w-1/2 bg-white sm:w-1/3"></hr>
      <Booking />
      <hr className="mx-auto w-1/2 bg-white sm:w-1/3"></hr>
      <Services />
      <hr className="mx-auto w-1/2 bg-white sm:w-1/3"></hr>
      <Testimonials />
      <hr className="mx-auto w-1/2 bg-white sm:w-1/3"></hr>
      <Footer year={year} />
    </div>
  );
}
