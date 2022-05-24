import Head from 'next/head'
import { useRouter } from 'next/router';
import Newsletter  from '../components/Newsletter';
import Photogallery from '../components/Photogallery';

export default function Home() {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>CyberJobs</title>
                <meta name="description" content="Job hub for CyberCity" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

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
                                <button className="btn btn-primary fs-5 me-2 py-2 px-4" type="button" onClick={() => router.push('/jobs')}>Job offers
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
            
            <Photogallery />
            <Newsletter />

        </div>
    )
}
