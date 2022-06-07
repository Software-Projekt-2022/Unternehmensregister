import Head from "next/head";
import styles from "../styles/Home.module.css";
import $ from "jquery";

const db_login = () => {
  $.ajax({
    type: "GET",
    url: "localhost:8085/api/user/login",
    data: data,
    success: function (data) {
      console.log("Logged in with session: " + data);
    },
    dataType: JSON,
  });
};

const Login = (props) => {
  return (
    <div className="form-signin w-100 m-auto">
      <Head>
        <title>CyberJobs - Login</title>
        <meta name="description" content="Job hub for CyberCity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row d-flex justify-content-center">
        <div className="col-md-6 col-xl-4">
          <div className="card mb-5">
            <div className="card-body d-flex flex-column align-items-center">
              <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                <svg
                  className="bi bi-person"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                </svg>
              </div>
              <form className="text-center" method="post">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                  <h2>Log in</h2>
                </div>
                <div className="mb-3 form-floating">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="inp_email"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="mb-3 form-floating">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="inp_pw"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-primary d-block w-100"
                    type="submit"
                  >
                    Log in
                  </button>
                </div>
                <p className="text-muted">Forgot your password?</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
