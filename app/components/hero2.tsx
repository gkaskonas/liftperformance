
import dynamic from "next/dynamic";

export default function Hero2() {

  const CalendlyButton = dynamic(() => import("../components/booking2"), {
    ssr: false
  });
  
  return (
    <div className="hero min-h-screen bg-[url('/photos/hero.webp')]" id="hero">
        <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="mb-[200px] lg:mb-[300px] sm:mb-5 max-w-2xl md:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl prose">
          <h1 className="mb-10 text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-slate-50">
            Unleash your potential with our expert trainers
          </h1>
          <p className="text-xl xl:text-2xl max-w-lg text-left sm:max-w-sm xl:max-w-xl text-slate-50">
            Get Fit, Have Fun, and Reach Your Goals with Our Expert Trainers and
            State-of-the-Art Equipment.
          </p>
          <CalendlyButton />
        </div>
      </div>
    </div>
    </div>
  );
}
