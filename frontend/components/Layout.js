import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import NProgress from "nprogress";
import Router from "next/router";
import Nav from "./Nav";

Router.onRouteChangeStart = url => {
    console.log(url);
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>CyberJobs - {title}</title>
      <meta name="description" content="Job hub for CyberCity" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
    </Head>
    <header>
      <Nav />
    </header>

    {children}

    <Footer />
  </div>
);

export default Layout;
