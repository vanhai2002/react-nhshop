import React from 'react';
import useProductsQuery from '../hook/UseProductsQuery';
import { useParams } from 'react-router-dom';
import UseTags from '../hook/UseTag';

const ProductsDetailShare = () => {
  const { id } = useParams();
  const { data, isLoading } = useProductsQuery(id);
  const { data: Tags, isLoading: Loading } = UseTags();
  
  if(Loading || isLoading) return <div>Loading...</div>;
  
  return (
    <>
      <div
        className="product-detail__Share"
      >
        <div className="product-detail__Share-sku" data-aos="fade-up"
        data-aos-duration={1400}>
          <span className="product-detail__Share-title">SKU</span>
          <span>: SS001</span>
        </div>
        <div className="product-detail__Share-Category"  data-aos="fade-up"
        data-aos-duration={1400}>
          <span className="product-detail__Share-title">Category</span>
          <span>: Sofas</span>
        </div>
        <div className="product-detail__Share-Tags"  data-aos="fade-up"
        data-aos-duration={1400}>
          <span className="product-detail__Share-title">Tags</span>
          <span>
            {Tags.map((tag) => (
              <span key={tag._id}>{tag.name}, </span>
            ))}
          </span>
        </div>
        <div className="product-detail__Share-Share"  data-aos="fade-up"
        data-aos-duration={1400}>
          <span className="product-detail__Share-title">Share</span>
          <span className="product-detail__Share-Share__icon">
            : <img src="../assets/fb.svg" alt="" />
            <img src="../assets/inta.svg" alt="" />
            <img src="../assets/tiwter.svg" alt="" />
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductsDetailShare;
