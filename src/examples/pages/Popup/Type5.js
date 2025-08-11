import { createPortal } from 'react-dom';
import React, { useEffect, useState, useMemo } from 'react';
import _ from 'lodash';
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
import {
  Input,
  Textarea,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
  Popup,
} from '../../Components/Element';
import CommonPopup from '../../Components/CommonPopup';
import AttendeesList from './Components/AttendeesList';
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(true);
  const [dataList, setDataList] = useState([]);
  const [searchOrgNameText, setSearchOrgNameText] = useState('');
  const [searchUserNameText, setSearchUserNameText] = useState('');

  const getAttendeesList = async () => {
    const response = await axios.get('/mockupServer/getAttendeesList.json', {
      searchOrgNameText: searchOrgNameText,
      searchUserNameText: searchUserNameText,
    });
    let data = _.filter(
      response.data,
      (v) => v.orgname.indexOf(searchOrgNameText) > -1,
    );
    data = _.filter(data, (v) => v.userName.indexOf(searchUserNameText) > -1);
    setDataList(data);
  };

  useEffect(() => {
    getAttendeesList();
  }, []);

  const search = () => {
    getAttendeesList();
  };

  return (
    <>
      <CommonPopup
        showPopup={showPopup}
        size={'large'}
        onClose={() => {
          setShowPopup(false);
        }}
        saveButtonTitle={''}
        closeButtonTitle={''}
        additionalButtonTitle={'뒤로가기'}
        saveButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        closeButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        additionalButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        title={'참석자 조회'}
      >
        <h3>행정안전부 실제행사</h3>
        <ul className='info_list type1'>
          <li>
            <span>행사일</span>
            <p>2024-04-29 10:00~2024-04-30 09:00</p>
          </li>
          <li>
            <span>행사주소</span>
            <p>세종특별자치시 가름로 232 (어진동)</p>
          </li>
        </ul>
        <div className='box_st1 sch_top_wrap'>
          <div className='form_wrap twin'>
            <div className='form_group'>
              <strong className='form_label'>기관명</strong>
              <Input
                name='frm1'
                id='frm1'
                title='기관명을 입력해주세요.'
                placeholder=''
                value={searchOrgNameText}
                onChange={(e) => {
                  setSearchOrgNameText(e.target.value);
                }}
              />
            </div>
            <div className='form_group'>
              <strong className='form_label'>성명</strong>
              <Input
                name='frm2'
                id='frm2'
                title='성명을 입력해주세요.'
                placeholder=''
                onChange={(e) => {
                  setSearchUserNameText(e.target.value);
                }}
              />
              <Button
                type='button'
                color='2'
                text='검색'
                onClick={search}
              ></Button>
            </div>
          </div>
        </div>
        <AttendeesList dataList={dataList} />
      </CommonPopup>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>page title</h2>
      </div>
      <div className='contents_area'>
        <Button
          text={'팝업 열기'}
          onClick={() => {
            setShowPopup(!showPopup);
          }}
        />
      </div>
    </>
  );
}

export default App;
