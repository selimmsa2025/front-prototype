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
        title={'기관담당자 등록'}
      >
        <div className='board_list'>
          <table className='tstyle_write h45'>
            <caption>
              기관담당자 등록 - 행사명, 행사기관, 소속기관, 기관유형, 이름,
              부서명, 직급, 생년월일, 연락처(직장), 연락처(휴대폰), 메일로 구성
            </caption>
            <colgroup>
              <col style={{ width: '22%' }} />
              <col style={{ width: '28%' }} />
              <col style={{ width: '22%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>
                  행사명<span className='essential'>(필수)</span>
                </th>
                <td colspan='3'>
                  <div className='search_input'>
                    <Input
                      name='frm1'
                      id='frm1'
                      title='행사명 입력해주세요.'
                      placeholder=''
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  행사기관<span className='essential'>(필수)</span>
                </th>
                <td colspan='3'>
                  <Input
                    name='frm3'
                    id='frm3'
                    disabled={true}
                    title='행사기관 입력해주세요.'
                    placeholder='행사 조회 후 자동입력됩니다.'
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  소속기관<span className='essential'>(필수)</span>
                </th>
                <td colSpan='3'>
                  <div className='search_input'>
                    <Input
                      name='frm2'
                      id='frm2'
                      title='소속기관을 입력해주세요.'
                      placeholder=''
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  기관유형<span className='essential'>(필수)</span>
                </th>
                <td colSpan='3'>
                  <Select
                    name='sel1'
                    id='sel1'
                    title='기관유형을 선택해주세요.'
                    data={[
                      { id: 'all', name: '기관유형을 선택해주세요.' },
                      { id: '1', name: '기관유형1' },
                      { id: '2', name: '기관유형2' },
                    ]}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  이름<span className='essential'>(필수)</span>
                </th>
                <td>
                  <Input
                    name='frm4'
                    id='frm4'
                    title='이름을 입력해주세요.'
                    placeholder=''
                  />
                </td>
                <th scope='row'>
                  부서명<span className='essential'>(필수)</span>
                </th>
                <td>
                  <Input
                    name='frm5'
                    id='frm5'
                    type='number'
                    title='부서명 입력해주세요.'
                    placeholder=''
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  직급<span className='essential'>(필수)</span>
                </th>
                <td colSpan='3'>
                  <Input
                    name='frm6'
                    id='frm6'
                    title='직급을 입력해주세요.'
                    placeholder=''
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>연락처(직장)</th>
                <td>
                  <Input
                    name='frm8'
                    id='frm8'
                    type='email'
                    title='연락처(직장) 입력해주세요.'
                    placeholder=''
                  />
                </td>
                <th scope='row'>
                  연락처(휴대폰)<span className='essential'>(필수)</span>
                </th>
                <td>
                  <Input
                    name='frm9'
                    id='frm9'
                    title='연락처(휴대폰) 입력해주세요.'
                    placeholder=''
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>메일</th>
                <td colspan='3'>
                  <Input
                    name='frm10'
                    id='frm10'
                    title='비고를 입력해주세요.'
                    placeholder='예)email@email.com'
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
