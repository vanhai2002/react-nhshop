import { useMutation, useQueryClient } from "@tanstack/react-query";
import useProductsQuery from "../hook/UseProductsQuery";
import { useLocalStorage } from "../hook/UseStorage";
import axios from "axios";

const HomeProducts = () => {
  const queryClient = useQueryClient();
  const [user] = useLocalStorage("user", {});
  const userId = user?.user?._id;
  const { mutate } = useMutation({
    mutationFn: async ({ productId, quantity }: {productId: string, quantity: number}) => {
      const { data } = await axios.post(`http://localhost:8080/api/v1/carts/add-to-cart`, {
        userId,
        productId,
        quantity,
      });
      return data;
    },
    onSuccess: () =>{
      queryClient.invalidateQueries({
        queryKey: ["cart", userId],
      });
    }
  });
  const { data, isLoading } = useProductsQuery();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      {data?.map((iteam, index) => {
        if (iteam.featured === true) {
          return (
            <div
              key={index}
              className="product-item"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <div className="product-image">
                <img src={iteam.img} alt="" className="product__thumbnail" />
                <span className="product-sale">{iteam.discount}%</span>
              </div>
              <div className="product-info">
                <h3 className="product__name">
                  {/* <a  className="product__link">{iteam.category}</a> */}
                </h3>
                <a className="product__category">{iteam.name}</a>
                <div className="product-price">
                  <span className="product-price__new">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(
                      iteam.price - (iteam.price * iteam.discount) / 100
                    )}
                  </span>
                  <del className="product-price__old">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(iteam.price)}
                  </del>
                </div>
              </div>
              <div className="product-actions">
                <button className="btn product-action__quickview">
                  <a className="text-primary" href={`/products/${iteam._id}`}>
                    {" "}
                    Quick View
                  </a>
                </button>
                <button onClick={() => mutate({productId: iteam._id, quantity: 1})} className="btn product-action__addtocart">
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
        }
      })}
    </>
  );
};

export default HomeProducts;
