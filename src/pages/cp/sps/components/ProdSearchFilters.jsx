import React, { useEffect, useReducer } from "react";
import { Input, Select, Button } from "components/element";
import _ from "lodash";
import { fetchCodeLists } from "api/code/codeService";

const initalState = {
  gdsSeList: [],
  gdsTypeList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_GDS_SE_LIST":
      return { ...state, gdsSeList: action.payload };
    case "SET_GDS_TYPE_LIST":
      return { ...state, gdsTypeList: action.payload };
    default:
      return state;
  }
}

const ProdBaseSubscrFaqSearchFilters = ({
  searchText,
  onInputChange,
  onSearch,
  onReset,
}) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const { gdsSeList, gdsTypeList } = state;

  useEffect(() => {
    const loadCodeLists = async () => {
      const result = await fetchCodeLists(["A001", "A002"]);
      dispatch({ type: "SET_GDS_SE_LIST", payload: result.A001 });
      dispatch({ type: "SET_GDS_TYPE_LIST", payload: result.A002 });
    };
    loadCodeLists();
  }, []);

  // Select 변경 시 공통 처리
  const handleSelectChange = (e) => {
    // const { name, value } = e.target;
    // const updatedSearch = { ...searchText, [name]: value };
    onInputChange(e);
    // onSearch(updatedSearch);
  };

  return (
    <>
      <div className="box_st1 sch_top_wrap">
        <div className="form_wrap width_half">
          {/* 상품명 */}
          <div className="form_group">
            <strong className="form_label">상품명</strong>
            <Input
              type="text"
              name="gdsNm"
              className="form_text sch_kwd"
              placeholder="검색어를 입력해주세요."
              value={searchText.gdsNm}
              onChange={onInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSearch(searchText); 
                }
              }}
            />
          </div>
          <div className="form_group">
            <strong className="form_label">상품구분</strong>
            <Select
              name="gdsPvsnMthSeCd" // 이 값을 변경할 때의 name
              className=""
              title="검색조건을 선택해주세요."
              data={gdsSeList}
              value={searchText.gdsPvsnMthSeCd}
              onChange={handleSelectChange}
            />
          </div>
          <div className="form_group">
            <strong className="form_label">상품유형</strong>
            <Select
              name="gdsTypeCd"
              className=""
              title="검색조건을 선택해주세요."
              data={gdsTypeList}
              value={searchText.gdsTypeCd}
              // onChange={onInputChange}
              onChange={handleSelectChange}
            />
          </div>
          <div className="sch_btn_area">
            <Button
              as={"button"}
              className={"sch"}
              title="초기화"
              color={4}
              onClick={() => {
                onReset();
                onSearch({ gdsNm: "", gdsPvsnMthSeCd: "", gdsTypeCd: "" });  
              }}
            >
              초기화
            </Button>
            <Button
              as={"button"}
              className={"sch"}
              title="검색"
              color={2}
              onClick={() => onSearch(searchText)} // 🔹 변경: 최신 searchText 전달
            >
              검색
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdBaseSubscrFaqSearchFilters;
