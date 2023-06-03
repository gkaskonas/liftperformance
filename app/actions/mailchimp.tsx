import client from "@mailchimp/mailchimp_marketing";

export async function makeMailchimpRequest(email: string): Promise<string> {
  if (!email || !email.length) {
    throw new Error("Email is required");
  }

  client.setConfig({
    apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
    server: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER,
  });

  const AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;

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
