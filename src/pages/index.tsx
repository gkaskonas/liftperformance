import Hero from "@/components/hero";
import Team from "@/components/team";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero />
      <hr className="mx-auto bg-white w-1/2"></hr>
      <Team />
    </div>
  );
}
