export default function ApplicationForm(props) {

  console.log(props)

  return (
    <>
      <div className="container bootstrap snippets bootdey">
        <section id="contact" className="gray-bg padding-top-bottom">
          <div className="container bootstrap snippets bootdey">
            <div className="row">
              <h1>{props.job_name}</h1>
              <form
                id="Highlighted-form"
                className="col-sm-6 col-sm-offset-3"
                action="contact.php"
                method="post"
                noValidate=""
              >
                <div className="form-group">
                  <label className="control-label" htmlFor="contact-name">
                    Name
                  </label>
                  <div className="controls">
                    <input
                      id="contact-name"
                      name="contactName"
                      placeholder="Dein Name"
                      className="form-control requiredField Highlighted-label"
                      data-new-placeholder="Your name"
                      type="text"
                      data-error-empty="Please enter your name"
                    />
                    <i className="fa fa-user"></i>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="contact-mail">
                    Email
                  </label>
                  <div className=" controls">
                    <input
                      id="contact-mail"
                      name="email"
                      placeholder="Deine Email"
                      className="form-control requiredField Highlighted-label"
                      data-new-placeholder="Deine Email"
                      type="email"
                      data-error-empty="Please enter your email"
                      data-error-invalid="Invalid email address"
                    />
                    <i className="fa fa-envelope"></i>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="contact-message">
                    Message
                  </label>
                  <div className="controls">
                    <textarea
                      id="contact-message"
                      name="comments"
                      placeholder="Dein Anschreiben"
                      className="form-control requiredField Highlighted-label"
                      data-new-placeholder="Dein Anschreiben"
                      rows="6"
                      data-error-empty="Please enter your message"
                    ></textarea>
                    <i className="fa fa-comment"></i>
                  </div>
                </div>
                <p>
                  <button
                    name="submit"
                    type="submit"
                    className="btn btn-info btn-block"
                    data-error-message="Error!"
                    data-sending-message="Sending..."
                    data-ok-message="Message Sent"
                  >
                    <i className="fa fa-location-arrow"></i>Abschicken
                  </button>
                </p>
                <input
                  type="hidden"
                  name="submitted"
                  id="submitted"
                  value="true"
                />
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
