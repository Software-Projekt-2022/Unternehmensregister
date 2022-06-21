const Newsletter = () => {
  return (
    <div className="container">
      <div className="bg-light border rounded border-0 border-light d-flex flex-column justify-content-between align-items-center flex-lg-row p-4 p-lg-5">
        <div className="text-center text-lg-start py-3 py-lg-1">
          <h2 className="fw-bold mb-2">
            <strong>Aboniere unseren Newsletter</strong>
          </h2>
          <p className="mb-0">
            Erhalte die neusten Jobs und News in deiner Stadt per Email.
          </p>
        </div>
        <form
          className="d-flex justify-content-center flex-wrap my-2"
          method="post"
        >
          <div className="my-2">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Deine Email"
            />
          </div>
          <div className="my-2">
            <button className="btn btn-primary ms-sm-2" type="submit">
              Abonieren
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
