import React from "react";
import Link from "next/link";

export default function CompanyListing(props) {

  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex flex-column flex-lg-row">
            <div className="row flex-fill justify-content-center">
                <h4 className="h5">{props.name}</h4>
              <div className="col-sm-1 py-2 fs-4">
                <button className="btn btn-primary fs-6 me-2 py-1 px-2">
                  {props.abbrevation}
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
