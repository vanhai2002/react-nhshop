import { useQuery } from "@tanstack/react-query";
import { getTags, getTagsById } from "../services/Tags";

const UseTags = (id? : number | string) => {

    const { data, ...rest } = useQuery({
        queryKey: ["TAGS", id],
        queryFn: async () => {
            return id ? await getTagsById(id) : await getTags();
        },
    });
    return { data, ...rest };
}
export default UseTags;
