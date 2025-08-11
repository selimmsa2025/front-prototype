import { useState } from "react";
import EmptyRow from "components/element/EmptyRow";
import { Popup } from "components/element";


const FaqTable=({dataList})=>{
const [showPopup, setShowPopup] = useState(false);
  const [popGdsNM, setPopgdsNm] = useState("");
  const [popGdsFaqAddr, setPopGdsFaqAddr] = useState("");
  // console.log("dataList ####### : ",dataList)
  const handlePopupOpen = (gdsnm, faqaddr) => {
    setPopgdsNm(gdsnm);
    setPopGdsFaqAddr(faqaddr);
    setShowPopup(true);
  };

  return (
    <>
      <div className="board_list">
        <table className="tstyle_list">
          <caption>FAQ 목록</caption>
          <colgroup>
            <col style={{ width: "10%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "10%" }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">상품구분</th>
              <th scope="col">상품유형</th>
              <th scope="col">상품명</th>
              <th scope="col">등록일자</th>
            </tr>
          </thead>
          <tbody>
            {dataList && dataList.length > 0 ? (
              dataList.map((v, i) => (
                <tr
                  key={v.gdsId}
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => handlePopupOpen(v.gdsNm, v.gdsFaqAddr)}
                >
                  <td aria-label="상품구분">{v.gdsPvsnMthSeCd}</td>
                  <td aria-label="상품유형">{v.gdsTypeCd}</td>
                  <td aria-label="상품명">{v.gdsNm}</td>
                  <td aria-label="등록일자">{v.frstCrtDt}</td>
                </tr>
              ))
            ) : (
              <EmptyRow colSpan={7} message="로딩 중 또는 데이터 없음" />
            )}
          </tbody>
        </table>
        {/* 팝업 * */}
        <Popup
          showPopup={showPopup}
          onClose={() => setShowPopup(false)}
          // leftButtonTitle={"취소"}
          // rightButtonTitle={"확인"}
          leftButtonOnClick={() => setShowPopup(false)}
          rightButtonOnClick={() => setShowPopup(false)}
          title={"상품명 URL 상세"}
          subTitle={popGdsNM}
          contents={
            <a
              href={popGdsFaqAddr}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#007bff" }}
            >
              {popGdsFaqAddr}
            </a>
          }
        />
      </div>
    </>
  );
};

export default FaqTable;