import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from '../../../interfaces/MovieInterface';
import axiosInstance from '../../../utils/axiosInstance';

interface MovieState {
  movies: IMovie[];
  searchResults: IMovie[];
  selectedMovie: IMovie | null;
  isInWatchlist: Boolean;
  loading: Boolean;
  searchLoading: Boolean;
  watchlistLoading: Boolean;
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  searchResults: [],
  selectedMovie: null,
  isInWatchlist: false,
  loading: false,
  searchLoading: false,
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
export const searchMovies = createAsyncThunk('movie/searchMovies', async (query:string,{rejectWithValue})=>{
  try{
      const response = await axiosInstance.get(`/users/movies/search?query=${query}`);
      return response.data.movies;
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
    .addCase(searchMovies.pending, (state) => {
      state.searchLoading = true;
      state.error = null;
    })
    .addCase(searchMovies.fulfilled, (state, action) => {
      state.searchLoading = false;
      state.searchResults = action.payload;
    })
    .addCase(searchMovies.rejected, (state, action: PayloadAction<any>) => {
      state.searchLoading = false;
      state.error = action.payload || 'Failed to fetch movies';
    });
  }
});


export default movieSlice.reducer;