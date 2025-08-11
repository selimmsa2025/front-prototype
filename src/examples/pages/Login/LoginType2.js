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

function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data) => {
    console.log('GPKI 라이브러리 연동 처리');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id='login' class='login'>
          <i class='lock_icon'></i>
          <h3 class='h-tit2'>GPKI 로그인</h3>
          <div class='text_area'>
            <p>GPKI 공인인증서로 로그인 할 수 있습니다.</p>
            <div class='full_btn_box'>
              <button
                type='submit'
                class='btn1 type5 w100p'
                target='_blank'
                title='새창열림'
              >
                인증서 로그인
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
