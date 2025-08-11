import React from "react";
import EmptyRow from "components/element/EmptyRow";

const ProdBasedSubscrTable = ({ gdsDataList }) => {
  return (
    <>
      <div className="board_list">
        <table className="tstyle_list">
          <caption>SaaS 상품별 구독 현황</caption>
          <colgroup>
            <col style={{ width: "30%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "30%" }} />
          </colgroup>
          <thead>
            <tr>
              <th>상품구분</th>
              <th>상품유형</th>
              <th>상품명</th>
              <th>총구독수</th>
              <th>총기관구독수</th>
              <th>개인구독수</th>
            </tr>
          </thead>
          <tbody>
            {gdsDataList && gdsDataList.length > 0 ? (
              gdsDataList.map((v, i) => (
                <tr key={i}>
                  <td aria-label="상품구분">{v.gdsPvsnMthSeNm}</td>
                  <td aria-label="상품유형">{v.gdsTypeNm}</td>
                  <td aria-label="상품명">{v.gdsNm}</td>
                  <td aria-label="총구독수">{v.totalSubCnt}</td>
                  <td aria-label="총기관구독수">{v.totalInstSubCnt}</td>
                  <td aria-label="개인구독수">{v.totalIndSubCnt}</td>
                </tr>
              ))
            ) : (
              <EmptyRow colSpan={7} message="로딩 중 또는 데이터 없음" />
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProdBasedSubscrTable;
