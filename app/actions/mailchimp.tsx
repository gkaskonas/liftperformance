"use server";

import client from "@mailchimp/mailchimp_marketing";

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

export async function makeMailchimpRequest(email: string): Promise<string> {
  if (!email || !email.length) {
    throw new Error("Email is required");
  }

  if (!AUDIENCE_ID) throw new Error("No audience id");

  try {
    await client.lists.addListMember(AUDIENCE_ID, {
      email_address: email,
      status: "pending",
    });

    return "success";
  } catch (e: any) {
    throw new Error(e.message);
  }
}
