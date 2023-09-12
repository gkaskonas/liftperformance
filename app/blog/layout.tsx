import BlogNavBar from './components/navbar'
import React from 'react'

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
