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
import {
  Input,
  Textarea,
  Select,
  DatePicker,
  Check,
  Radio,
} from '../../Components/Element';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>폼요소</h2>
      </div>
      <div className='contents_area'>
        <div class="tit_area">
          <h3 class="h-tit3">기본</h3>
        </div>
        <div class="board_list">
          <table class="tstyle_write">
            <caption>공지사항 상세 - 항목들로 구성</caption>
            <colgroup>
              <col style={{ width: '10%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row" rowSpan={5}>Input</th>
                <td>
                  <Input
                    name='frm1'
                    id='frm1'
                    title='내용을 입력해주세요.'
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Input
                    name='frm1'
                    id='frm2'
                    title='내용을 입력해주세요.'
                    placeholder='내용을 입력해주세요.'
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Input
                    name='frm1'
                    id='frm3'
                    title='내용을 입력해주세요.(disabled)'
                    placeholder='내용을 입력해주세요.(disabled)'
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Input
                    name='frm1'
                    id='frm4'
                    title='내용을 입력해주세요.(readOnly)'
                    placeholder='내용을 입력해주세요.(readOnly)'
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Textarea
                    name='textarea1'
                    id='seltextarea1'
                    rows={3}
                  />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th scope="row" rowSpan={1}>Select</th>
                <td>
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
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th scope="row" rowSpan={1}>Checkbox</th>
                <td>
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
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th scope="row" rowSpan={1}>Radio</th>
                <td>
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
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
