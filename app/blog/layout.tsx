import { Metadata } from 'next'
import BlogNavBar from './components/navbar'
import React from 'react'

export const metadata: Metadata = {
  title: 'Lift Performance | Personal Training | Hong Kong Island',
  description:
    'At Lift Performance, our elite coaches have one goal in mind - to elevate every aspect of your health and fitness',
  metadataBase: new URL('https://djrmsjgzumyjo.cloudfront.net'),
  alternates: {
    canonical: '/blog'
  },
  icons: [
    {
      rel: 'icon',
      url: '/favicon-16x16.png',
      type: 'image/png',
      sizes: '16x16'
    },
    {
      rel: 'icon',
      url: '/favicon-32x32.png',
      type: 'image/png',
      sizes: '32x32'
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
      type: 'image/png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      url: '/site.webmanifest',
      sizes: '180x180'
    },
    {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg'
    }
  ]
}

export default function DashboardLayout ({
  children // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <BlogNavBar />
      {children}
    </section >
  )
}
