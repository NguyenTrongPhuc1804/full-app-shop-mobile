import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiMobile} from '../../services/baseService';
import {showNoti} from '../../toolkit/helper';

const initialState = {
  bill: [],
  orderItem: [],
};

export const buySlice = createSlice({
  name: 'buy',
  initialState,
  reducers: {
    setActiveDrawer: (state, action) => {
      state.activeDrawer = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(saveCart.fulfilled, (state, action) => {
      state.bill = action.payload;
    });
    builder.addCase(checkCode.fulfilled, (state, action) => {
      state.orderItem = action.payload;
    });
  },
});
export const saveCart = createAsyncThunk(
  'buy/saveCart',
  async (payload, thunkApi) => {
    try {
      const {data} = await apiMobile.post('bill/create', payload);
      showNoti('Mua hàng thành công', 'success');
      return data;
    } catch (err) {
      console.log(err);
    }
  },
);
export const checkCode = createAsyncThunk(
  'buy/checkCode',
  async (payload, thunkApi) => {
    try {
      const {data} = await apiMobile.get(`bill/${payload}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const {setActiveDrawer} = buySlice.actions;

export default buySlice.reducer;
