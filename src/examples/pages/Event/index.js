import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../../Components/Breadcrumb';
import dayjs from 'dayjs';
import {
  Input,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
} from '../../Components/Element';
import Event from '../../Components/Event';
function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>page title</h2>
      </div>
      <div class='contents_area'>
        <div class='box_st4 desc_bx has_icon'>
          <i class='left_icon'>
            <img src='/img/sub/icon_speech.png' alt='' />
          </i>
          <ul class='dot1'>
            <li>
              <b>행사정보 등록</b> : 행사현황 메뉴 선택 → 화면 하단의 행사등록
              버튼 선택
            </li>
            <li>
              <b>참석자 등록</b> : 행사현황 메뉴 선택 → 참석하시고자 하는 행사
              선택 → 화면 하단의 참석신청 버튼 선택
            </li>
          </ul>
        </div>

        <div class='box_st4 info_bx'>
          <p class='txt_help type1'>
            실제 행사정보를 관리하는 화면으로 테스트진행을 원하시는 사용자는
            [행사등록전 테스트용] 메뉴를 이용해주시기 바랍니다.
          </p>
        </div>

        <Event />
      </div>
    </>
  );
}

export default App;
