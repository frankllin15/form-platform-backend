import { api } from "../api"

export const createFormQuery = async  (payload: any) => {
    const resp = await api.post("/form", payload)
}
