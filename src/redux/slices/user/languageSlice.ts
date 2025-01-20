import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";
import ILanguage from "../../../interfaces/LanguageInterface";


interface languageState {
    languages: ILanguage[];
    selectedLanguage: ILanguage | null;
    loading: boolean;
    error: string | null;
}

const initialState: languageState ={
    languages: [],
    selectedLanguage: null,
    loading: false,
    error: null,
};

export const fetchAllLanguages = createAsyncThunk('genre/fetchAllLanguages', async (_,{rejectWithValue})=>{
    try{
        const response = await axiosInstance.get('/users/languages');
        return response.data.languages;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch genres");
    }
})

export const fetchLanguageById = createAsyncThunk('genre/fetchLanguageById', async (langId: string, {rejectWithValue})=>{
    try{
        const response = await axiosInstance.get(`/users/languages/${langId}`);
        return response.data.language;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
    }
})

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllLanguages.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fetchAllLanguages.fulfilled, (state, action: PayloadAction<ILanguage[]>)=>{
            state.loading = false;
            state.languages = action.payload;
        })
        .addCase(fetchAllLanguages.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(fetchLanguageById.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fetchLanguageById.fulfilled, (state, action: PayloadAction<ILanguage>)=>{
            state.loading = false;
            state.selectedLanguage = action.payload
        })
        .addCase(fetchLanguageById.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
        
    }
})

export default languageSlice.reducer;