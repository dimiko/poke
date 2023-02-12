import {useQuery} from "@tanstack/react-query";
import {getPokeSingle as apiGetPokeSingle} from "../services/poke";

export default function usePokeSingle(id) {
    const queryKey = ['single', id]

    const {
        data: single,
        error,
        isLoading
    } = useQuery(queryKey, async () => {
        const response = await getPokeSingle(id)
        return response.data;
    })

    return {
        single,
        error,
        isLoading
    }
}
