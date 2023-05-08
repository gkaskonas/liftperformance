import Link from "next/link";

export default function Footer({ year }: { year: number }) {
  console.log(year);
  return (
    <section aria-label="Site Footer" className="my-12 p-6">
      <h2 className="mb-6 text-center text-4xl font-bold text-white sm:text-5xl">
        Contact Us
      </h2>
      <ul
        id="contact"
        className="my-12 flex list-none flex-col flex-wrap place-items-center items-center justify-center gap-12 py-12 sm:my-0 sm:flex-row"
      >
        <li className="flex w-1/2 flex-col items-center sm:w-1/5">
          <h3 className="mb-5 font-bold text-white underline underline-offset-4 sm:text-2xl">
            Address
          </h3>
          <h2 className="break-words text-left">
            1/F, Abdoolaly House, 20 Stanley Street, Central, Hong Kong
          </h2>
        </li>
        <li className="flex flex-col items-center ">
          <h3 className="mb-5 font-bold text-white underline underline-offset-4 sm:text-2xl">
            Contact
          </h3>
          <h2 className="mb-2">Whatsapp: 6772 8838</h2>
          <Link href="mailto:liftphk@gmail.com" className="">
            Email: liftphk@gmail.com
          </Link>
        </li>
        <li className="flex flex-col items-center ">
          <h3 className="mb-5 font-bold text-white underline underline-offset-4 sm:text-2xl">
            Opening Hours
          </h3>
          <h2 className="mb-2">Mon - Fri 7:00am - 8:00 pm</h2>
          <h2>Sat - Sun 7:00am - 4:00 pm</h2>
        </li>
      </ul>
      <div className="my-12 flex place-items-center items-center justify-center py-12 sm:my-0">
        <iframe
          className="my-6 aspect-auto h-full w-full sm:w-1/2"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1/F,%20Abdoolaly%20House,%2020%20Stanley%20Street,%20Central,%20Hong%20Kong+(Lift%20Performance)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <h3 className="my-12 flex  place-items-center justify-center">
        Copyright @ {year} Lift Performance Limited All right reserved
      </h3>
    </section>
  );
}
