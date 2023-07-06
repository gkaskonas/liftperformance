import { Metadata } from "next";
import "./styles/globals.css";
import { Suspense } from "react";
import Analytics from "./components/analytiics";
import { M_PLUS_1 } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = M_PLUS_1({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})


export const metadata: Metadata = {
  title: "Lift Performance | Personal Training | Hong Kong Island",
  description:
    "At Lift Performance, our elite coaches have one goal in mind - to elevate every aspect of your health and fitness",
    metadataBase: new URL('https://liftperformance.net'),
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
    <html lang="en" data-theme="light" className={inter.className}>
      <body className="scroll-smooth overflow-x-hidden">
        <Suspense>
          <Analytics />
        </Suspense>
        {children}</body>
    </html>
  );
}
