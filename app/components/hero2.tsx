import Image from "next/image";
import Link from "next/link";
import photo1 from "../../public/lift-header-1-v1.png";
import photo2 from "../../public/lift-header-2-v2.png";
import photo3 from "../../public/lift-header-3-v2.png";

export default function Hero2() {
  return (
    <section>
      <div className="bg-black py-2 text-white">
        <div className="container mx-auto my-2 flex items-center md:my-6 md:flex-row">
          <div className="flex w-full flex-col items-left justify-center sm:p-8 md:w-3/4 xl:w-1/3">
            <h2 className="mb-5 text-left font-sans text-large font-bold tracking-tight text-white sm:text-left sm:text-3xl xl:text-5xl sm:leading-none ">
              Unleash Your{" "}
              <span className="bg-gradient-to-r from-red-600 to-yellow-500  bg-clip-text font-extrabold text-transparent">
                Potential
              </span>{" "}
              With Our Expert Trainers
            </h2>
            <p className="mb-5 pr-5 text-sm text-white text-left sm:text-xl">
              Get Fit, Have Fun, and Reach Your Goals with Our Expert Trainers
              and State-of-the-Art Equipment.
            </p>
            <p className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text  text-large  lg:text-2xl font-extrabold text-transparent text-left xl:text-4xl">
              Think Lift.
            </p>
            <p className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text  text-large  font-extrabold text-transparent text-left xl:text-4xl lg:text-2xl lg:mt-2">
              Think Performance.
            </p>
            <Link
              href="#booking"
              className="text-large mx-auto my-10 flex  items-center justify-center rounded border border-slate-700 bg-slate-100 p-2 font-bold text-black hover:bg-gray-700 sm:ml-0 sm:w-2/3  md:py-2 sm:text-lg xl:w-1/2"
            >
              Book Now!
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row justify-center w-2/3 sm:w-full">
            <div className="sm:w-1/2 sm:mr-5">
              <Image
                className="sm:mt-14 md:inline-block xl:mt-24 xl:ml-12"
                src={photo2}
                alt="hero photo 2"
                priority={true}
                placeholder="blur"
              />
            </div>
            <div className="w-3/5">
              <Image
                className="mb-4 hidden md:inline-block md:mt-0 xl:mt-2"
                src={photo1}
                alt="hero photo 1"
                priority={true}
                placeholder="blur"
              />
            </div>
            <div className="sm:w-1/2 ml-0">
              <Image
                className="mt-12 hidden md:inline-block xl:mt-24"
                src={photo3}
                alt="hero photo 2"
                priority={true}
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
