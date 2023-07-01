// Import your Client Component
import HomePage from "./home-page";

function getYear() {
  return new Date().getFullYear();
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const year = await getYear();
  // Forward fetched data to your Client Component
  return <HomePage year={year}/>;
}
