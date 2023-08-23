// Import your Client Component
import HomePage from "./home-page";

import { Config } from "sst/node/config";

function getYear() {
  return new Date().getFullYear();
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const year = await getYear();
  // Forward fetched data to your Client Component

  const MAILCHIMP_API_KEY = Config.MAILCHIMP_API_KEY;
  const MAILCHIMP_API_SERVER = Config.MAILCHIMP_API_SERVER;
  const MAILCHIMP_AUDIENCE_ID = Config.MAILCHIMP_AUDIENCE_ID;
  return (
    <HomePage
      apiKey={MAILCHIMP_API_KEY}
      audienceId={MAILCHIMP_AUDIENCE_ID}
      server={MAILCHIMP_API_SERVER}
      year={year}
    />
  );
}
