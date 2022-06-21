import $ from 'jquery';

export default function ApplicationForm(props) {
  const sendData = async () => {
    $.ajax({
      type: "POST",
      url: "http://185.194.217.213:8085/api/application/newApplications",
      data: {
        "applicant_id": 1,
        "job_id": props.job_id,
        "company_id": props.emp_id,
        "text": "string",
      },
      success: function () {},
      dataType: "json",
      contentType: "application/json",
    });
  };

  return (
    <>
      <div className="container bootstrap snippets bootdey">
        <section id="contact" className="gray-bg padding-top-bottom">
          <div className="container bootstrap snippets bootdey">
            <div className="row">
              <h1>Bewerbung: {props.name}</h1>
              <form className="col-sm-6 col-sm-offset-3">             
                <div className="form-group">
                  <div className="controls">
                    <textarea
                      id="contact-message"
                      name="comments"
                      placeholder="Dein Anschreiben"
                      className="form-control requiredField Highlighted-label"
                      rows="6"
                      data-error-empty="Please enter your message"
                    ></textarea>
                    <i className="fa fa-comment"></i>
                  </div>
                </div>
                <p>
                  <button className="btn btn-info btn-block" onClick={sendData}>
                    Abschicken
                  </button>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
