import axiosInstance from "../utils/axiosInstance";

export const addMovie = async(formData:FormData) =>{
    try{
        const response = await axiosInstance.post('/admin/movies', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
        });
        console.log(response.data.newMovie);
        return response.data.newMovie
    }catch(error){
        console.error('Error adding movie:', error);
        throw error;
    }
}