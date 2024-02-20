import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiMobile} from '../../services/baseService';
import {showNoti} from '../../toolkit/helper';

const initialState = {
  favoriteItem: [],
};

export const favoriteSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      let index = state.favoriteItem.findIndex(item => item === action.payload);
      if (index !== -1) {
        state.favoriteItem = [...state.favoriteItem].filter(
          item => item != action.payload,
        );
        showNoti('Đã thay đổi danh sách yêu thích !!', 'success');
      } else {
        state.favoriteItem = [...state.favoriteItem, action.payload];
        showNoti('Đã thêm sản phẩm vào yêu thích !!', 'success');
      }
    },
    removeFavorite: (state, action) => {
      state.favoriteItem = [];
    },
  },
});

export const {setFavorite, removeFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
