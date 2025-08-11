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
        title={'참석예정자 등록'}
      >
        <div className='board_list'>
          <table className='tstyle_write h45'>
            <caption>
              참석예정자 등록 - 소속기관, 기관유형, 이름, 부서명, 직급,
              생년월일, 연락처(직장), 연락처(휴대폰), 메일, 디지털식별코드,
              참석확인방법, 기관담당자, 비고로 구성
            </caption>
            <colgroup>
              <col style={{ width: '22%' }} />
              <col style={{ width: '28%' }} />
              <col style={{ width: '22%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>
                  소속기관<span className='essential'>(필수)</span>
                </th>
                <td colspan='3'>
                  <div className='search_input'>
                    <Input
                      name='frm1'
                      id='frm1'
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
                <td colspan='3'>
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
                  <div className='search_input'>
                    <Input
                      name='frm2'
                      id='frm2'
                      title='이름을 입력해주세요.'
                      placeholder=''
                    />
                  </div>
                </td>
                <th scope='row'>
                  부서명<span className='essential'>(필수)</span>
                </th>
                <td>
                  <Input
                    name='frm3'
                    id='frm3'
                    title='부서명을 입력해주세요.'
                    placeholder=''
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  직급<span className='essential'>(필수)</span>
                </th>
                <td>
                  <Input
                    name='frm4'
                    id='frm4'
                    title='직급을 입력해주세요.'
                    placeholder=''
                  />
                </td>
                <th scope='row'>생년월일</th>
                <td>
                  <Input
                    name='frm5'
                    id='frm5'
                    type='number'
                    title='생년월일을 입력해주세요.'
                    placeholder='예)20000101'
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>연락처(직장)</th>
                <td>
                  <Input
                    name='frm6'
                    id='frm6'
                    title='연락처(직장)을 입력해주세요.'
                    placeholder=''
                  />
                </td>
                <th scope='row'>
                  연락처(휴대폰)<span className='essential'>(필수)</span>
                </th>
                <td>
                  <Input
                    name='frm7'
                    id='frm7'
                    title='연락처(휴대폰)을 입력해주세요.'
                    placeholder=''
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>메일</th>
                <td>
                  <Input
                    name='frm8'
                    id='frm8'
                    type='email'
                    title='메일을 입력해주세요.'
                    placeholder='예)email@email.com'
                  />
                </td>
                <th scope='row'>디지털식별코드</th>
                <td>
                  <Input
                    name='frm9'
                    id='frm9'
                    title='디지털식별코드를 입력해주세요.'
                    placeholder=''
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  참석확인방법<span className='essential'>(필수)</span>
                </th>
                <td colspan='3'>
                  <Radio
                    name='rdo_1'
                    data={[
                      {
                        value: '1',
                        title: '모바일 공무원증',
                        checked: true,
                        tooltip:
                          '[행사등록전 테스트용] 메뉴를 이용해주시기 바랍니다.',
                      },
                      {
                        value: '2',
                        title: '개인QR',
                        tooltip:
                          '[행사등록전 테스트용] 메뉴를 이용해주시기 바랍니다.',
                      },
                    ]}
                    onChange={(e) => {
                      console.log('test :: ', e.target.value);
                    }}
                    useTooltip={true}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>기관담당자</th>
                <td colspan='3'>
                  <div className='form_chk ico_only'>
                    <Check
                      name='chk_1'
                      class='ico_only'
                      data={[
                        {
                          value: '1',
                          title: 'ss',
                          checked: false,
                          displayTitle: false,
                        },
                      ]}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>비고</th>
                <td colspan='3'>
                  <Input
                    name='frm10'
                    id='frm10'
                    title='비고를 입력해주세요.'
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
