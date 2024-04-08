import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IdProducts } from "../interfaces/Products";
import { toast } from "react-toastify";
import { addAttributesValues, deleteAttributesValues, updateAttributesValues } from "../services/AttributesValues";

type useProductMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE"
};

const UseAttributesValuesMutation = ({ action }: useProductMutationProps) => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: IdProducts) => {
      switch (action) {
        case "CREATE":
          await addAttributesValues(product);
          toast.success("Thêm color thành công");
          break;
        case "UPDATE":
          await updateAttributesValues(product);
          toast.success("Cập nhật color thành công");
          break;
        case "DELETE":
          if (window.confirm("Bạn muốn xóa color không ")) {
            await deleteAttributesValues(product._id!);
            toast.success("Xóa color thành công");
          }
          break;
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["ATTRIBUTEVALUES"],
      });
    },
  });
  return { mutate, ...rest };
};
export default UseAttributesValuesMutation;
