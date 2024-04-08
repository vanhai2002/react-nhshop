import { useQuery } from "@tanstack/react-query";
import { getCategorys, getCategorysById } from "../services/Category";

const UseCategory = (id? : number | string) => {

    const { data, ...rest } = useQuery({
        queryKey: ["CATEGORY", id],
        queryFn: async () => {
            return id ? await getCategorysById(id) : await getCategorys();
        },
    });
    return { data, ...rest };
}
export default UseCategory;
