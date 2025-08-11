import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

// **** 초기상태 정의
const initialState = {
  url: '/', //현재 주소
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    //리듀서 작성시 액션함수 자동생성.
    updateUrl (state, action) {
      state.url = action.payload.url;
    },
  },
});

export const { updateUrl } = mainSlice.actions;
export default mainSlice.reducer;
