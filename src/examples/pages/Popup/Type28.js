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
function App() {
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
        size='large'
        onClose={() => {
          setShowPopup(false);
        }}
        closeButtonTitle={'닫기'}
        closeButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        title={'이력정보'}
        showTitle={false}
      >
        <div class='pop_content'>
          <div class="comparison">
            <div>
              <div class="tit_area">
                <h2 class="h-tit2">이력정보</h2>
                <div class="right_items">
                  <a href="javascript:void(0)" class="btn4">내용 비교</a>
                </div>
              </div>
              <ul class="li_chk">
                <li>
                  <div class="form_chk">
                    <Check
                      name='chk_1'
                      id="chk_1-1"
                      data={[
                        { value: '1', title: '2024.04.09 김작성', displayTitle: true, checked: true },
                      ]}
                    />
                  </div>
                  <p class="desc1">위키 업무 테스트 수정 위키 업무 테스트 수정</p>
                </li>
                <li>
                  <div class="form_chk">
                    <Check
                      name='chk_2'
                      id="chk_2-1"
                      data={[
                        { value: '1', title: '2024.04.09 김작성', displayTitle: true, checked: true },
                      ]}
                    />
                  </div>
                  <p class="desc1">위키 업무 테스트 수정 위키 업무 테스트 수정</p>
                </li>
                <li>
                  <div class="form_chk">
                    <Check
                      name='chk_3'
                      id="chk_3-1"
                      data={[
                        { value: '1', title: '2024.04.09 김작성', displayTitle: true, checked: true },
                      ]}
                    />
                  </div>
                  <p class="desc1">위키 업무 테스트 수정 위키 업무 테스트 수정</p>
                </li>
              </ul>
            </div>
            <div>
              <strong class="tit">버전3</strong>
              <div class="box_st2 type1">내용이 들어갑니다. <span class="highlighter">안들어가는 내용입니다.</span> 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다.</div>
            </div>
            <div>
              <strong class="tit">버전1</strong>
              <div class="box_st2 type2">내용이 들어갑니다. <span class="highlighter">내용이 들어갑니다.</span> 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다.</div>
            </div>
          </div>
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
