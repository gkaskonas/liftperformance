import Image from "next/image";
import trainers from "../../public/trainers.png"

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto">
      <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-2 items-center gap-8 mb-12">
        <article className="sm:w-1/2 ">
          <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-white mb-4">Unleash Your <span className="font-extrabold text-transparent bg-clip-text  bg-gradient-to-r from-red-600 to-yellow-500">Potential</span> at Our Sport Gym</h2>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-400">Get Fit, Have Fun, and Reach Your Goals with Our Expert Trainers and State-of-the-Art Equipment.</p>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left font-extrabold text-transparent bg-clip-text  bg-gradient-to-r from-red-600 to-yellow-500">Think Lift. Think Performance.</p>
        </article>
        <Image src={trainers} alt="trainers" className="w-1/2" />
      </section>
    </div >
  );
}
