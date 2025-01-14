import axiosInstance from "../utils/axiosInstance";

export const submitCelebrityRequest = async (formData: FormData) => {
        try {
            const response = await axiosInstance.post(`/users/celebrity-request`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            return response.data.request;
        } catch (error: any) {
            console.error(error)
        }
}