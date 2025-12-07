import React, { Suspense } from "react";
import About from "./components/about";
import Footer from "./components/footer";
import Hero2 from "./components/hero2";
import NavBar from "./components/navbar";
import Services from "./components/services";
import Team, { Trainer } from "./components/team";
import Analytics from "./components/analytics";
import ClientSections from "./components/client-sections";
import "./styles/globals.css";
import { hygraph } from "./utils/hygraph";
import { gql } from "graphql-request";

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
    next: { revalidate: 3600 } // Cache for 1 hour
  });

  return data.trainers;
}

// Enable static generation with revalidation
export const revalidate = 3600; // Revalidate every hour

export default async function Page() {
  // Load trainers in parallel with page render
  const trainersPromise = getTrainers();

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
      <ClientSections />
      <Footer />
    </div>
  );
}

// Separate component to handle async trainer loading
async function TeamWrapper({ trainersPromise }: { trainersPromise: Promise<Trainer[]> }) {
  const trainers = await trainersPromise;
  return <Team trainers={trainers} />;
}
