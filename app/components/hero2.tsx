import React from 'react'
import HeroLogoSection from './hero-logo-section'

export default function Hero2 () {
  return (
    <section>
      <div className="hero bg-[url('/photos/hero_latest.webp')] bg-cover bg-no-repeat bg-top min-h-[75vh] sm:min-h-[80vh] xl:min-h-[90vh]" id="hero">
        <HeroLogoSection />
      </div>
      <div className="container mt-10 mx-auto xl:max-w-5xl sm:max-w-2xl prose w-[95%]">
        <h2> Welcome to our prestigious gym, where we redefine fitness and
          wellness.</h2>
        <p className="flex text-left tracking-tighter text-black lg:text-xl mb-10">
          Our expert team of personal trainers is dedicated to
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
    </section>
  )
}
