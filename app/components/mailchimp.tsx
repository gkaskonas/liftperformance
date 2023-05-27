import { makeMailchimpRequest } from "@/actions/mailchimp";
import { useState } from "react";

export default function Subscribe() {
  "use client";
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const subscribe = async (e: any) => {
    e.preventDefault();
    setState("Loading");

    try {
      const response = await makeMailchimpRequest(email);
      console.log(response);
      setState("Success");
      setEmail("");
    } catch (e: any) {
      console.log(e.message);

      const error =
        "Subscription failed. Please try again later or you are already subscribed!";

      if (e.message.includes("Email is required")) {
        setErrorMsg(e.message);
      } else {
        setErrorMsg(error);
      }
      setState("Error");
    }
  };

  return (
    <section id="subscribe" className="my-12 mb-0 p-6">
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-10/12">
          <div className="grid items-center gap-x-6 lg:grid-cols-2">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-center text-2xl font-bold text-white dark:text-white sm:text-3xl">
                Do not miss any updates!
                <br />
                <span className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                  Subscribe to the newsletter
                </span>
              </h2>
            </div>

            <div
              className="mb-6 sm:mx-auto sm:w-1/2 md:mb-0 lg:w-full 2xl:w-4/5"
              onSubmit={subscribe}
            >
              <div className="flex-row md:flex">
                <input
                  className="form-control m-0 mb-2 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-red-600 focus:bg-white focus:text-gray-700 focus:outline-none sm:mx-auto md:mb-0 md:mr-2"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  id="email-input"
                  name="email"
                  type="email"
                  value={email}
                />
                <button
                  type="submit"
                  className="inline-block rounded bg-red-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={subscribe}
                  disabled={state === "Loading" || state === "Success"}
                >
                  Subscribe
                </button>
              </div>
              {state === "Error" && (
                <div className="text-white">{errorMsg}</div>
              )}
              {state === "Success" && (
                <div className="text-white">
                  Awesome, you've been subscribed!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
