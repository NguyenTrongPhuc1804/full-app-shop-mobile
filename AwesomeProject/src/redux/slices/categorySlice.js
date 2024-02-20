import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiMobile} from '../../services/baseService';

const initialState = {
  category: null,
  listProductInCategory: [],
  activeDrawer: 'Trang chủ',
  isLoading: true,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setActiveDrawer: (state, action) => {
      state.activeDrawer = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.category = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProductInCategory.fulfilled, (state, action) => {
      state.listProductInCategory = action.payload;
    });
  },
});
export const getCategory = createAsyncThunk(
  'category/getCategory',
  async (payload, thunkApi) => {
    const {data} = await apiMobile.get('category/?page=1&limit=5');
    return data;
  },
);
export const getProductInCategory = createAsyncThunk(
  'category/getProductInCategory',
  async (
    {id, order = 'asc', sortBy = 'id', min_price, max_price},
    thunkApi,
  ) => {
    if (min_price !== '' && max_price !== '') {
      const {data} = await apiMobile.get(
        `category/${id}/product/?offset=0&sortBy=${sortBy}&order=${order}&min_price=${min_price}&max_price=${max_price}`,
      );
      return data;
    }
    const {data} = await apiMobile.get(
      `category/${id}/product/?offset=0&sortBy=id&order=asc`,
    );
    return data;
  },
);

export const {setActiveDrawer} = categorySlice.actions;

export default categorySlice.reducer;
