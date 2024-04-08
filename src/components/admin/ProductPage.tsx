import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useProductsQuery from "../../hook/UseProductsQuery";
import useProductMutation from "../../hook/UseProductMutation";
import UseTags from "../../hook/UseTag";

const ProductPage = () => {
  const { data, isLoading } = useProductsQuery();
  const { mutate } = useProductMutation({
    action: "DELETE",
  });
  const { data: Tags, isLoading: isLoadingTags } = UseTags();
  if (isLoadingTags) return <div>Loading...</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="bg-white border  border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2">
        <table style={{ lineHeight: "65px" }} className="table table-sm">
          <thead>
            <tr className="" style={{ lineHeight: "40px" }}>
              <th scope="col" style={{ width: "50px" }}>
                <span className="text-sm font-medium text-[18px] ">Stt</span>
              </th>
              <th scope="col">
                <span className="text-sm font-semibold text-[18px]">Ảnh</span>
              </th>
              <th scope="col">
                <span className="text-sm font-semibold text-[18px]">
                  Tên sản phẩm
                </span>
              </th>
              <th scope="col">
                <span className="text-sm font-semibold text-[18px]">Giá</span>
              </th>
              <th scope="col">
                <span className="text-sm font-semibold text-[18px]">Tags</span>
              </th>
              <th scope="col">
                <span className="text-sm font-semibold text-[18px]">Sale</span>
              </th>
              <th scope="col">
                <span className="text-sm font-semibold text-[18px]">
                  Chức năng
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr className="align-middle bg-[#f3f4f6]" key={index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={`${item.img}`}
                    alt=""
                  />
                </td>
                <td style={{ width: "260px", fontSize: "20px" }}>
                  <h4>{item.name}</h4>
                </td>
                <td>
                  <span className="product-price__new">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.price - (item.price * item.discount) / 100)}
                  </span>
                  <del
                    className="product-price__old"
                    style={{ marginLeft: "15px", color: "gray" }}
                  >
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.price)}
                  </del>
                </td>
                <td>
                  <span>{item.tags.map((tag) => tag.name).join(", ")}</span>
                </td>
                <td>{item.discount}%</td>
                <td
                  style={{
                    width: "172px",
                  }}
                >
                  <div className="flex">
                    <Link
                      style={{ marginRight: "10px" }}
                      to={`/admin/product/${item._id}/edit`}
                      className="btn btn-primary"
                    >
                      Cập nhật
                    </Link>
                    <button
                      onClick={() => mutate(item)}
                      className="btn btn-danger"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
                <td><Link to={`/admin/attributes/${item?.attributes}`} className="btn btn-primary">Color</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </>
  );
};

export default ProductPage;
