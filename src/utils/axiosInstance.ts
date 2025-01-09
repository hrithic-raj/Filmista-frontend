import axios, { AxiosInstance } from "axios";
// import store from "../redux/store";
// import { setAccessToken } from "../redux/slices/authSlice";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  // baseURL: "https://filmista-backend.onrender.com/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("token");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
}, (error) => Promise.reject(error));


axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await axiosInstance.post("/auth/refresh-token");
        const newAccessToken = res.data.newAccessToken;
        console.log("newAccessToken", newAccessToken);
        localStorage.setItem("token", newAccessToken);
        // store.dispatch(setAccessToken(newAccessToken));

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Failed to refresh token", refreshError);
        // window.location.href = "/signin";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
