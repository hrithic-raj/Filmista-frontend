import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";

interface IUser {
    _id: string;
    name: string;
    profilePicture: string;
}

interface Review {
  _id: string;
  user: IUser;
  movie: string;
  title: string;
  content: string;
  likes: string[];
  dislikes: string[];
  createdAt: string;
}

interface ReviewState {
  reviews: Review[];
  status: "idle" | "loading" | "failed";
}

const initialState: ReviewState = {
  reviews: [],
  status: "idle",
};

export const fetchReviews = createAsyncThunk("reviews/fetchReviews", async (movieId: string, {rejectWithValue}) => {
    try{
        const response = await axiosInstance.get(`/users/reviews/${movieId}`);
        return response.data.reviews;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch reviews");
    }
});

export const addReview = createAsyncThunk("reviews/addReview", async ({ movieId, title, content }: { movieId: string; title: string; content: string },{rejectWithValue}) => {
    try{
        const response = await axiosInstance.post('/users/reviews', { movieId, title, content });
        return response.data.review;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to add reviews");
    }
});

export const likeReview = createAsyncThunk("reviews/likeReview", async ({ reviewId}: { reviewId: string }, {rejectWithValue}) => {
    try{
        const response = await axiosInstance.post(`/users/reviews/like/${reviewId}`);
        return response.data.updatedReview;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to like reviews");
    }
});

export const dislikeReview = createAsyncThunk("reviews/dislikeReview", async ({ reviewId }: { reviewId: string },{rejectWithValue}) => {
    try{
        const response = await axiosInstance.post(`/users/reviews/dislike/${reviewId}`);
        return response.data.updatedReview;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to dislike reviews");
    }
});

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.status = "idle";
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(likeReview.fulfilled, (state, action) => {
        const review = state.reviews.find((r) => r._id === action.payload._id);
        if (review) {
          review.dislikes = action.payload.dislikes;
          review.likes = action.payload.likes;
        }
      })
      .addCase(dislikeReview.fulfilled, (state, action) => {
        const review = state.reviews.find((r) => r._id === action.payload._id);
        if (review) {
          review.likes = action.payload.likes;
          review.dislikes = action.payload.dislikes;
        }
      });
  },
});

export default reviewSlice.reducer;
