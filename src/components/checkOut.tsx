import React, { useId } from "react";
import Services from "./Services";
import { useLocalStorage } from "../hook/UseStorage";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const CheckOut = () => {
  // const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: async (order: {
      userId: string;
      items: [];
      totalPrice: number;
      customerInfo: object;
    }) => {
      const { data } = await axios.post(
        `http://localhost:8080/api/v1/orders`,
        order
      );
      return data;
    },
  });
  const onSubmit = async (fromData: object) => {
    mutate({
      userId,
      items: data?.products,
      totalPrice: subTotal,
      customerInfo: fromData,
    });
    toast.success("Bạn đã đặt hàng thành công !");
    setTimeout(() => {
      navigate("/")
    },3000)
  };
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
  const subTotal = data?.products?.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  if (!data || data.products.length === 0) {
    return (
      <div className="h-[200px] text-[20px] bg-slate-100 text-danger flex items-center justify-center font-medium text-center">
        Không có sản phẩm nào trong giỏ hàng
      </div>
    );
  }
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      <div>
        <section className="container">
          <div className="bill-full">
            <div
              className="bill-full__detail"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              {/* Form bill */}

              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-[30px] font-semibold">Billing details</h1>
                <div className="bill-full__detail-fullname">
                  <div className="bill-full__detail-Firstname">
                    <h3>First Name</h3>
                    <input type="text" />
                  </div>
                  <div className="bill-full__detail-Lastname">
                    <h3>Last Name</h3>
                    <input type="text" />
                  </div>
                </div>
                <div className="bill-full__detail-CompanyName">
                  <h3>Company Name (Optional)</h3>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                  />
                </div>
                {errors.name && errors.name.type === "required" && (
                  <div
                    id="emailHelp"
                    className="text-[20px] form-text text-danger"
                  >
                    Không được để trống
                  </div>
                )}
                <div className="bill-full__detail-CompanyName">
                  <h3>Country / Region</h3>
                  <select style={{ border: "1px solid black" }} name="" id="">
                    <option value="Sri Lanka">Sri Lanka</option>
                  </select>
                </div>
                <div className="bill-full__detail-CompanyName">
                  <h3>Street address</h3>
                  <input type="text" />
                </div>
                <div className="bill-full__detail-CompanyName">
                  <h3>Town / City</h3>
                  <input type="text" />
                </div>
                <div className="bill-full__detail-CompanyName">
                  <h3>Province</h3>
                  <select style={{ border: "1px solid black" }} name="" id="">
                    <option value="Sri Lanka">Western Province</option>
                  </select>
                </div>
                <div className="bill-full__detail-CompanyName">
                  <h3>ZIP code</h3>
                  <input type="text" />
                </div>
                <div className="bill-full__detail-CompanyName">
                  <h3>Phone</h3>
                  <input
                    {...register("phone", {
                      required: true,
                      validate: (value) => !isNaN(value),
                    })}
                    type="text"
                  />
                </div>
                {errors.phone && errors.phone.type === "required" && (
                  <div id="emailHelp" className="form-text text-danger">
                    Không được để trống
                  </div>
                )}
                {errors.phone && errors.phone.type === "validate" && (
                  <div
                    id="emailHelp"
                    className=" text-[20px] form-text text-danger"
                  >
                    Phải là số
                  </div>
                )}
                <div className="bill-full__detail-CompanyName">
                  <h3>Email address</h3>
                  <input
                    {...register("email", { required: true })}
                    type="text"
                  />
                </div>
                {errors.email && errors.email.type === "required" && (
                  <div
                    id="emailHelp"
                    className="text-[20px] form-text text-danger"
                  >
                    Không được để trống
                  </div>
                )}
                <div className="bill-full__detail-CompanyName nam">
                  <select style={{ border: "1px solid black" }} name="" id="">
                    <option value="Sri Lanka">Additional information</option>
                  </select>
                </div>
                <Button type="submit" className="mb-10">Hoàn thành đơn hàng</Button>
              </form>
              {/* Form bill */}
            </div>
            <div
              className="bill-full__total"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <div className="bill-full-product">
                <div className="bill-full__total-name">
                  <h3>Product</h3>
                  <span>Subtotal</span>
                </div>
                {data?.products?.map((item, index) => {
                  return (
                    <div className="bill-full__total-name">
                      <div className="bill-full__total-name__product">
                        {item.name} <span>x{item.quantity}</span>
                      </div>
                      <div className="bill-full__total-price__product">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.price * item.quantity)}
                      </div>
                    </div>
                  );
                })}
                {/* Name san pham and price */}
                <div className="bill-full__total-name">
                  <div className="bill-full__total-product">Subtotal</div>
                  <div className="bill-full__total-price__product">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(subTotal)}
                  </div>
                </div>
                <div className="bill-full__total-name">
                  <div className="bill-full__total-text">Total</div>
                  <div className="bill-full__total-bill">
                    {" "}
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(subTotal)}
                  </div>
                </div>
              </div>

              <div className="bill-full__radio">
                <input type="radio" />
                <span>Direct Bank Transfer</span>
              </div>
              <div className="bill-full__textconten">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </div>
              <div className="bill-full__check">
                <input type="radio" />
                <span>Direct Bank Transfer</span>
              </div>
              <div className="bill-full__check">
                <input type="radio" />
                <span>Cash On Delivery</span>
              </div>
              <div className="bill-full_ship">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <span> privacy policy.</span>
              </div>
              <div className="bill-full__btn">
                <button style={{ border: "1px solid black" }}>
                  Place order
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* End. Bill */}
        {/*End .services*/}
        <Services />
      </div>
    </div>
  );
};

export default CheckOut;
