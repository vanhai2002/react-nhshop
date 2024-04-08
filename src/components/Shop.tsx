import React from "react";
import ShopSreach from "./ShopSreach";
import useProductsQuery from "../hook/UseProductsQuery";
import Services from "./Services";

const Shop = () => {
  const { data, isLoading } = useProductsQuery();
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <ShopSreach />
      <div className="pt-8">
        <section className="news">
          <div className="container">
            <div className="section-body">
              <div className="product-list">
                {data?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="product-item"
                      data-aos="fade-up"
                      data-aos-duration={1400}
                    >
                      <div className="product-image">
                        <img
                          src={item.img}
                          alt=""
                          className="product__thumbnail"
                        />
                        <span className="product-sale">{item.discount}%</span>
                      </div>
                      <div className="product-info">
                        <h3 className="product__name"></h3>
                        <a className="product__category">{item.name}</a>
                        <div className="product-price">
                          <span className="product-price__new">
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(
                              item.price - (item.price * item.discount) / 100
                            )}
                          </span>
                          <del className="product-price__old">
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(item.price)}
                          </del>
                        </div>
                      </div>
                      <div className="product-actions">
                        <a
                          style={{
                            borderRadius: "5px",
                          }}
                          className="text-primary w-[200px] flex items-center justify-center h-[50px] bg-white "
                          href={`/products/${item._id}`}
                        >
                          {" "}
                          Quick View
                        </a>
                        <button className="btn product-action__addtocart">
                          Add To Cart
                        </button>
                        <div className="product-actions-more">
                          <span className="product-action__share">Share</span>
                          <span className="product-action__compare">
                            Compare
                          </span>
                          <span className="product-action__like">Like</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/*End .product-item*/}
              </div>
            </div>
            <div className="page">
              <ul>
                <li>
                  <a href="">1</a>
                </li>
                <li>
                  <a href="">2</a>
                </li>
                <li>
                  <a href="">3</a>
                </li>
                <li>
                  <button>Next</button>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Services />
      </div>
    </div>
  );
};

export default Shop;
