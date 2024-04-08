import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IdProducts } from "../interfaces/Products";
import { toast } from "react-toastify";
import { addAttributes, deleteAttributes, updateAttributes } from "../services/Attributes";

type useProductMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
};
const UseAttributesMutation = ({ action }: useProductMutationProps) => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: IdProducts) => {
      switch (action) {
        case "CREATE":
          await addAttributes(product);
          toast.success("Thêm color thành công");
          break;
        case "UPDATE":
          await updateAttributes(product);
          toast.success("Cập nhật color thành công");
          break;
        case "DELETE":
          if (window.confirm("Bạn muốn xóa color không ")) {
            console.log(product._id);
            await deleteAttributes(product._id!);
            toast.success("Xóa color thành công");
          }
          break;
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Attributes"],
      });
    },
  });
  return { mutate, ...rest };
};
export default UseAttributesMutation;
