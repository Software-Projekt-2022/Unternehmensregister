import Nav from './Nav'
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <div className="container-sm">
            <Nav />
            <div className="offcanvas offcanvas-start" id="sidebar">
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title" href="https://github.com/DubskySteam">
                        Project
                    </h1>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <h5>GitHub</h5>
                    <div className="btn-group">
                        <button className="btn btn-primary" type="button">
                            <a
                                href="https://github.com/Software-Projekt-2022/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Organization
                            </a>
                        </button>
                        <br />
                        <button className="btn btn-warning" type="button">
                            <a href="https://github.com/Software-Projekt-2022/Unternehmensregister">
                                Repository
                            </a>
                        </button>
                        <br />
                    </div>
                </div>
            </div>
            <section className="position-relative py-4 py-xl-5">
                <div className="container">
                    {children}
                </div>
            </section>
            <Footer />            
        </div>
    )
}

export default Layout