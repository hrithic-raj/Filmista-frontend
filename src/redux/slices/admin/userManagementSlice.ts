import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";

interface User {
    _id: string;
    name: string;
    email: string;
    isBlocked: boolean;
    role: string;
    googleId?: string;
}

interface UserManagementState {
    users: User[];
    selectedUser: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserManagementState ={
    users:[],
    selectedUser: null,
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
export const fetchUserById = createAsyncThunk('userManagement/fetchUserById', async (userId: string, {rejectWithValue})=>{
    try{
        const response = await axiosInstance.get(`/admin/users/${userId}`);
        return response.data.user
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
    }
})
export const blockUserById = createAsyncThunk('userManagement/blockusers', async (userId: string, {rejectWithValue})=>{
    try{
        await axiosInstance.patch(`/admin/users/${userId}/block`);
        return userId;
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
            state.loading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>)=>{
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(fetchUserById.pending, (state)=>{
            state.loading=true;
        })
        .addCase(fetchUserById.fulfilled, (state, action: PayloadAction<User>)=>{
            state.loading = false;
            state.selectedUser = action.payload;
        })
        .addCase(fetchUserById.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(blockUserById.fulfilled, (state, action: PayloadAction<string>)=>{
            state.loading = false;
            const userId = action.payload;
            const user = state.users.find((u)=>u._id === userId);
            const selectedUser = state.selectedUser;
            if(user){
                user.isBlocked = !user.isBlocked;
            }
            if(selectedUser){
                selectedUser.isBlocked = !selectedUser.isBlocked;
            }
        })
    }
})

export default userManagementSlice.reducer;