import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {useRouter} from 'next/router';

export default function Home() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <Head>
                <title>CyberJobs</title>
                <meta name="description" content="Job hub for CyberCity"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className="offcanvas offcanvas-start" id="sidebar">
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title" href="https://github.com/DubskySteam">Project</h1>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    <h5>GitHub</h5>
                    <div className="btn-group">
                        <button className="btn btn-primary" type="button"><a href="https://github.com/Software-Projekt-2022/" target="_blank">Organization</a></button><br />
                        <button className="btn btn-warning" type="button"><a href="https://github.com/Software-Projekt-2022/Unternehmensregister">Repository</a></button><br />
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-light navbar-expand-md py-3">
                <div className="container"><a className="navbar-brand d-flex align-items-center" data-bs-toggle="offcanvas" data-bs-target="#sidebar"><span
                    className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"><svg
                    xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"
                    className="bi bi-bezier">
                        <path fillRule="evenodd"
                              d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"></path>
                        <path
                            d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
                        </svg></span><span onClick={() => router.push('/#')}>CyberJobs</span></a>
                    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span
                        className="visually-hidden">Toggle navigation</span><span
                        className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item"><a className="nav-link active"
                                                        onClick={() => router.push('/#')}>Home</a>
                            </li>
                            <li className="nav-item"><a className="nav-link"
                                                        onClick={() => router.push('/companies')}>Companies</a></li>
                            <li className="nav-item"><a className="nav-link"
                                                        onClick={() => router.push('/offers')}>Offers</a>
                            </li>
                            <li className="nav-item"><a className="nav-link"
                                                        onClick={() => router.push('/news')}>News</a></li>
                        </ul>
                        <button className="btn btn-primary" type="button" onClick={() => router.push('/login')}>Log in</button>
                    </div>
                </div>
            </nav>

            <div className="caption v-middle text-center">
                <h1 className="cd-headline clip">
                    <span className="blc">CyberCity | </span>
                    <span className="cd-words-wrapper">
			              <b className="is-visible">Jobs.</b>
			              <b>Socials.</b>
			              <b>Career.</b>
			            </span>
                </h1>
            </div>

            <section className="py-4 py-xl-5">
                <div className="container h-100">
                    <div className="row h-100">
                        <div
                            className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                            <div>
                                <h2 className="text-uppercase fw-bold mb-3">Get started today</h2>
                                <p className="mb-4">Log in to get started and browse through all the various job offers
                                    of
                                    your connected companies. Apply on offers without any excess and connect with people
                                    in your region.</p>
                                <button className="btn btn-primary fs-5 me-2 py-2 px-4" type="button">Job offers
                                </button>
                                <button className="btn btn-outline-primary fs-5 py-2 px-4" type="button" onClick={() => router.push('/register')}>New account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container py-4 py-xl-5">
                <div className="row gy-4 row-cols-2 row-cols-md-4">
                    <div className="col">
                        <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                            <div
                                className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                     viewBox="0 0 16 16" className="bi bi-person-fill">
                                    <path
                                        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                                </svg>
                            </div>
                            <div className="px-3">
                                <h2 className="fw-bold mb-0">300+</h2>
                                <p className="mb-0">Users</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                            <div
                                className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                     viewBox="0 0 16 16" className="bi bi-building">
                                    <path fillRule="evenodd"
                                          d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"></path>
                                    <path
                                        d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"></path>
                                </svg>
                            </div>
                            <div className="px-3">
                                <h2 className="fw-bold mb-0">20+</h2>
                                <p className="mb-0">Companies</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                            <div
                                className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                     viewBox="0 0 16 16" className="bi bi-journal-bookmark-fill">
                                    <path fillRule="evenodd"
                                          d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"></path>
                                    <path
                                        d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"></path>
                                    <path
                                        d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"></path>
                                </svg>
                            </div>
                            <div className="px-3">
                                <h2 className="fw-bold mb-0">20+</h2>
                                <p className="mb-0">Open jobs</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                            <div
                                className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                     viewBox="0 0 16 16" className="bi bi-graph-up-arrow">
                                    <path fillRule="evenodd"
                                          d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"></path>
                                </svg>
                            </div>
                            <div className="px-3">
                                <h2 className="fw-bold mb-0">89</h2>
                                <p className="mb-0">Succesfull applications</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="photo-gallery py-4 py-xl-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <h2>Featured companies</h2>
                        </div>
                    </div>
                    <div className="row gx-2 gy-2 row-cols-1 row-cols-md-2 row-cols-xl-3 photos"
                         data-bss-baguettebox="">
                        <div className="col item"><a
                            href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"><img
                            className="img-fluid" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"/></a>
                        </div>
                        <div className="col item"><a
                            href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"><img
                            className="img-fluid" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"/></a>
                        </div>
                        <div className="col item"><a
                            href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"><img
                            className="img-fluid" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"/></a>
                        </div>
                        <div className="col item"><a
                            href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"><img
                            className="img-fluid" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"/></a>
                        </div>
                        <div className="col item"><a
                            href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"><img
                            className="img-fluid" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"/></a>
                        </div>
                        <div className="col item"><a
                            href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"><img
                            className="img-fluid" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"/></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-4 py-xl-5">
                <div className="container">
                    <div
                        className="bg-light border rounded border-0 border-light d-flex flex-column justify-content-between align-items-center flex-lg-row p-4 p-lg-5">
                        <div className="text-center text-lg-start py-3 py-lg-1">
                            <h2 className="fw-bold mb-2"><strong>Subscribe to our newsletter</strong></h2>
                            <p className="mb-0">Get the latest news about job offers and new companies</p>
                        </div>
                        <form className="d-flex justify-content-center flex-wrap my-2" method="post">
                            <div className="my-2"><input className="form-control" type="email" name="email"
                                                         placeholder="Your Email"/></div>
                            <div className="my-2">
                                <button className="btn btn-primary ms-sm-2" type="submit">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container py-4 py-lg-5">
                    <div className="row justify-content-center">
                        <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                            <h3 className="fs-6">Services</h3>
                            <ul className="list-unstyled">
                                <li><a className="link-secondary" href="#">Home</a></li>
                                <li><a className="link-secondary" href="#">Create a new account</a></li>
                                <li><a className="link-secondary" href="#"></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                            <h3 className="fs-6">About</h3>
                            <ul className="list-unstyled">
                                <li><a className="link-secondary" href="#">News</a></li>
                                <li><a className="link-secondary" href="#">Team</a></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                            <h3 className="fs-6">CyberCity</h3>
                            <ul className="list-unstyled">
                                <li><a className="link-secondary" href="#">Landing Page</a></li>
                                <li><a className="link-secondary" href="#">Other Services</a></li>
                                <li></li>
                            </ul>
                        </div>
                        <div
                            className="col-lg-3 text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last item social">
                            <div className="fw-bold d-flex align-items-center mb-2"><span
                                className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center bs-icon me-2"><svg
                                xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                viewBox="0 0 16 16" className="bi bi-bezier">
                                <path fillRule="evenodd"
                                      d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"></path>
                                <path
                                    d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
                            </svg></span><span>CyberJobs</span></div>
                            <p className="text-muted copyright">Jobs and social solutions for everyone!</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center pt-3">
                        <p className="text-muted mb-0">Copyright © 2022 CyberJobs</p>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                     viewBox="0 0 16 16" className="bi bi-facebook">
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                </svg>
                            </li>
                            <li className="list-inline-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                     viewBox="0 0 16 16" className="bi bi-twitter">
                                    <path
                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                </svg>
                            </li>
                            <li className="list-inline-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                     viewBox="0 0 16 16" className="bi bi-instagram">
                                    <path
                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    )
}
