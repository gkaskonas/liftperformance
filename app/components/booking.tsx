import Script from "next/script";

export default function Booking() {
  return (
    <section id="booking" className="my-12 mb-10">
      <h2 className="mb-10 text-center text-4xl font-bold  sm:text-5xl">
        Book Now!
      </h2>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        async
      />
      <div className="relative mx-auto mb-0 h-[850px] sm:h-[1000px] w-4/5 lg:h-[700px]">
        <iframe
          loading="lazy"
          width="80%"
          src="https://calendly.com/liftperformancehk/consultation?embed_type=Inline&embed_domain=1"
          className="absolute left-0 top-0 h-full w-full"
          title="Booking form"
        ></iframe>
      </div>
    </section>
  );
}
