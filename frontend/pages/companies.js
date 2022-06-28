import Layout from "../components/Layout";
import CompanyListing from "../components/CompanyListing";
import { Component } from "react";
import { URL } from "./api/calls";

class Companies extends Component {
  static getInitialProps = async () => {
    const query = await fetch(URL+"/api/company/getAll");
    const queryData = await query.json();
    return { CompanyArray: queryData };
  };

  render() {
    const { CompanyArray } = this.props;

    return (
      <Layout title="Unternehmen">
        <div className="caption v-middle text-center">
          <section className="py-4 py-xl-5">
            <div className="container h-100">
              {CompanyArray.map(({ id, name, abbrevation }) => (
                <div key={id}>
                  <CompanyListing
                    id={id}
                    name={name}
                    abbrevation={abbrevation}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Companies;
