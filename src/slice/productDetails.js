import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../components/Auth/supabaseClient";

// === async thunk to fetch single product ===
export const fetchProductById = createAsyncThunk(
  "productDetails/fetchProductById",
  async (id, thunkAPI) => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    product: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearProduct: (state) => {
      state.product = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearProduct } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
