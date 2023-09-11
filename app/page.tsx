import { Config } from 'sst/node/config'
import React from 'react'
import dynamic from 'next/dynamic'
import About from './components/about'
import Footer from './components/footer'
import Hero2 from './components/hero2'
import NavBar from './components/navbar'
import Services from './components/services'
import Team from './components/team'
import Analytics from './components/analytics'

function getYear () {
  return new Date().getFullYear()
}

export default async function Page () {
  // Fetch data directly in a Server Component
  const year = await getYear()
  // Forward fetched data to your Client Component

  const MAILCHIMP_API_KEY = Config.MAILCHIMP_API_KEY
  const MAILCHIMP_API_SERVER = Config.MAILCHIMP_API_SERVER
  const MAILCHIMP_AUDIENCE_ID = Config.MAILCHIMP_AUDIENCE_ID
  const Calendly = dynamic(() => import('./components/booking'), {
    ssr: false
  })

  const Testimonials = dynamic(() => import('./components/testimonials'), {
    ssr: false
  })

  return (

    <div className="" data-theme="light">
      <Analytics />
      <NavBar />
      <Calendly />
      <Hero2 />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Footer apiKey={MAILCHIMP_API_KEY} audienceId={MAILCHIMP_AUDIENCE_ID} server={MAILCHIMP_API_SERVER} year={year} />
    </div>
  )
}
