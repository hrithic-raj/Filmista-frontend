import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance";
import ILanguage from "../../../interfaces/LanguageInterface";


interface genreManagementState {
    languages: ILanguage[];
    selectedLanguage: ILanguage | null;
    loading: boolean;
    error: string | null;
}

const initialState: genreManagementState ={
    languages: [],
    selectedLanguage: null,
    loading: false,
    error: null,
};

export const fetchAllLanguages = createAsyncThunk('genreManagement/fetchAllLanguages', async (_,{rejectWithValue})=>{
    try{
        const response = await axiosInstance.get('/admin/languages');
        return response.data.languages;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch genres");
    }
})

export const addLanguage = createAsyncThunk(
  'genreManagement/addLanguage',
  async (formData: FormData, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post(`/admin/languages`,formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data.language
    } catch (error: any) {
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to add users");
    }
}
);
export const updateLanguage = createAsyncThunk(
    'genreManagement/updateLanguage',
    async (
        {langId, formData}:{langId: string; formData: FormData}, 
        { rejectWithValue }
    ) => {
        try {
            const response = await axiosInstance.patch(`/admin/languages/${langId}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            return response.data.language;
        } catch (error: any) {
            console.error(error.response?.data?.message)
            return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
        }
    }
  );
  

export const archiveLanguage = createAsyncThunk('genreManagement/archiveLanguage', async (langId: string, {rejectWithValue})=>{
    try{
        await axiosInstance.patch(`/admin/languages/${langId}/archive`);
        return langId;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
    }
})

export const fetchLanguageById = createAsyncThunk('genreManagement/fetchLanguageById', async (langId: string, {rejectWithValue})=>{
    try{
        const response = await axiosInstance.get(`/admin/languages/${langId}`);
        return response.data.language;
    }catch(error: any){
        console.error(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
    }
})

const languageManagementSlice = createSlice({
    name: 'languageManagement',
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
        .addCase(archiveLanguage.fulfilled, (state, action: PayloadAction<string>)=>{
            const langId = action.payload;
            const language = state.languages.find((g)=>g._id === langId);
            const selectedLanguage = state.selectedLanguage;
            if(language) language.isArchive = !language.isArchive;
            if(selectedLanguage) selectedLanguage.isArchive = !selectedLanguage.isArchive;
        })
        .addCase(addLanguage.pending, (state)=>{
            state.loading = true;
        })
        .addCase(addLanguage.fulfilled, (state, action: PayloadAction<ILanguage>)=>{
            state.loading = false;
            state.languages.push(action.payload);
        })
        .addCase(addLanguage.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateLanguage.pending, (state)=>{
            state.loading = true;
        })
        .addCase(updateLanguage.fulfilled, (state, action: PayloadAction<ILanguage>)=>{
            state.loading = false;
            const index = state.languages.findIndex((language)=>language._id === action.payload._id);

            if(index !== -1) state.languages[index] = action.payload;

            if(state.selectedLanguage) state.selectedLanguage = action.payload;
        })
        .addCase(updateLanguage.rejected, (state, action: PayloadAction<any>)=>{
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

export default languageManagementSlice.reducer;