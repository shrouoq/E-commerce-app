import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../components/Auth/supabaseClient.jsx";

// Fetch products
export const GetData = createAsyncThunk("data/getData", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    let { data, error } = await supabase.from("products").select("*");

    if (error) return rejectWithValue(error.message);

    return data;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

let initState = {
  data: [],
  filteredData: [],
  categories: [],
  filters: {
    category: "All",
    priceRange: [0, 100], // min , max
  },
  loading: false,
  errors: null,
};

const filterSlice = createSlice({
  name: "data",
  initialState: initState,
  reducers: {
    setCategoryFilter: (state, action) => {
      state.filters.category = action.payload;
      filterSlice.caseReducers.applyFilters(state);
    },
    setPriceFilter: (state, action) => {
      state.filters.priceRange = action.payload; // [min, max]
      filterSlice.caseReducers.applyFilters(state);
    },
    applyFilters: (state) => {
      const { category, priceRange } = state.filters;
      state.filteredData = state.data.filter((item) => {
        const price = Number(item.price);
        const inCategory =
          category === "All" ? true : item.category === category;
        const inPrice = price >= priceRange[0] && price <= priceRange[1];
        return inCategory && inPrice;
      });
    },
    resetFilters: (state) => {
      state.filters = {
        category: "All",
        priceRange: [0, 100], // default
      };
      state.filteredData = state.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetData.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.filteredData = action.payload; // default
        state.categories = [
          "All",
          ...new Set(action.payload.map((el) => el.category)),
        ];
      })
      .addCase(GetData.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload;
      });
  },
});

export const { setCategoryFilter, setPriceFilter, resetFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
