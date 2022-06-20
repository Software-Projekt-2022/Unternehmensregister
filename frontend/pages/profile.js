import Layout from "../components/Layout";
import _error from "./_error";
import { Component } from "react";
import Router, { withRouter } from "next/router";
import { useRouter } from "next/router";

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
        <div className="card-body">
          <div className="d-flex flex-column align-items-center text-center">
            <img
              src="https://avatars.githubusercontent.com/u/23001099?v=4"
              alt="Profile Image"
              className="rounded-circle"
              width="150"
            />
            <div className="mt-3">
              <h4>
                {user.forename} {user.surname}
              </h4>
              <p className="text-secondary mb-1">
                {user.status} at {company.name}
              </p>
              <p className="text-muted font-size-sm" id="p_location">
                Age {user.age}
              </p>
              <button className="btn btn-primary">Add to friends</button>
              <button className="btn btn-outline-primary">Chat</button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Profile);
