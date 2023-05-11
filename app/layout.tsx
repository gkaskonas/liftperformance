import { Metadata } from "next";
import Head from "next/head";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Lift Performance | Personal Training | Hong Kong Island",
  description:
    "At Lift Performance, our elite coaches have one goal in mind - to elevate every aspect of your health and fitness",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="canonical"
          href="https://liftperformance.vercel.app/"
          key="canonical"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
