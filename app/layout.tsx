import { Metadata } from "next";
import "./styles/globals.css";
import { Suspense } from "react";
import Analytics from "./components/analytiics";

export const metadata: Metadata = {
  title: "Lift Performance | Personal Training | Hong Kong Island",
  description:
    "At Lift Performance, our elite coaches have one goal in mind - to elevate every aspect of your health and fitness",
    metadataBase: new URL('https://www.liftperformance.net'),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black">
        <Suspense>
          <Analytics />
        </Suspense>
        {children}</body>
    </html>
  );
}
