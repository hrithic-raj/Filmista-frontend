import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";
import IUser from "../../../interfaces/UserInterface";

interface UserManagementState {
    user: IUser| null;
    loading: boolean;
    error: string | null;
}

const initialState: UserManagementState ={
    user:null,
    loading:false,
    error: null,
};

export const getUserInfo = createAsyncThunk(
    'User/getUserInfo',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`/users/profile`);
            return response.data.user;
        } catch (error: any) {
            console.error(error.response?.data?.message)
            return rejectWithValue(error.response?.data?.message || "Failed to get user profile");
        }
    }
);
export const updateUserProfile = createAsyncThunk(
    'User/updateUserProfile',
    async (formData: FormData, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.put(`/users/edit-profile`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            return response.data.user;
        } catch (error: any) {
            console.error(error.response?.data?.message)
            return rejectWithValue(error.response?.data?.message || "Failed to update user profile");
        }
    }
);

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getUserInfo.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getUserInfo.fulfilled, (state, action: PayloadAction<IUser>)=>{
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(getUserInfo.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateUserProfile.pending, (state)=>{
            state.loading = true;
        })
        .addCase(updateUserProfile.fulfilled, (state, action: PayloadAction<IUser>)=>{
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(updateUserProfile.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default UserSlice.reducer;