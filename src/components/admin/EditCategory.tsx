import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import UseCategoryMutation from "../../hook/UseCategoryMutation";
import { useNavigate, useParams } from "react-router-dom";
import UseCategory from "../../hook/UseCategory";

const EditCategory = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
 const { data, isLoading} = UseCategory(id);
 useEffect(() => {
    if (!isLoading) {
      reset(data.category);
    }
  }, [data, isLoading, reset]);
  const { mutate } = UseCategoryMutation({
    action: "UPDATE"
  });
  const onSubmit = async (data: string) => {
    await mutate(data);
    navigate("/admin/category");    

  };
  return (
    <>
      <div className="bg-white w-[1100px] rounded-md p-6 mx-auto">
        <h1 className="text-[40px] mb-[30px] pt-6">Update danh mục sản phẩm</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Tên Danh mục
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


export default EditCategory