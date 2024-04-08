import { useQuery } from "@tanstack/react-query";
import { getAttributesValues, getAttributesValuesById } from "../services/AttributesValues";

const UseAttributesValue = (id? : number | string) => {

    const { data, ...rest } = useQuery({
        queryKey: ["ATTRIBUTEVALUES", id],
        queryFn: async () => {
            return id ? await getAttributesValuesById(id) : await getAttributesValues();
        },
    });
    return { data, ...rest };
}
export default UseAttributesValue;
