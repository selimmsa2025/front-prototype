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

  const [tryCount, setTryCount] = useState(0);
  const resetPassword = async () => {
    const response = await axios.get('/mockupServer/resetPassword.json', {});
    const { result, tryCount: tryCountResponse } = response.data;

    if (result == true) {
      console.log('비밀번호 변경 성공');
      setTryCount(0);
    } else {
      setTryCount(tryCountResponse);
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data) => {
    resetPassword();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id='login' class='login'>
          <h3 class='h-tit2'>비밀번호 재설정</h3>
          <div class='form_wrap'>
            <label for='frm1' class='txt_label'>
              <span class='essential'>
                *<span class='blind'>(필수)</span>
              </span>
              기존의 비밀번호를 입력해 주세요
            </label>
            <div class='form_group'>
              <Input
                class={` ${errors.password1 ? 'error' : ''}`}
                name='frm1'
                id='frm1'
                title='기존의 비밀번호를 입력해 주세요'
                placeholder=''
                register={register('password1', {
                  required: '필수입력 항목입니다.',
                })}
              />
            </div>
            {errors.password1 && (
              <p class='color_txt type1'>{errors.password1.message}</p>
            )}
            <label for='frm2' class='txt_label'>
              <span class='essential'>
                *<span class='blind'>(필수)</span>
              </span>
              새로운 비밀번호를 입력해 주세요
            </label>
            <div class='form_group'>
              <Input
                class={` ${errors.password2 ? 'error' : ''}`}
                name='frm2'
                id='frm2'
                title='새로운 비밀번호를 입력해 주세요'
                placeholder=''
                register={register('password2', {
                  required: '필수입력 항목입니다.',
                })}
              />
            </div>
            {errors.password2 && (
              <p class='color_txt type1'>{errors.password2.message}</p>
            )}
            <label for='frm3' class='txt_label'>
              <span class='essential'>
                *<span class='blind'>(필수)</span>
              </span>
              새로운 비밀번호를 다시 입력해 주세요
            </label>
            <div class='form_group'>
              <Input
                class={` ${errors.password3 ? 'error' : ''}`}
                name='frm3'
                id='frm3'
                title='새로운 비밀번호를 다시 입력해 주세요'
                placeholder=''
                register={register('password3', {
                  required: '필수입력 항목입니다.',
                })}
              />
            </div>
            {errors.password3 && (
              <p class='color_txt type1'>{errors.password3.message}</p>
            )}
            {tryCount ? (
              <p class='color_txt type1'>
                비밀번호 입력 오류 (계정 잠금까지 {tryCount}회 남음)
              </p>
            ) : null}

            <div class='full_btn_box'>
              <button type='submit' class='btn1 type5 w100p'>
                재설정하기
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
