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
            <div class='wh_box form_area'>
              <div class='text_area under_line'>
                <h2 class='h-tit2'>행정안전부 당직 보안점검 일지</h2>
                <p class='desc2'>2024-04-24 숙직 1차</p>
              </div>
              <div class='form_wrap'>
                <div class='form_group wd_full'>
                  <strong class='form_label'>
                    호실
                    <span class='essential'>
                      *<span class='sr_only'>필수</span>
                    </span>
                  </strong>
                  <Input
                    name='frm1'
                    id='frm1'
                    title='호실'
                    placeholder='내용을 입력해주세요.'
                  />
                </div>
                <div class='form_group wd_full'>
                  <strong class='form_label'>
                    실과명
                    <span class='essential'>
                      *<span class='sr_only'>필수</span>
                    </span>
                  </strong>
                  <Input
                    name='frm2'
                    id='frm2'
                    title='실과명'
                    placeholder='내용을 입력해주세요.'
                  />
                </div>
                <div class='form_group wd_full'>
                  <strong class='form_label'>지적사항</strong>
                  <Input
                    name='frm3'
                    id='frm3'
                    title='지적사항'
                    placeholder='내용을 입력해주세요.'
                  />
                </div>
                <div class='form_group wd_full'>
                  <strong class='form_label'>조치사항</strong>
                  <Input
                    name='frm4'
                    id='frm4'
                    title='조치사항'
                    placeholder='내용을 입력해주세요.'
                  />
                </div>
                <div class='form_group wd_full'>
                  <strong class='form_label'>비고</strong>
                  <Input
                    name='frm5'
                    id='frm5'
                    title='비고'
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

            <div class='box_st6 record_view'>
              <div class='tstyle_grid'>
                <table>
                  <caption>
                    행정안전부 당직 보안점검 일지 - 호실, 실과명, 지적사항,
                    조치사항, 비고, 점검일시로 구분
                  </caption>
                  <colgroup>
                    <col style={{ width: '15%' }} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope='row'>호실</th>
                      <td>101</td>
                    </tr>
                    <tr>
                      <th scope='row'>실과명</th>
                      <td>실과명</td>
                    </tr>
                    <tr>
                      <th scope='row'>지적사항</th>
                      <td>이상없음</td>
                    </tr>
                    <tr>
                      <th scope='row'>조치사항</th>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope='row'>비고</th>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope='row'>지적사항</th>
                      <td>2024-04-24 10:52</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Button as='a' color='none' class='close' text='' />
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}
