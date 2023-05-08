import { Head, Html, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          property="og:title"
          content="Lift Performance | Personal Training | Hong Kong Island"
        />
        <meta
          name="description"
          content="At Lift Performance, our elite coaches have one goal in mind - to elevate every aspect of your health and fitness. From the training sessions, to follow ups during your daily life, we are committed to keep you on track of your goals."
        />
        <Link rel="canonical" href="https://liftperformance.vercel.app/" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <body>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </body>
    </Html>
  );
}
