import Image from "next/image";
import Link from "next/link";
import trainers from "../../public/trainers.jpg";

export default function Hero() {
  return (
    <div className="relative flex flex-col lg:pt-0 lg:flex-col lg:pb-0  mb-10 my-5">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full  text-red-950 transform -translate-x-3/4 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-5/6"
          src={trainers}
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-0 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 font-sans text-4xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none text-center sm:text-left ">
          Unleash Your{" "}
          <span className="bg-gradient-to-r from-red-600 to-yellow-500  bg-clip-text font-extrabold text-transparent">
              Potential
            </span>{" "}
                        With Our Expert Trainers

          </h2>
          <p className="pr-5 mb-5 text-2xl text-white ">
          Get Fit, Have Fun, and Reach Your Goals with Our Expert Trainers and
            State-of-the-Art Equipment.
          </p>
          <p className="mt-4 max-w-md bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-center text-2xl  font-extrabold text-transparent sm:text-left">
            Think Lift. Think Performance.
          </p>
          <div className="flex items-center">
          <Link
            href="#booking"
            className="text-large mx-auto my-10 flex w-2/3 items-center justify-center rounded border border-slate-700 bg-slate-100 p-2 font-bold text-black hover:bg-gray-700 sm:ml-0 sm:w-1/2 sm:p-6 sm:text-xl"
          >
            Book Now!
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};