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
import { IProps } from "./actions/mailchimp";

const inter = Inter({ subsets: ["latin"] });

export interface IHomeProps extends IProps {
  year: number,
}

export default function Home(props: IHomeProps) {
  const Testimonials = dynamic(() => import("./components/testimonials"), {
    ssr: false,
  });

  return (
    <div className="" data-theme="light">
      <Head>
        <title>Lift Performance</title>
        <link
          rel="canonical"
          href="https://liftperformance.net/"
          key="canonical"
          title="canonical link"
        />
      </Head>
      <Hero2 />
      <div className="h-5 border-b-4 border-black text-2xl text-center mx-auto w-1/3"/>
      <Team />
      <About />
      <div className="h-5 border-b-4 border-black text-2xl mx-auto w-1/2  sm:w-1/3"/>
      <Booking />
      <div className="h-5 border-b-4  text-2xl mx-auto w-1/2 border-black sm:w-1/3"/>
      <Services />
      <div className="h-5 border-b-4 border-black text-2xl mx-auto w-1/2  sm:w-1/3"/>
      <Testimonials />
      <div className="h-5 border-b-4  text-2xl mx-auto w-1/2 border-black sm:w-1/3"/>
      <Footer {...props} />
    </div>
  );
}
