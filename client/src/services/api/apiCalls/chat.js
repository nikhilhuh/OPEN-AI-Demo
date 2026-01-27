import { axiosInstance } from "../../axiosInstance";
import { apiErrorHandler } from "../apiErrorHandling";

export const chat = async (message) => {
  try {
    const response = await axiosInstance.post("/chat", { message });
    return response.data;
  } catch (err) {
    return apiErrorHandler(err);
  }
};
