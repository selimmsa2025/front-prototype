import Pagination from '../Board/Pagination';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FAQList from './FAQList';
import _ from 'lodash';
import { Select, Button, Input } from '../Element';

export default function QnA ({}) {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [dataList, setDataList] = useState([]);
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [searchText, setSearchText] = useState('');

  const getBoardList = async () => {
    const response = await axios.get('/mockupServer/getFAQList.json', {
      page: currentPage,
      searchText: searchText,
    });
    //sample code
    const data = _.filter(
      response.data,
      (v) => v.question.indexOf(searchText) != -1,
    );
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const responseData = data.slice(startIndex, endIndex);
    setDataList(responseData);
    setTotalCount(data.length);
  };
  useEffect(() => {
    getBoardList();
  }, [currentPage, pageSize]);
  const changePageSize = (e, pageSize) => {
    e.preventDefault();
    setPageSize(pageSize);
    setShowPopup1(!showPopup1);
    setCurrentPage(1);
  };

  return (
    <>
      <div class='box_st1 sch_top_wrap'>
        <div class='form_wrap'>
          <div class='form_group'>
            <strong class='sr-only'>조건검색</strong>
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
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <Button
              type='button'
              color='2'
              text='검색'
              class='sch'
              onClick={() => getBoardList()}
            ></Button>
          </div>
        </div>
      </div>
      <div class='board_info'>
        <p class='page not_line'>
          <span class='total'>
            검색 결과 <b>{totalCount}</b>개
          </span>
        </p>

        <form name='' id='' method='post' action='' className='fr'>
          <fieldset>
            <legend class='blind'>게시판 정렬</legend>
            <div class='form'>
              <div class='item'>
                <span class='label'>목록 표시 개수</span>
                <div class={`select_list ${showPopup1 ? 'active' : ''}`}>
                  <a
                    href='javascript:void(0)'
                    onClick={(e) => {
                      setShowPopup1(!showPopup1);
                      setShowPopup2(false);
                      setShowPopup3(false);
                    }}
                  >
                    <span class='sr_only'>선택된 옵션</span>
                    {pageSize}개
                  </a>
                  <ul class='list'>
                    <li>
                      <a
                        href='javascript:void(0)'
                        class={`${pageSize == 20 ? 'on' : ''}`}
                        onClick={(e) => {
                          changePageSize(e, 20);
                        }}
                      >
                        20개
                      </a>
                    </li>
                    <li>
                      <a
                        href='javascript:void(0)'
                        class={`${pageSize == 15 ? 'on' : ''}`}
                        onClick={(e) => {
                          changePageSize(e, 15);
                        }}
                      >
                        15개
                      </a>
                    </li>
                    <li>
                      <a
                        href='javascript:void(0)'
                        class={`${pageSize == 10 ? 'on' : ''}`}
                        onClick={(e) => {
                          changePageSize(e, 10);
                        }}
                      >
                        10개
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

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
                    <span class='sr_only'>선택된 옵션</span>전체
                  </a>
                  <ul class='list'>
                    <li>
                      <a href='javascript:void(0)'>전체</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>전체</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)' class='on'>
                        전체
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
                      <a href='javascript:void(0)'>최신순</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)' class='on'>
                        관련도순
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <FAQList dataList={dataList} />
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
