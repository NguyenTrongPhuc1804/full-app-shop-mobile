import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiMobile} from '../../services/baseService';
import {showToast} from '../../toolkit/helper';

const initialState = {
  user: [],
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getInfoUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(updateInfoUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});
export const getInfoUser = createAsyncThunk(
  'auth/getInfoUser',
  async (payload, thunkApi) => {
    const {data} = await apiMobile.get('user/me');
    return data;
  },
);
export const updateInfoUser = createAsyncThunk(
  'auth/updateInfoUser',
  async (payload, thunkApi) => {
    const {data} = await apiMobile.put('user/update', payload);
    return data;
  },
);

export const {} = userSlice.actions;

export default userSlice.reducer;
