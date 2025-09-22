import React from "react";
import Image from "next/image";
import HeroLogoSection from "./hero-logo-section";

export default function Hero2() {
  return (
    <section>
      <div
        className="hero relative min-h-[75vh] sm:min-h-[80vh] xl:min-h-[90vh] z-0 bg-white"
        id="hero"
      >
        <Image
          src="/photos/hero_latest.webp"
          alt="Hero background"
          fill
          className="object-cover object-top z-0"
          priority
          quality={85}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsUlEQVR4AQClAFr/AuDf4v/l5ej/5+bp/+/u8P+9ubj/t6mg/+Xk5v/l5Of/Au7u7wDs7OwA1dXVAM/NygC5no0Aw8C9APHs5wD19fYAAuDf3QCmop8AqZqKAHNwbgAqNTkAwsvTANnU0QDd2tUAAvr5+ADGu7IADfzvACMWDQD3AAYAKB8aAN/f3gDRzssAAr63sAA7LB8A9vb5AA8KBgDGx8gA+Pz9AMrLzADCw8MAAAAA//97pEIuAAAABklEQVQDAF93XaM0eNsEAAAAAElFTkSuQmCC"
        />
        <div className="relative z-10">
          <HeroLogoSection />
        </div>
      </div>
      <div className="container mt-10 mx-auto xl:max-w-5xl sm:max-w-2xl prose w-[95%]">
        <h2> Welcome to our prestigious gym, where we redefine fitness and wellness.</h2>
        <p className="flex text-left tracking-tighter text-black lg:text-xl mb-10">
          Our expert team of personal trainers is dedicated to helping you unlock your true potential. Whether you're a
          seasoned fitness enthusiast or just starting your journey, we are here to guide and support you every step of
          the way. Discover the transformative power of personalized training, tailored nutrition plans, and a
          supportive community that inspires you to reach new heights. Elevate your mind, body, and spirit with us, and
          embrace a lifestyle that leads to lasting health and success. Are you ready to embark on the path to
          greatness? Join us today and unleash the hero within you!
        </p>
      </div>
    </section>
  );
}
