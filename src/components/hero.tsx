export default function Hero() {
  return (
    <div className="flex min-h-screen justify-center bg-my_bg_image bg-cover bg-local bg-center ">
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="mb-8 text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Welcome to My Hero Component
        </h1>
        <p className="mb-12 text-center text-xl font-medium text-white md:text-2xl lg:text-3xl">
          Some catchy text about your hero message
        </p>
        <a
          href="#"
          className="rounded-full bg-slate-700 px-8 py-3 text-lg font-bold text-white shadow-lg transition duration-300 ease-in-out hover:bg-gray-400 md:text-xl lg:text-2xl"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
