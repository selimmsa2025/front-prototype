import axios from 'axios';

// API-GATEWAY PORT
const API_BASE_URL = 'http://localhost:8000/saas-be-catalog/v1/am/api';

// API 목록 조회
export const am_list_axios = async (filters = {}, page = 1, pageSize = 10) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/list`, {
            ...filters,
            page,
            pageSize,
        });
        return response.data.resultData;
    } catch (error) {
        console.error('API 호출 실패:', error);
        throw error;
    }
};

// API 상세조회
export const am_detail_axios = async (apiId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/info`, { apiId });
        return response.data?.resultData?.api || null;
    } catch (error) {
        console.error('API 상세조회 실패:', error);
        throw error;
    }
};

//API 데이터 삭제 
export const am_delete_axios = async (filters = []) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/delete`, filters);
        return response.data?.resultData;
    } catch (error) {
        console.error('API 삭제 실패:', error);
        throw error;
    }
};



// 목록 페이지로 이동
export const goToApiList = (navigate) => {
    navigate('/am/api/list');
};


// 등록 페이지로 이동
export const goToApiInsert = (navigate) => {
    navigate('/am/api/reg');
};



// 표준 API 등록 요청
export const am_insert_axios = async (apiInfo, headerList, requestList, responseList) => {

    // 그룹별 순번 부여 함수
    const addApiArtclSn = (list, groupCode) => {
        return list.map((item, index) => ({
            ...item,
            apiVerSn: apiInfo.apiVerSn,
            apiArtclSeCd: groupCode,
            apiArtclSn: index + 1,  // 1부터 시작
        }));
    };

    const itemList = [
        ...addApiArtclSn(headerList, 'B0050001'),   // 헤더
        ...addApiArtclSn(requestList, 'B0050002'),  // 요청
        ...addApiArtclSn(responseList, 'B0050003'), // 응답
    ];

    const payload = {
        ...apiInfo,
        apiVerSn: Number(apiInfo.apiVerSn), // 숫자 변환
        frstCrtPrcrId: 'admin',
        paramList: itemList,
    };

    try {
        const response = await axios.post(`${API_BASE_URL}/create`, payload, {
            withCredentials: true,
        });
        return response.data.resultData.nextId;
    } catch (error) {
        console.error('API 등록 요청 실패:', error);
        throw error;
    }
};

/**
 * 표준 API 수정 요청
 */

export const updateApi = async (apiId, apiVerSn, apiInfo, headerList, requestList, responseList) => {

    const addApiArtclSn = (list, groupCode) => {
        return list.map((item, index) => ({
            ...item,
            apiVerSn: apiVerSn,
            apiArtclSeCd: groupCode,
            apiArtclSn: index + 1,  // 1부터 시작
        }));
    };

    const itemList = [
        ...addApiArtclSn(headerList, 'B0050001'),   // 헤더
        ...addApiArtclSn(requestList, 'B0050002'),  // 요청
        ...addApiArtclSn(responseList, 'B0050003'), // 응답
    ];
    const payload = {
        ...apiInfo,
        apiId,
        apiVerSn,
        lastChgPrcrId: 'admin',
        paramList: itemList,
    };
    try {
        const response = await axios.post(`${API_BASE_URL}/update`, payload, {
            withCredentials: true,
        });
        return response.data?.resultData?.apiDetail || null;
    } catch (error) {
        console.error('API 수정 요청 실패:', error);
        throw error;
    }
};

// API 버전 추가 (등록)
export const insertApiVersion = async (payload) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/create-ver`, payload, {
            withCredentials: true,
        });
        return response.data?.resultData?.versionList;
    } catch (error) {
        console.error('버전 등록 요청 실패:', error);
        return null;
    }
};

// 버전 조회
export const fetchVersionList = async () => { 
    try {
        const response = await axios.post(`${API_BASE_URL}/list-ver`, {}, {
            withCredentials: true,
        });
        return response.data.resultData;
    } catch (error) {
        console.error('버전 목록 조회 실패:', error);
        return [];
    }
};