import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IdProducts } from "../interfaces/Products";
import { toast } from "react-toastify";
import { addTags, deleteTags, updateTags } from "../services/Tags";

type useProductMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
};
const UseTagsMutation = ({ action }: useProductMutationProps) => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: IdProducts) => {
      switch (action) {
        case "CREATE":
          await addTags(product);
          toast.success("Thêm Tags thành công");
          break;
        case "UPDATE":
          await updateTags(product);
          toast.success("Cập nhật Tags thành công");
          break;
        case "DELETE":
          if (window.confirm("Bạn muốn xóa Tags không ")) {
            await deleteTags(product._id!);
            toast.success("Xóa danh mục thành công");
          }
          break;
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["TAGS"],
      });
    },
  });
  return { mutate, ...rest };
};
export default UseTagsMutation;
