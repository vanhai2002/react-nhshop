import React from "react";
import Services from "./Services";
import ShopSreach from "./ShopSreach";
import { useParams } from "react-router-dom";
import UseCategory from "../hook/UseCategory";

const ShopCategory = () => {
  const { id } = useParams();
  const { data, isLoading } = UseCategory(id);
  if (isLoading) return <div>Loading...</div>;
  if(data.product.length < 0) return <div>Không có sản phẩm nào</div>
  return (
    <>
      <ShopSreach />
      <div className="pt-8">
        <section className="news">
          <div className="container">
            <div className="section-body">
              <div className="product-list">
                {data.product?.map((item, index) => {
                  return (
                    <div key={index}
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
                        <span className="product-sale">30%</span>
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
                        <button className="btn product-action__quickview">
                          <a
                            className="text-primary"
                            href={`/products/${item._id}`}
                          >
                            Quick View
                          </a>
                        </button>
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
    </>
  );
};

export default ShopCategory;
