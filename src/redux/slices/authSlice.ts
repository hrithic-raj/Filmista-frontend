import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import IUser from "../../interfaces/UserInterface";
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
    googleLoading: boolean;
    error: string | null;
    googleError: string | null;
}
const initialState: AuthState = {
    user: null,
    admin: null,
    celebrity: null,
    accessToken: null,
    refreshToken: null,
    loading: false,
    googleLoading: false,
    googleError: null,
    error:null,
};

export const sendOtp = createAsyncThunk('auth/sendOtp', async (email: string, { rejectWithValue }) => {
    try{
        const response = await axiosInstance.post('/auth/send-otp', { email });
        return response.data;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to send OTP");
    }
});

export const signup = createAsyncThunk('auth/signup', async (formData: { name: string; email: string; password: string; otp: string }, {rejectWithValue})=>{
    try{
        const response = await axiosInstance.post('/auth/signup', formData);
        return response.data;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Signup failed");
    }
})

export const signin = createAsyncThunk('auth/signin', async (formData: { email: string; password: string }, { rejectWithValue })=>{
    try{
        const response = await axiosInstance.post('/auth/signin', formData);
        return response.data;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Signin failed");
    }
})

export const googleAuth = createAsyncThunk("auth/googleAuth", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get("/auth/google/callback");
        return response.data;
    } catch (error: any) {
        console.error(error.response?.data?.message)
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
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
        },
        clearAccessToken: (state) => {
            state.accessToken = null;
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
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            localStorage.setItem('token', action.payload.accessToken);
            localStorage.setItem('role', action.payload.role);
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
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            localStorage.setItem('token', action.payload.accessToken);
            localStorage.setItem('role', action.payload.role);
        })
        .addCase(signin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        // google auth
        .addCase(googleAuth.pending, (state) => {
            state.googleLoading = true;
            state.googleError = null;
        })
        .addCase(googleAuth.fulfilled, (state, action) => {
            state.googleLoading = false;
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            localStorage.setItem('token', action.payload.accessToken);
            localStorage.setItem('role', action.payload.role);
        })
        .addCase(googleAuth.rejected, (state, action) => {
            state.googleLoading = false;
            state.googleError = action.payload as string;
        })

    }
})


export const { logout, setAccessToken, clearAccessToken } = authSlice.actions;
export default authSlice.reducer;