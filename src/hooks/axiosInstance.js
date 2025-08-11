import axios from 'axios';

import { getTokenInfo } from 'store/modules/Auth';
import { refreshToken } from 'components/utils/LoginApi';

let isRefreshing = false;
let refreshSubscribers = [];

//axios instance 생성
const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*'
  },
  //timeout: 5000, //5초
});

//리프레시 토큰 대기요청건 처리
const onRefreshed = (newAccessToken) => {
  refreshSubscribers.forEach((callback) => callback(newAccessToken));
  refreshSubscribers = [];
}

//요청 시 액세스 토큰 추가
axiosInstance.interceptors.request.use(async function (config) {
  const { authenticated, expireTime, accessToken } = getTokenInfo();

  if (authenticated && (!accessToken || new Date().getTime() >= expireTime)) {
    if (!isRefreshing) { //리프레시 토큰 요청이 진행 중이지 않은 경우
      isRefreshing = true;

      //액세스 토큰을 재발급하고 리프레시 토큰 대기요청건 수행
      try {
        const newAccessToken = (await refreshToken()).accessToken;
        axiosInstance.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
        onRefreshed(newAccessToken);
        return { ...config, headers: { ...config.headers, Authorization: `Bearer ${newAccessToken}` } };

      } catch (error) {
        return Promise.reject(error);

      } finally {
        isRefreshing = false;
      }
    } else { //리프레시 토큰 요청이 진행 중인 경우
      return new Promise((resolve) => {
        //새로운 요청은 대기요청에 추가
        refreshSubscribers.push((newAccessToken) => {
          config.headers.Authorization = `Bearer ${newAccessToken}`;
          resolve(config);
        });
      });
    }
  }

  if (authenticated && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
