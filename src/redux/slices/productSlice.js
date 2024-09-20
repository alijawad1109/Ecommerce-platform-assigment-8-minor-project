import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/api";

// Thunk to fetch all products
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fetchProducts();
    return response; // Ensure response is the array of products
  }
);

// Thunk to fetch a single product by ID
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    return response.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    featured: [],
    allProducts: [],
    status: "idle", // You might want to manage loading status
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload); // Add the new product to the list
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading"; // Set status to loading
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded"; // Set status to succeeded
        state.featured = action.payload.slice(0, 5); // Get featured products
        state.allProducts = action.payload; // Update all products
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed"; // Set status to failed
        state.error = action.error.message; // Capture error message
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        const existingProduct = state.allProducts.find(
          (prod) => prod.id === action.payload.id
        );
        if (!existingProduct) {
          state.allProducts.push(action.payload); // Add product if not present
        }
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.error = action.error.message; // Capture error message for product fetch
      });
  },
});

export default productSlice.reducer;
