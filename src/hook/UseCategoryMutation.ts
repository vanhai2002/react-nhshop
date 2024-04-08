import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IdProducts } from "../interfaces/Products";
import { toast } from "react-toastify";
import { addCategory, deleteCategory, updateCategory } from "../services/Category";

type useProductMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
};
const UseCategoryMutation = ({ action }: useProductMutationProps) => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: IdProducts) => {
      switch (action) {
        case "CREATE":
          await addCategory(product);
          toast.success("Thêm danh mục thành công");
          break;
        case "UPDATE":
          await updateCategory(product);
          toast.success("Cập nhật danh mục thành công");
          break;
        case "DELETE":
          if (window.confirm("Bạn muốn xóa danh mục không ")) {
            await deleteCategory(product._id!);
            toast.success("Xóa danh mục thành công");
          }
          break;
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["CATEGORY"],
      });
    },
  });
  return { mutate, ...rest };
};
export default UseCategoryMutation;
