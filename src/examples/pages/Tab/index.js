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
import { Button, Tab } from '../../Components/Element';
function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);
  return (
    <>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>버튼</h2>
      </div>
      <div class='contents_area'>
        <Tab
          type={1}
          data={[
            { index: 1, title: '탭1' },
            { index: 2, title: '탭2' },
            { index: 3, title: '탭3' },
            { index: 4, title: '탭4' },
            { index: 5, title: '탭5' },
          ]}
          currentIndex={tab}
          onChange={(index) => {
            setTab(index);
          }}
        />
        <Tab
          type={2}
          data={[
            { index: 1, title: '탭1' },
            { index: 2, title: '탭2' },
            { index: 3, title: '탭3' },
            { index: 4, title: '탭4' },
            { index: 5, title: '탭5' },
            { index: 6, title: '탭6' },
          ]}
          currentIndex={tab}
          onChange={(index) => {
            setTab(index);
          }}
        />
      </div>
    </>
  );
}

export default App;
