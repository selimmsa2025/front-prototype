import React from "react";
import { Input, Button } from "components/element";

const InstBaseSubscrFaqSearchFilters = ({
  searchText,
  onInputChange,
  onSearch,
  onReset,
}) => {

  return (
    <>
      <div className="box_st1 sch_top_wrap">
        <div className="form_wrap width_half">
          <div className="form_group">
            <strong className="form_label">기관명</strong>
            <Input
              type="text"
              name="instNm"
              className="form_text sch_kwd"
              placeholder="검색어를 입력해주세요."
              value={searchText.instNm}
              onChange={onInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSearch(searchText); // 
                }
              }}
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
                onSearch({ gdsNm: "", gdsPvsnMthSeCd: "", gdsTypeCd: "" }); // 🔹 변경: 초기화 후 검색
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

export default InstBaseSubscrFaqSearchFilters;
