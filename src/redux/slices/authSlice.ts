import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendOtp = createAsyncThunk('auth/sendOtp', async (email: string) => {
    const response = await axios.post('/auth/send-otp', { email });
    return response.data;
});

export const signup = createAsyncThunk('auth/signup', async (formData: any)=>{
    return FormData;
})

export const signin = createAsyncThunk('auth/signin', async (formData: any)=>{
    console.log("hello");
})

export const googleAuth = createAsyncThunk('auth/googleSignup', async ()=>{
    return {
        name: "hrj",
        email: "hrj@gmail.com"
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: null,
        admin: null,
        celebrity: null,
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(sendOtp.pending, (state) => {
        state.loading = true;
        })
        .addCase(sendOtp.fulfilled, (state) => {
        state.loading = false;
        })
        .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
        })
        .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        })
        .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload;
        });
    }
})


export default authSlice.reducer;