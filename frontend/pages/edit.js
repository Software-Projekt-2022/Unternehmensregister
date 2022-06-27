import { Component } from "react";
import Protected from "../components/Protected";
import Layout from "../components/Layout";
import EditProfile from "../components/EditProfile";
import { URL } from "./api/calls";
import { withRouter } from "next/router";

class Edit extends Component {
    static getInitialProps = async ({ query }) => {
        const userQuery = await fetch(URL + "/api/user/getUserByID/" + query.id);
        const userData = await userQuery.json();
        const profileQuery = await fetch(URL + "/api/profile/getProfileByID/" + query.id);
        const profileData = await profileQuery.json();
        return { udata: userData, pdata: profileData };
    }

    render() {
        const { udata, pdata } = this.props;
        return (
            <Layout title="Einstellungen">
                <Protected>
                    <EditProfile udata={udata} pdata={pdata} />
                </Protected>
            </Layout>
        )
    }
}


export default withRouter(Edit);