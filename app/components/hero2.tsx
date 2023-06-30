import Image from "next/image";
import Link from "next/link";
import photo1 from "../../public/lift-header-1-v1.png";
import photo2 from "../../public/lift-header-2-v2.png";
import photo3 from "../../public/lift-header-3-v2.png";

export default function Hero2() {
  return (
    <section>
      <div className="bg-black py-2 text-white">
        <div className="container mx-auto my-2 flex flex-col items-center md:my-6 md:flex-row">
          <div className="flex w-full flex-col items-center justify-center p-8 md:w-3/4">
            <h2 className="mb-5 text-center font-sans text-2xl font-bold tracking-tight text-white sm:text-left sm:text-3xl xl:text-4xl sm:leading-none ">
              Unleash Your{" "}
              <span className="bg-gradient-to-r from-red-600 to-yellow-500  bg-clip-text font-extrabold text-transparent">
                Potential
              </span>{" "}
              With Our Expert Trainers
            </h2>
            <p className="mb-5 pr-5 text-2xl text-white text-center sm:text-left sm:text-xl">
              Get Fit, Have Fun, and Reach Your Goals with Our Expert Trainers
              and State-of-the-Art Equipment.
            </p>
            <p className="max-w-md bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text  text-xl  font-extrabold text-transparent sm:text-left text-center">
              Think Lift.
            </p>
            <p className="max-w-md bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text  text-xl  font-extrabold text-transparent sm:text-left">
              Think Performance.
            </p>
            <Link
              href="#booking"
              className="text-large mx-auto my-10 flex  items-center justify-center rounded border border-slate-700 bg-slate-100 p-2 font-bold text-black hover:bg-gray-700 sm:ml-0 sm:w-2/3  md:py-2 sm:text-lg"
            >
              Book Now!
            </Link>
          </div>
          <div className="flex flex-row justify-center ">
            <div className="w-1/2">
              <Image
                className="mt-14 hidden md:inline-block xl:mt-24 xl:ml-12"
                src={photo2}
                alt=""
              />
            </div>
            <div className="w-3/5">
              <Image
                className="mb-4 hidden md:inline-block p-8 md:mt-0 md:p-0 xl:mt-2"
                src={photo1}
                alt=""
              />
            </div>
            <div className="w-1/2">
              <Image
                className="mt-14 hidden md:inline-block xl:mt-24"
                src={photo3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
