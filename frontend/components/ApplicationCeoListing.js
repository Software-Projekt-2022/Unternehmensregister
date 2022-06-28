import Link from "next/link";
import { deleteApplication } from "../pages/api/calls";

const ApplicationCeoListing = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex flex-column flex-lg-row">
          <div className="row flex-fill justify-content-center">
            <div className="col-sm-3">
              <h4 className="h5">{props.name}</h4>
              <span className="badge bg-success fs-6">
                {props.CompName} ({props.CompShort})
              </span>
            </div>
            <div className="row-sm-2 fs-2">
              <button className="btn btn-primary">
                {props.forename} {props.surname}
              </button>{" "}
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteApplication(props.appID);
                }}
              >
                Löschen
              </button>{" "}
            </div>
            <hr />
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCeoListing;
