import React from "react";

export default function JobListing(props) {
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex flex-column flex-lg-row">
            <div className="row flex-fill">
              <div className="col-sm-3">
                <h4 className="h5">{props.name}</h4>
                <span className="badge bg-success fs-6">
                  {props.wage_lower}€ - {props.wage_upper}€
                </span>
              </div>
              <div className="col-sm-1 py-2 fs-3">
              <button className="btn btn-primary fs-6 me-2 py-1 px-3">
                  Employer
                </button>{" "}
              </div>
              <div className="col-sm-3 py-2 fs-4">
                <span className="badge bg-secondary m-1 px-1">Abitur</span>
                <span className="badge bg-secondary m-1 px-1">Sekundär II</span>
                <span className="badge bg-secondary m-1 px-1">Studiert</span>
              </div>
              <div className="col-sm-1 text-lg-end">
                <a href="#" className="btn btn-warning stretched-link">
                  Apply
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
