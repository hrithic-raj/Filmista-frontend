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
export const getProfile = async () => {
    try {
        const response = await axiosInstance.get(`/users/profile`);
        return response.data.user;
    } catch (error: any) {
        console.error(error)
    }
}
// export const updateUserProfile = async (formData: FormData) => {
//     try {
//         const response = await axiosInstance.put(`/users/edit-profile`, formData, {
//             headers: { 'Content-Type': 'multipart/form-data' },
//         });
//         return response.data;
//     } catch (error: any) {
//         console.error(error)
//     }
// }