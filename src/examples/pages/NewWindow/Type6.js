import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  Input,
  Button,
  Check,
  DatePicker,
  Radio,
  Textarea,
} from '../../Components/Element';
import { useForm } from 'react-hook-form';
export default function App () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>심사결과입력</legend>
          <div class='new_inner'>
            <h1 class='logo'>
              <a href='#'>
                <img src='../img/layout/logo_mois.svg' alt='행정안전부' />
              </a>
            </h1>
            <div class='wh_box form_area'>
              <div class='text_area under_line'>
                <h2 class='h-tit2'>당직근무일지</h2>
                <p class='desc2'>2024-04-24 숙직</p>
              </div>
              <div class='form_wrap'>
                <div class='form_group wd_full valign_top'>
                  <strong class='form_label'>
                    지시받은사항
                    <span class='essential'>
                      *<span class='sr_only'>필수</span>
                    </span>
                  </strong>
                  <Textarea
                    class='textarea h100'
                    name=''
                    id=''
                    placeholder='내용을 입력해주세요.'
                  />
                </div>
                <div class='form_group wd_full valign_top'>
                  <strong class='form_label'>
                    조치사항
                    <span class='essential'>
                      *<span class='sr_only'>필수</span>
                    </span>
                  </strong>
                  <Textarea
                    class='textarea h100'
                    name=''
                    id=''
                    placeholder='내용을 입력해주세요.'
                  />
                </div>
                <div class='form_group wd_full valign_top'>
                  <strong class='form_label'>보고사항</strong>
                  <Textarea
                    class='textarea h100'
                    name=''
                    id=''
                    placeholder='내용을 입력해주세요.'
                  />
                </div>
                <div class='form_group wd_full valign_top'>
                  <strong class='form_label'>인계사항</strong>
                  <Textarea
                    class='textarea h100'
                    name=''
                    id=''
                    placeholder='내용을 입력해주세요.'
                  />
                </div>
              </div>
            </div>

            <div class='full_btn_box'>
              <Button
                as='button'
                color=''
                size=''
                type='submit'
                class='btn_round type1'
                text='나가기'
              />
              <Button
                as='button'
                color=''
                size=''
                type='submit'
                class='btn_round'
                text='등록'
              />
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}
