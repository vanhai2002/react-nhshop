import React, { useContext, useEffect } from "react";
import Productshowmore from "./Productshowmore";
import ProductDetailContent from "./ProductDetailContent";

import ProductDetailMenu from "./ProductDetailMenu";
import ProductDetailimage from "./ProductDetailimage";
import DetailProduct from "./DetailProduct";
import { ProductsContext } from "../context/ProductsProvider";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductsDetail = () => {
  const { products, dispatch } = useContext(ProductsContext);
  const { id } = useParams();
     useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/products/${id}`
        );
        dispatch({ type: "SET_PRODUCTS_BYID", payload: data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id, dispatch]);
  return (
    <div>
      <div>
        {/*End .banner*/}
       <ProductDetailMenu/>
        {/* And.Sreach  */}
        <div className="container">
          <div className="product-detail">
          <ProductDetailimage products={products}/>
           <DetailProduct products={products}/>
          </div>
          {/* END . Products Detail */}
        </div>
        <section className="duongke" />
        {/* ======== Description============= */}
       <ProductDetailContent products={products} />
        {/* ======== End. Description============= */}
     <Productshowmore products={products} />
      </div>
    </div>
  );
};

export default ProductsDetail;
