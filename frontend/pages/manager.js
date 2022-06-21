import Layout from "../components/Layout";
import _error from "./_error";
import { Component } from "react";
import Router, { withRouter } from "next/router";
import Protected from "../components/Protected";
import ApplicationForm from "../components/ApplicationForm";

class Manager extends Component {
  static getInitialProps = async ({ query }) => {
    return { data: query };
  };

  render() {
    const { data } = this.props;

    return (
      <Layout title="Bewerbung">
        <Protected>
          <ApplicationForm job_id={data.job_id} emp_id={data.emp_id} name={data.name} />
        </Protected>
      </Layout>
    );
  }
}

export default withRouter(Manager);
