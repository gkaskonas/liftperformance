'use client'
import { getBookingButtonText } from '@/lib/utils'
import React, { Suspense, useState } from 'react'
import { PopupModal } from 'react-calendly'

export interface IBookingButtonProps {
  buttonClassNames: string;
  text?: string;
}

export default function CalendlyButton ({ buttonClassNames, text }: IBookingButtonProps) {
  const getRootEelement = () => {
    const element = document.getElementById('root')

    if (!element) {
      throw new Error('Root element not found')
    }
    return element
  }

  const [showModal, setShowModal] = useState(false)

  const [buttonText] = useState(getBookingButtonText())

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <button
        onClick={() => setShowModal(true)}
        className={buttonClassNames}
      >
        {text || buttonText}
      </button>
      <PopupModal
        url="https://calendly.com/liftperformancehk/free-inperson-video-consultation"
        onModalClose={() => setShowModal(false)}
        open={showModal}
        rootElement={getRootEelement()}
        pageSettings={{
          hideEventTypeDetails: true,
          hideGdprBanner: true,
          hideLandingPageDetails: true
        }}
      />
    </Suspense >
  )
}
