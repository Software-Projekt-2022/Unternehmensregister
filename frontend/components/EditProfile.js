import $ from "jquery";
import { sendProfileUpdate } from "../pages/api/calls";

const EditProfile = (props) => {
    let img = props.udata.user.image;
  if (img == null) {
    img = "https://img.icons8.com/ultraviolet/344/test-account.png"
  }
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src={img}
            />
            <span className="font-weight-bold">{props.udata.user.forename}</span>
            <span className="text-black-50">{props.udata.user.email}</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profil Einstellungen</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="forename"
                  placeholder="Vorname"
                  defaultValue={props.udata.user.forename}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Nachname</label>
                <input
                  type="text"
                  id="surname"
                  className="form-control"
                  defaultValue={props.udata.user.surname}
                  placeholder="Nachname"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="E-Mail Adresse"
                  defaultValue={props.udata.user.email}
                />
              </div>
              <br />
              <div className="col-md-12">
                <label className="labels">Profilbild</label>
                <input
                  type="text"
                  id="image"
                  className="form-control"
                  placeholder="https://www.example.com/image.jpg"
                  defaultValue={img}
                />
              </div>
              <br />
              <div className="col-md-12">
                <label className="labels">Alter</label>
                <input
                  type="text"
                  id="age"
                  className="form-control"
                  placeholder="20"
                  defaultValue={props.udata.user.age}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
              <label className="labels">Nationalität</label>
                <input
                  type="text"
                  id="nationality"
                  className="form-control"
                  placeholder="Deutsch, Englisch"
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Region</label>
                <input
                  type="text"
                  id="region"
                  className="form-control"
                  placeholder="Niederachsen, NRW"
                />
              </div>
            </div>
            <div className="mt-5 text-center">
            <button className="btn btn-info btn-block" onClick={() => {sendProfileUpdate(props.udata.user.id, $("#forename").val(), $("#surname").val() , $("#age").val(), $("#email").val(), $("#companyid").val(), $("#status").val(), $("#image").val())}}>
                    Abschicken
                  </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              <h4>Zusätzliche Informationen</h4>
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Über mich</label>
              <input
                type="text"
                id="aboutme"
                className="form-control"
                placeholder="Was sollen andere über sie wissen?"
              />
            </div>{" "}
            <br />
            <div className="col-md-12">
              <label className="labels">Zertifikate</label>
              <input
                type="text"
                id="certs"
                className="form-control"
                placeholder="Oracle Java11, C++ Google 2"
              />
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Arbeitsstatus</label>
              <input
                type="text"
                id="status"
                className="form-control"
                placeholder="Suchend, Freelancer"
                defaultValue={props.udata.user.status}
              />
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Unternehmen</label>
              <input
                type="text"
                id="companyid"
                className="form-control"
                placeholder="Unternehmens ID"
                defaultValue={props.udata.user.company_id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
