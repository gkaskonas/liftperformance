import Booking from "@/components/booking";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import Team from "@/components/team";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ year }: { year: number }) {
  return (
    <div className="bg-black">
      <NavBar />
      <Hero />
      <hr className="mx-auto w-1/2 bg-white sm:w-1/3"></hr>
      <Team />
      <hr className="mx-auto w-1/2 bg-white sm:w-1/3"></hr>
      <Booking />
      <hr className="mx-auto w-1/2 bg-white sm:w-1/3"></hr>

      <Footer year={year} />
    </div>
  );
}

export async function getStaticProps() {
  console.log("getStaticProps");
  return {
    props: {
      year: new Date().getFullYear(),
    },
  };
}
