import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import {
  Input,
  Button,
  Tree,
  Textarea,
  Check,
  RangeInput,
  DatePicker,
} from '../../Components/Element';
import _ from 'lodash';
import dayjs from 'dayjs';

export default function LeftSide () {
  //대메뉴
  const [category, setCategory] = useState({
    menu: true,
    area: true,
    attach: false,
    searchText: false,
    period: false,
  });

  //대메뉴 하위 탭 key : catogry title, value : tab index
  const [tab, setTab] = useState({
    menu: 0,
    area: 1,
    attach: 0,
    searchText: 0,
    period: 0,
  });

  const changeTab = (e, category, tabIndex) => {
    e.stopPropagation();
    setTab({ ...tab, [category]: tabIndex });
  };

  const [checkedList, setCheckedList] = useState([]);
  const [checkedList2, setCheckedList2] = useState([]);
  const [checkedList3, setCheckedList3] = useState([]);

  const isChecked = (value) => {
    return checkedList.includes(value + '');
  };
  const isChecked2 = (value) => {
    return checkedList2.includes(value + '');
  };
  const isChecked3 = (value) => {
    return checkedList3.includes(value + '');
  };

  const menuData = useCallback(() => {
    return [
      {
        value: 1,
        title: '전체',
        displayTitle: true,
        checked: isChecked3(1),
      },
      {
        value: 2,
        title: '지식공유',
        displayTitle: true,
        checked: isChecked3(2),
      },
      {
        value: 3,
        title: '게시판',
        displayTitle: true,
        checked: isChecked3(3),
      },
      {
        value: 4,
        title: '커뮤니티',
        displayTitle: true,
        checked: isChecked3(4),
      },
      {
        value: 5,
        title: '질의응답',
        displayTitle: true,
        checked: isChecked3(5),
      },
      {
        value: 6,
        title: '직원검색',
        displayTitle: true,
        checked: isChecked3(6),
      },
      {
        value: 7,
        title: '도서검색',
        displayTitle: true,
        checked: isChecked3(7),
      },
      {
        value: 8,
        title: '추천간행물',
        displayTitle: true,
        checked: isChecked3(8),
      },
      {
        value: 9,
        title: '담벼락',
        displayTitle: true,
        checked: isChecked3(9),
      },
    ];
  }, [checkedList3]);

  const [startDate, setStartDate] = useState(
    dayjs().subtract(7, 'days').format('YYYY.MM.DD'),
  );
  const [endDate, setEndDate] = useState(dayjs().format('YYYY.MM.DD'));

  const changeDate = (type) => {
    let temp_startDate = null;
    const temp_endDate = dayjs(); // 현재 날짜와 시간

    switch (type) {
      case 1:
        temp_startDate = dayjs(temp_endDate).subtract(7, 'days');
        break;
      case 2:
        temp_startDate = dayjs(temp_endDate).subtract(1, 'month');
        break;
      case 3:
        temp_startDate = dayjs(temp_endDate).subtract(1, 'year');
        break;
    }

    setStartDate(temp_startDate.format('YYYY.MM.DD'));
    setEndDate(temp_endDate.format('YYYY.MM.DD'));
  };

  return (
    <>
      {/* <!-- 검색필터 영역 --> */}
      <div className='left-filter'>
        <div className='top_title'>
          <h2>검색 필터</h2>
          <Button type='submit' color='5' class='fr btn-txt' text='초기화'>
            <i className='ri-restart-line'></i>
          </Button>
        </div>
        <ul className='filter_list'>
          <li className={`${category.menu ? 'active' : ''}`}>
            <div
              className='tit'
              onClick={() => setCategory({ ...category, menu: !category.menu })}
            >
              <a
                href='javascript:void(0)'
                className={`${tab.menu == 0 ? 'on' : ''}`}
              >
                메뉴별
              </a>
              {/* <!-- 클릭시 분모 <li>에 className="active" 클래스 toggle --> */}
            </div>
            <div className='acco_bx'>
              <Check
                name='chk_5'
                icoOnly={false}
                onChange={(e) => {
                  const value = e.target.value + '';

                  const updateCheckedListForAll = () => {
                    const allValues = menuData().map((data) => data.value + '');
                    setCheckedList3(allValues);
                  };

                  const addValueToCheckedList = (value) => {
                    setCheckedList3((prev) => [...prev, value]);
                  };

                  const removeValueFromCheckedList = (value) => {
                    setCheckedList3((prev) =>
                      prev.filter((v) => v !== value && v !== '1'),
                    );
                  };

                  if (!checkedList3.includes(value)) {
                    if (value === '1') {
                      updateCheckedListForAll();
                    } else {
                      addValueToCheckedList(value);
                    }
                  } else {
                    if (value === '1') {
                      setCheckedList3([]);
                    } else {
                      removeValueFromCheckedList(value);
                    }
                  }
                }}
                data={menuData()}
              />
            </div>
          </li>
          <li className={`${category.area ? 'active' : ''}`}>
            <div
              className='tit'
              onClick={() => setCategory({ ...category, area: !category.area })}
            >
              {/* <!--
                                탭처럼 작동합니다.
                                a태그 클릭시 아래 해당되는 영역이 style="display:block" 처리됩니다.
                            --> */}
              <a
                href='javascript:void(0)'
                className={`${tab.area == 0 ? 'on' : ''}`}
                onClick={(e) => changeTab(e, 'area', 0)}
              >
                영역별
              </a>
              <a
                href='javascript:void(0)'
                className={`${tab.area == 1 ? 'on' : ''}`}
                onClick={(e) => changeTab(e, 'area', 1)}
              >
                영역별가중치
              </a>
              {/* <!-- 클릭시 className="on" 추가, 이웃 a태그 className="on" 삭제. 분모 <li>에 className="active" 클래스 toggle --> */}
            </div>
            <div className='acco_bx'>
              {/* <!-- 영역별 --> */}
              {tab.area == 0 ? (
                <>
                  <Check
                    name='chk_5'
                    icoOnly={false}
                    style={{ display: 'block' }}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (!_.includes(checkedList, value)) {
                        setCheckedList((prev) => {
                          return [...prev, value];
                        });
                      } else {
                        setCheckedList((prev) => {
                          return [..._.filter(prev, (v) => v != value)];
                        });
                      }
                    }}
                    data={[
                      {
                        value: 1,
                        title: '전체',
                        displayTitle: true,
                        checked: isChecked(1),
                      },
                      {
                        value: 2,
                        title: '제목',
                        displayTitle: true,
                        checked: isChecked(2),
                      },
                      {
                        value: 3,
                        title: '내용',
                        displayTitle: true,
                        checked: isChecked(3),
                      },
                      {
                        value: 4,
                        title: '파일명',
                        displayTitle: true,
                        checked: isChecked(4),
                      },
                      {
                        value: 5,
                        title: '파일내용',
                        displayTitle: true,
                        checked: isChecked(5),
                      },
                    ]}
                  />
                </>
              ) : tab.area == 1 ? (
                <>
                  <ul className='filter_progress'>
                    <li>
                      <span className='bar_label'>제목</span>
                      <RangeInput
                        initialValue={50}
                        max={100}
                        min={0}
                        step={1}
                        onChange={(value) => {
                          console.log('value :: ', value);
                        }}
                      />
                    </li>
                    <li>
                      <span className='bar_label'>내용</span>
                      <RangeInput initialValue={30} />
                    </li>
                    <li>
                      <span className='bar_label'>파일명</span>
                      <RangeInput initialValue={60} />
                    </li>
                    <li>
                      <span className='bar_label'>파일내용</span>
                      <RangeInput initialValue={10} />
                    </li>
                    <li>
                      <span className='bar_label'>★ Range Input</span>
                      <RangeInput />
                    </li>
                  </ul>
                </>
              ) : null}
            </div>
          </li>
          <li className={`${category.attach ? 'active' : ''}`}>
            <div
              className='tit'
              onClick={() =>
                setCategory({ ...category, attach: !category.attach })
              }
            >
              <a
                href='javascript:void(0)'
                className={`${tab.attach == 0 ? 'on' : ''}`}
              >
                첨부파일
              </a>
            </div>
            <div className='acco_bx'>
              <Check
                name='chk_2'
                icoOnly={false}
                onChange={(e) => {
                  const value = e.target.value;
                  if (!_.includes(checkedList2, value)) {
                    console.log('🚀 ~ LeftSide ~ value:', value, checkedList2);
                    setCheckedList2((prev) => {
                      return [...prev, value];
                    });
                  } else {
                    setCheckedList2((prev) => {
                      return [..._.filter(prev, (v) => v != value)];
                    });
                  }
                }}
                data={[
                  {
                    value: 1,
                    title: '전체',
                    displayTitle: true,
                    class: '',
                    checked: isChecked2(1),
                  },
                  {
                    value: 2,
                    title: 'XLS',
                    displayTitle: true,
                    class: 'file_type xls',
                    checked: isChecked2(2),
                  },
                  {
                    value: 3,
                    title: 'PPT',
                    displayTitle: true,
                    class: 'file_type ppt',
                    checked: isChecked2(3),
                  },
                  {
                    value: 4,
                    title: 'DOC',
                    displayTitle: true,
                    class: 'file_type doc',
                    checked: isChecked2(4),
                  },
                  {
                    value: 5,
                    title: 'PDF',
                    displayTitle: true,
                    class: 'file_type pdf',
                    checked: isChecked2(5),
                  },
                  {
                    value: 6,
                    title: 'HWP',
                    displayTitle: true,
                    class: 'file_type hwp',
                    checked: isChecked2(6),
                  },
                  {
                    value: 7,
                    title: 'TXT',
                    displayTitle: true,
                    class: 'file_type txt',
                    checked: isChecked2(7),
                  },
                  {
                    value: 8,
                    title: 'IMG',
                    displayTitle: true,
                    class: 'file_type img',
                    checked: isChecked2(8),
                  },
                  {
                    value: 9,
                    title: 'ETC',
                    displayTitle: true,
                    class: 'file_type etc',
                    checked: isChecked2(9),
                  },
                ]}
              />
            </div>
          </li>
          <li className={`${category.searchText ? 'active' : ''}`}>
            <div
              className='tit'
              onClick={() =>
                setCategory({ ...category, searchText: !category.searchText })
              }
            >
              <a
                href='javascript:void(0)'
                className={`${tab.searchText == 0 ? 'on' : ''}`}
              >
                검색어
              </a>
              {/* <!-- 클릭시 분모 <li>에 className="active" 클래스 toggle --> */}
              <div className='form_chk fr'>
                <input type='checkbox' name='chk_3' id='chk_3-1' />
                <label for='chk_3-1'>결과내 재검색</label>
              </div>
            </div>
            <div className='acco_bx words_filter'>
              <Input title='frm1' id='frm1' className='form_text' />
              <div className='form_chk'>
                <input type='checkbox' name='chk_3' id='chk_3-2' />
                <label for='chk_3-2'>단어가 하나이상 포함된 문서 검색</label>
              </div>
              <ul>
                <li>
                  <Button
                    as='a'
                    color='3'
                    text='정확히 일치하는 단어/문장(“”)'
                  />
                </li>
                <li>
                  <Button as='a' color='3' text='반드시 포함하는 단어(+)' />
                </li>
                <li>
                  <Button as='a' color='3' text='제외하는 단어(-)' />
                </li>
              </ul>
            </div>
          </li>
          <li className={`${category.period ? 'active' : ''}`}>
            <div
              className='tit'
              onClick={() =>
                setCategory({ ...category, period: !category.period })
              }
            >
              <a href='#' className={`${tab.period == 0 ? 'on' : ''}`}>
                기간별
              </a>
            </div>
            <div className='acco_bx'>
              <ul className='date_select'>
                <li>
                  <input type='radio' name='date_range' id='date_range1' />
                  <label for='date_range1' onClick={() => changeDate(1)}>
                    1주
                  </label>
                </li>
                <li>
                  <input type='radio' name='date_range' id='date_range2' />
                  <label for='date_range2' onClick={() => changeDate(2)}>
                    1개월
                  </label>
                </li>
                <li>
                  <input type='radio' name='date_range' id='date_range3' />
                  <label for='date_range3' onClick={() => changeDate(3)}>
                    1년
                  </label>
                </li>
              </ul>

              <DatePicker
                pattern={'yyyy.MM.dd'}
                value={startDate}
                wihtoutWrapTag={true}
                type={'date'}
                onChange={(date) => {}}
              />
              <DatePicker
                pattern={'yyyy.MM.dd'}
                value={endDate}
                type={'date'}
                wihtoutWrapTag={true}
                onChange={(date) => {}}
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
