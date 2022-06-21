import Layout from "../components/Layout";
import _error from "./_error";
import { Component } from "react";
import { withRouter } from "next/router";
import Protected from "../components/Protected";
import ApplicationListing from "../components/ApplicationListing";

class Applications extends Component {
  static getInitialProps = async ({ query }) => {
    const source = await fetch(
      "http://185.194.217.213:8085/api/application/getApplicationsForApplicantID/" +
        query.id
    );
    const data = await source.json();
    console.log(data);
    return { data: data };
  };

  render() {
    const { data } = this.props;

    return (
      <Layout title="Applications">
        <Protected>
          <div className="caption v-middle text-center">
            <section className="py-4 py-xl-5">
              <div className="container h-100">
                {data.map(
                  ({ user, company, job }) => (
                    <div key={job.id}>
                      <ApplicationListing
                        name={job.name}
                        wageLower={job.wageLower}
                        wageUpper={job.wageUpper}
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

export default withRouter(Applications);
