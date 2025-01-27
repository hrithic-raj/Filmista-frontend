import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";
import ILanguage from "../../../interfaces/LanguageInterface";


interface languageState {
    languages: ILanguage[];
    selectedLanguage: ILanguage | null;
    langId: string[];
    loading: boolean;
    error: string | null;
}

const initialState: languageState ={
    languages: [],
    selectedLanguage: null,
    langId: [],
    loading: false,
    error: null,
};

export const fetchAllLanguages = createAsyncThunk('languages/fetchAllLanguages', async (_,{rejectWithValue})=>{
    try{
        const response = await axiosInstance.get('/users/languages');
        return response.data.languages;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch languages");
    }
})

export const fetchLanguageById = createAsyncThunk('languages/fetchLanguageById', async (langId: string, {rejectWithValue})=>{
    try{
        const response = await axiosInstance.get(`/users/languages/${langId}`);
        return response.data.language;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch language");
    }
})

export const addUserLanguages = createAsyncThunk(
    'languages/addUserLanguages',
    async (langIds: string[], thunkAPI) => {
      try {
        console.log(langIds)
        const response = await axiosInstance.post(`/users/languages`, {langIds});
  
        return response.data.updatedUser;
      } catch (error: any) {
        console.error(error.response?.data?.message);
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || "Failed to add languages"
        );
      }
    }
);
  

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers:{
        onSelectLanguage(state, action: PayloadAction<string[]>) {
            state.langId = action.payload;
            // console.log(state.genreId)
        },
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

export const {onSelectLanguage} = languageSlice.actions;

export default languageSlice.reducer;