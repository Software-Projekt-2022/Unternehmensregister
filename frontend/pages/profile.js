import Layout from "../components/Layout";
import _error from "./_error";
import { Component } from "react";
import ProfileBig from "../components/ProfileBig";
import Router, { withRouter } from "next/router";
import { useRouter } from "next/router";
import Protected from "../components/Protected";

class Profile extends Component {
  static getInitialProps = async ({ query }) => {
    const profileQuery = await fetch(
      "http://185.194.217.213:8085/api/profile/getProfileByID/" + query.id
    );
    const userQuery = await fetch(
      "http://185.194.217.213:8085/api/user/getUserByID/" + query.id
    );
    const companyQuery = await fetch(
      "http://185.194.217.213:8085/api/company/getByID/" + query.id
    );
    const profileData = await profileQuery.json();
    const userData = await userQuery.json();
    const companyData = await companyQuery.json();
    console.log(companyData);
    return { profile: profileData, user: userData, company: companyData };
  };

  render() {
    const { profile, user, company } = this.props;

    return (
      <Layout title="Profile">
        <Protected>
          <ProfileBig user={user} profile={profile} company={company} />
        </Protected>
      </Layout>
    );
  }
}

export default withRouter(Profile);
