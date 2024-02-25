import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiMobile} from '../../services/baseService';
import {showNoti, showToast} from '../../toolkit/helper';

const initialState = {
  userToken: '',
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      AsyncStorage.removeItem('access_token');
      state.isLogin = false;
      state.userToken = '';
      showNoti('Đăng xuất thành công', 'success');
    },
    checkLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(loginSetUser.fulfilled, (state, action) => {
      const {access_token} = action.payload;
      state.userToken = access_token;
      state.isLogin = true;
    });
  },
});
export const loginSetUser = createAsyncThunk(
  'auth/loginSetUser',
  async (payload, thunkApi) => {
    const {data} = await apiMobile.post('user/login', payload);
    await AsyncStorage.setItem('access_token', data.access_token);
    return data;
  },
);
export const registerUser = createAsyncThunk(
  'user/register',
  async (payload, thunkApi) => {
    console.log(payload);
    const {data} = await apiMobile.post('user/register', payload);
    console.log(data);
  },
);
export const {logout, checkLogin} = authSlice.actions;

export default authSlice.reducer;
