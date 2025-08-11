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
        closeButtonTitle={''}
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
        title={'모바일 공무원증 QR 인증'}
      >
        <div className='box_st4 qr_bx'>
          <h3 className='txt_center'>행정안전부 실제행사</h3>
          <p className='desc1 txt_center'>
            2024-04-29 09:00 ~ 2024-04-30 09:00
            <br />
            세종특별자치시 가름로 232 (어진동)
          </p>
          <span className='img'>
            <img src='../img/sub/qr_code.png' alt='qr code' />
          </span>
          <strong>참석처리방법</strong>
          <ol className='dot_list1'>
            <li>모바일공무원증 실행 QR 촬영 선택</li>
            <li>QR 촬영</li>
          </ol>
        </div>
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
