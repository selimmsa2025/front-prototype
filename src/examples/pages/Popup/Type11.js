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
import { Button, Tab, Popup, Textarea } from '../../Components/Element';
import CommonPopup from '../../Components/CommonPopup';
function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(true);
  return (
    <>
      <CommonPopup
        showPopup={showPopup}
        onClose={() => {
          setShowPopup(false);
        }}
        saveButtonTitle={'저장'}
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
        title={'질의수정'}
      >
        <div class='board_list'>
          <table class='tstyle_write h45'>
            <caption>질의수정 - 질의대상, 질의사항으로 구성</caption>
            <tbody>
              <tr>
                <th scope='row'>질의대상</th>
                <td>행사관리</td>
              </tr>
              <tr>
                <th scope='row'>
                  질의사항<span class='essential'>(필수)</span>
                </th>
                <td>
                  <Textarea
                    name='text_content'
                    id='fr_textarea'
                    class='textarea'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></Textarea>
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
