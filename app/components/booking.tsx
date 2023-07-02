import Script from "next/script";
import { InlineWidget } from "react-calendly";

export default function Booking() {
  return (
    <section id="booking" className="my-12 mb-10">
      <h2 className="mb-10 text-center text-4xl font-bold text-white sm:text-5xl">
        Book Now!
      </h2>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload"/>
      <InlineWidget url="https://calendly.com/liftperformancehk/consultation" iframeTitle="Calendly Appointment" styles={{height: "850px", width: "80%", marginLeft: "auto", marginRight: "auto"}}/>
    </section>
  );
}
