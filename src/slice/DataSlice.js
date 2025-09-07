import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {supabase} from '../components/Auth/supabaseClient.jsx'

export const GetData = createAsyncThunk('data/getData',async(_,thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try{
        let { data, error } = await supabase
      .from("products")   
      .select("*");  

        if(error){
            return rejectWithValue(error.message)
        }

        return data;    

    }catch(err){
        return rejectWithValue(err.message)
    }
})

let initState = {data : [] , loading : false , errors : null , categories : []};

const DataSlice = createSlice({
    name:'data',
    initialState : initState,
    extraReducers : (builder) => {
        builder 
        .addCase(GetData.pending,(state) => {
            state.loading = true;
        })
        .addCase(GetData.fulfilled,(state,action) => {
            state.loading = false;
            state.data = action.payload;
            state.categories = [...new Set(state.data.map(el => { return el.category}))];
            
        })
        .addCase(GetData.rejected,(state,action) => {
            state.loading = false;
            state.errors = action.payload;
        })
    }
})

export default DataSlice.reducer;