import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import About from "./components/about";
import Footer from "./components/footer";
import Hero2 from "./components/hero2";
import NavBar from "./components/navbar";
import Services from "./components/services";
import Team from "./components/team";
import Analytics from "./components/analytics";
import "./styles/globals.css";


function getYear() {
  return new Date().getFullYear();
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const year = await getYear();
  // Forward fetched data to your Client Component

  const Calendly = dynamic(() => import("./components/booking"), {
    ssr: false,
  });

  const Testimonials = dynamic(() => import("./components/testimonials"), {
    ssr: false,
  });

  return (
    <div className="" data-theme="light">
      <Suspense>
        <Analytics />
      </Suspense>
      <NavBar />
      <Calendly />
      <Hero2 />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Footer year={year} />
    </div>
  );
}
