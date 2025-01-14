import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";
import IGenre from "../../../interfaces/GenreInterface";

interface genreManagementState {
    genres: IGenre[];
    selectedGenre: IGenre | null;
    loading: boolean;
    error: string | null;
}

const initialState: genreManagementState ={
    genres: [],
    selectedGenre: null,
    loading: false,
    error: null,
};

export const fetchAllGenres = createAsyncThunk('genreManagement/fetchAllGenres', async (_,{rejectWithValue})=>{
    try{
        const response = await axiosInstance.get('/admin/genres');
        return response.data.genres
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch genres");
    }
})

export const addGenre = createAsyncThunk(
  'genreManagement/addGenre',
  async (formData: FormData, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post(`/admin/genres`,formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data.genre
    } catch (error: any) {
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to add genre");
    }
}
);
export const updateGenre = createAsyncThunk(
    'genreManagement/updateGenre',
    async (
        {genreId, formData}:{genreId: string; formData: FormData}, 
        { rejectWithValue }
    ) => {
        try {
            const response = await axiosInstance.patch(`/admin/genres/${genreId}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            return response.data.genre;
        } catch (error: any) {
            console.error(error.response?.data?.message)
            return rejectWithValue(error.response?.data?.message || "Failed to update genre");
      }
    }
  );
  

export const archiveGenre = createAsyncThunk('genreManagement/archiveGenre', async (genreId: string, {rejectWithValue})=>{
    try{
        await axiosInstance.patch(`/admin/genres/${genreId}/archive`);
        return genreId;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to archive genre");
    }
})

export const fetchGenreById = createAsyncThunk('genreManagement/fetchGenreById', async (genreId: string, {rejectWithValue})=>{
    try{
        const response = await axiosInstance.get(`/admin/genres/${genreId}`);
        return response.data.genre;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch genre");
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
        .addCase(fetchAllGenres.fulfilled, (state, action: PayloadAction<IGenre[]>)=>{
            state.loading = false;
            state.genres = action.payload;
        })
        .addCase(fetchAllGenres.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(archiveGenre.fulfilled, (state, action: PayloadAction<string>)=>{
            const genreId = action.payload;
            const genre = state.genres.find((g)=>g._id === genreId);
            const selectedGenre = state.selectedGenre;
            if(genre) genre.isArchive = !genre.isArchive;
            if(selectedGenre) selectedGenre.isArchive = !selectedGenre.isArchive;
        })
        .addCase(addGenre.pending, (state)=>{
            state.loading = true;
        })
        .addCase(addGenre.fulfilled, (state, action: PayloadAction<IGenre>)=>{
            state.loading = false;
            state.genres.push(action.payload);
        })
        .addCase(addGenre.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateGenre.pending, (state)=>{
            state.loading = true;
        })
        .addCase(updateGenre.fulfilled, (state, action: PayloadAction<IGenre>)=>{
            state.loading = false;
            const index = state.genres.findIndex((genre)=>genre._id === action.payload._id);

            if(index !== -1) state.genres[index] = action.payload;

            if(state.selectedGenre) state.selectedGenre = action.payload;
        })
        .addCase(updateGenre.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(fetchGenreById.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fetchGenreById.fulfilled, (state, action: PayloadAction<IGenre>)=>{
            state.loading = false;
            state.selectedGenre = action.payload
        })
        .addCase(fetchGenreById.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
        
    }
})

export default genreManagementSlice.reducer;