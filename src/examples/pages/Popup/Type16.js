import { createPortal } from 'react-dom';
import React, { useEffect, useState, useMemo } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Link,
  useNavigate,
  json,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../../Components/Breadcrumb';
import { Button, Tab, Popup, Textarea } from '../../Components/Element';
import CommonPopup from '../../Components/CommonPopup';
import AttendeesResultList from './Components/AttendeesResultList';
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);
  const [dataList, setDataList] = useState([]);
  const [totalCount, setTotalCount] = useState(1);
  const [successCount, setSuccessCount] = useState(1);
  const [failCount, setFailCount] = useState(0);

  const getAttendeesResultList = async () => {
    const response = await axios.get('/mockupServer/getAttendeesResultList.json', {

    });
    setDataList(response.data);
  };

  useEffect(() => {
    getAttendeesResultList();
  }, []);

  return (
    <>
      <CommonPopup
        showPopup={showPopup}
        size='large'
        onClose={() => {
          setShowPopup(false);
        }}
        saveButtonTitle={''}
        closeButtonTitle={'닫기'}
        additionalButtonTitle={''}
        saveButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        closeButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        additionalButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        title={'참석예정자 일괄등록'}
      >
        <h3>참석자 일괄등록결과</h3>
        <ul class="box_st1 info_list type1 row">
          <li><span>총 건수</span><p>{totalCount}건</p></li>
          <li><span class="point2">성공</span><p>{successCount}건</p></li>
          <li><span class="point1">실패</span><p>{failCount}건</p></li>
        </ul>
        <AttendeesResultList dataList={dataList} />
      </CommonPopup>

      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>page title</h2>
      </div>
      <div class='contents_area'>
        <Button
          text={'팝업 열기'}
          onClick={() => {
            setShowPopup(!showPopup);
          }}
        />
      </div>
    </>
  );
}

export default App;
