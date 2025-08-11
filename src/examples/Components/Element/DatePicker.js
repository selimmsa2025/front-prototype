import _ from 'lodash';
import React, { useEffect, useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale/ko';
import dayjs from 'dayjs';
registerLocale('ko', ko);

function App(params) {
  const {
    pattern,
    value,
    type,
    title,
    onChange,
    wihtoutWrapTag = false,
  } = params;

  const [startDate, setStartDate] = useState(new Date());

  const onChangeEvent = (date) => {
    onChange?.(date);
    if (_.isEmpty(value)) {
      setDefaultValue(dayjs(date).format('YYYY.MM.DD'));
    }
  };
  const [defaultValue, setDefaultValue] = useState('');
  const CalendarInput = forwardRef(({ value, onClick }, ref) => (
    <>
      <input
        {..._.omit(params, ['pattern', 'value', 'type', 'title'])}
        type='text'
        class={`form_text datepicker_input cal ${params.class ? params.class : ''
          }`}
        title={
          title ? title : '시작날짜를 입력하세요. 입력방법 예시:2024.01.01'
        }
        placeholder='YYYY.MM.DD'
        value={value || defaultValue}
        onChange={() => {
          onChangeEvent(value);
        }}
      />
      <button type='button' class='btn_datepicker' onClick={onClick} ref={ref}>
        <span class='sr_only'>달력보기</span>
      </button>
    </>
  ));

  const render_from_datePicker = () => {
    return (
      <div class='form_datepicker'>
        {/* <label for='sdate'>시작날짜</label> */}
        <div class='datepicker_item'>
          {type == 'timeOnly' ? (
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<CalendarInput />}
              locale='ko'
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption='Time'
              dateFormat={pattern}
            />
          ) : type == 'year' ? (
            <DatePicker
              selected={value}
              onChange={(date) => onChangeEvent(date)}
              customInput={<CalendarInput />}
              locale='ko'
              showYearPicker
              dateFormat={pattern}
            />
          ) : type == 'quarter' ? (
            <DatePicker
              selected={value}
              onChange={(date) => onChangeEvent(date)}
              customInput={<CalendarInput />}
              locale='ko'
              showQuarterYearPicker
              dateFormat={pattern}
            />
          ) : type == 'month' ? (
            <DatePicker
              selected={value}
              onChange={(date) => onChangeEvent(date)}
              customInput={<CalendarInput />}
              locale='ko'
              showMonthYearPicker
              dateFormat={pattern}
            />
          ) : (
            <DatePicker
              selected={value}
              onChange={(date) => onChangeEvent(date)}
              customInput={<CalendarInput />}
              locale='ko'
              todayButton='오늘'
              dateFormat={pattern}
            />
          )}
        </div>
      </div>
    );
  };
  if (wihtoutWrapTag == false) {
    return (
      <>
        <div class='datepicker_wrap'>{render_from_datePicker()}</div>
      </>
    );
  } else {
    return render_from_datePicker();
  }
}

export default App;
