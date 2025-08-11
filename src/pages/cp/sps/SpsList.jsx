import React, { useCallback, useEffect, useReducer } from "react";
import PageSizeSelector from "components/element/PageSizeSelector";
import InstBasedSubscrTable from "./components/InstBasedSubscrTable";
import ProdBasedSubscrTable from "./components/ProdBasedSubscrTable";
import InstSearchFilters from "./components/InstSearchFilters";
import ProdSearchFilters from "./components/ProdSearchFilters";
import { Pagination } from "components/element";
import sps_list_axios from "./api/SpsApi";
import { useUserStore } from "store/zustand/useUserStore";
const initialState = {
  instSearchText: { instNm: "" },
  instAppliedFilters: {},

  gdsSearchText: { gdsNm: "", gdsPvsnMthSeCd: "", gdsTypeCd: "" },
  gdsAppliedFilters: {},

  instDataList: [],
  instTotalCount: 0,
  instPageSize: 10,
  instCurrentPage: 1,
  sizeSelectorInstShow: false,

  gdsDataList: [],
  gdsTotalCount: 0,
  gdsPageSize: 10,
  gdsCurrentPage: 1,
  sizeSelectorGdsShow: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_INST_FIELD":
      return {
        ...state,
        instSearchText: {
          ...state.instSearchText,
          [action.field]: action.value,
        },
      };
    case "SET_GDS_FIELD":
      return {
        ...state,
        gdsSearchText: {
          ...state.gdsSearchText,
          [action.field]: action.value,
        },
      };
    case "SET_INST_FILTERS":
      return {
        ...state,
        instAppliedFilters: action.payload,
        instCurrentPage: 1,
      };
    case "SET_GDS_FILTERS":
      return {
        ...state,
        gdsAppliedFilters: action.payload,
        gdsCurrentPage: 1,
      };
    case "RESET_INST_FILTERS":
      return {
        ...state,
        instSearchText: initialState.instSearchText,
        instAppliedFilters: initialState.instAppliedFilters,
        instCurrentPage: 1,
      };
    case "RESET_GDS_FILTERS":
      return {
        ...state,
        gdsSearchText: initialState.gdsSearchText,
        gdsAppliedFilters: initialState.gdsAppliedFilters,
        gdsCurrentPage: 1,
      };
    case "SET_INST_DATA":
      return {
        ...state,
        instDataList: action.payload.list,
        instTotalCount: action.payload.total,
      };
    case "SET_GDS_DATA":
      return {
        ...state,
        gdsDataList: action.payload.list,
        gdsTotalCount: action.payload.total,
      };
    case "SET_PAGE":
      return {
        ...state,
        [action.key]: action.value,
      };
    case "SET_SIZE_SELECTOR_SHOW":
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
}

