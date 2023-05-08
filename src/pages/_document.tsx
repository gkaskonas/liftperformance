import { Head, Html, Main, NextScript } from "next/document";

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
          content="At Lift Performance, our elite coaches have one goal in mind - to elevate every aspect of your health and fitness"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </body>
    </Html>
  );
}
