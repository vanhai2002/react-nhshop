import axios from "axios";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { IdProducts } from "../../interfaces/Products";
import { ToastContainer } from "react-toastify";
import { Button } from "../ui/button";
import useProductMutation from "../../hook/UseProductMutation";
import { toast } from "react-toastify";
import { Input } from "../ui/input";
import UseCategory from "../../hook/UseCategory";
import UseTags from "../../hook/UseTag";
import { addAttributes, updateAttributes } from "../../services/Attributes";
const ProductAddPage = () => {
  const navigate = useNavigate();
  const { mutate } = useProductMutation({
    action: "CREATE",
  });
  const { data, isLoading } = UseCategory();
  const uploadFile = async (imgCategory) => {
    if (imgCategory) {
      const CLOUD_NAME = "dzafnopsc";
      const PRESET_NAME = "nthShop";
      const FORDER_NAME = "NTHSHOP";
      const urls = [];
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
      const formData = new FormData();
      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FORDER_NAME);
      formData.append("file", imgCategory[0]);
      const response = await axios.post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      urls.push(response.data.secure_url);
      return urls;
    }
  };
  const featured = ["true", "false"];
  const uploadFileS = async (files: any) => {
    if (files) {
      const CLOUD_NAME = "dzafnopsc";
      const PRESET_NAME = "nthShop";
      const FORDER_NAME = "NTHSHOP";
      const urls = [];
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
      const formData = new FormData();
      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FORDER_NAME);
      for (const file of files) {
        formData.append("file", file);
        const response = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        urls.push(response.data.secure_url);
      }
      return urls;
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: IdProducts) => {
    try {
      const Attributes = {
        name: data.attributes, 
      };
    const IdAttibutes =  await addAttributes(Attributes);
    console.log(IdAttibutes);
      const image = await uploadFile(data.img);
      const imgCategory = await uploadFileS(data.imgCategory);
      await mutate({ ...data, attributes: IdAttibutes, img: image, imgCategory: imgCategory });
      setTimeout(() => {
        navigate("/admin");
      }, 2000);
    } catch (error) {
      toast.error("Lỗi ");
    }
  };
  
  const { data: Tags, isLoading: Loading } = UseTags();
  if (Loading) return <div>Loading...</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="bg-white w-[1100px] rounded-md p-6 mx-auto">
      <h1 className="text-[40px] mb-[30px] pt-6">Thêm sản phẩm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Tên sản phẩm
          </label>
          <Input
            {...register("name", { required: true })}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
          />
          {errors.name && errors.name.type === "required" && (
            <div id="emailHelp" className="form-text text-danger">
              Không được để trống
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Giá sản phẩm
          </label>
          <Input
            {...register("price", {
              required: true,
              validate: (value) => !isNaN(value),
            })}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {errors.price && errors.price.type === "required" && (
            <div id="emailHelp" className="form-text text-danger">
              Không được để trống
            </div>
          )}
          {errors.price && errors.price.type === "validate" && (
            <div id="emailHelp" className="form-text text-danger">
              Giá sản phẩm phải là số
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Ảnh sản phẩm
          </label>
          <input
            {...register("img", { required: true })}
            type="file"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {errors.img && errors.img.type === "required" && (
            <div id="emailHelp" className="form-text text-danger">
              Không được để trống
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Ảnh mô tả sản phẩm
          </label>
          <input
            {...register("imgCategory", { required: true })}
            type="file"
            multiple
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {errors.imgCategory && errors.imgCategory.type === "required" && (
            <div id="emailHelp" className="form-text text-danger">
              Không được để trống
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Sale
          </label>
          <Input
            {...register("discount", {
              required: true,
              validate: (value) => !isNaN(value),
            })}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {errors.discount && errors.discount.type === "required" && (
            <div id="emailHelp" className="form-text text-danger">
              Không được để trống
            </div>
          )}
          {errors.sale && errors.sale.type === "validate" && (
            <div id="emailHelp" className="form-text text-danger">
              Sale phải là số
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            coutInStock
          </label>
          <Input
            {...register("coutInStock", {
              required: true,
              validate: (value) => !isNaN(value),
            })}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {errors.coutInStock && errors.coutInStock.type === "required" && (
            <div id="emailHelp" className="form-text text-danger">
              Không được để trống
            </div>
          )}
          {errors.coutInStock && errors.coutInStock.type === "validate" && (
            <div id="emailHelp" className="form-text text-danger">
              Số lượng trong kho phẩm phải là số
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            featured
          </label>
          <select
            {...register("featured", { required: true })}
            className="form-select"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          >
            {featured?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>

          {errors.featured && errors.featured.type === "required" && (
            <div id="emailHelp" className="form-text text-danger">
              Không được để trống
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            category
          </label>
          <select
            {...register("category", { required: true })}
            className="form-select"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          >
            {data?.map((item, index) => (
              <option key={index} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>

          {errors.category && errors.category.type === "required" && (
            <div id="emailHelp" className="form-text text-danger">
              Không được để trống
            </div>
          )}
        </div>
        <div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Tags
            </label>
            <div>
              {Tags?.map((item: any, index: any) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mt-3">
                    <input
                      {...register("tags", {
                        required: true,
                      })}
                      type="checkbox"
                      className="h-6 w-6"
                      value={item._id}
                    />
                    <label className="mr-4">{item.name}</label>
                  </div>
                </div>
              ))}
            </div>
            {errors.tags && errors.tags.type === "required" && (
              <div id="emailHelp" className="form-text text-danger">
                Không được để trống
              </div>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
          Tên thuộc tính sản phẩm
          </label>
          <Input
            {...register("attributes", { required: true })}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {errors.attributes && errors.attributes.type === "required" && (
            <div id="emailHelp" className="form-text text-danger">
              Không được để trống
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Mô tả sản phẩm
          </label>
          <textarea
            {...register("description", { required: true })}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {errors.description && errors.description.type === "required" && (
            <div id="emailHelp" className="form-text text-danger">
              Không được để trống
            </div>
          )}
        </div>
        <div className="button mt-10 mb-4">
          <Button variant="destructive" type="submit">
            Submit
          </Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ProductAddPage;
