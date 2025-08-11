import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
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
import {
  Input,
  Textarea,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
  Popup,
  Tooltip,
} from '../../Components/Element';
import CommonPopup from '../../Components/CommonPopup';
function App () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
    getFieldState,
  } = useForm();
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
        saveButtonTitle={'수정'}
        deleteButtonTitle='삭제'
        closeButtonTitle={'닫기'}
        additionalButtonTitle={''}
        deleteButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        saveButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        closeButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        additionalButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        title={'참석자 수정'}
      >
        <div className='board_list'>
          <table className='tstyle_write h45'>
            <caption>
              참석자 수정 - 소속기관, 기관유형, 이름, 부서명, 직급, 생년월일,
              연락처(직장), 연락처(휴대폰), 메일, 디지털식별코드, 참석확인방법,
              등록구분, 비고로 구성
            </caption>
            <colgroup>
              <col style={{ width: '22%' }} />
              <col style={{ width: '28%' }} />
              <col style={{ width: '22%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>소속기관</th>
                <td colSpan='3'>행정안전부</td>
              </tr>
              <tr>
                <th scope='row'>기관유형</th>
                <td colSpan='3'>중앙행정기관</td>
              </tr>
              <tr>
                <th scope='row'>이름</th>
                <td>관리자</td>
                <th scope='row'>부서명</th>
                <td>디지털소통팀</td>
              </tr>
              <tr>
                <th scope='row'>직급</th>
                <td>지방행정주사(일반임기제)</td>
                <th scope='row'>생년월일</th>
                <td>19990101</td>
              </tr>
              <tr>
                <th scope='row'>연락처(직장)</th>
                <td>044-111-1111</td>
                <th scope='row'>연락처(휴대폰)</th>
                <td>010-1234-1234</td>
              </tr>
              <tr>
                <th scope='row'>메일</th>
                <td>email@email.com</td>
                <th scope='row'>디지털식별코드</th>
                <td>A11-11111</td>
              </tr>
              <tr>
                <th scope='row'>참석확인방법</th>
                <td colSpan='3'>개인QR</td>
              </tr>
              <tr>
                <th scope='row'>등록구분</th>
                <td colSpan='3'>사전등록</td>
              </tr>
              <tr>
                <th scope='row'>비고</th>
                <td colSpan='3'>비고</td>
              </tr>
              <tr>
                <th scope='row'>개인정보동의일시</th>
                <td colSpan='3'></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class='board_list'>
          <table class='tstyle_view not_line'>
            <caption>참석자 조회 - 참석일, 1차로 구성</caption>
            <thead>
              <tr>
                <th scope='col'>참석일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td aria-label='참석일'>2024-04-24 09:00:00</td>
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
