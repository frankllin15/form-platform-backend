import { api } from "../api"

export const createFormMutation = async  (payload: any) => {
    const resp = await api.post("/forms/new", payload)
}
