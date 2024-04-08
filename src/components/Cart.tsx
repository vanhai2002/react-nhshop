import React from "react";
import { useLocalStorage } from "../hook/UseStorage";
import Services from "./Services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Cart = () => {
  const queryClient = useQueryClient();

  const [user] = useLocalStorage("user", {});
  const userId = user?.user?._id;
  console.log(userId);
  const { data, isLoading, error } = useQuery({
    queryKey: ["cart", userId],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:8080/api/v1/carts/${userId}`);
      return data;
    },
  });
  const incrementQuantity = useMutation({
     mutationFn: async(productId) => {
      const { data } = await axios.post(`http://localhost:8080/api/v1/carts/increase`,{
        userId, productId
      });
      return data;
     },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["cart", userId],
        });
      }
  });
  const decrementQuantity = useMutation({
    mutationFn: async(productId) => {
     const { data } = await axios.post(`http://localhost:8080/api/v1/carts/decrease`,{
       userId, productId
     });
     return data;
    },
     onSuccess: () => {
       queryClient.invalidateQueries({
         queryKey: ["cart", userId],
       });
     }
 });
 const RemoverementQuantity = useMutation({
  mutationFn: async(productId) => {
    const comfirm = window.confirm("bạn muốn xóa sản phẩm khỏi giỏ hàng không?")
    if(comfirm){
     console.log("íd",productId);
    const { data } = await axios.post(`http://localhost:8080/api/v1/carts/remove`,{
     userId, productId
   });
   toast.success("Xóa sản phẩm thành công")
   return data;
   }
  },
   onSuccess: () => {
     queryClient.invalidateQueries({
       queryKey: ["cart", userId],
     });
   }
});
data?.products?.map((item) => {
  console.log("a",item);
})
  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error...</div>
  if (!data || data.products.length === 0) {
    return <div className="h-[200px] text-[20px] bg-slate-100 text-danger flex items-center justify-center font-medium text-center">Không có sản phẩm nào trong giỏ hàng</div>;
  }
  const subTotal = data?.products?.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div>
      <div>
        {/* Order  */}
        <section className="container">
          <div className="checkOut">
            <div className="checkOut-product__full">
              <div
                className="checkOut-product"
                data-aos="fade-up"
                data-aos-duration={1400}
              >
                <div className="checkOut-product__stt" />
                <div className="checkOut-product__name text-left w-[240px]">Product</div>
                <div className="checkOut-product__Price text-left">Price</div>
                <div className="checkOut-product__Quantity">Quantity</div>
                <div className="checkOut-product__Subtotal">Subtotal</div>
              </div>
              {data?.products?.map((item, index) => {
                return (
                  <div
                  key={index}
                  className="checkOut-product__order"
                  data-aos="fade-up"
                  data-aos-duration={1400}
                >
                  <div className="checkOut-product__order-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="checkOut-product__order-name w-[200px]">{item.name}</div>
                  <div className="checkOut-product__order-price">{new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.price)}</div>
                  <div className="checkOut-product__order-quanlyti ml-2 flex gap-3 items-center">
                 <button onClick={() => decrementQuantity.mutate(item.productId)}>-</button>
                  <div  style={{border: "1px solid #9F9F9F", borderRadius: "4px"}} className="justify-center flex items-center w-[32px] h-[32px]">{item.quantity}</div>
                  <button  onClick={() => incrementQuantity.mutate(item.productId)}>+</button>
                  </div>
                  <div className="checkOut-product__order-Subtotal">
                  {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.price * item.quantity)}
                  </div>
                  <div className="checkOut-product__order-delete">
                    <img onClick={() => RemoverementQuantity.mutate(item._id)} src="./assets/delete.svg" alt="" />
                  </div>
                </div>
                )
              })}
        
            </div>
            <form data-aos="fade-up" data-aos-duration={1400}>
              <div
                className="checkOut-pay p-[60px]"
                data-aos="fade-up"
                data-aos-duration={1400}
              >
                
                <div
                  className="checkOut-pay__title"
                  data-aos="fade-up"
                  data-aos-duration={1400}
                >
                  <h3>Cart Totals</h3>
                </div>
                <div className="checkOut-pay__price pt-[20px]">
                  <div className="checkOut-pay__price-Subtotal mt-[20px]">
                    <h3>Subtotal</h3>
                    <span> {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(subTotal)}</span>
                  </div>
                  <div className="checkOut-pay__price-Total mt-[20px]">
                    <h3>Total</h3>
                    <span> {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(subTotal)}</span>
                  </div>
                </div>
                <div className="checkOut-pay__btnCheckout">
                  <button type="submit" style={{ border: "1px solid black"}} className="w-[222px] h-[60px]"><Link to={`/checkOut`}>CheckOut</Link></button>
                </div>
              </div>
            </form>
          </div>
        </section>
        {/* End. order */}
        {/*End .services*/}
        {/*End .services*/}
       <Services />
      </div>
    </div>
  );
};

export default Cart;
