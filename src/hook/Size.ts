import { useQuery } from "@tanstack/react-query";
import { getSize, getSizeById } from "../services/Size";

const UseSize = (id? : number | string) => {

    const { data, ...rest } = useQuery({
        queryKey: ["Size", id],
        queryFn: async () => {
            return id ? await getSizeById(id) : await getSize();
        },
    });
    return { data, ...rest };
}
export default UseSize;
