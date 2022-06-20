import Layout from "../components/Layout";
import _error from "./_error";
import { Component } from "react";
import Router, { withRouter } from "next/router";

class Profile extends Component {
  static getInitialProps = async ({ query }) => {
    const source = await fetch(
      "http://185.194.217.213:8085/api/applications/getUserApplications/" + query.id
    );
    const data = await source.json();
    console.log(data);
    return { data: data };
  };

  render() {
    const { data } = this.props;

    return (
      <Layout title="Applications">
        {data.map(({ application_id, job_id, employer_id, status }) => (
            <div>
                <ApplicationCard key={id} id={id} job_id={job_id} employer={employer} status={status} />
        </div>
          ))}
      </Layout>
    );
  }
}

export default withRouter(Profile);
