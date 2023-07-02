import Image from "next/image";
import Link from "next/link";
import trainers from "../../public/trainers.png";

export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl sm:max-w-7xl">
      <section
        id="hero"
        className="mb-12 flex flex-col-reverse items-center justify-center gap-8 p-2 md:flex-row"
      >
        <article className="items-center justify-center sm:w-1/2">
          <h2 className="mb-4 max-w-md text-center text-4xl font-bold text-white sm:text-left sm:text-5xl">
            Unleash Your{" "}
            <span className="bg-gradient-to-r from-red-600 to-yellow-500  bg-clip-text font-extrabold text-transparent">
              Potential
            </span>{" "}
            With Our Expert Trainers
          </h2>
          <p className="mt-4 max-w-md text-center text-2xl text-slate-200 sm:text-left">
            Get Fit, Have Fun, and Reach Your Goals with Our Expert Trainers and
            State-of-the-Art Equipment.
          </p>
          <p className="mt-4 max-w-md bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-center text-2xl  font-extrabold text-transparent sm:text-left">
            Think Lift. Think Performance.
          </p>
          <Link
            href="#booking"
            className="text-large mx-auto my-10 flex w-2/3 items-center justify-center rounded border border-slate-700 bg-slate-100 p-2 font-bold text-black hover:bg-gray-700 sm:ml-0 sm:w-1/2 sm:p-6 sm:text-xl"
          >
            Book Now!
          </Link>
        </article>
        <Image
          src={trainers}
          alt="trainers"
          className="mx-auto w-2/3 place-items-center justify-center py-0 sm:w-1/2"
          placeholder="blur"
          priority
        />
      </section>
    </div>
  );
}
