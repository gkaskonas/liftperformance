import Script from "next/script";
import { InlineWidget } from "react-calendly";

export default function Booking() {
  return (
    <section id="booking" className="my-12 mb-10">
      <h2 className="mb-10 text-center text-4xl font-bold text-white sm:text-5xl">
        Book Now!
      </h2>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" async/>
      <iframe
        loading="lazy"
        width="80%"
        src="https://calendly.com/liftperformancehk/consultation?embed_type=Inline&embed_domain=1"
        className="mx-auto mb-0 h-[850px] sm:h-[1000px] xl:h-[800px]"></iframe>
    </section>
  );
}
