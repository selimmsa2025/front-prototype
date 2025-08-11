import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch user info
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/data/userInfo.json');
      // userInfo.json이 배열이므로 첫 번째 사용자를 기본으로 설정
      const userData = Array.isArray(response.data) ? response.data[0] : response.data;
      
      // 로그인 시간 추가
      const userWithLoginTime = {
        ...userData,
        loginTime: Date.now()
      };
      
      return userWithLoginTime;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// 특정 사용자로 로그인하는 액션
export const loginAsUser = createAsyncThunk(
  'user/loginAsUser',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get('/data/userInfo.json');
      const users = response.data;
      const selectedUser = users.find(user => user.USER_ID === userId);
      
      if (!selectedUser) {
        throw new Error('사용자를 찾을 수 없습니다.');
      }
      
      // 로그인 시간 추가
      const userWithLoginTime = {
        ...selectedUser,
        loginTime: Date.now()
      };
      
      return userWithLoginTime;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginAsUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(loginAsUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer; 