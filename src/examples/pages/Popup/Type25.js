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
        closeButtonTitle={'닫기'}
        additionalButtonTitle={''}
        closeButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        additionalButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        title={'당직근무 상황보고 상세조회'}
      >
        <div className='board_list'>
          <table className='tstyle_write h45'>
            <caption>
              당직근무 상황보고 상세조회 - 보고기관명, 책임자, 보고자,
              행정안전부 당직자, 이상유무, 비고로 구성
            </caption>
            <colgroup>
              <col style={{ width: '20%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>보고기관명</th>
                <td>부산</td>
              </tr>
              <tr>
                <th scope='row'>책임자</th>
                <td>농업연구사 / 성과관리테스트 외 1명</td>
              </tr>
              <tr>
                <th scope='row'>보고자</th>
                <td>지방행정주시보 / 테스트</td>
              </tr>
              <tr>
                <th scope='row'>행정안전부 당직자</th>
                <td>관리자</td>
              </tr>
              <tr>
                <th scope='row'>확인시간</th>
                <td>14:43:50</td>
              </tr>
              <tr>
                <th scope='row'>이상유무</th>
                <td>이상없음</td>
              </tr>
              <tr>
                <th scope='row'>비고</th>
                <td>당직근무 상황보고 상세조회</td>
              </tr>
              <tr>
                <th scope='row'>등록자</th>
                <td>관리자(행정안전부)</td>
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
