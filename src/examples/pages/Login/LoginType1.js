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

function App ({ openResetPassword }) {
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
    console.log('로그인 프로세스 시작');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id='login' class='login'>
          <i class='lock_icon'></i>
          <h3 class='h-tit2'>ID/PW 로그인</h3>
          <div class='form_wrap'>
            <div class='form_group'>
              <Input
                class={` ${errors.organ ? 'error' : ''}`}
                name='frm1'
                id='frm1'
                title='기관명을 입력하세요'
                placeholder='기관명을 입력하세요'
                register={register('organ', {
                  required: '필수입력 항목입니다.',
                })}
              />
            </div>
            {errors.organ && (
              <p class='color_txt type1'>{errors.organ.message}</p>
            )}
            <div class='form_group'>
              <Input
                class={` ${errors.id ? 'error' : ''}`}
                name='frm2'
                id='frm2'
                title='아이디를 입력하세요'
                placeholder='아이디를 입력하세요'
                register={register('id', {
                  required: '필수입력 항목입니다.',
                })}
              />
            </div>
            {errors.id && <p class='color_txt type1'>{errors.id.message}</p>}
            <div class='form_group'>
              <Input
                class={` ${errors.password ? 'error' : ''}`}
                type='password'
                name='frm3'
                id='frm3'
                title='비밀번호를 입력하세요'
                placeholder='비밀번호를 입력하세요'
                register={register('password', {
                  required: '필수입력 항목입니다.',
                })}
              />
            </div>
            {errors.password && (
              <p class='color_txt type1'>{errors.password.message}</p>
            )}
            <a
              href='#'
              class='pw_set'
              onClick={(e) => {
                e.preventDefault();
                openResetPassword?.();
              }}
            >
              비밀번호 재설정
            </a>

            <div class='full_btn_box'>
              <Button
                as='button'
                type='submit'
                color='1'
                class=' type5 w100p'
                text='로그인'
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
