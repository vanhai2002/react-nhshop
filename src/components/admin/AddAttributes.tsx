import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate, useParams } from "react-router-dom";
import UseAttributesValuesMutation from "../../hook/UseAttributesValuesMutation";
import UseSize from "../../hook/Size";

const AddAttributes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = UseAttributesValuesMutation({
    action: "CREATE"
  });
  const navigate = useNavigate();

  const { id } = useParams();
  const onSubmit = async (data: string) => {
    await mutate({...data, _id: id});
    navigate(`/admin/attributesValue/${id}`);
  };
  const { data, isLoading } = UseSize();
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className="bg-white w-[1100px] rounded-md p-6 mx-auto">
        <h1 className="text-[40px] mb-[30px] pt-6">Thêm thuộc tính sản phẩm</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Size
          </label>
          <select
            {...register("size", { required: true })}
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
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Color
            </label>
            <Input
              {...register("name", { required: true })}
              type="color"
              className="form-control w-20"
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
            Số lượng sản phẩm
          </label>
          <Input
            {...register("quantity", {
              required: true,
              validate: (value) => !isNaN(value),
            })}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {errors.quantity && errors.quantity.type === "required" && (
            <div id="emailHelp" className="form-text text-danger">
              Không được để trống
            </div>
          )}
          {errors.quantity && errors.quantity.type === "validate" && (
            <div id="emailHelp" className="form-text text-danger">
              Giá sản phẩm phải là số
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
    </>
  );
};


export default AddAttributes