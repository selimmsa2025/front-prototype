import React from "react";
import EmptyRow from "components/element/EmptyRow";

const InstBasedSubscrTable = ({ instDataList }) => {
  return (
    <>
      <div className="board_list">
        <table className="tstyle_list">
          <caption>기관별 구독 집계</caption>
          <colgroup>
            <col style={{ width: "30%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "30%" }} />
          </colgroup>
          <thead>
            <tr>
              <th>기관명</th>
              <th>SaaS 구독 상품 수(기관)</th>
              <th>SaaS 구독 상품 수(개인)</th>
            </tr>
          </thead>
          <tbody>
            {instDataList && instDataList.length > 0 ? (
              instDataList.map((v, i) => (
                <tr key={i}>
                  <td aria-label="기관명">{v.instNM}</td>
                  <td aria-label="SaaS 구독 상품 수(기관)">
                    {v.instGdsSubCnt}
                  </td>
                  <td aria-label="SaaS 구독 상품 수(개인)">{v.indGdsSubCnt}</td>
                </tr>
              ))
            ) : (
              <EmptyRow colSpan={7} message="로딩 중 또는 데이터 없음" />
            )}
            {/* <tr>
                <td aria-label="기관명">A기관</td>
                <td aria-label="기관관리자가 구독한 상품 수">기관관리자가 구독한 상품 수</td>
                <td aria-label="로그인한 개인이 구독한 상품 수">로그인한 개인이 구독한 상품 수</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InstBasedSubscrTable;
