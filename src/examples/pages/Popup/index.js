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
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>버튼</h2>
      </div>
      <div class='contents_area'>
        <Button
          text={'팝업 테스트'}
          onClick={() => {
            setShowPopup(!showPopup);
          }}
        />
      </div>
      <Popup
        showPopup={showPopup}
        onClose={() => {
          setShowPopup(false);
        }}
        leftButtonTitle={'취소'}
        rightButtonTitle={'확인'}
        leftButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        rightButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        title={'팝업 타이틀'}
        subTitle={'내용 타이틀'}
        contents={
          '대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.'
        }
      />
    </>
  );
}

export default App;
