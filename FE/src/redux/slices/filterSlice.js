import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiMobile} from '../../services/baseService';

const initialState = {
  items: {
    active: 'Mới nhất',
    fromValue: 0,
    toValue: 50000000,
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      console.log(action);
      state.items = action.payload;
    },
  },
});

export const {setFilter} = filterSlice.actions;

export default filterSlice.reducer;
