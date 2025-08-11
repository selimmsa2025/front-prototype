import React, { useEffect, useReducer, useCallback } from "react";
import faq_list_axios from "./api/FaqApi";
import PageSizeSelector from "components/element/PageSizeSelector";
import { Pagination } from "components/element";
import FaqTable from "./components/FaqTable";
import FaqSearchForm from "./components/FaqSearchFilters";

const initialState = {
  // 검색조건
  gdsPvsnMthSeCd: "",
  gdsTypeCd: "",
  gdsNm: "",

  // 검색 필터
  appliedFilters: {
    gdsPvsnMthSeCd: "",
    gdsTypeCd: "",
    gdsNm: "",
  },
  dataList: [],
  pageSize: 10,
  pageSize: 10,
  currentPage: 1,

  // UI 상태
  sizeSelectorShow: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        dataList: action.dataList,
        totalCount: action.totalCount,
      };
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_APPLIED_FILTERS":
      return { ...state, appliedFilters: action.payload };
    case "SET_PAGE":
      return { ...state, currentPage: action.page };
    case "SET_PAGE_SIZE":
      return { ...state, pageSize: action.pageSize };
    case "TOGGLE_SIZE_SELECTOR":
      return { ...state, sizeSelectorShow: !state.sizeSelectorShow };
    case "RESET_SEARCH":
      return {
        ...state,
        gdsPvsnMthSeCd: "",
        gdsTypeCd: "",
        gdsNm: "",
        // appliedFilters: { gdsPvsnMthSeCd: "", gdsTypeCd: "", gdsNm: "" },
        currentPage: 1,
      };
    default: {
      return state;
    }
  }
}

const FaqList = () => {
  // reducer 선언
  const [state, dispatch] = useReducer(reducer, initialState);

  //구조분해
  const {
    gdsPvsnMthSeCd,
    gdsTypeCd,
    gdsNm,
    appliedFilters,
    dataList,
    totalCount,
    pageSize,
    currentPage,
    sizeSelectorShow,
  } = state;

  // ===================== Function =====================
  // 검색 조건 변경 핸들러 reducer 변경
  const handleInputChange = useCallback((e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  }, []);

  const handleSearch = useCallback(() => {
    dispatch({
      type: "SET_APPLIED_FILTERS",
      payload: {
        gdsPvsnMthSeCd: gdsPvsnMthSeCd,
        gdsTypeCd: gdsTypeCd,
        gdsNm: gdsNm,
      },
    });
    dispatch({ type: "SET_PAGE", page: 1 });
  }, [gdsPvsnMthSeCd, gdsTypeCd, gdsNm]);

  // reducer 초기화 버튼 클릭
  const handleReset = useCallback(() => {
    dispatch({ type: "RESET_SEARCH" });
  }, []);

  //FAQ 목록 조회
  const getBoardList = async () => {
    try {
      const data = await faq_list_axios(appliedFilters, currentPage, pageSize);
      // console.log("##data : ", data);
      dispatch({
        type: "SET_DATA",
        dataList: data.list,
        totalCount: data.totalCount,
      });
    } catch (error) {
      console.error("FAQ API 호출 실패 : ", error);
    }
  };

  useEffect(() => {
    getBoardList();
  }, [appliedFilters, pageSize, currentPage]);
  return (
    <>
      <div className="page-title-wrap">
        <h2 className="h-tit">카탈로그 상품 FAQ 목록</h2>
      </div>
      <div className="contents_area">
        {/* 검색조건 */}
        <FaqSearchForm
          // searchText={searchText}
          searchText={{
            gdsPvsnMthSeCd: gdsPvsnMthSeCd,
            gdsTypeCd: gdsTypeCd,
            gdsNm: gdsNm,
          }}
          onInputChange={handleInputChange}
          onSearch={handleSearch} // 🔹 변경: Select 변경 시 최신 값 전달 가능
          onReset={handleReset}
        />
        {/* 결과목록 */}
        <div className="board_info">
          <p className="page">
            <span className="total">
              총 게시글 <b>{totalCount}</b>건
            </span>
          </p>
          <form>
            <fieldset>
              <legend className="blind">목록표시개수</legend>
              <div className="form">
                <PageSizeSelector
                  pageSize={pageSize}
                  setPageSize={(size) => {
                    dispatch({ type: "SET_PAGE_SIZE", pageSize: size });
                  }}
                  showPopup={sizeSelectorShow}
                  setShowPopup={() =>
                    dispatch({ type: "TOGGLE_SIZE_SELECTOR" })
                  }
                  optionType={1}
                />
              </div>
            </fieldset>
          </form>
        </div>
        {/* 테이블 */}
        <FaqTable dataList={dataList} />
        {/* 페이지네이션 */}
        <Pagination
          totalCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={(page) => dispatch({ type: "SET_PAGE", page })}
          //   setTargetPage={}
        />
      </div>
    </>
  );
};

export default FaqList;
