// pages/_app.js
import "@/styles/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Favicon will auto-serve from /public/favicon.ico */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>George Siciaridis — Resume</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
