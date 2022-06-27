const EditProfile = (props) => {
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
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
                  placeholder="Vorname"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Nachname</label>
                <input
                  type="text"
                  className="form-control"
                  value=""
                  placeholder="Nachname"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">E-Mail</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-Mail Adresse"
                  value=""
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Nationalität</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nationalität"
                  value=""
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Address Line 2</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter address line 2"
                  value=""
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Postcode</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter address line 2"
                  value=""
                />
              </div>
              <div className="col-md-12">
                <label className="labels">State</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter address line 2"
                  value=""
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Area</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter address line 2"
                  value=""
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Email ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter email id"
                  value=""
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Education</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="education"
                  value=""
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Country</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="country"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <label className="labels">State/Region</label>
                <input
                  type="text"
                  className="form-control"
                  value=""
                  placeholder="state"
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Save Profile
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
                className="form-control"
                placeholder="Was sollen andere über sie wissen?"
                value=""
              />
            </div>{" "}
            <br />
            <div className="col-md-12">
              <label className="labels">Zertifikate</label>
              <input
                type="text"
                className="form-control"
                placeholder="Oracle Java11, C++ Google 2"
                value=""
              />
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Arbeitsstatus</label>
              <input
                type="text"
                className="form-control"
                placeholder="Suchend, Freelancer"
                value=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
