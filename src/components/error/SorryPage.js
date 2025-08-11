// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

// //import * as URL from 'config/Url';

// export const CheckSorryPage = () => {
//   const navigate = useNavigate();
//   const check = async () => {
//     if ((await SendAxiosGet(`${URL.API_URL_PRTL}/v1/ip-check`))?.resultData === "Y") {
//       navigate('/sorryPage');
//     }
//   }

//   useEffect(() => {
//     check();
//   }, []);
// };

// export default function SorryPage({
//   title = "더 나은 서비스를 제공해드리기 위해 준비 중 입니다.",
//   message = "작업시간 : 2025년 3월 7일(금) 19:00 ~ 2025년 3월 10일(월) 08:30",
// }) {

//   return (
//     <div className="error_wrap">
//       <div className="error_page">
//         <i>
//           <img src='../img/sub/banner01.png' alt="에러 페이지 이미지" />
//         </i>
//         <h2 className="tit">
//           {title}
//         </h2>
//         <p className="text">
//           {message}
//         </p>
//       </div>
//     </div>
//   );
// }

// SorryPage.propTypes = {
//   title: PropTypes.string,
//   message: PropTypes.string,
//   buttons: PropTypes.arrayOf(
//     PropTypes.shape({
//       text: PropTypes.string.isRequired,
//       color: PropTypes.string.isRequired,
//       href: PropTypes.string.isRequired,
//     })
//   )
// };
