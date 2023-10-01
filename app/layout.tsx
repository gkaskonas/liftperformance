import { Metadata } from "next";
import React from "react";
import { M_PLUS_1 } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = M_PLUS_1({
  subsets: [ "latin" ],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Lift Performance | Personal Training | Hong Kong Island",
  description:
    "At Lift Performance, our elite coaches have one goal in mind - to elevate every aspect of your health and fitness",
  metadataBase: new URL("https://liftperformance.net"),
  alternates: {
    canonical: "/",
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon-16x16.png",
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      url: "/favicon-32x32.png",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      url: "/site.webmanifest",
      sizes: "180x180",
    },
    {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
    },
  ],
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" className={inter.className} id="root">
      <body className="">{children}</body>
    </html>
  );
}
