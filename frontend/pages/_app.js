import Head from "next/head";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.css";
import '../styles/Animated-Type-Heading.css'
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  <Head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
    />
  </Head>;

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
