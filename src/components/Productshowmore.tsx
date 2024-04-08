import UseCategory from "../hook/UseCategory";

const Productshowmore = ({ products }) => {
  console.log(products.value.category);
  const { data, isLoading } = UseCategory(products.value.category);
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      {/* +++++++++++++Product+++++++++++++++ */}
      <section className="news">
        <div
          className="title__products"
          data-aos="fade-up"
          data-aos-duration={1400}
        >
          <h1>Related Products</h1>
        </div>
        <div className="container">
          <div className="section-body">
            <div className="product-list">
              {data.product?.map((iteam, index) => {
                return (
                  <div
                    key={index}
                    className="product-item"
                    data-aos="fade-up"
                    data-aos-duration={1400}
                  >
                    <div className="product-image">
                      <img
                        src={iteam.img}
                        alt=""
                        className="product__thumbnail"
                      />
                      <span className="product-sale">30%</span>
                    </div>
                    <div className="product-info">
                      <h3 className="product__name">
                      </h3>
                      <a className="product__category">{iteam.name}</a>
                      <div className="product-price">
                        <span className="product-price__new">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(iteam.price)}
                        </span>
                        <span className="product-price__old">$300</span>
                      </div>
                    </div>
                    <div className="product-actions">
                      <button className="btn product-action__quickview">
                        <a href={`/products/${iteam._id}`}> Quick View</a>
                      </button>
                      <button className="btn product-action__addtocart">
                        Add To Cart
                      </button>
                      <div className="product-actions-more">
                        <span className="product-action__share">Share</span>
                        <span className="product-action__compare">Compare</span>
                        <span className="product-action__like">Like</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="btn_ShowMore"
            data-aos="fade-up"
            data-aos-duration={1400}
          >
            <button style={{ cursor: "pointer" }}>Show More</button>
          </div>
        </div>
      </section>
      {/* =================end. product =========== */}
    </>
  );
};

export default Productshowmore;
