import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UseCategory from "../../hook/UseCategory";
import UseCategoryMutation from "../../hook/UseCategoryMutation";

const AdminCategory = () => {
  const { mutate} = UseCategoryMutation({
    action: "DELETE",
  })
  const { data, isLoading } = UseCategory();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="bg-white border  border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2">
        <table style={{ lineHeight: "50px" }} className="table table-sm">
          <thead>
            <tr className="" style={{ lineHeight: "40px" }}>
              <th scope="col" style={{ width: "50px" }}>
                <span className="text-sm font-medium text-[18px] ">Stt</span>
              </th>
              <th scope="col">
                <span className="text-sm font-semibold text-[18px]">
                  Tên danh mục
                </span>
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
                <td className="w-[150px]">{index + 1}</td>

                <td style={{ width: "300px", fontSize: "20px" }}>
                  <h4>{item.name}</h4>
                </td>
                <td
                  style={{
                    width: "172px",
                  }}
                >
                  <div className="flex">
                    <Link to="/admin/category/add" className="btn btn-primary" style={{ marginRight: "10px" }} >Thêm danh mục</Link>
                    <Link
                      style={{ marginRight: "10px" }}
                      to={`/admin/category/${item._id}/edit`}
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
              </tr>
            ))}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </>
  );
};

export default AdminCategory;
