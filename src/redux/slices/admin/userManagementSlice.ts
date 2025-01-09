import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";

interface User {
    _id: string;
    name: string;
    email: string;
}

interface UserManagementState {
    users: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UserManagementState ={
    users:[],
    loading:false,
    error: null,
};

export const fetchUsers = createAsyncThunk('userManagement/fetchUsers', async (_,{rejectWithValue})=>{
    try{
        const response = await axiosInstance.get('/admin/users');
        return response.data.users
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
    }
})

const userManagementSlice = createSlice({
    name: 'userManagement',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.pending, (state)=>{
            state.loading=true;
        })
        .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>)=>{
            state.loading= false;
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default userManagementSlice.reducer;