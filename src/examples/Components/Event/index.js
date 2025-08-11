import Pagination from '../Board/Pagination';
import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import CardTypeEventList from './CardTypeEventList';
import { Button, DatePicker, Input } from '../Element';
import dayjs from 'dayjs';
export default function QnA ({}) {
  const [pageSize, setPageSize] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [dataList, setDataList] = useState([]);
  const [searchPeriod, setSearchPeriod] = useState('전체');
  const [searchOption, setSearchOption] = useState({
    institution: '',
    depart: '',
    eventTitle: '',
    startDate: '',
    endDate: '',
  });

  const changeSearchOption = (value, target) => {
    setSearchOption((prev) => {
      return {
        ...prev,
        [target]: value,
      };
    });
  };

  const resetSearchOption = () => {
    setSearchOption({
      institution: '',
      depart: '',
      eventTitle: '',
      startDate: '',
      endDate: '',
    });
  };

  const getBoardList = async () => {
    const response = await axios.get('/mockupServer/getEventList.json', {
      page: currentPage,
      eventTitle: searchOption.eventTitle,
    });
    //sample code
    const data = _.filter(response.data, (v) => {
      let period = searchPeriod == '전체' ? v.status : searchPeriod;
      if (
        v.eventTitle?.indexOf(searchOption.eventTitle) != -1 &&
        v.status == period
      ) {
        return true;
      } else return false;
    });
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const responseData = data.slice(startIndex, endIndex);
    setDataList(responseData);
    setTotalCount(data.length);
  };
  useEffect(() => {
    getBoardList();
  }, [currentPage, pageSize, searchPeriod]);

  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);

  const changeSearchPeriod = (value) => {
    setSearchPeriod(value);
    setShowPopup2(!showPopup2);
  };

  return (
    <>
      <div class='box_st1 sch_top_wrap'>
        <div class='form_wrap width_half'>
          <div class='form_group'>
            <strong class='form_label lg'>행사기관</strong>
            <div class='search_input'>
              <Input
                class='form_text'
                name='frm1'
                id='frm1'
                title='검색어를 입력해주세요.'
                placeholder='검색어를 입력해주세요.'
                value={searchOption.institution}
                onChange={(e) => {
                  changeSearchOption(e.target.value, 'institution');
                }}
              />
            </div>
          </div>
          <div class='form_group'>
            <strong class='form_label lg'>담당부서</strong>
            <div class='search_input'>
              <Input
                class='form_text'
                name='frm1'
                id='frm1'
                title='검색어를 입력해주세요.'
                placeholder='검색어를 입력해주세요.'
                value={searchOption.depart}
                onChange={(e) => {
                  changeSearchOption(e.target.value, 'depart');
                }}
              />
            </div>
          </div>
          <div class='form_group'>
            <strong class='form_label lg'>행사일</strong>
            <div class='datepicker_wrap'>
              <DatePicker
                pattern={'yyyy.MM.dd'}
                value={searchOption.startDate}
                onChange={(date) => {
                  changeSearchOption(
                    dayjs(date).format('YYYY.MM.DD'),
                    'startDate',
                  );
                }}
                type={'date'}
                title='시작날짜를 입력하세요.  입력방법 예시:2024.12.31'
              />
              <span class='date_bar'>-</span>
              <DatePicker
                pattern={'yyyy.MM.dd'}
                value={searchOption.endDate}
                onChange={(date) => {
                  changeSearchOption(
                    dayjs(date).format('YYYY.MM.DD'),
                    'endDate',
                  );
                }}
                type={'date'}
                title='종료날짜를 입력하세요. 입력방법 예시:2024.12.31'
              />
            </div>
          </div>
          <div class='form_group'>
            <strong class='form_label lg'>행사명</strong>
            <div class='search_input'>
              <Input
                class='form_text'
                name='frm1'
                id='frm1'
                title='검색어를 입력해주세요.'
                placeholder='검색어를 입력해주세요.'
                value={searchOption.eventTitle}
                onChange={(e) => {
                  changeSearchOption(e.target.value, 'eventTitle');
                }}
              />
            </div>
          </div>
          <div class='sch_btn_area'>
            <Button
              as='button'
              color='4'
              class=' sch size_md'
              text='초기화'
              onClick={resetSearchOption}
            ></Button>
            <Button
              as='button'
              color='2'
              class=' sch size_md'
              onClick={getBoardList}
              text='검색'
            ></Button>
          </div>
        </div>
      </div>
      <div class='board_info'>
        <p class='page '>
          <span class='total'>
            검색 결과 <b>{totalCount}</b>개
          </span>
        </p>
        <form name='' id='' method='post' action='' class='fl'>
          <fieldset>
            <legend class='blind'>게시판 정렬</legend>
            <div class='form'>
              <div class='item'>
                <span class='label'>검색 기간</span>
                <div class={`select_list ${showPopup2 ? 'active' : ''}`}>
                  <a
                    href='javascript:void(0)'
                    onClick={(e) => {
                      setShowPopup1(false);
                      setShowPopup2(!showPopup2);
                      setShowPopup3(false);
                    }}
                  >
                    <span class='sr_only'>선택된 옵션</span>
                    {searchPeriod}
                  </a>
                  <ul class='list'>
                    <li>
                      <a
                        href='javascript:void(0)'
                        className={`${searchPeriod == '전체' ? 'on' : ''}`}
                        onClick={() => {
                          changeSearchPeriod('전체');
                        }}
                      >
                        전체
                      </a>
                    </li>
                    <li>
                      <a
                        href='javascript:void(0)'
                        className={`${searchPeriod == '등록대기' ? 'on' : ''}`}
                        onClick={() => {
                          changeSearchPeriod('등록대기');
                        }}
                      >
                        등록대기
                      </a>
                    </li>
                    <li>
                      <a
                        href='javascript:void(0)'
                        className={`${searchPeriod == '등록중' ? 'on' : ''}`}
                        onClick={() => {
                          changeSearchPeriod('등록중');
                        }}
                      >
                        등록중
                      </a>
                    </li>
                    <li>
                      <a
                        href='javascript:void(0)'
                        className={`${searchPeriod == '등록마감' ? 'on' : ''}`}
                        onClick={() => {
                          changeSearchPeriod('등록마감');
                        }}
                      >
                        등록마감
                      </a>
                    </li>
                    <li>
                      <a
                        href='javascript:void(0)'
                        className={`${searchPeriod == '행사종료' ? 'on' : ''}`}
                        onClick={() => {
                          changeSearchPeriod('행사종료');
                        }}
                      >
                        행사종료
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class='item'>
                <span class='label'>정렬 기준</span>
                <div class={`select_list ${showPopup3 ? 'active' : ''}`}>
                  <a
                    href='javascript:void(0)'
                    onClick={(e) => {
                      setShowPopup1(false);
                      setShowPopup2(false);
                      setShowPopup3(!showPopup3);
                    }}
                  >
                    <span class='sr_only'>선택된 옵션</span>관련도순
                  </a>
                  <ul class='list'>
                    <li>
                      <a href='javascript:void(0)'>등록최신순</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>등록중</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>등록마감</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)' class='on'>
                        행사종료
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </fieldset>
        </form>

        <div class='grid fr'>
          <input
            type='radio'
            name='grid'
            title='grid_card'
            id='grid1'
            class='card'
            checked
          />
          <label for='grid1'>
            <span class='sr-only'>카드형</span>
          </label>
          <input
            type='radio'
            name='grid'
            title='grid_list'
            id='grid2'
            class='list'
          />
          <label for='grid2'>
            <span class='sr-only'>목록형</span>
          </label>
        </div>
      </div>
      <CardTypeEventList dataList={dataList} />
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
      />
    </>
  );
}
