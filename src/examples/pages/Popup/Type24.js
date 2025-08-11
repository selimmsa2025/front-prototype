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
        saveButtonTitle={'보고'}
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
        title={'당직근무 상황보고'}
      >
        <div className='board_list'>
          <table className='tstyle_write h45'>
            <caption>
              당직근무 상황보고 - 보고기관명, 책임자, 보고자, 행정안전부 당직자,
              이상유무, 비고로 구성
            </caption>
            <colgroup>
              <col style={{ width: '20%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>
                  보고기관명<span className='essential'>(필수)</span>
                </th>
                <td>
                  <Input
                    name='frm1'
                    id='frm1'
                    title='보고기관명 입력해주세요.'
                    placeholder=''
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  책임자<span className='essential'>(필수)</span>
                </th>
                <td>
                  <div class='form_group'>
                    <Input
                      name='frm1'
                      id='frm2'
                      class='size_xmd'
                      title='책임자 입력해주세요.'
                      placeholder=''
                    />
                    <Button as='a' color='2' text='검색' />
                    <span>외</span>
                    <Input
                      name='frm1'
                      id='frm3'
                      class='size_xsm'
                      title='책임자 입력해주세요.'
                      placeholder=''
                    />
                    <span>명</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>보고자</th>
                <td>
                  <div class='form_group'>
                    <Input
                      name='frm1'
                      id='frm2'
                      class='size_xmd'
                      title='보고자 입력해주세요.'
                      placeholder=''
                    />
                    <Button as='a' color='2' text='검색' />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  행정안전부 당직자 <span className='essential'>(필수)</span>
                </th>
                <td>
                  <Input
                    name='frm1'
                    id='frm2'
                    class='size_xmd'
                    title='행정안전부 당직자 입력해주세요.'
                    placeholder=''
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>이상유무</th>
                <td>
                  <Select
                    name='sel1'
                    id='sel1'
                    title='이상유무 선택해주세요.'
                    data={[
                      { id: 'all', name: '이상유무 선택해주세요.' },
                      { id: '1', name: '이상유무1' },
                      { id: '2', name: '이상유무2' },
                    ]}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>비고</th>
                <td>
                  <Textarea
                    class='textarea'
                    name=''
                    id=''
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
