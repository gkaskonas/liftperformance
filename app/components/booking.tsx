import { InlineWidget } from "react-calendly";

export default function Booking() {
  return (
    <section id="booking" className="my-12 mb-0 p-6">
      <h2 className="mb-10 text-center text-4xl font-bold text-white sm:text-5xl">
        Book Now!
      </h2>
      <InlineWidget
        styles={{ height: "900px" }}
        url="https://calendly.com/sherry_islamist088/consultation-1h?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=ff0000"
      />
    </section>
  );
}
