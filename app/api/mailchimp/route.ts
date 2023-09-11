import { NextResponse, NextRequest } from 'next/server'
import { Config } from 'sst/node/config'

interface IMailchimpProps {
  email: string;
}

export async function POST (request: NextRequest) {
  const res: IMailchimpProps = await request.json()

  const { email } = res

  console.log(res)

  if (!email || !email.length) {
    throw new Error('Email is required')
  }

  const MAILCHIMP_API_KEY = Config.MAILCHIMP_API_KEY
  const MAILCHIMP_API_SERVER = Config.MAILCHIMP_API_SERVER
  const MAILCHIMP_AUDIENCE_ID = Config.MAILCHIMP_AUDIENCE_ID

  const url = `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`

  const data = {
    email_address: email,
    status: 'subscribed'
  }

  const buff = Buffer.from(`apiKey:${MAILCHIMP_API_KEY}`).toString('base64')

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${buff}`
      }
    })
    if (response.status >= 400) {
      console.log(response.statusText)
      throw new Error('There was an error subscribing to the newsletter.')
    }
    return NextResponse.json({ message: 'Success' })
  } catch (error) {
    console.log(error)
    throw new Error('Something went wrong')
  }
}
