import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../../Components/Breadcrumb';
import {
  Input,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
  Tab,
} from '../../Components/Element';
import Notice from '../../Components/Notice';
import LoginType1 from './LoginType1';
import LoginType2 from './LoginType2';
import LoginType3 from './LoginType3';
import ResetPassword from './ResetPassword';

function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);
  const [openResetPassword, setOpenResetPassword] = useState(false);

  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>로그인</h2>
      </div>
      <div class='contents_area'>
        <div class='tab_depth4'>
          <Tab
            type={1}
            data={[
              { index: 1, title: 'ID/PW 로그인' },
              { index: 2, title: 'GPKI 로그인' },
              { index: 3, title: '모바일 공무원증 로그인' },
            ]}
            currentIndex={tab}
            onChange={(index) => {
              setOpenResetPassword(false);
              setTab(index);
            }}
          />
        </div>
        {tab == 1 ? (
          openResetPassword ? (
            <ResetPassword />
          ) : (
            <LoginType1
              openResetPassword={() => {
                setOpenResetPassword(true);
              }}
            />
          )
        ) : tab == 2 ? (
          <LoginType2 />
        ) : tab == 3 ? (
          <LoginType3 />
        ) : null}
      </div>
    </>
  );
}

export default App;
