import React from "react";
const ProductDetailimage = ({ products }) => {
  return (
    <>
      <div className="product-detail__img">
        <div
          className="product-detail__imgcon"
          data-aos="fade-up"
          data-aos-duration={1400}
        >
          {products.value.imgCategory &&
            products.value.imgCategory.map((img, index) => (
              <img key={index} src={img} alt="" />
            ))}
        </div>
        <div
          className="product-detail__imgAvt"
          data-aos="fade-up"
          data-aos-duration={1400}
        >
          <img src={products.value.img} alt="" />
        </div>
      </div>
    </>
  );
};

export default ProductDetailimage;
