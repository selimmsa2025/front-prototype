import { createPortal } from 'react-dom';
import React, { useEffect, useState } from 'react';
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
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
} from '../../Components/Element';
import Sortable from '../../Components/Board/Sortable';
import DateRangePicker from '../../Components/DateRangePicker';
function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [typeSearchText, setTypeSearchText] = useState('');
  const [searchText, setSearchText] = useState('');

  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>page title</h2>
      </div>
      <div class='contents_area'>
        <div class='box_st1 sch_top_wrap'>
          <div class='form_wrap width_half'>
            <div class='form_group'>
              <strong class='form_label'>검색 조건 1</strong>
              <Input
                name='frm1'
                id='frm1'
                title='검색어를 입력해주세요.'
                placeholder='검색어를 입력해주세요.'
                value={typeSearchText}
                onChange={(e) => {
                  setTypeSearchText(e.target.value);
                }}
              />
            </div>
            <div class='form_group'>
              <strong class='form_label'>검색 조건 2</strong>
              <Select
                name='sel1'
                id='sel1'
                class='size_sm'
                title='조건을 선택하세요.'
                data={[
                  { id: 'all', name: '전체' },
                  { id: '1', name: '조건1' },
                  { id: '2', name: '조건2' },
                ]}
              />
            </div>
            <div class='form_group'>
              <strong class='form_label'>검색 조건 3</strong>
              <Select
                name='sel2'
                id='sel2'
                class='size_sm'
                title='조건을 선택하세요.'
                data={[
                  { id: 'all', name: '전체' },
                  { id: '1', name: '조건1' },
                  { id: '2', name: '조건2' },
                ]}
              />
              <Input
                name='frm2'
                id='frm2'
                title='검색어를 입력해주세요.'
                placeholder='검색어를 입력해주세요.'
              />
            </div>
            <div class='form_group wrap'>
              {/*  date_select 사용할경우 wrap추가  */}
              <strong class='form_label'>검색 조건 4</strong>
              <DateRangePicker />
            </div>
            <div class='form_group valign_top'>
              <strong class='form_label'>검색 조건 5</strong>
              <Check
                name='chk_1'
                data={[
                  { value: '1', title: '선택1' },
                  { value: '2', title: '선택2' },
                  { value: '3', title: '선택3' },
                  { value: '4', title: '선택4' },
                  { value: '5', title: '선택5' },
                  { value: '6', title: '선택6' },
                  { value: '7', title: '선택7' },
                  { value: '8', title: '선택8', disabled: true },
                ]}
              />
            </div>
            <div class='form_group valign_top'>
              <strong class='form_label'>검색 조건 6</strong>
              <Radio
                name='chk_2'
                data={[
                  { value: '1', title: '선택1' },
                  { value: '2', title: '선택2' },
                  { value: '3', title: '선택3' },
                  { value: '4', title: '선택4' },
                  { value: '5', title: '선택5' },
                  { value: '6', title: '선택6' },
                  { value: '7', title: '선택7' },
                  { value: '8', title: '선택8', disabled: true },
                ]}
              />
            </div>
            <div class='sch_btn_area'>
              <Button
                as={'button'}
                class={'sch'}
                text={'초기화'}
                color={2}
                onClick={(e) => {
                  setSearchText('');
                  setTypeSearchText('');
                }}
              />
              <Button
                as={'button'}
                class={'sch'}
                text={'검색'}
                color={1}
                onClick={(e) => {
                  setSearchText(typeSearchText);
                }}
              />
            </div>
          </div>
        </div>

        <Sortable searchText={searchText} />
      </div>{' '}
    </>
  );
}

export default App;
