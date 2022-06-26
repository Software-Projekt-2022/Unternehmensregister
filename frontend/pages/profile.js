import Layout from "../components/Layout";
import _error from "./_error";
import { Component } from "react";
import ProfileBig from "../components/ProfileBig";
import Router, { withRouter } from "next/router";
import { useRouter } from "next/router";
import Protected from "../components/Protected";
import { URL } from "./api/calls";

class Profile extends Component {
  static getInitialProps = async ({ query }) => {
    const profileQuery = await fetch(
      URL+"/api/profile/getProfileByID/" + query.id
    );
    const userQuery = await fetch(
      URL+"/api/user/getUserByID/" + query.id
    );
    const profileData = await profileQuery.json();
    const userData = await userQuery.json();
    console.log(userData)
    if (userData.user.company_id == 0) {
      console.log("KEINE FIRMA")
      userData.user.status = "Unbekanntes Arbeitsverhätnis";
      userData.company = {name: ""}
    }
    return { profile: profileData, user: userData };
  };

  render() {
    const { profile, user } = this.props;

    return (
      <Layout title="Profile">
        <Protected>
          <ProfileBig user={user} profile={profile} />
        </Protected>
      </Layout>
    );
  }
}

export default withRouter(Profile);
