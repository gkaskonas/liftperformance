import Image from "next/image"
import cover from "../../public/dumbell.webp"
export default function Contact() {
  return (
    <section id="contact" className="p-6 my-12">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-white">Contact Us</h2>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse justify-center sm:flex-row p-2 items-center gap-8 mb-12">
          <form action="" className="space-y-4 text-gray-500">
            <div>
              <label className="sr-only text-gray-900">Name</label>
              <input
                className="w-full rounded-lg border-gray-700 p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only">Email</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Message</label>

              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Message"
                id="message"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Send Enquiry
              </button>
            </div>
          </form>
          <Image src={cover} alt="dumbbell" className="w-1/2" />
        </div>
      </div>
    </section>
  );
}
