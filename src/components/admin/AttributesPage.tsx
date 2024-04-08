import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UseAttributes from "../../hook/Attributes";
import UseAttributesMutation from "../../hook/UseAttributesMutation";

const AttributesPage = () => {
  const { id } = useParams();
  const { mutate } = UseAttributesMutation({
    action: "DELETE",
    id: id
  });
  const { data, isLoading } = UseAttributes(id);
  if (id === undefined || id === "undefined") {
    return (
      <div className="text-danger text-xl font-medium text-center">
        Chưa có color cho sản phẩm này
      </div>
    );
  }
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
                  Tên color
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
              <tr className="align-middle bg-[#f3f4f6]">
                <td className="w-[150px]"></td>

                <td style={{ width: "300px", fontSize: "20px" }}>
                  <h4>{data.name}</h4>
                </td>
                <td
                  style={{
                    width: "172px",
                  }}
                >
                  <div className="flex">
                    <Link
                      to={`/admin/attributesValue/${data._id}`}
                      className="btn btn-primary"
                      style={{ marginRight: "10px" }}
                    >
                     Chi tiết thuộc tính
                    </Link>
                    <Link
                      style={{ marginRight: "10px" }}
                      to={`/admin/category//edit`}
                      className="btn btn-primary"
                    >
                      Cập nhật
                    </Link>
                    <button
                      onClick={() => mutate(data)}
                      className="btn btn-danger"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </>
  );
};

export default AttributesPage;
