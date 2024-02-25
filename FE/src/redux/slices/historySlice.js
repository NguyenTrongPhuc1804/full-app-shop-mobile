import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiMobile} from '../../services/baseService';

const initialState = {
  listHistory: [],
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getHistory.fulfilled, (state, action) => {
      state.listHistory = action.payload;
    });
  },
});

export const {} = historySlice.actions;
export const getHistory = createAsyncThunk(
  'history/getHistory',
  async (payload, thunkApi) => {
    try {
      const {data} = await apiMobile.get('bill/user/');
      console.log(data, 'data bill history');
      return data;
    } catch (err) {
      console.log(err);
    }
  },
);
export default historySlice.reducer;
