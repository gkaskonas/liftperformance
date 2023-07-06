"use server";

import client from "@mailchimp/mailchimp_marketing";

export interface IProps {
  apiKey: string,
  server: string,
  audienceId: string,
}

export async function makeMailchimpRequest(email: string, props: IProps): Promise<string> {
  if (!email || !email.length) {
    throw new Error("Email is required");
  }

  client.setConfig({
    apiKey: props.apiKey,
    server: props.server
  });

  const AUDIENCE_ID = props.audienceId

  if (!AUDIENCE_ID) throw new Error("No audience id");

  try {
    const response = await client.lists.addListMember(AUDIENCE_ID, {
      email_address: email,
      status: "subscribed",
    });

    console.log(response.status);
    return "success";
  } catch (e: any) {
    throw new Error(e.message);
  }
}
