import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import IUser from "../../interfaces/UserInterface";
import ICelebrity from "../../interfaces/CelebrityInterface";
import IAdmin from "../../interfaces/AdminInterface";
import axiosInstance from "../../utils/axiosInstance";
import IGenre from "../../interfaces/GenreInterface";
import ILanguage from "../../interfaces/LanguageInterface";
// import { persistor } from "../persistor";



interface AuthState {
    user: IUser | null;
    admin: IAdmin | null;
    celebrity: ICelebrity | null;
    genres:IGenre[];
    languages: ILanguage[];
    accessToken: string| null;
    refreshToken:string | null;
    loading: boolean;
    googleLoading: boolean;
    error: string | null;
    googleError: string | null;
}
const initialState: AuthState = {
    user: null,
    admin: null,
    celebrity: null,
    genres:[],
    languages: [],
    accessToken: null,
    refreshToken: null,
    loading: false,
    googleLoading: false,
    googleError: null,
    error:null,
};

export const sendOtp = createAsyncThunk('auth/sendOtp', async (email: string, { rejectWithValue }) => {
    try{
        const response = await axiosInstance.post('/auth/send-otp', { email });
        return response.data;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to send OTP");
    }
});

export const signup = createAsyncThunk('auth/signup', async (formData: { name: string; email: string; password: string; otp: string }, {rejectWithValue})=>{
    try{
        const response = await axiosInstance.post('/auth/signup', formData);
        return response.data;
    }catch(error: any){
        console.error("Signup failed",error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Signup failed");
    }
})

export const signin = createAsyncThunk('auth/signin', async (formData: { email: string; password: string }, { rejectWithValue })=>{
    try{
        const response = await axiosInstance.post('/auth/signin', formData);
        return response.data;
    }catch(error: any){
        console.error("Signin failed",error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Signin failed");
    }
})
export const signout = createAsyncThunk('auth/signout', async (_, { dispatch })=>{
    try{
        await axiosInstance.post('/auth/signout');
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        dispatch(resetAuthState());
        // await persistor.purge();
    }catch(error: any){
        console.error("Signout failed",error.response?.data?.message)
    }
})

export const googleAuth = createAsyncThunk("auth/googleAuth", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get("/auth/google/callback");
        return response.data;
    } catch (error: any) {
        console.error(error.response?.data?.message)
      return rejectWithValue(error.response?.data?.message || "Google authentication failed");
    }
  });

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        resetAuthState(state) {
            state.user = null;
            state.admin = null;
            state.celebrity = null;
            state.accessToken= null;
            state.refreshToken= null;
        },
        setAccessToken(state, action: PayloadAction<string>){
            state.accessToken = action.payload;
        },
        clearAccessToken(state){
            state.accessToken = null;
        },
        setGenres: (state, action: PayloadAction<IGenre[]>) => {
            state.genres = action.payload;
        },
        setLanguages: (state, action: PayloadAction<ILanguage[]>) => {
            state.languages = action.payload;
        },
    },
    extraReducers:(builder)=>{
        builder
        // send OTP
        .addCase(sendOtp.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(sendOtp.fulfilled, (state) => {
            state.loading = false;
        })
        .addCase(sendOtp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        // signup
        .addCase(signup.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(signup.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            localStorage.setItem('token', action.payload.accessToken);
            localStorage.setItem('role', action.payload.role);
        })
        .addCase(signup.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        // signin
        .addCase(signin.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(signin.fulfilled, (state, action) => {
            state.loading = false;
            const role = action.payload.role;
            if(role==="admin") state.admin = action.payload.user;
            else if(role==="celebrity") state.celebrity = action.payload.user;
            else if(role==="user") state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            localStorage.setItem('token', action.payload.accessToken);
            localStorage.setItem('role', role);
        })
        .addCase(signin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        // google auth
        .addCase(googleAuth.pending, (state) => {
            state.googleLoading = true;
            state.googleError = null;
        })
        .addCase(googleAuth.fulfilled, (state, action) => {
            state.googleLoading = false;
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            localStorage.setItem('token', action.payload.accessToken);
            localStorage.setItem('role', action.payload.role);
        })
        .addCase(googleAuth.rejected, (state, action) => {
            state.googleLoading = false;
            state.googleError = action.payload as string;
        })
    }
})


export const { resetAuthState, setAccessToken, clearAccessToken, setGenres, setLanguages} = authSlice.actions;
export default authSlice.reducer;