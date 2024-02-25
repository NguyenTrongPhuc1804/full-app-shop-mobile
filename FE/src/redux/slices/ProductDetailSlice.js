import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiMobile} from '../../services/baseService';

const initialState = {
  category: null,
  listProductInCategory: [],
};

export const ProductDetail = createSlice({
  name: 'category',
  initialState,
  reducers: {
    reducerName: (state, action) => {},
  },
  extraReducers: builder => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.category = action.payload;
    });
  },
});
export const getCategory = createAsyncThunk(
  'category/getCategory',
  async (payload, thunkApi) => {
    const {data} = await apiMobile.get('category/?page=1&limit=4');
    return data;
  },
);

export const {reducerName} = ProductDetail.actions;

export default ProductDetail.reducer;
