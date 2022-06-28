import Layout from "../components/Layout";
import _error from "./_error";
import { Component } from "react";
import { withRouter } from "next/router";
import Protected from "../components/Protected";
import ApplicationCeoListing from "../components/ApplicationCeoListing";
import { URL } from "./api/calls";

class ApplicationManager extends Component {
  static getInitialProps = async ({ query }) => {
    const source = await fetch(
      "http://localhost:8080/api/application/getApplicationsForCeoID/" +
        query.id
    );
    const data = await source.json();
    return { data: data };
  };

  render() {
    const { data } = this.props;

    return (
      <Layout title="CEO Mode">
        <Protected>
          <div className="caption v-middle text-center">
            <section className="py-4 py-xl-5">
              <div className="container h-100">
                {data.map(
                  ({ user, company, job }) => (
                    <div key={job.id}>
                      <ApplicationCeoListing
                        name={job.name}
                        applicant_id={user.id}
                        forename={user.forename}
                        surname={user.surname}
                        CompName={company.name}
                        CompShort={company.abbrevation}
                      />
                    </div>
                  )
                )}
              </div>
            </section>
          </div>
        </Protected>
      </Layout>
    );
  }
}

export default withRouter(ApplicationManager);
