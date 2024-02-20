import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiMobile} from '../../services/baseService';
import axios from 'axios';

const initialState = {
  listProduct: [],
  listProductSpecial: [],
  listProductIsNew: [],
  allProduct: [],
  productDetail: {},
  listSearchProduct: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reducerName: (state, action) => {},
  },
  extraReducers: builder => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.listProduct = action.payload;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      console.log('error getProduct');
    });

    builder.addCase(getProductSpecial.fulfilled, (state, action) => {
      state.listProductSpecial = action.payload;
    });
    builder.addCase(getProductSpecial.rejected, (state, action) => {
      console.log('error getProductSpecial');
      console.log(action.payload);
    });

    builder.addCase(getProductIsNew.fulfilled, (state, action) => {
      state.listProductIsNew = action.payload;
    });
    builder.addCase(getProductIsNew.rejected, (state, action) => {
      console.log('error getProductIsNew');
    });

    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.allProduct = action.payload;
      console.log(action.payload, 'data');
    });
    builder.addCase(getAllProduct.rejected, (state, action) => {
      console.log('error getAllProduct');
    });

    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.productDetail = action.payload;
    });
    builder.addCase(getSingleProduct.rejected, (state, action) => {
      console.log('error getSingleProduct');
    });

    builder.addCase(getSearchProduct.fulfilled, (state, action) => {
      state.listSearchProduct = action.payload;
    });
    builder.addCase(getSearchProduct.rejected, (state, action) => {
      console.log('error getSearchProduct');
    });
  },
});
export const getProduct = createAsyncThunk(
  'product/getProduct',
  async (payload, thunkApi) => {
    const {data} = await apiMobile.get(`product`);
    return data;
  },
);
export const getProductSpecial = createAsyncThunk(
  'product/getProductSpecial',
  async (payload, thunkApi) => {
    const {data} = await apiMobile.get(
      `product/?order=asc&sortBy=price&special=true`,
    );
    console.log(data, 'data special');

    return data;
  },
);
export const getProductIsNew = createAsyncThunk(
  'product/getProductIsNew',
  async (payload, thunkApi) => {
    const {data} = await apiMobile.get(
      `product/?order=asc&sortBy=price&special=true`,
    );
    return data;
  },
);
export const getAllProduct = createAsyncThunk(
  'product/getAllProduct',
  async (
    {order = 'asc', sortBy = 'id', min_price = '', max_price = ''},
    thunkApi,
  ) => {
    if (min_price !== '' || max_price !== '') {
      const {data} = await apiMobile.get(
        `product/?offset=0&sortBy=${sortBy}&order=${order}&min_price=${min_price}&max_price=${max_price}`,
      );
      return data;
    }
    const {data} = await apiMobile.get(
      `product/?offset=0&sortBy=id&order=asc`,
      {},
    );
    console.log(data);
    return data;
  },
);
export const getSingleProduct = createAsyncThunk(
  'product/getSingleProduct',
  async (payload, thunkApi) => {
    const {data} = await apiMobile.get(`product/${payload}`);
    console.log(data, 'sigle product');
    return data;
  },
);
export const getSearchProduct = createAsyncThunk(
  'product/getSearchProduct',
  async (payload, thunkApi) => {
    const {data} = await apiMobile.get(
      `mobile/product?search=${payload}&offset=0&sortBy=id&order=asc`,
    );
    return data;
  },
);
export const {reducerName} = productSlice.actions;

export default productSlice.reducer;
