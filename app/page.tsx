import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import About from "./components/about";
import Footer from "./components/footer";
import Hero2 from "./components/hero2";
import NavBar from "./components/navbar";
import Services from "./components/services";
import Team, { Trainer } from "./components/team";
import Analytics from "./components/analytics";
import "./styles/globals.css";
import { hygraph } from "./utils/hygraph";
import { gql } from "graphql-request";

type TrainerData = {
  trainers: Trainer[];
}

function getYear() {
  return new Date().getFullYear();
}

async function getTrainers() {
  const data: TrainerData = await hygraph.request(gql`
  {
    trainers {
    id
    description
    name
    title
    image{
      id
      height
      width
      url
    }
  }}`);

  return data.trainers;
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const year = getYear();
  // Forward fetched data to your Client Component

  const Calendly = dynamic(() => import("./components/booking"), {
    ssr: false,
  });

  const Testimonials = dynamic(() => import("./components/testimonials"), {
    ssr: false,
  });

  const trainers = await getTrainers();

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
      <Team trainers={trainers} />
      <Testimonials />
      <Footer year={year} />
    </div>
  );
}
