import dynamic from "next/dynamic";
import logo from "../../public/photos/logo.png";
import Image from "next/image";



export default function Hero2() {

  const CalendlyButton = dynamic(() => import("../components/booking2"), {
    ssr: false,
  });

  return (
    <section>
      <div className="hero bg-[url('/photos/hero_latest.webp')] bg-cover bg-no-repeat bg-top min-h-[50vh] sm:min-h-[80vh] xl:min-h-screen" id="hero">
        <div className="z-0 inset-x-0 flex flex-col w-[90%] min-h-[50vh] sm:min-h-[80vh]">
          <Image
            loading="lazy"
            src={logo}
            alt="logo"
            className="flex mb-10 mt-14 xl:mt-0 max-w-xs xl:max-w-lg"
            placeholder="blur"
            width={128}
          />
          <h1 className="mb-10 text-xl font-bold text-slate-950 sm:text-lg md:text-4xl 2xl:text-5xl w-2/3 xl:w-1/2">
            Unleash your potential with our expert trainers
          </h1>
          <CalendlyButton buttonClassNames="btn btn-ghost flex w-2/3 xl:w-1/4 sm:w-1/3 bg-black text-white text-bold text-center text-lg text-bold" />
        </div>
      </div>
      <div className="container m-0 mx-auto max-w-2xl">
        <div className="prose mx-auto flex max-w-xl flex-col gap-5 sm:flex-row lg:max-w-3xl xl:max-w-4xl">
          <div className="flex w-[90%] mx-auto flex-col">
            <p className="flex text-left tracking-tighter text-black lg:text-lg">
              Welcome to our prestigious gym, where we redefine fitness and
              wellness. Our expert team of personal trainers is dedicated to
              helping you unlock your true potential. Whether you're a seasoned
              fitness enthusiast or just starting your journey, we are here to
              guide and support you every step of the way. Discover the
              transformative power of personalized training, tailored nutrition
              plans, and a supportive community that inspires you to reach new
              heights. Elevate your mind, body, and spirit with us, and embrace
              a lifestyle that leads to lasting health and success. Are you
              ready to embark on the path to greatness? Join us today and
              unleash the hero within you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
