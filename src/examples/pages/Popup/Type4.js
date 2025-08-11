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
import {
  Input,
  Textarea,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
  Popup,
} from '../../Components/Element';
import CommonPopup from '../../Components/CommonPopup';
function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(true);
  return (
    <>
      <CommonPopup
        showPopup={showPopup}
        onClose={() => {
          setShowPopup(false);
        }}
        saveButtonTitle={''}
        closeButtonTitle={''}
        additionalButtonTitle={'참석'}
        saveButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        closeButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        additionalButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        title={'참석처리'}
      >
        <h3>행사 참석처리를 위해 개인정보를 입력해 주시기 바랍니다.</h3>
        <div className='form_wrap type_pop'>
          <div className='form_group'>
            <strong className='form_label'>
              참석자유형<span className='essential'>*</span>
            </strong>
            <Select
              name='sel1'
              id='sel1'
              title='유형을 선택하세요.'
              data={[
                { id: 'all', name: '중앙행정기관' },
                { id: '1', name: '조건1' },
                { id: '2', name: '조건2' },
              ]}
            />
          </div>
          <div className='form_group'>
            <strong className='form_label'>
              소속기관<span className='essential'>*</span>
            </strong>
            <Input name='frm1' id='frm1' title='소속기관' placeholder='' />
          </div>
          <div className='form_group'>
            <strong className='form_label'>
              부서명<span className='essential'>*</span>
            </strong>
            <Input name='frm2' id='frm2' title='부서명' placeholder='' />
          </div>
          <div className='form_group'>
            <strong className='form_label'>
              참석자 성명<span className='essential'>*</span>
            </strong>
            <Input name='frm3' id='frm3' title='참석자 성명' placeholder='' />
          </div>
          <div className='form_group'>
            <strong className='form_label'>
              참석자 직급<span className='essential'>*</span>
            </strong>
            <Input name='frm4' id='frm4' title='참석자 직급' placeholder='' />
          </div>
          <div className='form_group'>
            <strong className='form_label'>참석자 메일주소</strong>
            <Input
              type='email'
              name='frm5'
              id='frm5'
              title='참석자 메일주소'
              placeholder='예) email@email.com'
            />
          </div>
          <div className='form_group'>
            <strong className='form_label'>
              참석자 휴대폰 번호<span className='essential'>*</span>
            </strong>
            <Input
              name='frm6'
              id='frm6'
              title='참석자 휴대폰 번호'
              placeholder='예) 010-1111-1111'
            />
          </div>
        </div>

        <div className='txt_center'>
          <div className='form_chk'>
            <Check
              name='chk_1'
              data={[
                {
                  value: '1',
                  title:
                    '입력한 정보는 행사 처리 이후에 폐기 됩니다. 이용에 동의 하시겠습니까?',
                  checked: true,
                },
              ]}
            />
          </div>
        </div>
      </CommonPopup>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>page title</h2>
      </div>
      <div className='contents_area'>
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
