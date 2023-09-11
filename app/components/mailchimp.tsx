'use client'

import React, { useState } from 'react'

export default function Subscribe () {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const subscribe = async (e: any) => {
    e.preventDefault()
    setState('Loading')

    try {
      const response = await fetch('/api/mailchimp/', {
        body: JSON.stringify({
          email
        }),

        headers: {
          'Content-Type': 'application/json'
        },

        method: 'POST'
      })
      console.log(response.statusText)

      if (response.status !== 200) {
        throw new Error(await response.text())
      }

      setState('Success')
      setEmail('')
    } catch (e: any) {
      console.log(e.message)

      const error =
        'Subscription failed. Please try again later or you are already subscribed!'

      if (e.message.includes('Email is required')) {
        setErrorMsg(e.message)
      } else {
        setErrorMsg(error)
      }
      setState('Error')
    }
  }

  return (
    <section id="subscribe" className="my-12 mb-0 p-6">
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-10/12">
          <div className="grid items-center gap-x-6 lg:grid-cols-2">
            <div className="mb-10 lg:mb-0">
              <h2 className="dark: text-center text-2xl  font-bold sm:text-3xl">
                Do not miss any updates!
                <br />
                <span className="text-red-700">
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
                  className="btn-primary btn text-white"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={subscribe}
                  disabled={state === 'Loading' || state === 'Success'}
                >
                  Subscribe
                </button>
              </div>
              {state === 'Error' && <div className="">{errorMsg}</div>}
              {state === 'Success' && (
                <div className="">Awesome, you've been subscribed!</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
