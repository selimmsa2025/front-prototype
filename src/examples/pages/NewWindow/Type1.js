import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Input, Button } from '../../Components/Element';

export default function App () {
  return (
    <>
      <form action=''>
        <fieldset>
          <legend>로그인</legend>
          <div class='new_inner'>
            <h1 class='logo'>
              <a href='/'>
                <img src='../img/layout/logo_mois.svg' alt='행정안전부' />
              </a>
            </h1>
            <div class='wh_box'>
              <div class='text_area'>
                <i class='icon'>
                  <img src='../img/sub/icon_title1.png' alt='' />
                </i>
                <h2 class='h-tit2'>행사관리(담당자용)</h2>
                <p class='desc2'>
                  행사 번호를 입력하면 참석 확인, 행사QR 조회를 할 수 있는
                  화면으로 이동합니다. 행사 번호는 행사일까지 사용할 수
                  있습니다.
                </p>
              </div>
              <div class='form_area tel_num_bx'>
                <Input name='frm1' id='frm1' title='행사번호앞자리' />
                <span>-</span>
                <Input name='frm2' id='frm2' title='행사번호뒷자리' />
              </div>
              <Button
                as='button'
                color=''
                type='submit'
                class='btn_round'
                text='로그인'
              />
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}