const SpsList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    instSearchText,
    instAppliedFilters,
    instDataList,
    instTotalCount,
    instPageSize,
    instCurrentPage,
    sizeSelectorInstShow,

    gdsSearchText,
    gdsAppliedFilters,
    gdsDataList,
    gdsTotalCount,
    gdsPageSize,
    gdsCurrentPage,
    sizeSelectorGdsShow,
  } = state;

  const { userId, authrtCd, authrtNm } = useUserStore();

  const allowedAuthList = ["C0030001", "C0030002"];
  const isAuthorized = allowedAuthList.includes(authrtCd);

  // 기관 필터 입력 변경
  const handleInstInputChange = useCallback((e) => {
    dispatch({
      type: "SET_INST_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  }, []);

  // 상품 필터 입력 변경
  const handleGdsInputChange = useCallback((e) => {
    dispatch({
      type: "SET_GDS_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  }, []);

  // 기관 검색 실행
  const handleInstSearch = useCallback(() => {
    dispatch({ type: "SET_INST_FILTERS", payload: instSearchText });
  }, [instSearchText]);

  // 상품 검색 실행
  const handleGdsSearch = useCallback(() => {
    dispatch({ type: "SET_GDS_FILTERS", payload: gdsSearchText });
  }, [gdsSearchText]);

  // 기관 필터 초기화
  const handleInstReset = useCallback(() => {
    dispatch({ type: "RESET_INST_FILTERS" });
  }, []);

  // 상품 필터 초기화
  const handleGdsReset = useCallback(() => {
    dispatch({ type: "RESET_GDS_FILTERS" });
  }, []);

  // 기관 리스트 호출
  const getInstBoardList = async () => {
    try {
      const data = await sps_list_axios(
        instAppliedFilters,
        instCurrentPage,
        instPageSize,
        1, // gdsCurrentPage 자리 dummy or default
        1 // gdsPageSize 자리 dummy or default
      );
      dispatch({
        type: "SET_INST_DATA",
        payload: {
          list: data.inst.list,
          total: data.inst.SpsInsttotalCnt,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  // 상품 리스트 호출
  const getGdsBoardList = async () => {
    try {
      const data = await sps_list_axios(
        gdsAppliedFilters,
        1, // instCurrentPage 자리 dummy or default
        10, // instPageSize 자리 dummy or default
        gdsCurrentPage,
        gdsPageSize
      );
      dispatch({
        type: "SET_GDS_DATA",
        payload: {
          list: data.gds.list,
          total: data.gds.SpsGdstotalCnt,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  // 기관 리스트 변경 감지
  useEffect(() => {
    if (userId) getInstBoardList();
  }, [instAppliedFilters, instCurrentPage, instPageSize, userId]);

  // 상품 리스트 변경 감지
  useEffect(() => {
    if (userId) getGdsBoardList();
  }, [gdsAppliedFilters, gdsCurrentPage, gdsPageSize, userId]);

  if (!isAuthorized) {
    return (
      <div className="unauthorized">
        <p>
          {userId
            ? `${userId} 로그인 중 권한 : ${authrtNm} ( ${authrtCd} )`
            : "관리자만 접근 가능합니다."}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="page-title-wrap">
        <h2 className="h-tit">SaaS 상품 구독 현황</h2>
      </div>
      <div className="contents_area">
        {/* 검색조건 */}
        <h3 className="title">기관별 구독 현황</h3>
        <InstSearchFilters
          searchText={instSearchText}
          onInputChange={handleInstInputChange}
          onSearch={handleInstSearch}
          onReset={handleInstReset}
        />
        {/* 결과목록 */}
        <div className="board_info">
          <p className="page">
            <span className="total">
              총 게시글 <b>{instTotalCount}</b>건
            </span>
          </p>
          <form>
            <fieldset>
              <legend className="blind">목록표시개수</legend>
              <div className="form">
                <PageSizeSelector
                  pageSize={instPageSize}
                  setPageSize={(value) =>
                    dispatch({ type: "SET_PAGE", key: "instPageSize", value })
                  }
                  showPopup={sizeSelectorInstShow}
                  setShowPopup={(value) =>
                    dispatch({
                      type: "SET_SIZE_SELECTOR_SHOW",
                      key: "sizeSelectorInstShow",
                      value,
                    })
                  }
                  optionType={1}
                />
              </div>
            </fieldset>
          </form>
            </div>

          <InstBasedSubscrTable instDataList={instDataList} />
          <Pagination
            totalCount={instTotalCount}
            pageSize={instPageSize}
            currentPage={instCurrentPage}
            onPageChange={(page) =>
              dispatch({
                type: "SET_PAGE",
                key: "instCurrentPage",
                value: page,
              })
            }
          />
        </div>

        {/* 상품별 구독현황 */}
        <h3 className="title">상품별 구독 현황</h3>
        <ProdSearchFilters
          searchText={gdsSearchText}
          onInputChange={handleGdsInputChange}
          onSearch={handleGdsSearch}
          onReset={handleGdsReset}
        />
        <div className="board_info">
          <p className="page">
            <span className="total">
              총 게시글 <b>{gdsTotalCount}</b>건
            </span>
          </p>
          <form>
            <fieldset>
              <legend className="blind">목록표시개수</legend>
              <div className="form">
                <PageSizeSelector
                  pageSize={gdsPageSize}
                  setPageSize={(value) =>
                    dispatch({ type: "SET_PAGE", key: "gdsPageSize", value })
                  }
                  showPopup={sizeSelectorGdsShow}
                  setShowPopup={(value) =>
                    dispatch({
                      type: "SET_SIZE_SELECTOR_SHOW",
                      key: "sizeSelectorGdsShow",
                      value,
                    })
                  }
                  optionType={1}
                />
              </div>
            </fieldset>
          </form>
        </div>
        <ProdBasedSubscrTable gdsDataList={gdsDataList} />
        <Pagination
          totalCount={gdsTotalCount}
          pageSize={gdsPageSize}
          currentPage={gdsCurrentPage}
          onPageChange={(page) =>
            dispatch({ type: "SET_PAGE", key: "gdsCurrentPage", value: page })
          }
        />
    </>
  );
};

export default SpsList;
