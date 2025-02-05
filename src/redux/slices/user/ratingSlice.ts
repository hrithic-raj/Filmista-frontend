import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";

interface RatingState {
  usersRatings: { userId: string; rating: number }[];
  rating: number;
}

const initialState: RatingState = {
    usersRatings: [],
    rating: 0,
};

export const fetchMovieRatings = createAsyncThunk(
  "ratings/fetchMovieRatings",
  async (movieId: string) => {
    const response = await axiosInstance.get(`/users/ratings/${movieId}`);
    return response.data;
  }
);

export const submitRating = createAsyncThunk(
  "ratings/submitRating",
  async ({ movieId, rating }: { movieId: string; rating: number }) => {
    const response = await axiosInstance.post(`/users/ratings/${movieId}`, { rating });
    return response.data;
  }
);

const ratingSlice = createSlice({
  name: "ratings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieRatings.fulfilled, (state, action) => {
      state.usersRatings = action.payload.ratings;
      state.rating = action.payload.averageRating;
    });
    builder.addCase(submitRating.fulfilled, (state, action) => {
      state.rating = action.payload.averageRating;
    });
  },
});

export default ratingSlice.reducer;
