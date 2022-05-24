import Head from "next/head";
import { newJobCall } from "./api/api_calls.js";

const newJob = async () => {
  var id = 1;
  var title = document.getElementById("inp_jobtitle").value;
  var lower = document.getElementById("inp_lowerwage").value;
  var upper = document.getElementById("inp_upperwage").value;
  const reponse = await newJobCall(title, lower, upper, id);
  if (reponse != null) {
    success();
  } else {
    noSuccess();
  }
};

const success = () => {
  let root = document.getElementById("api_check");
  root.insertAdjacentHTML(
    "beforebegin",
    `
    <div className="alert alert-danger">
    <strong>Job complete!</strong>`
  );
};

const noSuccess = () => {
  let root = document.getElementById("api_check");
  root.insertAdjacentHTML(
    "beforebegin",
    `
    <div className="alert alert-danger">
    <strong>Job error error!</strong> Check your input!
    </div>
        `
  );
};

const JobCreator = () => {
  return (
    <div>
      <Head>
        <title>CyberJobs - Creator</title>
        <meta name="description" content="Job hub for CyberCity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2>Create a new Job Offer</h2>
          <p className="w-lg-50">
            By creating a job, you automatically accept our Terms of
            Service.
          </p>
        </div>
      </div>
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
              <div id="api_check"></div>
              <form className="text-center" method="post">
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="jobtitle"
                    placeholder="Job Title"
                    id="inp_jobtitle"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="surname"
                    name="lowerwage"
                    placeholder="Lower Wage"
                    id="inp_lowerwage"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="upperwage"
                    placeholder="Upper Wage"
                    id="inp_upperwage"
                  />
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-primary d-block w-100"
                    type="button"
                    onClick={newJob}
                  >
                    New Job
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

export default JobCreator;
