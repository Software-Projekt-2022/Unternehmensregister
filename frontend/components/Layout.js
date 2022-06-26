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
    </Head>
    <header>
      <Nav />
    </header>

    {children}

    <Footer />
  </div>
);

export default Layout;
