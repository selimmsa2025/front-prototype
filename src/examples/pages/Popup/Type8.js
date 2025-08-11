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
import { Button, Tab, Popup } from '../../Components/Element';
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
        saveButtonTitle={'저장'}
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
        title={'질의대상 수정'}
      >
        <div class='board_list'>
          <table class='tstyle_write h45'>
            <caption>질의대상 수정 - 질의대상명, 질의대상설명으로 구성</caption>
            <tbody>
              <tr>
                <th scope='row'>
                  질의대상명<span class='essential'>(필수)</span>
                </th>
                <td>
                  <input
                    type='text'
                    class='form_text'
                    name='frm1'
                    id='frm1'
                    title='질의대상명'
                    placeholder='질의대상명을 입력해주세요.'
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>질의대상설명</th>
                <td>
                  <textarea name='' id='' class='textarea h300'></textarea>
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
