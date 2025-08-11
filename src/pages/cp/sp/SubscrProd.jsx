import React, { useEffect, useState } from "react";
import { useUserStore } from 'store/zustand/useUserStore';
import SubscrProdListTable from './components/SubscrProdListTable'; 
import { getProdSubscrInfo, getProdSubscrLIst } from './api/SubscrProdService';

const SubscrProd = () => {
  const [ProdSubscrInfo, setProdSubscrInfo] = useState([]);
  const [ProdSubscrInstList, setProdSubscrInstList] = useState([]);
  const [ProdSubscrUserList, setProdSubscrUserList] = useState([]);
  const { userId, userNm, instGrntNo, instNm, deptNm } = useUserStore();

  // 구독상품 타입 분류 : 기관형, 개인형
  const groupByType = (list) => {
    return list.reduce((acc, item) => {
      const key = item.gdsTypeCd;
      if (!acc[key]) {
        acc[key] = {
          typeNm: item.gdsTypeNm,
          items: []
        };
      }
      acc[key].items.push(item);
      return acc;
    }, {});
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!userId || !instGrntNo) return;

      // 카탈로그 상품 구독 정보 조회 
      const infoData = await getProdSubscrInfo({ userId, instGrntNo });
      if (infoData?.spInfo) {
        setProdSubscrInfo([infoData.spInfo]);
      }

      // 카탈로그 상품 구독 목록정보 조회 
      const listData = await getProdSubscrLIst({ userId, instGrntNo });
      if (listData?.length > 0) {
        setProdSubscrInstList(listData.filter(item => item.gdsPvsnMthSeCd === 'A0010001')); // 기관형
        setProdSubscrUserList(listData.filter(item => item.gdsPvsnMthSeCd === 'A0010002')); // 개인형
      }
    };

    fetchData();
  }, [userId, instGrntNo]);

  const groupedInst = groupByType(ProdSubscrInstList);  // 기관형
  const groupedUser = groupByType(ProdSubscrUserList);  // 개인형

  return (
    <>
      <div className="page-title-wrap">
        <div className="container">
          <div className="page-title-wrap">
            <h2 className="h-tit">SaaS 구독 상품 목록</h2>
          </div>

          {/*하단 2줄 : 로그인 사용자 확인용 임시 코드*/} 
          <p className="desc1 mb_10">* 사용자 로그인 탭에서 임시로그인이 필요합니다.</p>
          <p className="desc2 mb_20">현재 사용자 : <span className="point_color2">{userNm} ({userId})</span> 님 </p> 

          <div className="board_list">
            <h3 className="title">구독 현황</h3>
            <caption>구독 현황</caption>
            <colgroup>
              <col className="w25p" />  
              <col className="w25p" />  
              <col className="w25p" />  
              <col className="w25p" />  
            </colgroup>
            <table className="tstyle_write">
              <thead>
                <tr>
                  <th>기관명</th>
                  <th>부서명</th>
                  <th>구독상품(기관)</th>
                  <th>구독상품(개인)</th>
                </tr>
              </thead>
              <tbody>
                {ProdSubscrInfo.length > 0 ? (
                  ProdSubscrInfo.map((item, index) => (
                    <tr key={index}>
                      <td>{instNm}</td>
                      <td>{deptNm}</td>
                      <td>{item.subGdsInst}</td>
                      <td>{item.subGdsUser}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">로딩 중 또는 데이터 없음</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container mb_20">
        <SubscrProdListTable 
          title="구독상품(기관)" 
          groupedData={groupedInst} 
          emptyLabel="패키지" 
        />
      </div>

      <div className="container">
        <SubscrProdListTable 
          title="구독상품(개인)" 
          groupedData={groupedUser} 
          emptyLabel="웹오피스" 
        />
      </div>
    </>
  );
};

export default SubscrProd;
