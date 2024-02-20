import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiMobile} from '../../services/baseService';
import {showNoti, showToast} from '../../toolkit/helper';

const initialState = {
  cart: [],
  sum: 0,
  totalCart: 0,
};

export const cartSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addCart: (state, action) => {
      let index = state.cart.findIndex(item => item.id == action.payload.id);
      if (index != -1) {
        state.cart[index].quantity += action.payload.quantity;
        showNoti('Đã thay đổi số lượng sản phẩm', 'success');
      } else {
        state.cart = [
          ...state.cart,
          {...action.payload, quantity: action.payload.quantity || 1},
        ];
        showNoti('Thêm giỏ hàng thành công', 'success');
      }
      state.sum = state.cart.reduce((pre, cur) => pre + cur.quantity, 0);
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
      showNoti('Đã xóa sản phẩm khỏi giỏ hàng', 'success');
    },
    removeAllCart: (state, action) => {
      state.cart = [];
    },
    downCart: (state, action) => {
      let index = state.cart.findIndex(item => item.id == action.payload.id);
      if (index != -1) {
        state.cart[index].quantity -= action.payload.quantity;
        showNoti('Đã thay đổi số lượng sản phẩm', 'success');
      }
      state.sum = state.cart.reduce((pre, cur) => pre + cur.quantity, 0);
    },
    sumTotalCart: (state, action) => {
      state.totalCart = state.cart.reduce(
        (pre, cur) => pre + cur.price_sale_off * cur.quantity,
        0,
      );
    },
  },
  extraReducers: builder => {},
});

export const {addCart, removeCart, downCart, sumTotalCart, removeAllCart} =
  cartSlice.actions;

export default cartSlice.reducer;
