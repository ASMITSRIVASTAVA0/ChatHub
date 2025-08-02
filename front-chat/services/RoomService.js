import { httpClient } from "../Routes/AxiosHelper"

export const createRoom2=async (roomDetail)=>{
    const response=await httpClient.post("/api/v1/rooms",roomDetail);
    return response.data;
}