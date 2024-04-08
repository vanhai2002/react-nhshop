import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useLocalStorage } from "../../hook/UseStorage";

const Singin = () => {
  const [, setUser ] = useLocalStorage("user", {})
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {mutate} = useMutation({
    mutationFn: async (dataForm) => {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/singin",
        dataForm
      );
      return data;
    },
    onSuccess: (data) => setUser(data),
    onError: (error) => console.log(error),
  });
  const onSubmit = async (data: string) => {
    mutate(data);
  };
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="assets/logo.svg"
            alt="Your Company"
          />
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mb-3">
                <Input
                  {...register("email", { required: true })}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                />
                {errors.email && errors.email.type === "required" && (
                  <div id="emailHelp" className="form-text text-danger">
                    Không được để trống
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mb-3">
                <Input
                  {...register("password", { required: true })}
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                />
                {errors.password && errors.password.type === "required" && (
                  <div id="emailHelp" className="form-text text-danger">
                    Không được để trống
                  </div>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Singin;
