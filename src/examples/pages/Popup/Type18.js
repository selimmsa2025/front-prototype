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
        deleteButtonTitle='삭제'
        closeButtonTitle={'닫기'}
        additionalButtonTitle={''}
        closeButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        deleteButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        title={'참석예정자 등록'}
      >
        <div className='board_list'>
          <table className='tstyle_write h45'>
            <caption>
              기관담당자 조회 - 행사명, 행사기관, 소속기관, 기관유형, 이름,
              부서명, 직급, 생년월일, 연락처(직장), 연락처(휴대폰), 메일로 구성
            </caption>
            <colgroup>
              <col style={{ width: '22%' }} />
              <col style={{ width: '28%' }} />
              <col style={{ width: '22%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>행사명</th>
                <td colspan='3'>테스트2024</td>
              </tr>
              <tr>
                <th scope='row'>행사기관</th>
                <td>행정안전부</td>
              </tr>
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
                <td>테스트01</td>
                <th scope='row'>부서명</th>
                <td>테스트부서</td>
              </tr>
              <tr>
                <th scope='row'>직급</th>
                <td colSpan='3'>지방행정주사</td>
              </tr>
              <tr>
                <th scope='row'>연락처(직장)</th>
                <td>02-9999</td>
                <th scope='row'>연락처(휴대폰)</th>
                <td>010-8850-5830</td>
              </tr>
              <tr>
                <th scope='row'>메일</th>
                <td colspan='3'>test001@email.com</td>
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
