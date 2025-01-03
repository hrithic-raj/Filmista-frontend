import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import IUser from "../../interfaces/userInterface";
import ICelebrity from "../../interfaces/CelebrityInterface";
import IAdmin from "../../interfaces/AdminInterface";
import axiosInstance from "../../utils/axiosInstance";


interface AuthState {
    user: IUser | null;
    admin: IAdmin | null;
    celebrity: ICelebrity | null;
    accessToken: string| null;
    refreshToken:string | null;
    loading: boolean;
    error: string | null;
}
const initialState: AuthState = {
    user: null,
    admin: null,
    celebrity: null,
    accessToken: null,
    refreshToken: null,
    loading: false,
    error: null,
};

export const sendOtp = createAsyncThunk('auth/sendOtp', async (email: string, { rejectWithValue }) => {
    try{
        const response = await axiosInstance.post('/auth/send-otp', { email });
        return response.data;
    }catch(error: any){
        return rejectWithValue(error.response?.data?.message || "Failed to send OTP");
    }
});

export const signup = createAsyncThunk('auth/signup', async (formData: { name: string; email: string; password: string; otp: string }, {rejectWithValue})=>{
    try{
        const response = await axiosInstance.post('/auth/signup', formData);
        return response.data;
    }catch(error: any){
        return rejectWithValue(error.response?.data?.message || "Signup failed");
    }
})

export const signin = createAsyncThunk('auth/signin', async (formData: { email: string; password: string }, { rejectWithValue })=>{
    try{
        const response = await axiosInstance.post('/auth/signin', formData);
        return response.data;
    }catch(error: any){
        return rejectWithValue(error.response?.data?.message || "Signin failed");
    }
})

export const googleAuth = createAsyncThunk("auth/googleAuth", async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/auth/google/callback");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Google authentication failed");
    }
  });

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        logout(state) {
            state.user = null;
            state.admin = null;
            state.celebrity = null;
        },
    },
    extraReducers:(builder)=>{
        builder
        // send OTP
        .addCase(sendOtp.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(sendOtp.fulfilled, (state) => {
            state.loading = false;
        })
        .addCase(sendOtp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        // signup
        .addCase(signup.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(signup.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        })
        .addCase(signup.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        // signin
        .addCase(signin.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(signin.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        })
        .addCase(signin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        // google auth
        .addCase(googleAuth.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(googleAuth.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        })
        .addCase(googleAuth.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })

    }
})


export default authSlice.reducer;