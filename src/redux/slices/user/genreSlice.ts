import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";
import IGenre from "../../../interfaces/GenreInterface";

interface genreState {
    genres: IGenre[];
    selectedGenre: IGenre | null;
    loading: boolean;
    error: string | null;
}

const initialState: genreState ={
    genres: [],
    selectedGenre: null,
    loading: false,
    error: null,
};

export const fetchAllGenres = createAsyncThunk('genre/fetchAllGenres', async (_,{rejectWithValue})=>{
    try{
        const response = await axiosInstance.get('/users/genres');
        return response.data.genres
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch genres");
    }
})

export const fetchGenreById = createAsyncThunk('genre/fetchGenreById', async (genreId: string, {rejectWithValue})=>{
    try{
        const response = await axiosInstance.get(`/users/genres/${genreId}`);
        return response.data.genre;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch genre");
    }
})

const genreSlice = createSlice({
    name: 'genre',
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

export default genreSlice.reducer;