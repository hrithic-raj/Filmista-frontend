import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IGenre from '../../../interfaces/GenreInterface';
import ILanguage from '../../../interfaces/LanguageInterface';
import { CastMember } from '../../../interfaces/MovieInterface';

interface MovieState {
  title: string;
  description: string;
  releaseDate: string;
  duration: string;
  genres: IGenre[];
  languages: ILanguage[];
  poster: string;
  horizontalPoster: string;
  otherImages: string[];
  trailer: string;
  videos: string[];
  cast: CastMember[];
}

const initialState: MovieState = {
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
    setPoster: (state, action: PayloadAction<string>) => {
      state.poster = action.payload;
    },
    setHorizontalPoster: (state, action: PayloadAction<string>) => {
      state.horizontalPoster = action.payload;
    },
    setOtherImages: (state, action: PayloadAction<string[]>) => {
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