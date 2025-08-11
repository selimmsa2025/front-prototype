// import axios from 'axios';
// import * as URL from 'config/Url';

// //로그인
// export const login = async (param) => {
//   try {
//     const response = await axios.post(`${URL.API_URL_AUTH}/login/pw`, param, {
//       withCredentials: true,
//     });
//     return response.data?.status === 'OK' ? response.data?.resultData : null;
//   } catch (err) {
//     console.log(err);
//     return null;
//   }
// };

// //로그아웃
// export const logout = async () => {
//   try {
//     const response = await axios.post(
//       `${URL.API_URL_AUTH}/logout`,
//       {},
//       { withCredentials: true },
//     );
//     return response.data?.status === 'OK' ? response.data?.resultData : null;
//   } catch (err) {
//     console.log(err);
//     return null;
//   }
// };

// //액세스 토큰 재발급
// export const refreshToken = async () => {
//   try {
//     const response = await axios.post(
//       `${URL.API_URL_AUTH}/v1/auth/refresh-token`,
//       {},
//       { withCredentials: true },
//     );
//     return response.data?.resultData.resultMsg === 'SUCCESS'
//       ? response.data?.resultData
//       : null;
//   } catch (err) {
//     console.log(err);
//     return null;
//   }
// };
