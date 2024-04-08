import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IdProducts } from "../interfaces/Products";
import { toast } from "react-toastify";
import { addSize, deleteSize, updateSize } from "../services/Size";

type useProductMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
};
const UseSizeMutation = ({ action }: useProductMutationProps) => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: IdProducts) => {
      switch (action) {
        case "CREATE":
          await addSize(product);
          toast.success("Thêm size thành công");
          break;
        case "UPDATE":
          await updateSize(product);
          toast.success("Cập nhật size thành công");
          break;
        case "DELETE":
          if (window.confirm("Bạn muốn xóa color không ")) {
            await deleteSize(product._id!);
            toast.success("Xóa size thành công");
          }
          break;
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Size"],
      });
    },
  });
  return { mutate, ...rest };
};
export default UseSizeMutation;
