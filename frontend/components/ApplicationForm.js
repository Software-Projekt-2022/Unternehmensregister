import $ from 'jquery';
import { sendApplication } from '../pages/api/calls';
import { useSession, signIn, signOut } from "next-auth/react"

export default function ApplicationForm(props) {

  const { data: session } = useSession()

  return (
    <>
      <div className="container bootstrap snippets bootdey">
        <section id="contact" className="gray-bg padding-top-bottom">
          <div className="container bootstrap snippets bootdey">
            <div className="row">
              <h1>Bewerbung: {props.name}</h1>
                <div className="form-group">
                  <div className="controls">
                    <textarea
                      id="textmsg"
                      name="comments"
                      placeholder="Dein Anschreiben"
                      className="form-control requiredField Highlighted-label"
                      rows="6"
                      data-error-empty="Please enter your message"
                    ></textarea>
                  </div>
                </div>
                <p>
                  <button className="btn btn-info btn-block" onClick={() => {sendApplication(props.job_id, props.emp_id, session.user.token.content.account_id , $("#textmsg").val())}}>
                    Abschicken
                  </button>
                </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
