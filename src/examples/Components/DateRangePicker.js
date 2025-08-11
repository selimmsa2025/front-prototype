import _ from 'lodash';
import React, { useEffect, useState, forwardRef } from 'react';
import { DatePicker } from './Element';
import moment from 'moment';
function App (params) {
  const { onChange, useRangeButton = true } = params;

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectType, setSelectType] = useState(0);
  const changeDate = (type) => {
    let temp_startDate = null;
    const temp_endDate = moment(Date());

    if (type == 1) {
      temp_startDate = _.cloneDeep(temp_endDate).subtract(7, 'days');
      setStartDate(temp_startDate.format('YYYY.MM.DD'));
    } else if (type == 2) {
      temp_startDate = _.cloneDeep(temp_endDate).subtract(1, 'months');
      setStartDate(temp_startDate.format('YYYY.MM.DD'));
    } else if (type == 3) {
      temp_startDate = _.cloneDeep(temp_endDate).subtract(3, 'months');
      setStartDate(temp_startDate.format('YYYY.MM.DD'));
    } else if (type == 4) {
      temp_startDate = _.cloneDeep(temp_endDate).subtract(1, 'years');
      setStartDate(temp_startDate.format('YYYY.MM.DD'));
    }
    setEndDate(temp_endDate.format('YYYY.MM.DD'));
    onChange?.(
      temp_startDate.format('YYYY.MM.DD'),
      temp_endDate.format('YYYY.MM.DD'),
    );
  };

  const changeSelectType = (type) => {
    if (type == selectType) {
      setSelectType(0);
      setStartDate('');
      setEndDate('');
      onChange?.('', '');
    } else {
      setSelectType(type);
      changeDate(type);
    }
  };
  return (
    <>
      <div class='datepicker_wrap'>
        <DatePicker
          type={'date'}
          value={startDate}
          onChange={(date) => {
            setSelectType(0);
            setStartDate(moment(date).format('YYYY.MM.DD'));
            onChange?.(startDate, endDate);
          }}
          pattern={'yyyy.MM.dd'}
          title='시작날짜를 입력하세요. 입력방법 예시:2024.01.01'
          placeholder='YYYY.MM.DD'
          wihtoutWrapTag={true}
        />
        <span class='date_bar'>-</span>
        <DatePicker
          type={'date'}
          value={endDate}
          onChange={(date) => {
            setSelectType(0);
            setEndDate(moment(date).format('YYYY.MM.DD'));
            onChange?.(startDate, endDate);
          }}
          pattern={'yyyy.MM.dd'}
          title='종료날짜를 입력하세요. 입력방법 예시:2024.12.31'
          placeholder='YYYY.MM.DD'
          wihtoutWrapTag={true}
        />
      </div>
      {useRangeButton ? (
        <ul class='date_select'>
          <li>
            <input
              type='radio'
              name='date_range'
              id='date_range1-1'
              checked={selectType == 1}
              onClick={() => {
                changeSelectType(1);
              }}
            />
            <label for='date_range1-1'>일주일</label>
          </li>
          <li>
            <input
              type='radio'
              name='date_range'
              id='date_range1-2'
              checked={selectType == 2}
              onClick={() => {
                changeSelectType(2);
              }}
            />
            <label for='date_range1-2'>1개월</label>
          </li>
          <li>
            <input
              type='radio'
              name='date_range'
              id='date_range1-3'
              checked={selectType == 3}
              onClick={() => {
                changeSelectType(3);
              }}
            />
            <label for='date_range1-3'>3개월</label>
          </li>
          <li>
            <input
              type='radio'
              name='date_range'
              id='date_range1-4'
              checked={selectType == 4}
              onClick={() => {
                changeSelectType(4);
              }}
            />
            <label for='date_range1-4'>1년</label>
          </li>
        </ul>
      ) : null}
    </>
  );
}

export default App;
