export default function ApplicationForm(props) {
  return (
    <>
      <div className="container bootstrap snippets bootdey">
        <section id="contact" className="gray-bg padding-top-bottom">
          <div className="container bootstrap snippets bootdey">
            <div className="row">
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
                      placeholder="Your name"
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
                      placeholder="Your email"
                      className="form-control requiredField Highlighted-label"
                      data-new-placeholder="Your email"
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
                      placeholder="Your message"
                      className="form-control requiredField Highlighted-label"
                      data-new-placeholder="Your message"
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
                    <i className="fa fa-location-arrow"></i>Send Message
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
