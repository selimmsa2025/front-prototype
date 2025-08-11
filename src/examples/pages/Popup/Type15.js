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
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(true);
  return (
    <>
      <CommonPopup
        showPopup={showPopup}
        size='middle'
        onClose={() => {
          setShowPopup(false);
        }}
        saveButtonTitle={'저장'}
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
        title={'참석예정자 조회'}
      >
        <h3>참석예정자 조회</h3>
        <div className="board_list mt_20">
          <table className="tstyle_write h45 type_view">
            <caption>참석예정자 조회 - 소속기관, 기관유형, 이름, 부서명, 직급, 생년월일, 연락처(직장), 연락처(휴대폰), 메일, 디지털식별코드, 참석확인방법, 기관담당자, 비고, 개인정보 동의일시로 구성</caption>
            <colgroup>
              <col style={{ width: '22%' }} />
              <col style={{ width: '28%' }} />
              <col style={{ width: '22%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">소속기관</th>
                <td colspan="3">테스트기업</td>
              </tr>
              <tr>
                <th scope="row">기관유형</th>
                <td colspan="3">민간기업</td>
              </tr>
              <tr>
                <th scope="row">이름</th>
                <td>김테스트</td>
                <th scope="row">부서명</th>
                <td>개발</td>
              </tr>
              <tr>
                <th scope="row">직급</th>
                <td>5</td>
                <th scope="row">생년월일</th>
                <td>19990909</td>
              </tr>
              <tr>
                <th scope="row">연락처(직장)</th>
                <td></td>
                <th scope="row">연락처(휴대폰)</th>
                <td>010-1234-1234</td>
              </tr>
              <tr>
                <th scope="row">메일</th>
                <td>test001@email.com</td>
                <th scope="row">디지털식별코드</th>
                <td>A99-0000</td>
              </tr>
              <tr>
                <th scope="row">참석확인방법</th>
                <td colspan="3">개인QR</td>
              </tr>
              <tr>
                <th scope="row">기관담당자</th>
                <td colspan="3"></td>
              </tr>
              <tr>
                <th scope="row">비고</th>
                <td colspan="3">비고</td>
              </tr>
              <tr>
                <th scope="row">개인정보 동의일시</th>
                <td colspan="3">2024-04-18 10:37:36</td>
              </tr>
            </tbody>
          </table>
        </div>
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
