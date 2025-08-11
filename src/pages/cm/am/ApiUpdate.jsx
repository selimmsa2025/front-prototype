import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import ApiUpdateParamForm from './components/ApiUpdateParamForm';
import ApiUpdateInfoForm from './components/ApiUpdateInfoForm';

import { am_insert_axios, updateApi, am_detail_axios, fetchVersionList } from './api/apiService';
import { useLocation } from 'react-router';
import { fetchCodeLists } from 'api/code/codeService';

const Apiupdate = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const apiId = location?.state?.apiId;
  const [apiVerSn, setApiVerSn] = useState(0);

  // 기본 정보 상태
  const [apiInfo, setApiInfo] = useState({
    apiNm: '',
    apiPvsnShpCd: '',
    apiDmndRspnsSeCd: '',
    httpCommSeCd: '',
    uriAddr: '',
    apiVerSn: 0,
  });

  // 버전 추가 팝업 
  const [showVersionPopup, setShowVersionPopup] = useState(false);
  const [versionList, setVersionList] = useState([]);

  // 파람 항목 리스트 상태
  const [headerList, setHeaderList] = useState([]);
  const [requestList, setRequestList] = useState([]);
  const [responseList, setResponseList] = useState([]);


  const [artclList, setArtclList] = useState([]);
  // <SELECT> 코드리스트 불러오기 컴포넌트
  useEffect(() => {
    const loadCodeLists = async () => {
      const result = await fetchCodeLists(['B006']);
      setArtclList(result.B006);
    };
    loadCodeLists();
  }, []);

  // 수정 모드일 경우 데이터 조회
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const list = await fetchVersionList(); // ex: [1, 2, 3]
        setVersionList(list);
        const data = await am_detail_axios(apiId);
        // 기본정보 세팅
        setApiInfo({
          apiNm: data.apiNm,
          apiPvsnShpCd: data.apiPvsnShpCd,
          apiPvsnShpNm: data.apiPvsnShpNm,
          apiDmndRspnsSeCd: data.apiDmndRspnsSeCd,
          apiDmndRspnsSeNm: data.apiDmndRspnsSeNm,
          httpCommSeCd: data.httpCommSeCd,
          httpCommSeNm: data.httpCommSeNm,
          uriAddr: data.uriAddr,
          apiVerSn: data.apiVerSn,
        });
        setApiVerSn(data.apiVerSn);
        // 항목정보 세팅
        const items = data.paramList || [];
        setHeaderList(items.filter(item => item.apiArtclSeCd === 'B0050001'));
        setRequestList(items.filter(item => item.apiArtclSeCd === 'B0050002'));
        setResponseList(items.filter(item => item.apiArtclSeCd === 'B0050003'));
      } catch (error) {
        alert('수정 정보 조회 중 오류 발생');
        console.error(error);
      }
    }
    fetchDetail();
  }, [apiId]);

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setApiInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleDetail = () => {
    navigate('/am/api/detail', {
      state: { apiId: apiId },
    });
  };

  // 저장 요청 (등록 or 수정)
  const handleSubmit = async () => {
    try {
      let detail;
      detail = await updateApi(apiId, apiVerSn, apiInfo, headerList, requestList, responseList);
      alert('수정이 완료되었습니다.');
      handleDetail();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="board_list">
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>saas 표준 API 수정</h2>
      </div>

      {/* 기본 정보 등록/수정 폼 */}
      <ApiUpdateInfoForm
        apiInfo={apiInfo}
        setApiInfo={setApiInfo}
        handleChange={handleChange}
        showVersionPopup={showVersionPopup}
        setShowVersionPopup={setShowVersionPopup}
        versionList={versionList}
        setVersionList={setVersionList}
      />

      {/* Header 파라미터 */}
      <h3 className='h-tit3'>Header Parameter</h3>
      <ApiUpdateParamForm type="HEADER" itemList={headerList} setItemList={setHeaderList} artclList={artclList}
      />

      {/* Request 파라미터 */}
      <h3 className='h-tit3'>Request Body</h3>
      <ApiUpdateParamForm type="REQUEST" itemList={requestList} setItemList={setRequestList} artclList={artclList}
      />

      {/* Response 파라미터 */}
      <h3 className='h-tit3'>Response Body</h3>
      <ApiUpdateParamForm type="RESPONSE" itemList={responseList} setItemList={setResponseList} artclList={artclList}
      />

      {/* 저장/취소 버튼 */}
      <div className='bet_btn_area'>
        <div className="bottom_right_area" >
          <button className="btn3 type1" onClick={() => navigate(-1)}>취소</button>
          <button onClick={handleSubmit} className="btn1 type1">저장</button>
        </div>
      </div>
    </div >
  );
};

export default Apiupdate;
