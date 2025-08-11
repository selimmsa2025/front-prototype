import axios from "axios";

// /v1/faq/prod/list-faq

const FAQ_BASE_URL = "http://localhost:8000/saas-be-catalog/v1/faq";

const faq_list_axios = async (filters = {}, currentPage = 1, pageSize = 10) => {
  try {
    const response = await axios.post(`${FAQ_BASE_URL}/prod/list-faq`, {
      ...filters,
      currentPage,
      pageSize,
    });
    // console.log("response : ", response);
    return response.data.resultData;
  } catch (error) {
    throw error;
  }
};

export default faq_list_axios;
