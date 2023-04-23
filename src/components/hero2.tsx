import Image from 'next/image';
import image from "../../public/600x800.png"

export default function Hero2() {
  return (
    <div className="md:flex h-screen items-center">
      <div className="md:w-1/2 bg-red-500 text-white p-5 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-center">
          At Lift Performance, our elite coaches have one goal in mind - to elevate every aspect of your health and fitness. From the training sessions, to follow ups during your daily life, we are committed to keep you on track of your goals.

          We believe the best way to do so is through a holistic approach. From fitness, to nutrition, to mindset - we strive to provide you the best information along with accountability and support, so you’re going in the right direction FAST, CONSISTENTLY.

          Areas we specialise in are Body Composition, Rehabilitation and Athletic Performance.
        </p>
      </div>
      <div className="md:w-1/2 h-full">
        <Image
          src={image}
          alt="Your Image Here"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
