import Image from "next/image"

const style = {
  width: "100%",
  height: "100%",
}

export default function Hero() {
  return (
    <div className="flex w-screen h-screen">
      <div className="bg-local bg-cover bg-center bg-my_bg_image" style={style}>
        <div className="inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col items-center justify-center h-full relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center mb-8">Welcome to My Hero Component</h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white font-medium text-center mb-12">Some catchy text about your hero message</p>
          <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full text-lg md:text-xl lg:text-2xl font-bold shadow-lg transition duration-300 ease-in-out">Get Started</a>
        </div>
      </div>
    </div>



  )
}