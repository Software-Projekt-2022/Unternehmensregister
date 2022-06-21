import React from "react";
import Link from "next/link";

export default function JobListing(props) {

  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex flex-column flex-lg-row">
            <div className="row flex-fill justify-content-center">
              <div className="col-sm-3">
                <h4 className="h5">{props.name}</h4>
                <span className="badge bg-success fs-6">
                  {props.wage_lower}€ - {props.wage_upper}€
                </span>
              </div>
              <div className="col-sm-1 py-2 fs-4">
                <button className="btn btn-primary fs-6 me-2 py-1 px-2">
                  Arbeitgeber
                </button>{" "}
              </div>
              <div className="col-sm-3 py-2 fs-5">
                <span className="badge bg-secondary m-1 px-1">Abitur</span>
                <span className="badge bg-secondary m-1 px-1">Sekundär II</span>
                <span className="badge bg-secondary m-1 px-1">Studiert</span>
              </div>
              <div className="col-sm-1 text-lg-end fs-2">
                <Link as="Neue Bewerbung" href={{ pathname: "/manager", query: { job_id: props.id, emp_id: props.employer, job_name: props.name } }}>
                  <button className="btn btn-warning stretched-link">
                    Bewerben!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
