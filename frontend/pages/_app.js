import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import '../styles/Animated-Type-Heading.css'
import Layout from '../components/Layout'
import Head from "next/head";
import {useEffect} from "react";

function MyApp({Component, pageProps}) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

    <Head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
    </Head>

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
