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
import { Tooltip } from 'react-tooltip';
function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>버튼</h2>
      </div>
      <div class='contents_area'>
        {' '}
        <Button
          text={'Secondary BTN'}
          size={3}
          color={3}
          data-tooltip-id='tooltip-secondary'
          data-tooltip-content='Secondary BTN 도움말입니다.'
        />
        <Tooltip id='tooltip-secondary' />{' '}
        <Button text={'Primary BTN'} size={3} color={1} id='tooltip-primary' />
        <Tooltip
          anchorSelect='#tooltip-primary'
          content='Primary BTN 도움말입니다.'
          place='bottom-end'
          openEvents={{ click: true }}
        />
      </div>
    </>
  );
}

export default App;
