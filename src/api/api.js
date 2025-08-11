import axios from 'axios';

// axios instance 생성 
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL2,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,  // 쿠키 포함 요청 필요 시
    timeout: 30000, //10초
});

// 요청 인터셉터
api.interceptors.request.use(function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
    }, function (error) {
        // 요청 오류가 있는 작업 수행
        return Promise.reject(error);
    });

// 응답 인터셉터
api.interceptors.response.use(function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  }, function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  });


export default api;