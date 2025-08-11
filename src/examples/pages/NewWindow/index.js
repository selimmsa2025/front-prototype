import { createPortal } from 'react-dom';
import React, { useEffect, useState, useMemo } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Link,
  useNavigate,
  json,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../../Components/Breadcrumb';
import { Button, Tab, Popup } from '../../Components/Element';
function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.parentFunc = () => {
      console.log('parent Funfciton');
    };
  }, []);

  return (
    <>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>버튼</h2>
      </div>
      <div class='contents_area'>
        <div>버튼클릭시 각 페이지의 새창으로 이동합니다.</div>
        <a
          href='javascript:void(0)'
          onClick={(e) => {
            window.open('/newWindow/type1', '_blank');
          }}
          className='btn1'
        >
          행사관리 로그인
        </a>
        <a
          href='javascript:void(0)'
          onClick={(e) => {
            window.open('/newWindow/type2', '_blank');
          }}
          className='btn1'
        >
          현장심사관리 로그인
        </a>
        <a
          href='javascript:void(0)'
          onClick={(e) => {
            window.open('/newWindow/type3', '_blank');
          }}
          className='btn1'
        >
          심사위원 로그인
        </a>
        <a
          href='javascript:void(0)'
          onClick={(e) => {
            window.open('/newWindow/type4', '_blank');
          }}
          className='btn1'
        >
          당직근무 보안점검 일지
        </a>
        <a
          href='javascript:void(0)'
          onClick={(e) => {
            window.open('/newWindow/type5', '_blank');
          }}
          className='btn1'
        >
          행정안전부 당직 보안점검 일지
        </a>
        <a
          href='javascript:void(0)'
          onClick={(e) => {
            window.open('/newWindow/type6', '_blank');
          }}
          className='btn1'
        >
          행정안전부 당직근무 일지
        </a>
        <a
          href='javascript:void(0)'
          onClick={(e) => {
            window.open('/newWindow/type7', '_blank');
          }}
          className='btn1'
        >
          커뮤니티 기본정보
        </a>
        <a
          href='javascript:void(0)'
          onClick={(e) => {
            window.open('/newWindow/type8', '_blank');
          }}
          className='btn1'
        >
          커뮤니티 포털
        </a>
      </div>
    </>
  );
}

export default App;
