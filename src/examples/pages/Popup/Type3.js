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
import { Button, Tab, Popup } from '../../Components/Element';
import CommonPopup from '../../Components/CommonPopup';
function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(true);
  return (
    <>
      <CommonPopup
        showPopup={showPopup}
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
        title={'개인 QR 인증'}
      >
        <h3>행정안전부 실제행사</h3>
        <ul className='info_list type1'>
          <li>
            <span>행사일</span>
            <p>2024-04-29 10:00~2024-04-30 09:00</p>
          </li>
          <li>
            <span>행사주소</span>
            <p>세종특별자치시 가름로 232 (어진동)</p>
          </li>
        </ul>
        <div className='qr_pic'></div>
        <p className='desc4'>
          행사 참석 신청 시 참석 확인방법을 개인 QR로 선택한 경우 행사기관으로
          부터 개인 QR이 전송됩니다. 전송 된 개별 QR을 촬영 시 자동으로 행사참석
          처리됩니다.
        </p>
      </CommonPopup>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>page title</h2>
      </div>
      <div className='contents_area'>
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
