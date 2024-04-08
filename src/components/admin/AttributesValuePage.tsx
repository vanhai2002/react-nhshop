import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UseAttributes from "../../hook/Attributes";
import UseAttributesValuesMutation from "../../hook/UseAttributesValuesMutation";

const AttributesValuePage = () => {
  const { mutate } = UseAttributesValuesMutation({
    action: "DELETE",
  });
  const { id } = useParams();
  const { data, isLoading } = UseAttributes(id);
  if (id === undefined || id === "undefined" || !data || data.values.length === 0) {
    return (
      <div>
        <div className="text-danger text-xl font-medium text-center">
          Chưa có color cho sản phẩm này
        </div>
        <div className="text-center mt-2">
          <Link
            to={`/admin/attributes/add/${data?._id}`}
            className="btn btn-primary"
            style={{ marginRight: "10px" }}
          >
            Thêm thuộc tính
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) return <div>Loading...</div>;
  {data.values.map((item) => console.log(item))  }
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
                  Tên color
                </span>
              </th>
              <th scope="col">
                <span className="text-sm font-semibold text-[18px]">Price</span>
              </th>
              <th scope="col">
                <span className="text-sm font-semibold text-[18px]">
                  quantity
                </span>
              </th>
              <th scope="col">
                <span className="text-sm font-semibold text-[18px]">Size</span>
              </th>
              <th scope="col">
                <span className="text-sm font-semibold text-[18px]">
                  Chức năng
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.values.map((item, index) => (
              <tr key={item._id} className="align-middle bg-[#f3f4f6]">
                <td className="w-[150px]">{index + 1}</td>
                <td style={{ width: "300px", fontSize: "20px" }}>
                  <div style={{ backgroundColor : item.name}} className="w-10 h-10 rounded-full flex items-center justify-center">
                  </div>
                </td>
                <td style={{ width: "300px", fontSize: "20px" }}>
                  <h4>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</h4>
                </td>
                <td style={{ width: "300px", fontSize: "20px" }}>
                  <h4>{item.quantity}</h4>
                </td>
                <td key={index} style={{ width: "300px", fontSize: "20px" }}>
                  <h4>{item.size.map((size) => size.name).join(", ")}</h4>
                </td>
                <td style={{ width: "600px" }}>
                  <div className="flex">
                    <Link
                      to={`/admin/attributes/add/${data._id}`}
                      className="btn btn-primary"
                      style={{ marginRight: "10px" }}
                    >
                      Thêm thuộc tính
                    </Link>
                    <Link
                      to={`/admin/attributesValue/${item._id}/edit`}
                      className="btn btn-primary"
                      style={{ marginRight: "10px" }}
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

export default AttributesValuePage;
