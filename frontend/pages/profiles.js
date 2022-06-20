import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";
import { Component } from "react";
import { useSession } from "next-auth/react";
import Protected from "../components/Protected";

class Profiles extends Component {
  static getInitialProps = async () => {
    const query = await fetch("http://185.194.217.213:8085/api/user/getAll");
    const queryData = await query.json();
    console.log(queryData);
    return { profileArray: queryData };
  };

  render() {
    const { profileArray } = this.props;

    return (
      <Layout title="Profiles">
        <Protected>
          {profileArray.map(({ id, age, forename, surname, status }) => (
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
