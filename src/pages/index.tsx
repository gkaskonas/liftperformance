import Booking from "@/components/booking";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import Team from "@/components/team";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black">
      <NavBar />
      <Hero />
      <hr className="mx-auto w-1/2 bg-white sm:w-1/3"></hr>
      <Team />
      <hr className="mx-auto w-1/2 bg-white sm:w-1/3"></hr>
      <Booking />
      {/* <Contact /> */}
    </div>
  );
}
