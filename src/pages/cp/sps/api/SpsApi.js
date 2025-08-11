import axios from "axios";

// API-GATEWAY PORT
const SPS_BASE_URL = "http://localhost:8000/saas-be-catalog/v1/sps";

// 통합 목록 조회 (기관 + 상품)
const sps_list_axios = async (
  filters = {},
  instCurrentPage = 1,
  instPageSize = 10,
  gdsCurrentPage = 1,
  gdsPageSize = 10
) => {
  try {
    // 기관별 구독 정보 조회 API
    const responseInst = await axios.post(`${SPS_BASE_URL}/subscr/list-inst-based`, {
      ...filters,
      instCurrentPage,
      instPageSize,
    });

    // SaaS 상품별 구독 정보 조회 API
    const responseGds = await axios.post(`${SPS_BASE_URL}/subscr/list-prod-based`, {
      ...filters,
      gdsCurrentPage,
      gdsPageSize,
    });

    console.log("responseInst: ### :", responseInst);
    console.log("responseGds: ### :", responseGds);

    return {
      inst: {
        list: responseInst.data.resultData.instList,
        SpsInsttotalCnt: responseInst.data.resultData.instTotalCount,
        pageSize: responseInst.data.resultData.pageSize,
        currentPage: responseInst.data.resultData.currentPage,
      },
      gds: {
        list: responseGds.data.resultData.gdsList,
        SpsGdstotalCnt: responseGds.data.resultData.gdsTotalCount,
        pageSize: responseGds.data.resultData.pageSize,
        currentPage: responseGds.data.resultData.currentPage,
      }
    };
  } catch (error) {
    console.error("API 호출 실패 : ", error);
    throw error;
  }
};

export default sps_list_axios;