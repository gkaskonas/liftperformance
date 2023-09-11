import client from '@mailchimp/mailchimp_marketing'

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

  client.setConfig({
    apiKey: MAILCHIMP_API_KEY,
    server: MAILCHIMP_API_SERVER
  })

  if (!MAILCHIMP_AUDIENCE_ID) throw new Error('No audience id')

  try {
    const response = await client.lists.addListMember(MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed'
    })

    console.log(response.status)
    return NextResponse.json({ status: response.status })
  } catch (e: any) {
    throw new Error(e.message)
  }
}
