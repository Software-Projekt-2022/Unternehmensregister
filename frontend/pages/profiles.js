import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";
import { Component } from "react";
import { useSession } from "next-auth/react";
import Protected from "../components/Protected";
import URL from "../pages/api/calls";

class Profiles extends Component {
  static getInitialProps = async () => {
    const query = await fetch("http://localhost:8085/api/user/getAll");
    const queryData = await query.json();
    console.log(queryData);
    return { userArray: queryData };
  };

  render() {
    const { userArray } = this.props;

    return (
      <Layout title="Profiles">
        <Protected>
          {userArray.map(({ id, age, forename, surname, status }) => (
            <div key={id}>
              <ProfileCard
                id={id}
                age={age}
                forename={forename}
                surname={surname}
                status={status}
              />
            </div>
          ))}
        </Protected>
      </Layout>
    );
  }
}

export default Profiles;
