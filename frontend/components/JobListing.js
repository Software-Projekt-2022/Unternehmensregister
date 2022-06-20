import React from 'react';

export default function JobListing( props ) {
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex flex-column flex-lg-row">
            <span className="avatar avatar-text rounded-3 me-4 mb-2">{props.id}</span>
            <div className="row flex-fill">
              <div className="col-sm-5">
                <h4 className="h5">{props.name}</h4>
                <button className="btn btn-primary fs-6 me-2 py-1 px-3">
                  Employer
                </button>{" "}
                <span className="badge bg-success">
                  {props.wage_lower}€ - {props.wage_upper}€
                </span>
              </div>
              <div className="col-sm-4 py-2">
                <span className="badge bg-secondary">Abitur</span>
                <span className="badge bg-secondary">Sekundär II</span>
                <span className="badge bg-secondary">Studiert</span>
              </div>
              <div className="col-sm-3 text-lg-end">
                <a href="#" className="btn btn-primary stretched-link">
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
