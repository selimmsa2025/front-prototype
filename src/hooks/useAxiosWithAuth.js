import axios from 'axios';

import { getTokenInfo } from 'store/modules/Auth';
import { refreshToken } from 'components/utils/LoginApi';

const useAxiosWithAuth = (navigate) => {
  const { authenticated, expireTime, accessToken } = getTokenInfo();

  const instance = axios.create({
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Authorization:
        accessToken != null && accessToken != ''
          ? `Bearer ${accessToken}`
          : null,
    },
  });

  instance.interceptors.request.use(async function (config) {
    if (authenticated && (accessToken === null || accessToken === '' || new Date().getTime() >= expireTime)) {
      //console.log("로그인 했는데 액세스 토큰 없음");

      const accessToken = (await refreshToken())?.accessToken;
      config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : ``;
    }

    return config;
  });

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

export default useAxiosWithAuth;
