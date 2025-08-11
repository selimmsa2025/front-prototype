import { createSlice } from '@reduxjs/toolkit';
import store from 'store';

export const TOKEN_TIME_OUT = 600 * 1000;

//createSlice 를 이용하여 간단하게 redux 액션 생성자와 전체 슬라이스에 대한 reducer를 선언하여 사용
export const tokenSlice = createSlice({
  name: 'authToken',
  initialState: {
    //현재 로그인 여부를 간단히 확인하기 위해 선언

    //Access Token 저장
    accessToken: null,

    //Access Token 의 만료 시간
    expireTime: null,

    //Refresh Token 만료시간
    refreshTime: null,
  },
  reducers: {
    //Access Token 정보를 저장
    SET_TOKEN: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.expireTime = new Date().getTime() + Number(action.payload.tknExpirationTime);
      state.refreshTime = new Date().getTime() + Number(action.payload.tknRefreshTime);

      sessionStorage.setItem('authenticated', true);
      sessionStorage.setItem('userGrntNo', action.payload.userGrntNo);
      sessionStorage.setItem('instTypeCd', action.payload?.instTypeCd);
      sessionStorage.setItem('instGrntNo', action.payload?.instGrntNo);
      sessionStorage.setItem('intgAcntId', action.payload?.intgAcntId);
      sessionStorage.setItem('refreshTime', state.refreshTime);
    },
    //값을 모두 초기화함으로써 Access Token에 대한 정보도 삭제
    DELETE_TOKEN: (state) => {
      sessionStorage.setItem('authenticated', false);
      sessionStorage.setItem('refreshToken', false);
      state.accessToken = null;
      state.expireTime = null;
      state.refreshTime = null;
      sessionStorage.clear();
    },
  },
});

//토큰 정보 반환
export const getTokenInfo = () => {
  const authenticated = sessionStorage.getItem('authenticated') ? true : false;
  const accessToken = store.getState().authToken.accessToken;
  const expireTime = store.getState().authToken.expireTime;
  const refreshTime = store.getState().authToken.refreshTime;

  return {
    authenticated: authenticated,
    accessToken:
      accessToken !== null &&
        accessToken !== '' &&
        accessToken !== 'undefined' &&
        accessToken !== undefined
        ? accessToken
        : null,
    expireTime: expireTime !== null ? expireTime : null,
    refreshTime: refreshTime !== null ? refreshTime : null,
  };
};

export const { SET_TOKEN, DELETE_TOKEN } = tokenSlice.actions;

export default tokenSlice.reducer;
