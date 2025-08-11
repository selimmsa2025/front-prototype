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
import DateRangePicker from '../../Components/DateRangePicker';
import moment from 'moment';
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>Date Picker</h2>
      </div>
      <div className='contents_area'>
        <div class='tit_area'>
          <h3 class='h-tit3'>기본</h3>
        </div>
        <div class='board_list' style={{ height: '500px' }}>
          <table class='tstyle_write'>
            <caption>버튼</caption>
            <colgroup>
              <col style={{ width: '10%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row' rowSpan={1}>
                  Date
                </th>
                <td>
                  <DatePicker
                    pattern={'yyyy.MM.dd'}
                    value={'2024-05-23'}
                    type={'date'}
                    onChange={(date) => {
                      alert(moment(date).format('YYYY년MM월DD일'));
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row' rowSpan={1}>
                  Time Only
                </th>
                <td>
                  <DatePicker
                    pattern={'hh:mm aa'}
                    type={'timeOnly'}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <th scope='row' rowSpan={1}>
                  Year
                </th>
                <td>
                  <DatePicker
                    pattern={'yyyy'}
                    value={'2024-05-23'}
                    type={'year'}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row' rowSpan={1}>
                  Quarter
                </th>
                <td>
                  <DatePicker
                    pattern={'yyyy, QQQ'}
                    value={'2024-05-23'}
                    type={'quarter'}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row' rowSpan={1}>
                  Month
                </th>
                <td>
                  <DatePicker
                    pattern={'yyyy-MM'}
                    value={'2024-05-23'}
                    type={'month'}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row' rowSpan={1}>
                  Range
                </th>
                <td>
                  <div class='form_group'>
                    <DateRangePicker
                      onChange={(startDate, endDate) => {
                        console.log(startDate, endDate);
                      }}
                    />
                  </div>
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
