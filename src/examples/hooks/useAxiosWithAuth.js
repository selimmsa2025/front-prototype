import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const useAxiosWithAuth = (navigate) => {
  const instance = axios.create({
    // baseURL: 'http://localhost:3000/'
  });

  instance.interceptors.request.use(function (config) {
    //토큰은 보안쿠키를 통해서 내려감. 여기에서 작업불필요

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
        // const data = await useAxiosWithAuth.get('/api/v1/refreshtoken')
        // console.log("🚀 ~ file: useAxiosWithAuth.js:39 ~ data:", data)
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

export default useAxiosWithAuth;
