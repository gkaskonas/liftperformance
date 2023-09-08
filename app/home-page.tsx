"use client";

import Footer from "./components/footer";
import Hero2 from "./components/hero2";
import Services from "./components/services";
import Team from "./components/team";


import { Inter } from "next/font/google";
import Head from "next/head";
import About from "./components/about";
import { IProps } from "./actions/mailchimp";
import dynamic from "next/dynamic";
import NavBar from "./components/navbar";

const inter = Inter({ subsets: [ "latin" ] });

export interface IHomeProps extends IProps {
  year: number;
}

export default function Home(props: IHomeProps) {
  const Calendly = dynamic(() => import("./components/booking"), {
    ssr: false,
  });

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
      <NavBar />
      <Calendly />
      <Hero2 />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Footer {...props} />
    </div>
  );
}
