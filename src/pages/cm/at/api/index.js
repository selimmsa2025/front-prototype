import api from 'api/api';

/**
 * API를 POST로 호출
 */
const axiosPost = async (url, param) => {
    try {
        const result = await api.post(url, param);
        return result.data?.status === 'OK' ? {
                data: result.data?.resultData,
                status: result.data.status,
               } : null;

    } catch (error) {
        console.error('데이터 조회 오류:', error);
        return error;
    }
};

/**
 * API를 GET으로 호출
 */
const axiosGet = async (url, param) => {
    try {
        const result = await api.get(url, param);
        return result?.status === '200' ? result.data : null;

    } catch (error) {
        console.log(error);
        return null;
    }
};


// ---------------------- API 테스트 상세 보기  ----------------------

// 상품 상세 정보 가져오기
export const getGdsInfoApi = async (param) => {
    return await axiosPost('/saas-be-catalog/v1/at/prod/info-api-test', param);
};

// API 테스트 목록 가져오기
export const getApiTestListApi = async (param) => {
    return await axiosPost('/saas-be-catalog/v1/at/prod/list-gds-api-test', param);
};

// 저장 버튼 클릭
export const saveApiTestApi = async (param) => {
    return await axiosPost('/saas-be-catalog/v1/at/prod/create-api-test', param);
};

// 테스트 시작
export const startTestApi = async (param) => {
    return await axiosPost('/saas-be-catalog/v1/at/prod/start-api-test', param);
};