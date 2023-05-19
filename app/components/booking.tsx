import Script from "next/script";

export default function Booking() {
  return (
    <section id="booking" className="my-12 mb-0 p-6">
      <h2 className="mb-0 text-center text-4xl font-bold text-white sm:text-5xl">
        Book Now!
      </h2>
      <div className="my-12 flex place-items-center items-center justify-center py-12 sm:my-0">
        <iframe
          className="h-96 w-full sm:h-1/2 sm:w-1/2"
          src="https://app.squarespacescheduling.com/schedule.php?owner=29184177"
          title="Schedule Appointment"
          loading="lazy"
        ></iframe>
        <Script
          src="https://embed.acuityscheduling.com/js/embed.js"
          type="text/javascript"
          strategy="lazyOnload"
        ></Script>
      </div>
    </section>
  );
}
