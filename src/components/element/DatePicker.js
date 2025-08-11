import _, { range } from 'lodash';
import React, { useEffect, useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale/ko';
import dayjs from 'dayjs';
import { getMonth, getYear } from 'date-fns';
import { Button, Select } from 'components/element';
registerLocale('ko', ko);

function App(params) {
  const {
    pattern,
    value,
    type,
    title,
    onChange,
    wihtoutWrapTag = false,
    startDate,
    endDate,
    setStartDate,
  } = params;

  const convertDateFormat = () => {
    const start = dayjs(startDate || '').format('YYYY.MM.DD');
    const end = dayjs(endDate || '').format('YYYY.MM.DD');
    return { start, end }; // 반환값 추가
  }

  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

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
        className={`form_text datepicker_input cal ${params.className ? params.className : params.class ? params.class : ''
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
      <button type='button' className='btn_datepicker' onClick={onClick} ref={ref}>
        <span className='sr_only'>달력보기</span>
      </button>
    </>
  ));

  const CustomHeader = (params) => {
    const years = range(getYear(params.date) - 2, getYear(params.date) + 3, 1);

    return (<div
      className='datepicker_custom_top'
    >
      <Button type="button"
        color={4}
        onClick={params.decreaseMonth} disabled={params.prevMonthButtonDisabled}
        text={''}
        title={'이전달'}
        children={<span className='sr_only'>이전달</span>}
        className={'prev'}
      />
      <Select
        value={getYear(params.date)}
        onChange={({ target: { value } }) => { params.changeYear(value); }}
        name='yearSel'
        id='yearSel'
        data={[
          ...years.map(option => (
            {
              key: option,
              id: option,
              name: option
            }))
        ]}
        title='년도를 선택하세요.'
      />
      <Select
        onChange={({ target: { value } }) =>
          params.changeMonth(months.indexOf(value))
        }
        name='monthSel'
        id='monthSel'
        value={months[getMonth(params.date)]}
        data={[
          ...months.map(option => (
            {
              key: option,
              id: option,
              name: option
            }))
        ]}
        title='월을 선택하세요.'
      />
      <Button type="button"
        color={4}
        onClick={params.increaseMonth} disabled={params.nextMonthButtonDisabled}
        text={''}
        title={'다음달'}
        children={<span className='sr_only'>다음달</span>}
        className={'next'}
      />
    </div>);
  }


  const render_from_datePicker = () => {
    return (
      <div className='form_datepicker'>
        {/* <label htmlFor='sdate'>시작날짜</label> */}
        <div className='datepicker_item'>
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
              renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <CustomHeader date={date} changeYear={changeYear} changeMonth={changeMonth} decreaseMonth={decreaseMonth} increaseMonth={increaseMonth}
                  prevMonthButtonDisabled={prevMonthButtonDisabled} nextMonthButtonDisabled={nextMonthButtonDisabled} />
              )}
              selected={value}
              onChange={(date) => onChangeEvent(date)}
              customInput={<CalendarInput />}
              locale='ko'
              todayButton='오늘'
              dateFormat={pattern}
              minDate={convertDateFormat().start}
              maxDate={convertDateFormat().end}
            />
          )
          }
        </div>
      </div>
    );
  };
  if (wihtoutWrapTag == false) {
    return (
      <>
        <div className='datepicker_wrap'>{render_from_datePicker()}</div>
      </>
    );
  } else {
    return render_from_datePicker();
  }
}

export default App;
