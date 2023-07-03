import Link from "next/link";
import Subscribe from "./mailchimp";
import {SiWhatsapp} from "react-icons/si"
import {MdOutlineEmail} from "react-icons/md"

export default function Footer({ year }: { year: number }) {
  return (
    <section aria-label="Site Footer" className="my-12 ">
      <h2 className="mb-6 text-center text-4xl font-bold text-white sm:text-5xl">
        Contact Us
      </h2>
      <Subscribe />

      <ul
        id="contact"
        className="xl:1/2 mx-auto my-12 flex list-none flex-col flex-wrap place-items-center items-center justify-center gap-6 sm:grid sm:grid-cols-3 sm:grid-rows-1 sm:gap-0 lg:w-3/4"
      >
        <li className="flex flex-col items-center">
          <h3 className="mb-5 font-bold text-white underline underline-offset-4 sm:text-2xl">
            Address
          </h3>
          <h2 className="w-1/2 text-center text-white sm:w-auto">
            1/F, Abdoolaly House, 20 Stanley Street, Central, Hong Kong
          </h2>
        </li>
        <li className="flex flex-col items-center ">
          <h3 className="mb-5 font-bold text-white underline underline-offset-4 sm:text-2xl">
            Contact
          </h3>
          <Link href="https://wa.link/y05vhp" className="mx-auto mb-2 flex flex-row text-white md:flex-row md:justify-around lg:justify-between ">
            <SiWhatsapp className="mr-2"/>
            6772 8838
          </Link>
          <Link href="mailto:liftphk@gmail.com" className="mx-auto mb-2 flex flex-row text-white md:flex-row md:justify-around lg:justify-between ">
            <MdOutlineEmail className="mr-2"/>
            liftphk@gmail.com
          </Link>
        </li>
        <li className="flex flex-col items-center text-justify">
          <h3 className="mb-5 font-bold text-white underline underline-offset-4 sm:text-2xl">
            Hours
          </h3>
          <h2 className="mb-2 text-center  text-white">
            Mon - Fri 7:00am - 8:00 pm
          </h2>
          <h2 className="text-white">Sat - Sun 7:00am - 4:00 pm</h2>
        </li>
      </ul>
      <div className="flex place-items-center items-center justify-center">
        <iframe
          loading="lazy"
          className="sm:w-2/3"
          title="Google Map"
          src="https://maps.google.com/maps?&amp;hl=en&amp;q=Lift%20Performance,%201/F,%20Abdoolaly%20House,%2020%20Stanley%20Street,%20Central,%20Hong%20Kong%20+(Lift%20Performance)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <h3 className="my-12 flex  place-items-center justify-center text-white">
        Copyright @ {year} Lift Performance Limited
      </h3>
    </section>
  );
}
