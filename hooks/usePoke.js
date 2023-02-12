import { getPoke as apiGetPoke } from "../services/poke";
import {useQuery} from "@tanstack/react-query";

export default function usePoke() {
    const queryKey = ['data']

    const {
        data,
        error,
        isLoading
    } = useQuery(queryKey, async () => {
        const response = await apiGetPoke()
        return response?.data;
    })

    return {
        data,
        error,
        isLoading
    }
}
