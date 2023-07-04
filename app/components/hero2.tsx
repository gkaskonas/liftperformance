
import NavBar from "./navbar";
import Link from "next/link";

export default function Hero2() {
  return (
    <div className="hero min-h-screen bg-[url('/hero.webp')]">
        <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <NavBar />
        <div className="mb-[200px] lg:mb-[300px] sm:mb-5 max-w-2xl md:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl prose">
          <h1 className="mb-10 text-2xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-slate-50">
            Unleash your potential with our expert trainers
          </h1>
          <p className="text-xl xl:text-2xl max-w-lg text-left sm:max-w-sm xl:max-w-xl text-slate-50">
            Get Fit, Have Fun, and Reach Your Goals with Our Expert Trainers and
            State-of-the-Art Equipment.
          </p>
          <Link href="#booking" className="flex w-1/4 mt-5 btn-primary btn">Book Now</Link>
        </div>
      </div>
    </div>
  );
}
