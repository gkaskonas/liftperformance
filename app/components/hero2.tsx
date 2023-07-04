import Image from "next/image";
import photo1 from "../../public/hero.jpg";
import NavBar from "./navbar";

export default function Hero2() {
  return (
  
<section className="flex flex-col w-full mb-[270px] sm:mb-[500px] md:mb-[550px] lg:mb-0">
  <Image
    alt='Hero Picture'
    src={photo1}
    fill
    className="object-cover absolute"
  />
  <NavBar />
    
      <div
        className="relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-center lg:mb-[500px]">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white mb-5">
            Unleash your potential with our expert trainers
  
          </h1>
    
          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
          Get Fit, Have Fun, and Reach Your Goals with Our Expert Trainers
              and State-of-the-Art Equipment.
          </p>
    
          <div className="mt-8 gap-4 text-center">
            <a
              href="#"
              className="btn btn-primary btn-lg"
            >
              Book now
            </a>
    
          </div>
        </div>
      </div>
    </section>
    );
}
