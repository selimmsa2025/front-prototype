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
        saveButtonTitle={'등록'}
        closeButtonTitle={'취소'}
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
        title={'문서처리 현황 등록'}
      >
        <div className='board_list'>
          <table className='tstyle_write h45'>
            <caption>
              문서처리 현황 등록 - 종류, 문서번호, 수신처, 제목, 접수, 인계,
              비고로 구성
            </caption>
            <colgroup>
              <col style={{ width: '20%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>종류</th>
                <td>
                  <Input
                    name='frm1'
                    id='frm1'
                    title='종류 입력해주세요.'
                    placeholder=''
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>문서번호</th>
                <td>
                  <Input
                    name='frm1'
                    id='frm1'
                    title='문서번호 입력해주세요.'
                    placeholder=''
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>수신처</th>
                <td>
                  <Input
                    name='frm1'
                    id='frm1'
                    title='수신처 입력해주세요.'
                    placeholder=''
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>제목</th>
                <td>
                  <Input
                    name='frm1'
                    id='frm2'
                    title='제목 입력해주세요.'
                    placeholder=''
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>접수</th>
                <td>
                  <Input
                    name='frm1'
                    id='frm2'
                    title='접수 입력해주세요.'
                    placeholder=''
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>인계</th>
                <td>
                  <Input
                    name='frm1'
                    id='frm2'
                    title='인계 입력해주세요.'
                    placeholder=''
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>비고</th>
                <td>
                  <Input
                    name='frm1'
                    id='frm2'
                    title='비고 입력해주세요.'
                    placeholder=''
                  />
                </td>
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
