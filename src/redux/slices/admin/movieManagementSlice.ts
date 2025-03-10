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
  title: string;
  description: string;
  releaseDate: string;
  duration: string;
  genres: IGenre[];
  languages: ILanguage[];
  poster: File | string;
  horizontalPoster: File | string;
  otherImages: (string | File)[];
  trailer: string;
  videos: string[];
  cast: CastMember[];
}

const initialState: MovieState = {
  movies: [],
  selectedMovie: null,
  loading: false,
  error: null,
  title: '',
  description: '',
  releaseDate: '',
  duration: '',
  genres: [],
  languages: [],
  poster: '',
  horizontalPoster: '',
  otherImages: [],
  trailer: '',
  videos: [],
  cast: [],
};

export const fetchAllMovies = createAsyncThunk('movieManagement/fetchAllMovies', async (_,{rejectWithValue})=>{
  try{
      const response = await axiosInstance.get('/admin/movies');
      return response.data.movies;
  }catch(error: any){
      console.error(error.response?.data?.message)
      return rejectWithValue(error.response?.data?.message || "Failed to fetch movies");
  }
})
export const fetchMoviesById = createAsyncThunk('movieManagement/fetchMoviesById', async (movieId:string,{rejectWithValue})=>{
  try{
      const response = await axiosInstance.get(`/admin/movies/${movieId}`);
      return response.data.movie;
  }catch(error: any){
      console.error(error.response?.data?.message)
      return rejectWithValue(error.response?.data?.message || "Failed to fetch movie");
  }
})

export const addMovie = createAsyncThunk('movieManagement/addMovie', async (formData:FormData,{rejectWithValue})=>{
  try{
      const response = await axiosInstance.post('/admin/movies',formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data.newMovie;
  }catch(error: any){
      console.error(error.response?.data?.message)
      return rejectWithValue(error.response?.data?.message || "Failed to fetch genres");
  }
})

export const updateMovie = createAsyncThunk('movieManagement/updateMovie', async ({movieId, formData}:{movieId: string; formData: FormData},{rejectWithValue})=>{
  try{
      const response = await axiosInstance.patch(`/admin/movies/${movieId}`,formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data.updatedMovie;
  }catch(error: any){
      console.error(error.response?.data?.message)
      return rejectWithValue(error.response?.data?.message || "Failed to fetch genres");
  }
})

const movieManagementSlice = createSlice({
  name: 'movieManagement',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setReleaseDate: (state, action: PayloadAction<string>) => {
      state.releaseDate = action.payload;
    },
    setDuration: (state, action: PayloadAction<string>) => {
      state.duration = action.payload;
    },
    setGenres: (state, action: PayloadAction<IGenre[]>) => {
      state.genres = action.payload;
    },
    setLanguages: (state, action: PayloadAction<ILanguage[]>) => {
      state.languages = action.payload;
    },
    setPoster: (state, action: PayloadAction< string | File >) => {
      state.poster = action.payload;
    },
    setHorizontalPoster: (state, action: PayloadAction< string | File >) => {
      state.horizontalPoster = action.payload;
    },
    setOtherImages: (state, action: PayloadAction<(string | File)[]>) => {
      state.otherImages = action.payload;
    },
    setTrailer: (state, action: PayloadAction<string>) => {
      state.trailer = action.payload;
    },
    setVideos: (state, action: PayloadAction<string[]>) => {
      state.videos = action.payload;
    },
    setCast: (state, action: PayloadAction<CastMember[]>) => {
      state.cast = action.payload;
    },
    clearMovieData: () => initialState,
  },
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

export const {
  setTitle,
  setDescription,
  setReleaseDate,
  setDuration,
  setGenres,
  setLanguages,
  setPoster,
  setHorizontalPoster,
  setOtherImages,
  setTrailer,
  setVideos,
  setCast,
  clearMovieData,
} = movieManagementSlice.actions;

export default movieManagementSlice.reducer;