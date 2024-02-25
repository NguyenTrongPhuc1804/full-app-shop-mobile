import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiMobile} from '../../services/baseService';

const initialState = {
  slider: null,
  isLoading: false,
};

export const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    reducerName: (state, action) => {},
  },
  extraReducers: builder => {
    builder.addCase(getSlider.fulfilled, (state, action) => {
      state.slider = action.payload;
      state.isLoading = false;
    });
  },
});
export const getSlider = createAsyncThunk(
  'slider/getSlider',
  async (payload, thunkApi) => {
    const {data} = await apiMobile.get('mobile/sliders?offset=0&limit=4');
    return data;
  },
);
export const {reducerName} = sliderSlice.actions;

export default sliderSlice.reducer;
