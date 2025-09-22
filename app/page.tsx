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
import { Metadata } from "next";

type TrainerData = {
  trainers: Trainer[];
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
  }}`, {
    next: { revalidate: false }
  });

  return data.trainers;
}

export default async function Page() {
  // Load trainers in parallel with page render
  const trainersPromise = getTrainers();

  const Calendly = dynamic(() => import("./components/booking"), {
    ssr: false,
    loading: () => null,
  });

  const Testimonials = dynamic(() => import("./components/testimonials"), {
    ssr: false,
    loading: () => null,
  });

  return (
    <div className="" data-theme="light">
      <Suspense fallback={null}>
        <Analytics />
      </Suspense>
      <NavBar />
      <Hero2 />
      <About />
      <Services />
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">Loading team...</div>}>
        <TeamWrapper trainersPromise={trainersPromise} />
      </Suspense>
      <Testimonials />
      <Calendly />
      <Footer />
    </div>
  );
}

// Separate component to handle async trainer loading
async function TeamWrapper({ trainersPromise }: { trainersPromise: Promise<Trainer[]> }) {
  const trainers = await trainersPromise;
  return <Team trainers={trainers} />;
}
