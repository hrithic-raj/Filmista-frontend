import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";
import { IMovie } from "../../../interfaces/MovieInterface";

interface Movie {
  _id: string;
  userId:string;
  movieId: IMovie;
}

interface WatchlistState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: WatchlistState = {
  movies: [],
  loading: false,
  error: null,
};

export const fetchWatchlist = createAsyncThunk(
  "watchlist/fetchWatchlist",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/users/watchlist");
      return response.data.watchlist?.movies || [];
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch watchlist");
    }
  }
);

export const addToWatchlist = createAsyncThunk(
  "watchlist/addToWatchlist",
  async (movieId: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/users/watchlist/${movieId}`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data.watchlist.movies;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to add movie to watchlist");
    }
  }
);

export const removeFromWatchlist = createAsyncThunk(
  "watchlist/removeFromWatchlist",
  async (movieId: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/users/watchlist/${movieId}`);
      return response.data.watchlist.movies;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to remove movie from watchlist");
    }
  }
);

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWatchlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWatchlist.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchWatchlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addToWatchlist.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(removeFromWatchlist.fulfilled, (state, action) => {
        state.movies = action.payload;
      });
  },
});

export default watchlistSlice.reducer;
