import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";
import IGenre from "../../../interfaces/GenreInterface";

interface genreState {
    genres: IGenre[];
    selectedGenre: IGenre | null;
    genreId: string[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    totalPages: number;
}

const initialState: genreState ={
    genres: [],
    selectedGenre: null,
    genreId:[],
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
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

// export const fetchAllGenres =
//   (page: number, limit: number) => async (dispatch: AppDispatch) => {
//     try {
//       dispatch(fetchGenresStart());

//       const { data } = await axiosInstance.get(`/users/genres?page=${page}&limit=${limit}`);

//       dispatch(
//         fetchGenresSuccess({
//           genres: data.genres,
//           currentPage: data.currentPage,
//           totalPages: data.totalPages,
//         })
//       );
//     } catch (error: any) {
//       dispatch(fetchGenresFailure(error.message));
//     }
//   };

export const fetchGenreById = createAsyncThunk('genre/fetchGenreById', async (genreId: string, {rejectWithValue})=>{
    try{
        const response = await axiosInstance.get(`/users/genres/${genreId}`);
        return response.data.genre;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch genre");
    }
})

export const addUserGenres = createAsyncThunk(
    'genres/addUserGenres',
    async ( genreIds: string[], thunkAPI) => {
      try {
        const response = await axiosInstance.post(`/users/genres`, { genreIds });
        return response.data.updatedUser;
      } catch (error: any) {
        console.error(error.response?.data?.message);
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || "Failed to add languages"
        );
      }
    }
);

const genreSlice = createSlice({
    name: 'genre',
    initialState,
    reducers:{
        onSelectGenre(state, action: PayloadAction<string[]>) {
            state.genreId = action.payload;
            // console.log(state.genreId)
        },
        fetchGenresStart(state) {
          state.loading = true;
          state.error = null;
        },
        fetchGenresSuccess(
          state,
          action: PayloadAction<{
            genres: IGenre[];
            currentPage: number;
            totalPages: number;
          }>
        ) {
          state.loading = false;
          state.genres = [...state.genres, ...action.payload.genres];
          state.currentPage = action.payload.currentPage;
          state.totalPages = action.payload.totalPages;
        },
        fetchGenresFailure(state, action: PayloadAction<string>) {
          state.loading = false;
          state.error = action.payload;
        },
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

export const { fetchGenresStart, fetchGenresSuccess, fetchGenresFailure, onSelectGenre } =
  genreSlice.actions;

export default genreSlice.reducer;