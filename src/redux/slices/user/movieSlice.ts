import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import IGenre from '../../../interfaces/GenreInterface';
import ILanguage from '../../../interfaces/LanguageInterface';
import { CastMember, IMovie } from '../../../interfaces/MovieInterface';
import axiosInstance from '../../../utils/axiosInstance';

interface MovieState {
  movies: IMovie[];
  selectedMovie: IMovie | null;
  loading: Boolean;
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  selectedMovie: null,
  loading: false,
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
      console.log(response.data.movie)
      return response.data.movie;
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
  }
});


export default movieSlice.reducer;