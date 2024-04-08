import React from "react";

const ProductDetailContent = ({ products }) => {
  return (
    <>
      <section className="container">
        <div className="Description">
          <div className="Description__conten">
            <ul className="Description__conten-menu">
              <li>
                <a
                  data-aos="fade-up"
                  data-aos-duration={1400}
                  className="Description__conten-menu__link"
                  href="#"
                >
                  Description
                </a>
              </li>
              <li>
                <a
                  data-aos="fade-up"
                  data-aos-duration={1400}
                  className="Description__conten-menu__linkk"
                >
                  Additional Information
                </a>
              </li>
              <li>
                <a
                  data-aos="fade-up"
                  data-aos-duration={1400}
                  className="Description__conten-menu__linkk"
                >
                  Reviews [5]
                </a>
              </li>
            </ul>
            <div
              className="Description__conten-Compact"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </div>
            <div
              className="Description__conten-CompactDetail"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              {products.value.description}
            </div>
          </div>
          <div className="Description__img">
            <div
              className="Description__img-deatail"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <img style={{ width: "100%" }} src={products.value.img} alt="" />
            </div>
            <div
              className="Description__img-deatail22"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <img style={{ width: "100%" }} src={products.value.img} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailContent;
