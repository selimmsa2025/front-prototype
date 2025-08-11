import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import _ from 'lodash';
export default function ReceivedThanksMsg({ close }) {
  const [selectedYear, setSelectedYear] = useState(dayjs().year());
  const [selectedMonth, setSelectedMonth] = useState(dayjs().month() + 1);
  const [openYearSelect, setOpenYearSelect] = useState(false);
  const [openMonthSelect, setOpenMonthSelect] = useState(false);
  const [receivedData, setReceivedData] = useState([]);
  const getReceivedThanksMsg = async () => {
    const response = await axios.get('/mockupServer/getReceivedThanksMsg.json');
    setReceivedData(
      _.filter(
        _.filter(response.data.receivedData, (data) => {
          if (dayjs(data.receivedDate).year() == selectedYear) {
            return true;
          } else {
            return false;
          }
        }),
        (data) => {
          let receivedDate = dayjs(data.receivedDate);
          //금월 데이터 출력
          if (receivedDate.month() + 1 == selectedMonth) {
            return true;
          } else {
            return false;
          }
        },
      ),
    );
  };
  useEffect(() => {
    getReceivedThanksMsg();
  }, [selectedMonth, selectedYear]);

  const formatNumber = (n) => {
    if (n >= 1 && n <= 9) {
      return `0${n}`;
    } else if (n >= 10 && n <= 12) {
      return `${n}`;
    } else {
      return 'Invalid number';
    }
  };
  return (
    <>
      <div className='popup active'>
        <article className='size_md '>
          <h2 className='txt_center'>받은 감사 메시지</h2>
          <div className='pop_content'>
            <div className='board_info'>
              <h3 className='tit1 fl'>
                <b className='point_color1'>{selectedYear}</b>년{' '}
                <b className='point_color1'>{formatNumber(selectedMonth)}</b>월
                받은 감사
              </h3>
              <form name='' id='' method='post' action='' className='fr'>
                <fieldset>
                  <legend className='blind'>게시판 정렬</legend>
                  <div className='form'>
                    <div className='item'>
                      <span className='label'>년도별</span>
                      <div
                        className={`select_list ${openYearSelect ? 'active' : ''
                          }`}
                        onClick={() => setOpenYearSelect(!openYearSelect)}
                      >
                        <a href='javascript:void(0)'>
                          <span className='sr_only'>선택된 옵션</span>
                          {selectedYear}
                        </a>
                        <ul className='list'>
                          {Array(9)
                            .fill(null)
                            .map((_, i) => {
                              const year = 2024 - i;
                              return (
                                <li key={year}>
                                  <a
                                    href='javascript:void(0)'
                                    onClick={() => {
                                      setSelectedYear(year);
                                    }}
                                    className={`${selectedYear == year ? 'on' : ''
                                      }`}
                                  >
                                    {year}
                                  </a>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </div>
                    <div className='item'>
                      <span className='label'>월별</span>
                      <div
                        className={`select_list ${openMonthSelect ? 'active' : ''
                          }`}
                        onClick={() => setOpenMonthSelect(!openMonthSelect)}
                      >
                        <a href='javascript:void(0)'>
                          <span className='sr_only'>선택된 옵션</span>
                          {formatNumber(selectedMonth)}
                        </a>
                        <ul className='list'>
                          {Array(12)
                            .fill(null)
                            .map((_, i) => {
                              const month = 1 + i;
                              return (
                                <li key={month}>
                                  <a
                                    href='javascript:void(0)'
                                    onClick={() => {
                                      setSelectedMonth(month);
                                    }}
                                    className={`${selectedMonth == month ? 'on' : ''
                                      }`}
                                  >
                                    {formatNumber(month)}
                                  </a>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>

            <ul className='grayitem_list'>
              {receivedData?.map((data, i) => {
                return (
                  <>
                    <li key={i}>
                      <div className='item'>
                        <div className='top_box'>
                          <div className='top_info'>{data.senderDepart}</div>
                          <strong className='tit'>
                            {data.senderName} {data.senderPosition}
                          </strong>
                        </div>
                        <div className='bottom_box'>
                          <ul className='item_info'>
                            <li className='date'>{data.receivedDate}</li>
                            <li className='point'>
                              Point <strong>{data.sendPoint}</strong>
                            </li>
                          </ul>
                          <div className='desc'>{data.receivedMessage}</div>
                        </div>
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <a href='javascript:void(0)' className='close_btn' onClick={close}>
            <span className='sr-only'>팝업 닫기</span>
          </a>
        </article>
      </div>
    </>
  );
}
