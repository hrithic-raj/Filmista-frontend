import axios, {AxiosInstance} from "axios";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
    response => response,
    async(error) =>{
        if(error.response.status === 401 || error.response.status === 403){
            try{
                const refreshResponse = await axios.get('/auth/refresh-token', { withCredentials: true});
                const newAccessToken = refreshResponse.data.newAccessToken;
                error.confiq.headers["Authorization"] = `Bearer ${newAccessToken}`;
                localStorage.setItem("token", newAccessToken);
                return axiosInstance(error.confiq);
            }catch(refreshError){
                window.location.href = '/signin';
            }
        }
        return Promise.reject(error);
    },
)

export default axiosInstance;