import Layout from "../components/Layout";
import _error from "./_error";
import { Component } from "react";
import Router, { withRouter } from "next/router";
import Protected from "../components/Protected";

class Profile extends Component {
  static getInitialProps = async ({ query }) => {
    const source = await fetch(
      "http://185.194.217.213:8085/api/applications/getUserApplications/" +
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

        </Protected>
      </Layout>
    );
  }
}

export default withRouter(Profile);
