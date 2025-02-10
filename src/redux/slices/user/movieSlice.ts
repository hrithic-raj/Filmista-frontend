import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from '../../../interfaces/MovieInterface';
import axiosInstance from '../../../utils/axiosInstance';

interface MovieState {
  movies: IMovie[];
  selectedMovie: IMovie | null;
  isInWatchlist: Boolean;
  loading: Boolean;
  watchlistLoading: Boolean;
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  selectedMovie: null,
  isInWatchlist: false,
  loading: false,
  watchlistLoading: false,
  error: null,
};

export const fetchAllMovies = createAsyncThunk('movie/fetchAllMovies', async (_,{rejectWithValue})=>{
  try{
      const response = await axiosInstance.get('/users/movies');
      return response.data.movies;
  }catch(error: any){
      console.error(error.response?.data?.message)
      return rejectWithValue(error.response?.data?.message || "Failed to fetch genres");
  }
})
export const fetchMoviesById = createAsyncThunk('movie/fetchMoviesById', async (movieId:string,{rejectWithValue})=>{
  try{
      const response = await axiosInstance.get(`/users/movies/${movieId}`);
      return response.data.movie;
  }catch(error: any){
      console.error(error.response?.data?.message)
      return rejectWithValue(error.response?.data?.message || "Failed to fetch genres");
  }
})
export const checkMovieInWatchlist = createAsyncThunk('movie/checkMovieInWatchlist', async (movieId:string,{rejectWithValue})=>{
  try{
      const response = await axiosInstance.get(`/users/watchlist/check/${movieId}`);
      return response.data.isInWatchlist;
  }catch(error: any){
      console.error(error.response?.data?.message)
      return rejectWithValue(error.response?.data?.message || "Failed to fetch genres");
  }
})

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(fetchAllMovies.pending, (state)=>{
      state.loading = true;
    })
    .addCase(fetchAllMovies.fulfilled, (state, action: PayloadAction<IMovie[]>)=>{
      state.loading = false;
      state.movies = action.payload;
    })
    .addCase(fetchAllMovies.rejected, (state, action: PayloadAction<any>)=>{
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(fetchMoviesById.pending, (state)=>{
      state.loading = true;
    })
    .addCase(fetchMoviesById.fulfilled, (state, action: PayloadAction<IMovie>)=>{
      state.loading = false;
      state.selectedMovie = action.payload;
    })
    .addCase(fetchMoviesById.rejected, (state, action: PayloadAction<any>)=>{
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(checkMovieInWatchlist.pending, (state)=>{
      state.watchlistLoading = true;
    })
    .addCase(checkMovieInWatchlist.fulfilled, (state, action: PayloadAction<Boolean>)=>{
      state.watchlistLoading = false;
      state.isInWatchlist = action.payload;
    })
    .addCase(checkMovieInWatchlist.rejected, (state, action: PayloadAction<any>)=>{
      state.watchlistLoading = true;
      state.error = action.payload;
    })
  }
});


export default movieSlice.reducer;