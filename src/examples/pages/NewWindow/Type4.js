import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  Input,
  Button,
  Check,
  DatePicker,
  Radio,
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
            <div class='wh_box'>
              <div class='text_area'>
                <i class='icon'>
                  <img src='../img/sub/icon_title4.png' alt='' />
                </i>
                <h2 class='h-tit2'>당직근무 보안점검일지</h2>
                <p class='desc2'>
                  보안점검번호를 입력하면 보안점검일지를 등록하는 화면으로
                  이동합니다. 현재 해당하는 차수를 선택하여 보안점검을
                  실시하세요.
                </p>
              </div>
              <div class='form_area'>
                <div class='middle_line'>
                  <div class='datepicker_wrap'>
                    <DatePicker
                      pattern={'yyyy.MM.dd'}
                      onChange={(date) => {}}
                      type={'date'}
                      title='시작날짜를 입력하세요.  입력방법 예시:2024.12.31'
                      wihtoutWrapTag={true}
                    />
                    <span class='date_bar'>-</span>
                    <DatePicker
                      pattern={'yyyy.MM.dd'}
                      onChange={(date) => {}}
                      type={'date'}
                      title='종료날짜를 입력하세요. 입력방법 예시:2024.12.31'
                      wihtoutWrapTag={true}
                    />
                  </div>
                </div>
                <div class='form_wrap'>
                  <div class='form_group wd_full between'>
                    <strong class='form_label'>차수</strong>
                    <Radio
                      name='rdo_1'
                      data={[
                        { value: 1, title: '1차', checked: true },
                        { value: 2, title: '2차' },
                      ]}
                    />
                  </div>
                  <div class='form_group wd_full between'>
                    <strong class='form_label'>점검자</strong>
                    <Radio
                      name='rdo_2'
                      data={[
                        { value: 1, title: '사령', checked: true },
                        { value: 2, title: '보좌관' },
                      ]}
                    />
                  </div>
                </div>
              </div>
              <Button
                as='button'
                color=''
                type='submit'
                class='btn_round'
                text='확인'
              />
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}
