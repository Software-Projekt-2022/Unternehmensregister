import Image from "next/image";

const Photogallery = () => {
  return (
    <section className="photo-gallery py-4 py-xl-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2>Featured companies</h2>
          </div>
        </div>
        <div
          className="row gx-2 gy-2 row-cols-1 row-cols-md-2 row-cols-xl-3 photos"
          data-bss-baguettebox=""
        >
          <div className="col item">
            <a href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
              <img
                alt="img"
                className="img-fluid"
                src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
              />
            </a>
          </div>
          <div className="col item">
            <a href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
              <img
                alt="img"
                className="img-fluid"
                src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
              />
            </a>
          </div>
          <div className="col item">
            <a href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
              <img
                alt="img"
                className="img-fluid"
                src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
              />
            </a>
          </div>
          <div className="col item">
            <a href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
              <img
                alt="img"
                className="img-fluid"
                src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
              />
            </a>
          </div>
          <div className="col item">
            <a href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
              <img
                alt="img"
                className="img-fluid"
                src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
              />
            </a>
          </div>
          <div className="col item">
            <a href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
              <img
                alt="img"
                className="img-fluid"
                src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photogallery;
