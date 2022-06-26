import Layout from "../components/Layout";

const _error = () => {
  return (
    <Layout title="Error">
        <div className="d-flex align-items-center justify-content-center vh-100 bg-danger">
          <h1 className="display-1 fw-bold text-white">404</h1>
        </div>
    </Layout>
  );
};

export default _error;
