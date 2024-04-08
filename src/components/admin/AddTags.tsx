import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import UseTagsMutation from "../../hook/UseTagsMutation";

const AddTags = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = UseTagsMutation({
    action: "CREATE"
  });
  const onSubmit = async (data: string) => {
    await mutate(data);
    navigate("/admin/tags");    
  };
  return (
    <>
      <div className="bg-white w-[1100px] rounded-md p-6 mx-auto">
        <h1 className="text-[40px] mb-[30px] pt-6">Thêm Tag sản phẩm</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Tên Tags
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

export default AddTags;
