import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";
import { Component } from "react";

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
          {profileArray.map(({ id, age, forename, surname, status }) => (
            <div>
                <ProfileCard key={id} id={id} age={age} forename={forename} surname={surname} status={status} />
        </div>
          ))}
      </Layout>
    );
  }
}

export default Profiles;
