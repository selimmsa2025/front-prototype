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
        title={'온행정지원 - 신청현황 조회'}
      >
        <div className='board_list'>
          <table className='tstyle_write h45'>
            <caption>
              온행정지원 신청현황 조회 - 신청자명, 신청부서, 신청자직급, 신청자
              연락처(직장), 신청자 연락처(휴대폰), 신청서, 비고, 처리단계,
              신청일시, 접수일, 처리일/신청취소일, 처리내용으로 구성
            </caption>
            <colgroup>
              <col style={{ width: '22%' }} />
              <col style={{ width: '28%' }} />
              <col style={{ width: '22%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>신청자명</th>
                <td colspan='3'>관리자</td>
              </tr>
              <tr>
                <th scope='row'>신청부서</th>
                <td>디지털소통팀</td>
                <th scope='row'>신청자직급</th>
                <td>지방행정주사(일반임기제)</td>
              </tr>
              <tr>
                <th scope='row'>신청자 연락처(직장)</th>
                <td>02-123-4567</td>
                <th scope='row'>신청자 연락처(휴대폰)</th>
                <td>010-1111-2222</td>
              </tr>
              <tr>
                <th scope='row'>신청서</th>
                <td colspan='3'>
                  <a
                    href=''
                    class='file_type pdf'
                    download='download'
                    title='다운로드'
                  >
                    표준프레인워크 적용가이드
                  </a>
                </td>
              </tr>
              <tr>
                <th scope='row'>비고</th>
                <td colspan='3'>비고란입니다.</td>
              </tr>
              <tr>
                <th scope='row'>처리단계</th>
                <td colspan='3'>처리완료</td>
              </tr>
              <tr>
                <th scope='row'>신청일시</th>
                <td colspan='3'>2024-04-22 16:48:24</td>
              </tr>
              <tr>
                <th scope='row'>접수일</th>
                <td>2024-04-22 16:48:24</td>
                <th scope='row'>처리일/신청취소일</th>
                <td>2024-04-22 16:48:24</td>
              </tr>
              <tr>
                <th scope='row'>처리내용</th>
                <td colspan='3'>처리합니다. 내용확인해주세요.</td>
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
