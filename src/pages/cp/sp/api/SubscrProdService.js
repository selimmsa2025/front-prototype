import axios from 'axios';

// API-GATEWAY PORT
const SP_BASE_URL = "http://localhost:8000/saas-be-catalog/v1/sp";

// 카탈로그 상품 구독 정보 조회
export const getProdSubscrInfo = async ({ userId, instGrntNo }) => {
  try {
    const response = await axios.post(
      `${SP_BASE_URL}/prod/info-subscr`,
      { userId, instGrntNo }
    );

    if (response.data?.status === 'OK') {
      return response.data.resultData;
    } else {
      console.error('API 실패:', response.data?.message || '알 수 없는 오류');
      return null;
    }
  } catch (error) {
    console.error('데이터 조회 오류:', error);
    return null;
  }
};

// 카탈로그 상품 구독 목록정보 조회
export const getProdSubscrLIst = async ({ userId, instGrntNo }) => {
  try {
    const response = await axios.post(
      `${SP_BASE_URL}/prod/list-subscr`,
      { userId, instGrntNo }
    );

    if (response.data?.status === 'OK') {
      return response.data.resultData;
    } else {
      console.error('API 실패:', response.data?.message || '알 수 없는 오류');
      return null;
    }
  } catch (error) {
    console.error('데이터 조회 오류:', error);
    return null;
  }
};