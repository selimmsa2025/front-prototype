import _ from 'lodash';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../Table';
import dayjs from 'dayjs';
import ReceivedThanksMsg from './Popup/ReceivedThanksMsg';
import SendedThanksMsg from './Popup/SendedThanksMsg';
import UserStatus from './Popup/UserStatus';
import { Tooltip } from 'react-tooltip';
export default function UserPointState ({ isMain = false }) {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [receivedData, setReceivedData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(dayjs().year());
  const [openYearPop, setOpenYearPop] = useState(false);
  const [openReceivedThanksPop, setOpenReceivedThanksPop] = useState(false);
  const [openSendedThanksPop, setOpenSendedThanksPop] = useState(false);
  const [openUserStatusPop, setOpenUserStatusPop] = useState(false);

  const currentYear = dayjs().year();
  const currentMonth = dayjs().month() + 1;

  const getUserPointState = async () => {
    //get current login user's total cooperation point by userId in serverside
    const response = await axios.get('/mockupServer/getUserPointState.json');
    setColumns(response.data.tableColumns);
    setRows(response.data.tableRows);
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
          const currentDate = dayjs();
          //금월 데이터 출력
          if (receivedDate.month() == currentDate.month()) {
            return true;
          } else {
            return false;
          }
        },
      ),
    );
  };
  useEffect(() => {
    getUserPointState();
  }, [selectedYear]);
  return (
    <>
      {openReceivedThanksPop && (
        <ReceivedThanksMsg
          close={() => {
            setOpenReceivedThanksPop(false);
          }}
        />
      )}
      {openSendedThanksPop && (
        <SendedThanksMsg
          close={() => {
            setOpenSendedThanksPop(false);
          }}
        />
      )}
      {openUserStatusPop && (
        <UserStatus
          close={() => {
            setOpenUserStatusPop(false);
          }}
        />
      )}
      {isMain ? (
        <>
          <div className='board_info '>
            <form name='' className='fr' id='' method='post' action=''>
              <fieldset>
                <legend className='blind'>게시판 정렬</legend>
                <div className='form'>
                  <div className='item'>
                    <span className='label'>년도별</span>
                    <div
                      className={`select_list ${openYearPop ? 'active' : ''}`}
                      onClick={() => setOpenYearPop(!openYearPop)}
                    >
                      {/* <!-- className="active" 추가 시 하위 메뉴 노출 --> */}
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
                                  className={`${
                                    selectedYear == year ? 'on' : ''
                                  }`}
                                >
                                  {year}
                                </a>
                              </li>
                            );
                          })}
                        {/* <!-- 선택된 옵션일 경우 className="on" 추가 --> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </>
      ) : null}
      <div className='table_wrap'>
        <Table columns={columns} data={rows} />
      </div>
      {isMain != true ? (
        <>
          <div className='board_info mt_30'>
            <h3 class='h-tit3 fl'>
              <b class='point_color1'>{currentYear}</b>년{' '}
              <b class='point_color1'>{currentMonth}</b>월 받은 감사
            </h3>
            <form name='' className='fr' id='' method='post' action=''>
              <fieldset>
                <legend className='blind'>게시판 정렬</legend>
                <div className='form'>
                  <div className='item'>
                    <span className='label'>년도별</span>
                    <div
                      className={`select_list ${openYearPop ? 'active' : ''}`}
                      onClick={() => setOpenYearPop(!openYearPop)}
                    >
                      {/* <!-- className="active" 추가 시 하위 메뉴 노출 --> */}
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
                                  className={`${
                                    selectedYear == year ? 'on' : ''
                                  }`}
                                >
                                  {year}
                                </a>
                              </li>
                            );
                          })}
                        {/* <!-- 선택된 옵션일 경우 className="on" 추가 --> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </>
      ) : null}

      <Tooltip
        anchorSelect='#popupSample0'
        content='받은 감사 메시지 팝업'
        place='top'
        isOpen={true}
      />
      <Tooltip
        anchorSelect='#popupSample1'
        content='보낸 감사 메시지 팝업'
        place='top'
        isOpen={true}
      />
      <Tooltip
        anchorSelect='#popupSample2'
        content='사용자정보 팝업'
        place='bottom'
        isOpen={true}
      />

      <ul className='grayitem_list'>
        {/* 월별 받은 감사 목록 */}
        {receivedData?.map((data, i) => {
          return (
            <>
              <li
                key={i}
                id={`popupSample${i}`}
                onClick={() => {
                  //팝업표시용 테스트코드. 첫번째아이템 = 받은감사메시지팝업, 두번째 : 보낸감사메시지팝업 , 세번째 : 사용자정보팝업
                  const openPopup = {
                    0: () => {
                      setOpenReceivedThanksPop(true);
                    },
                    1: () => {
                      setOpenSendedThanksPop(true);
                    },
                    2: () => {
                      setOpenUserStatusPop(true);
                    },
                  };
                  openPopup[i]?.();
                }}
              >
                <a href='javascript:void(0)'>
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
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
