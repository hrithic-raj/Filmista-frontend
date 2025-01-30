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
    'UserInfo/getUserInfo',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`/users/profile`);
            console.log(response.data.user);
            return response.data.user;
        } catch (error: any) {
            console.error(error.response?.data?.message)
            return rejectWithValue(error.response?.data?.message || "Failed to sent request");
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
    }
})

export default UserSlice.reducer;