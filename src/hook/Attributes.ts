import { useQuery } from "@tanstack/react-query";
import { getAttributes, getAttributesById } from "../services/Attributes";

const UseAttributes = (id? : number | string) => {

    const { data, ...rest } = useQuery({
        queryKey: ["Attributes", id],
        queryFn: async () => {
            return id ? await getAttributesById(id) : await getAttributes();
        },
    });
    return { data, ...rest };
}
export default UseAttributes;
