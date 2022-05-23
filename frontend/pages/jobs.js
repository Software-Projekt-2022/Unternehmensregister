import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router';
import $ from 'jquery';

const showWarning = () => {
    let root = document.getElementById('api_check');
    root.insertAdjacentHTML('beforebegin', `
    <div className="alert alert-danger">
    <strong>Connection error!</strong> Could not connect to the API
    </div>
        `);
}

const getData = async () => {
        const response = await $.ajax({
            url: 'http://localhost:8085/api/job/getAll',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                renderTable(data);
            },
            error: function (data) {
                showWarning();
            }
        });
};

const renderTable = (data) => {
    console.log("Getting job list");
    let root = document.getElementById('table_body');
    data.forEach(element => root.insertAdjacentHTML('beforebegin', `
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.wageLower}</td>
        <td>${element.wageUpper}</td>
        <td><button className="btn btn-primary"><a href="profiles/${element.employer}">View Profile</a></button></td>
        </tr>
        `));

}

const Jobs = props => {
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
                                                        onClick={() => router.push('/Jobs')}>Jobs</a></li>
                            <li className="nav-item"><a className="nav-link"
                                                        onClick={() => router.push('/news')}>News</a></li>
                            <li className="nav-item"></li>
                            <li className="nav-item"></li>
                        </ul>
                        <button className="btn btn-primary" type="button" onClick={() => router.push('/login')}>Log in</button>
                    </div>
                </div>
            </nav>

            <section className="position-relative py-4 py-xl-5">
                <div className="container">

                    <div id="api_check">
                        
                    </div>

                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead className='table-dark'>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Min. Wage</th>
                                    <th>Max. Wage</th>
                                    <th>Employer</th>
                                </tr>
                            </thead>
                            <tbody id="table_body">
                            </tbody>
                        </table>
                    </div>
                    <button className="btn btn-primary" type="button" onClick={getData}>Load Data</button>
                </div>
            </section>

        </div>

    )
}

if (typeof window !== "undefined") {
    console.log("OK");
    getData();
}

export default Jobs;
