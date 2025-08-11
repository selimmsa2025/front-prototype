import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Input, Button } from '../../Components/Element';
import { useForm } from 'react-hook-form';
export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    //opener.parentFunc();
  };
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
                  <img src='../img/sub/icon_title3.png' alt='' />
                </i>
                <h2 class='h-tit2'>심사결과입력(심사위원용)</h2>
                <p class='desc2'>
                  심사대상기관별 심사점수를 입력할 수 있는 화면으로 이동합니다.
                </p>
                <p class='desc4'>
                  심사점수 입력은 09시 00분 부터 09시 55분까지 가능합니다.
                </p>
              </div>
              <div class='form_area'>
                <div class='middle_line'>
                  <ul class='info_list'>
                    <li>
                      <span>행사명</span>
                      <p>실제행사</p>
                    </li>
                    <li>
                      <span>행사일</span>
                      <p>2024-04-29 09:00 ~ 2024-04-30 09:00</p>
                    </li>
                    <li>
                      <span>행사장소</span>
                      <p>세종특별자치시 가름로 232 (어진동)</p>
                    </li>
                    <li>
                      <span>행사기관</span>
                      <p>행정안전부</p>
                    </li>
                  </ul>
                </div>
                <div class='form_wrap'>
                  <div class='form_group wd_full'>
                    <strong class='form_label'>성명</strong>
                    <Input
                      name='frm1'
                      id='frm1'
                      title='성명'
                      placeholder=''
                      register={register('userId', {
                        required: '필수입력 항목입니다.',
                      })}
                    />
                  </div>
                  {errors.userId && (
                    <p class='color_txt type1'>{errors.userId.message}</p>
                  )}
                  <div class='form_group wd_full'>
                    <strong class='form_label'>비밀번호</strong>
                    <Input
                      type='password'
                      name='frm2'
                      id='frm2'
                      title='비밀번호'
                      placeholder=''
                      register={register('password', {
                        required: '비밀번호는 필수입력사항입니다.',
                        validate: (value) =>
                          /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/.test(value)
                            ? true
                            : '비밀번호를 확인해주세요',
                      })}
                    />
                  </div>
                  {errors.password && (
                    <p class='color_txt type1'>{errors.password.message}</p>
                  )}
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
