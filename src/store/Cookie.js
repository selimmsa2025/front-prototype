import { Cookies } from 'react-cookie';
import axios from 'axios';
import * as URL from 'config/Url';
const cookies = new Cookies();

// Refresh Token을 Cookie에 저장하기 위한 함수
export const setRefreshToken = (refreshToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);

  return cookies.set('refresh-token', refreshToken, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(expireDate),
  });
};

//Cookie에 저장된 Refresh Token 값을 갖고 오기 위한 함수
export const getCookieToken = () => {
  return cookies.get('refresh-token');
};

//Cookie 삭제를 위한 함수. 로그아웃 시 사용
//HttpOnly, Secure 쿠키라 삭제 되지 않아서 logout을 이용하여 쿠키 삭제
export const removeCookieToken = async () => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(`${URL.API_URL_AUTH}/logout`);
  if (response.data.status === 'OK') {
    //console.log('refresh-token 쿠키 삭제 성공');
  } else {
    //console.log('refresh-token 쿠키 삭제 실패');
  }
  //return cookies.remove('refresh-token', { sameSite: 'strict', path: '/' });
};
