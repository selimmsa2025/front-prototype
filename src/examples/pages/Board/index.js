import { createPortal } from 'react-dom';
import React, { useEffect, useState, useRef } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Link,
  useSearchParams,
  useNavigate,
  json,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../../Components/Breadcrumb';
import _ from 'lodash';
import {
  Input,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
} from '../../Components/Element';
import Board from '../../Components/Board';
import DateRangePicker from '../../Components/DateRangePicker';
function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [typeSearchText, setTypeSearchText] = useState(
    searchParams.get('search'),
  );
  const [showIntroduction, setIntroduction] = useState(false);
  const introductionTogle = () => {
    setIntroduction(!showIntroduction);
  };

  const search = () => {
    if (typeSearchText != '') {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('search', _.cloneDeep(typeSearchText));
      newParams.delete('page');

      setSearchParams(newParams);
    } else {
      navigate(`/board`);
    }
  };
  const clear = () => {
    setTypeSearchText('');
    navigate(`/board`);
  };

  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>page title</h2>
        <div class='title-drop-wrap h-tit-drop'>
          <button
            type='button'
            class={
              showIntroduction ? `h-tit h-drop-btn active` : `h-tit h-drop-btn`
            }
            onClick={introductionTogle}
          >
            서비스 소개
            <span class='sr-only'>{showIntroduction ? '닫기' : '열기'}</span>
          </button>
          <div class='drop-menu'>
            <div class='drop-in'>
              <ul class='drop-list'>
                <li>
                  <a href='#' class='item-link'>
                    서비스 소개
                  </a>
                </li>
                <li>
                  <a href='#' class='item-link'>
                    국내에서 외국발간자료 신청
                  </a>
                </li>
                <li>
                  <a href='#' class='item-link'>
                    해외에서 국내발간자료 신청
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class='contents_area'>
        <div class='box_st1 sch_top_wrap'>
          <div class='form_wrap width_half'>
            <div class='form_group wd_full'>
              <strong class='form_label auto'>검색 조건 0</strong>
              <ul class='chk_list one_line'>
                <li>
                  <div class='form_chk'>
                    <Input
                      type='radio'
                      name='rdo_1'
                      id='rdo_1-1'
                      checked='checked'
                    />
                    <label for='rdo_1-1'>전체</label>
                  </div>
                </li>
                <li>
                  <div class='form_chk'>
                    <Input type='radio' name='rdo_1' id='rdo_1-2' />
                    <label for='rdo_1-2'>기관</label>
                  </div>
                </li>
              </ul>
              <Input
                name='frm0'
                id='frm0'
                title='검색어를 입력해주세요.'
                placeholder='검색어를 입력해주세요.'
              />
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
              <Input
                name='frm0'
                id='frm0'
                title='검색어를 입력해주세요.'
                placeholder='검색어를 입력해주세요.'
              />
            </div>
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
            <div class='use_filter'>
              <strong class='tit'>
                적용된 필터 (<i id='filter_cnt'>4</i>)
              </strong>
              <Button as='button' class='btn_f_reset' text=''>
                <span class='sr_only'></span>
              </Button>
              <div class='filter_col'>
                <Button as='button' text='태그1'>
                  <i class='sr_only'>제거</i>
                </Button>
                <Button as='button' text='태그2'>
                  <i class='sr_only'>제거</i>
                </Button>
                <Button as='button' text='태그3'>
                  <i class='sr_only'>제거</i>
                </Button>
                <Button as='button' text='태그4'>
                  <i class='sr_only'>제거</i>
                </Button>
              </div>
            </div>
            <div class='sch_btn_area'>
              <Button
                as={'button'}
                class={'sch'}
                text={'초기화'}
                color={2}
                onClick={() => {
                  clear();
                }}
              />
              <Button
                as={'button'}
                class={'sch'}
                text={'검색'}
                color={1}
                onClick={() => {
                  search();
                }}
              />
            </div>
          </div>
        </div>
        <div class='box_st1 sch_top_wrap'>
          <div class='form_wrap width_three'>
            <div class='form_group wd_full'>
              <strong class='form_label auto'>검색 조건 0</strong>
              <ul class='chk_list one_line'>
                <li>
                  <div class='form_chk'>
                    <Input
                      type='radio'
                      name='rdo_1'
                      id='rdo_1-1'
                      checked='checked'
                    />
                    <label for='rdo_1-1'>전체</label>
                  </div>
                </li>
                <li>
                  <div class='form_chk'>
                    <Input type='radio' name='rdo_1' id='rdo_1-2' />
                    <label for='rdo_1-2'>기관</label>
                  </div>
                </li>
              </ul>
              <Input
                class='form_text auto'
                name='frm0_1'
                id='frm0_1'
                title='검색어를 입력해주세요.'
                placeholder='검색어를 입력해주세요.'
              />
              <Select
                name='sel0'
                id='sel0'
                class='form_sel size_sm'
                title='조건을 선택하세요.'
                data={[
                  { id: 'all', name: '전체' },
                  { id: '1', name: '조건1' },
                  { id: '2', name: '조건2' },
                ]}
              />
              <Input
                class='form_text'
                name='frm0_2'
                id='frm0_2'
                title='검색어를 입력해주세요.'
                placeholder='검색어를 입력해주세요.'
              />
            </div>
            <div class='form_group'>
              <strong class='form_label auto'>검색 조건 1</strong>
              <Input
                class='form_text'
                name='frm1'
                id='frm1'
                title='검색어를 입력해주세요.'
                placeholder='검색어를 입력해주세요.'
              />
            </div>
            <div class='form_group'>
              <strong class='form_label auto'>검색 조건 2</strong>
              <Select
                name='sel1'
                id='sel1'
                class='form_sel size_sm'
                title='조건을 선택하세요.'
                data={[
                  { id: 'all', name: '전체' },
                  { id: '1', name: '조건1' },
                  { id: '2', name: '조건2' },
                ]}
              />
            </div>
            <div class='form_group'>
              <strong class='form_label auto'>검색 조건 3</strong>
              <Select
                name='sel2'
                id='sel2'
                class='form_sel size_sm'
                title='조건을 선택하세요.'
                data={[
                  { id: 'all', name: '전체' },
                  { id: '1', name: '조건1' },
                  { id: '2', name: '조건2' },
                ]}
              />
              <Input
                class='form_text'
                name='frm2'
                id='frm2'
                title='검색어를 입력해주세요.'
                placeholder='검색어를 입력해주세요.'
              />
            </div>
            <div class='form_group valign_top'>
              <strong class='form_label auto'>검색 조건 5</strong>
              <Check
                name='chk_1'
                data={[
                  { value: '1', title: '선택1' },
                  { value: '2', title: '선택2' },
                  { value: '3', title: '선택3' },
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
                ]}
              />
            </div>
            <div class='use_filter'>
              <strong class='tit'>
                적용된 필터 (<i id='filter_cnt'>4</i>)
              </strong>
              <Button as='button' class='btn_f_reset' text='필터 초기화'>
                <span class='sr_only'></span>
              </Button>
              <div class='filter_col'>
                <Button as='button' text='태그1'>
                  <i class='sr_only'>제거</i>
                </Button>
                <Button as='button' text='태그2'>
                  <i class='sr_only'>제거</i>
                </Button>
                <Button as='button' text='태그3'>
                  <i class='sr_only'>제거</i>
                </Button>
                <Button as='button' text='태그4'>
                  <i class='sr_only'>제거</i>
                </Button>
              </div>
            </div>
            <div class='sch_btn_area'>
              <Button
                as={'button'}
                class={'sch'}
                text={'초기화'}
                color={2}
                onClick={() => {
                  clear();
                }}
              />
              <Button
                as={'button'}
                class={'sch'}
                text={'검색'}
                color={1}
                onClick={() => {
                  search();
                }}
              />
            </div>
          </div>
        </div>

        <div class='box_st1 sch_top_wrap txt_left'>
          <div class='form_wrap'>
            <div class='form_group'>
              <strong class='form_label'>검색 조건 0</strong>
              <Input
                name='frm10'
                id='frm10'
                title='검색어를 입력해주세요.'
                placeholder='검색어를 입력해주세요.'
                class='form_text'
              />
              <Button
                as={'button'}
                class={'btn2 sch'}
                text={'검색'}
                color={2}
              />
            </div>
          </div>
        </div>

        <div class='box_st1 sch_top_wrap'>
          <div class='form_wrap width_md'>
            <div class='form_group'>
              <strong class='form_label'>검색 조건 1</strong>
              <Input
                name='frm2'
                id='frm2'
                title='검색어를 입력해주세요.'
                placeholder='검색어를 입력해주세요.'
              />
              <Button as={'button'} class={'sch'} text={'검색'} color={2} />
            </div>
          </div>
        </div>

        <div class='box_st1 sch_top_wrap'>
          <div class='form_wrap width_free'>
            <div class='form_group'>
              <strong class='form_label'>검색 조건 2</strong>
              <Select
                name='sel3'
                id='sel3'
                class='size_sm'
                title='조건을 선택하세요.'
                data={[
                  { id: 'all', name: '전체' },
                  { id: '1', name: '조건1' },
                  { id: '2', name: '조건2' },
                ]}
              />

              <Button as={'button'} class={'sch'} text={'검색'} color={2} />
            </div>
          </div>
        </div>

        <div class='box_st1 sch_top_wrap'>
          <div class='form_wrap'>
            <div class='form_group'>
              <strong class='form_label'>검색 조건 3</strong>
              <Select
                name='sel3'
                id='sel3'
                class='size_sm'
                title='조건을 선택하세요.'
                data={[
                  { id: 'all', name: '전체' },
                  { id: '1', name: '조건1' },
                  { id: '2', name: '조건2' },
                ]}
              />
              <Input
                name='frm3'
                id='frm3'
                title='검색어를 입력해주세요.'
                placeholder='검색어를 입력해주세요.'
              />
              <Button as={'button'} class={'sch'} text={'검색'} color={2} />
            </div>
          </div>
        </div>
        <div class='box_st1 sch_top_wrap'>
          <div class='form_group wrap'>
            <div class='form_group'>
              <strong class='form_label'>검색 조건 4</strong>

              <DateRangePicker />
            </div>
          </div>
        </div>
        <Board />
      </div>{' '}
    </>
  );
}

export default App;
