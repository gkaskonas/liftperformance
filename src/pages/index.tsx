import Contact from "@/components/contact";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import Team from "@/components/team";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <hr className="mx-auto bg-white w-1/2"></hr>
      <Team />
      <hr className="mx-auto bg-white w-1/2"></hr>
      {/* <Contact /> */}

    </div>
  );
}
