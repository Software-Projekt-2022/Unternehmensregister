import Layout from "../components/Layout";
import JobListing from "../components/JobListing";
import { Component } from "react";
import { URL } from "./api/calls";

class Jobs extends Component {
  static getInitialProps = async () => {
    const query = await fetch(URL+"/api/job/getAll");
    const queryData = await query.json();
    return { JobArray: queryData };
  };

  render() {
    const { JobArray } = this.props;

    return (
      <Layout title="Jobs">
        <div className="caption v-middle text-center">
          <section className="py-4 py-xl-5">
            <div className="container h-100">
              {JobArray.map(({ id, name, wageLower, wageUpper, employer }) => (
                <div key={id}>
                  <JobListing
                    id={id}
                    name={name}
                    wageLower={wageLower}
                    wageUpper={wageUpper}
                    employer={employer}
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

export default Jobs;
