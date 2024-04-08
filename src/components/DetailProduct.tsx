import React, { useState } from "react";
import ProductsDetailShare from "./ProductsDetailShare";
import UseAttributes from "../hook/Attributes";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useProductsQuery from "../hook/UseProductsQuery";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLocalStorage } from "../hook/UseStorage";

const DetailProduct = ({ products }) => {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(
    products.value.price -
      (products.value.price * products.value.discount) / 100
  );
  const [count, setCount] = useState(1);
  const [selectedSizeId, setSelectedSizeId] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [colorsAndPrices, setColorsAndPrices] = useState([]);
  const [showColor, setShowColor] = useState(false);

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    if (count < 15) {
      setCount(count + 1);
    }
  };

  const idColor =
    products.value && products.value.attributes
      ? products.value.attributes._id
      : null;
  const { data, isLoading } = UseAttributes(idColor);
  const handleSizeClick = (sizeId) => {
    setSelectedSizeId(sizeId);
    setShowColor(true);
    const productsWithSize = data.values.filter((product) => {
      return product.size.some((size) => size._id === sizeId);
    });
    const colorsAndPrices = productsWithSize.map((product) => {
      return {
        color: product.name,
        price: product.price,
      };
    });
    setColorsAndPrices(colorsAndPrices);
    // Cập nhật size trong productAddCart
    setProductAddCart({
      ...productAddCart,
      size: sizeId,
    });
};
const handleColorClick = (color, price) => {
    setSelectedColor(color);
    setSelectedPrice(price);
    // Cập nhật color và price trong productAddCart
    setProductAddCart({
      ...productAddCart,
      color: color,
      price: price,
    });
};

  const {
    handleSubmit,
  } = useForm();
  const [error, setError] = useState(false);
  const { id } = useParams();
  const { data: product, isLoading: Loading} = useProductsQuery(id);
    const nameProduct = product?.name;
    const imgProduct = product?.img;
  const [productAddCart, setProductAddCart] = useState({
    img: "",
    name: "",
    size: null,
    color: null,
    price: null,
    quantity: count,
  });
  const handleAddToCart = (e) => {
    e.preventDefault();
    // Kiểm tra nếu size hoặc màu sắc chưa được chọn
    if (!selectedSizeId || !selectedColor) {
      setError(true); // Đặt state lỗi thành true
      toast.error("Vui lòng chọn size và color"); // Hiển thị thông báo lỗi
      return;
    }
    // Nếu đã chọn size và màu sắc, cập nhật thông tin sản phẩm để thêm vào giỏ hàng
    const updatedProductAddCart = {
      ...productAddCart,
      img: imgProduct,
      name: nameProduct,
      size: selectedSizeId,
      color: selectedColor,
      price: selectedPrice,
      quantity: count,
    };
    // Gọi hàm onSubmit với dữ liệu sản phẩm đã được cập nhật
    onSubmit(updatedProductAddCart);
  };
  const [user] = useLocalStorage("user", {});
  const userId = user?.user?._id;

  const onSubmit = async(data) => {
    try {
      console.log(data);
      await axios.post(`http://localhost:8080/api/v1/carts/add-to-cart`, {
        userId,
        productId: id,
         quantity: count,
         color: selectedColor,
         price: selectedPrice
        
        });
      toast.success("Sản phẩm đã được thêm vào giỏ hàng!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng!");
    }
   
  };
  if(Loading) return <div>Loading...</div>;
  
  if (isLoading) return <div>Loading...</div>;
  const uniqueSizes =  data?.values?.filter((item, index, self) => {
    return index === self.findIndex((t) => (
      t.size && item.size && t.size[0]._id === item.size[0]._id
    ));
  });
  return (
    <>
      <div
        className="product-detail__conten"
        data-aos="fade-up"
        data-aos-duration={1400}
      >
        <div className="product-detail__name">{products.value.name}</div>
        <div className="product-detail__price">
          {selectedPrice ? (
            <>
              <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(selectedPrice)}</span>
            </>
          ) : (
            formattedPrice
          )}
        </div>
        <div className="product-detail__review">
          <img src="../assets/product_start.svg" alt="" />
          <div className="product-detail__review_start">5 Customer Review</div>
        </div>
        <div
          style={{ lineHeight: "24px" }}
          className="product-detail__Textconten"
          data-aos="fade-up"
          data-aos-duration={1400}
        >
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </div>
        <div className="product-detail__sizeFull">
          <div
            className="product-detail__size"
            data-aos="fade-up"
            data-aos-duration={1400}
          >
            Size
          </div>
          <div
            className="product-detail__fullsize"
            data-aos="fade-up"
            data-aos-duration={1400}
          >
            {Array.isArray(uniqueSizes) &&
              uniqueSizes.map((item, index) => (
                <button
                  style={{
                    backgroundColor:
                      selectedSizeId === item.size[0]._id ? "#B88E2F" : "",
                    color: selectedSizeId === item.size[0]._id ? "white" : "",
                  }}
                  key={index}
                  onClick={() => handleSizeClick(item.size[0]._id)}
                >
                  {item.size[0].name}
                </button>
              ))}
          </div>
        </div>
        {showColor && (
          <div
            className="product-detail__sizeFull mt-2"
            data-aos="fade-up"
            data-aos-duration={1400}
          >
            <div className="product-detail__size mb-2">Color</div>
            <div className="product-detail__color">
              {colorsAndPrices.map((colorAndPrice, index) => (
                <button
                  key={index}
                  style={{
                    backgroundColor: colorAndPrice.color,
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    margin: "0 5px",
                    border:
                      selectedColor === colorAndPrice.color
                        ? "3px solid gray"
                        : "none",
                  }}
                  className={`product-detail__color-${colorAndPrice.color.toLowerCase()}`}
                  onClick={() =>
                    handleColorClick(colorAndPrice.color, colorAndPrice.price)
                  }
                ></button>
              ))}
            </div>
          </div>
        )}
        <div className="product-detail__addCart">
          <form onSubmit={handleSubmit(onSubmit)}
            className="product-detail__addCart-form"
            data-aos="fade-up"
            data-aos-duration={1400}
          >
            <div
              style={{ display: "flex" }}
              className="product-detail__addCart-qunanlity"
            >
              <div
                className="reduce"
                style={{ fontSize: "20px", cursor: "pointer" }}
                onClick={decreaseCount}
              >
                -
              </div>
              <span>{count}</span>
              <div
                className="increase"
                style={{ fontSize: "20px", cursor: "pointer" }}
                onClick={increaseCount}
              >
                +
              </div>
            </div>
            <div className="product-detail__addCart-product">
              <button type="submit" onClick={handleAddToCart}>Add To Cart</button>
            </div>
            <div className="product-detail__addCart-Compare">
              <button>+ Compare</button>
            </div>
          </form>
        </div>
        <ProductsDetailShare />
      </div>
    </>
  );
};

export default DetailProduct;
