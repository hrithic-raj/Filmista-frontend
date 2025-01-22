import axios from "axios";

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/duklokwdi/image/upload`;
const CLOUDINARY_UPLOAD_PRESET = `filmista`;

const uploadFileToCloudinary = async(file: File): Promise <string>=>{
    try{
        const formData = new FormData;
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        const res = await axios.post(CLOUDINARY_URL, formData, {
            headers:{
                'Content-Type': 'multipart/form-data',
            },
        });

        const imageUrl = res.data.secure_url;
        return imageUrl;
    }catch(error){
        console.error("Error uploading to Cloudinary", error);
        throw new Error("Upload failed");
    }
};

export default uploadFileToCloudinary;