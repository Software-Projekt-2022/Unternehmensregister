import {useRouter} from 'next/router';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import $ from 'jquery';
import {registerCall} from './api/api_register.js'

const doRegister = async () => {
    var email = document.getElementById('inp_email').value
    var forename = document.getElementById('inp_forename').value
    var surname = document.getElementById('inp_surname').value
    var age = document.getElementById('inp_age').value
    var membership = document.getElementById('inp_membership').value
    const reponse = await registerCall(forename, surname, age, email, membership)
    if (reponse != null) {
        success()
    } else {
        noSuccess()
    }
}

const success = () => {
    let root = document.getElementById('api_check');
    root.insertAdjacentHTML('beforebegin', `
    <div className="alert alert-danger">
    <strong>Registration complete!</strong>`);
}

const noSuccess = () => {
    let root = document.getElementById('api_check');
    root.insertAdjacentHTML('beforebegin', `
    <div className="alert alert-danger">
    <strong>Registration error!</strong> Check your input!
    </div>
        `);
}

const Register = props => {
    const router = useRouter();
    return (
        <div className="container-sm">

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
                        className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item"><a className="nav-link" onClick={() => router.push('/#')}>Home</a>
                            </li>
                            <li className="nav-item"><a className="nav-link"
                                                        onClick={() => router.push('/companies')}>Companies</a></li>
                            <li className="nav-item"><a className="nav-link"
                                                        onClick={() => router.push('/jobs')}>Jobs</a></li>
                            <li className="nav-item"><a className="nav-link"
                                                        onClick={() => router.push('/news')}>News</a></li>
                            <li className="nav-item"></li>
                            <li className="nav-item"></li>
                        </ul>
                        <button className="btn btn-primary" type="button" onClick={() => router.push('/login')}>Log in
                        </button>
                    </div>
                </div>
            </nav>

            <section className="position-relative py-4 py-xl-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <h2>Register your account</h2>
                            <p className="w-lg-50">By registering an account, you automatically accept our Terms of Service.</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6 col-xl-4">
                            <div className="card mb-5">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                                        <svg className="bi bi-person" xmlns="http://www.w3.org/2000/svg" width="1em"
                                             height="1em" fill="currentColor" viewBox="0 0 16 16">
                                            <path
                                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                        </svg>
                                    </div>
                                    <div id="api_check"></div>
                                    <form className="text-center" method="post">
                                        <div className="mb-3"><input className="form-control" type="text" name="text"
                                                                     placeholder="Forename" id="inp_forename"/></div>
                                        <div className="mb-3"><input className="form-control" type="surname" name="surname"
                                                                     placeholder="Surname" id="inp_surname"/></div>
                                        <div className="mb-3"><input className="form-control" type="text" name="age"
                                                                     placeholder="Age" id="inp_age"/></div>
                                        <div className="mb-3"><input className="form-control" type="email" name="email"
                                                                     placeholder="Email" id="inp_email"/></div>
                                        <div className="mb-3"><input className="form-control" type="text"
                                                                     name="membership" placeholder="Membership" id="inp_membership"/></div>
                                        <div className="mb-3">
                                            <button className="btn btn-primary d-block w-100" type="button" onClick={doRegister}>Register
                                            </button>
                                        </div>
                                        <p className="text-muted">Forgot your password?</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Register;
