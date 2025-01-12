import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";

interface Movie {
    id: string;
    name: string;
    description: string;
    poster: string;
    horizontalPoster: string;
  }

interface Genre {
    _id: string;
    genre: string;
    poster: string;
    isArchive: boolean;
    movies: Movie[]
}

interface genreManagementState {
    genres: Genre[];
    selectedGenre: Genre | null;
    loading: boolean;
    error: string | null;
}

const initialState: genreManagementState ={
    genres:[],
    selectedGenre: null,
    loading:false,
    error: null,
};

export const fetchAllGenres = createAsyncThunk('userManagement/fetchAllGenres', async (_,{rejectWithValue})=>{
    try{
        const response = await axiosInstance.get('/admin/genres');
        return response.data.genres
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch genres");
    }
})

// export const addGenre = createAsyncThunk('userManagement/blockusers', async (formData: { email: string; password: string }, {rejectWithValue})=>{
//     try{
//         const response = await axiosInstance.post(`/genres`,formData);
//         return response.data
//     }catch(error: any){
//         console.error(error.response?.data?.message)
//         return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
//     }
// })
// export const updateGenre = createAsyncThunk('userManagement/blockusers', async (data, {rejectWithValue})=>{
//     const formData = new FormData();
//     formData.append('genre', data.genre);
//     formData.append('isArchive', data.isArchive);  // Convert boolean to string if needed
//     if (data.image) formData.append('poster', data.image);  // Add image file if exists
//     try{
//         const response = await axiosInstance.patch(`/admin/users/${genreId}`);
//         return userId;
//     }catch(error: any){
//         console.error(error.response?.data?.message)
//         return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
//     }
// })
export const addGenre = createAsyncThunk(
  'userManagement/addGenre',
  async (formData: FormData, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post(`/admin/genres`,formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data
    } catch (error: any) {
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to add users");
    }
  }
);
export const updateGenre = createAsyncThunk(
    'userManagement/updateGenre',
    async (
        {genreId, formData}:{genreId: string; formData: FormData}, 
        { rejectWithValue }
    ) => {
      try {
        const response = await axiosInstance.patch(`/admin/genres/${genreId}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.message);  // Return error message if request fails
      }
    }
  );
  

export const archiveGenre = createAsyncThunk('userManagement/blockusers', async (genreId: string, {rejectWithValue})=>{
    try{
        await axiosInstance.patch(`/admin/genres/${genreId}/archive`);
        console.log("archive");
        return genreId;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
    }
})

export const fetchGenreById = createAsyncThunk('userManagement/blockusers', async (userId: string, {rejectWithValue})=>{
    try{
        const response = await axiosInstance.patch(`/admin/users/${userId}/block`);
        return userId;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
    }
})

const genreManagementSlice = createSlice({
    name: 'genreManagement',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllGenres.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fetchAllGenres.fulfilled, (state, action: PayloadAction<Genre[]>)=>{
            state.loading = false;
            state.genres = action.payload;
        })
        .addCase(fetchAllGenres.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(archiveGenre.pending, (state)=>{
            state.loading = true;
        })
        .addCase(archiveGenre.fulfilled, (state, action: PayloadAction<string>)=>{
            state.loading = false;
            const genreId = action.payload;
            const genre = state.genres.find((g)=>g._id === genreId);
            const selectedGenre = state.selectedGenre;
            if(genre) genre.isArchive = !genre.isArchive;
            if(selectedGenre) selectedGenre.isArchive = !selectedGenre.isArchive;
        })
        .addCase(archiveGenre.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default genreManagementSlice.reducer;