import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";
import ICelebrity from "../../../interfaces/CelebrityInterface";

interface IRequest{
    _id:string;
    userId: string;
    proofDocument: string;
    status: string;
    createdAt: Date;
}


interface CelebrityManagementState {
    celebrities: ICelebrity[];
    selectedCelebrity: ICelebrity | null;
    requests: IRequest[];
    loading: boolean;
    error: string | null;
}

const initialState: CelebrityManagementState ={
    celebrities:[],
    selectedCelebrity: null,
    requests:[],
    loading:false,
    error: null,
};

export const fetchCelebrities = createAsyncThunk('celebrityManagement/fetchCelebrities', async (_,{rejectWithValue})=>{
    try{
        const response = await axiosInstance.get('/admin/celebrities');
        return response.data.celebrities
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
    }
})
export const fetchCelebrityById = createAsyncThunk('celebrityManagement/fetchCelebrityById', async (celebrityId: string, {rejectWithValue})=>{
    try{
        const response = await axiosInstance.get(`/admin/celebrities/${celebrityId}`);
        return response.data.celebrity
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
    }
})
export const blockCelebrityById = createAsyncThunk('celebrityManagement/blockCelebrityById', async (celebrityId: string, {rejectWithValue})=>{
    try{
        await axiosInstance.patch(`/admin/celebrities/${celebrityId}/block`);
        return celebrityId;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
    }
})

export const fetchAllRequests = createAsyncThunk('celebrityManagement/fetchAllRequests', async (_, {rejectWithValue})=>{
    try{
        const response = await axiosInstance.get(`/admin/celebrities/requests`);
        return response.data.requests
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
    }
})
export const reviewCelebrityRequests = createAsyncThunk('celebrityManagement/reviewCelebrityRequests', async ({requestId, status}:{requestId: string; status: string}, {rejectWithValue})=>{
    try{
        const response = await axiosInstance.patch(`/admin/celebrities/review-request`, {requestId, status});
        return response.data.request
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
    }
})


const celebrityManagementSlice = createSlice({
    name: 'celebrityManagement',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCelebrities.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fetchCelebrities.fulfilled, (state, action: PayloadAction<ICelebrity[]>)=>{
            state.loading = false;
            state.celebrities = action.payload;
        })
        .addCase(fetchCelebrities.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(fetchCelebrityById.pending, (state)=>{
            state.loading=true;
        })
        .addCase(fetchCelebrityById.fulfilled, (state, action: PayloadAction<ICelebrity>)=>{
            state.loading = false;
            state.selectedCelebrity = action.payload;
        })
        .addCase(fetchCelebrityById.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(blockCelebrityById.fulfilled, (state, action: PayloadAction<string>)=>{
            state.loading = false;
            const celebrityId = action.payload;
            const celebrities = state.celebrities.find((u)=>u._id === celebrityId);
            const selectedCelebrity = state.selectedCelebrity
            if(celebrities){
                if(typeof celebrities.userId !== 'string') celebrities.userId.isBlocked = !celebrities.userId.isBlocked;
            }
            if(selectedCelebrity && (typeof selectedCelebrity.userId !== 'string')){
                
                selectedCelebrity.userId.isBlocked = !selectedCelebrity.userId.isBlocked;
            }
        })
        .addCase(fetchAllRequests.pending, (state)=>{
            state.loading=true;
        })
        .addCase(fetchAllRequests.fulfilled, (state, action: PayloadAction<IRequest[]>)=>{
            state.loading = false;
            state.requests = action.payload;
        })
        .addCase(fetchAllRequests.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(reviewCelebrityRequests.fulfilled, (state, action: PayloadAction<IRequest>) => {
            state.loading = false;
            const updatedRequest = action.payload;
            const requestIndex = state.requests.findIndex((r) => r._id === updatedRequest._id);
            if (requestIndex !== -1) {
                state.requests[requestIndex] = updatedRequest;
            }
        })
        .addCase(reviewCelebrityRequests.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default celebrityManagementSlice.reducer;