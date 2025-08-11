import { createPortal } from 'react-dom';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Link,
  useNavigate,
  useSearchParams,
  json,
} from 'react-router-dom';
import axios from 'axios';
import Pagination from './Pagination';
import BasicBoard from '../BoardList/BasicBoard';
import { Button } from '../Element';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get('page')) || 1;
  const searchText = searchParams.get('search');
  const [pageSize, setPageSize] = useState(10);

  const [totalCount, setTotalCount] = useState(0);

  const getBoardList = async () => {
    const response = await axios.get('/mockupServer/getBoardList.json', {
      page: currentPage,
      searchText,
    });

    //sample code
    let data = response.data;
    if (searchText != null) {
      data = _.filter(response.data, (v) => v.title.indexOf(searchText) != -1);
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const responseData = data.slice(startIndex, endIndex);
    setDataList(responseData);
    setTotalCount(data.length);
  };
  useEffect(() => {
    getBoardList();
  }, [currentPage, pageSize, searchText]);
  const changePageSize = (e, pageSize) => {
    e.preventDefault();
    setPageSize(pageSize);
    setShowPopup1(!showPopup1);
  };

  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [dataList, setDataList] = useState([]);

  return (
    <>
      <div class='board_info'>
        <p class='page'>
          <span class='total'>
            총 게시글 <b>{totalCount}</b>건
          </span>
        </p>

        <div class='right_items type_btn'>
          <Button
            as='a'
            color='4'
            class='line'
            text=''
            onClick={() => {
              alert(1);
            }}
          >
            인쇄<i class='ri-printer-line'></i>
          </Button>{' '}
          <Button
            as='a'
            color='4'
            class='line'
            download='download'
            title='다운로드'
            text=''
            onClick={() => {
              alert(2);
            }}
          >
            엑셀 다운로드
          </Button>
        </div>

        <form name='' id='' method='post' action=''>
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

      <BasicBoard dataList={dataList} />

      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={(page) => {
          const newParams = new URLSearchParams(searchParams);
          newParams.set('page', page);
          setSearchParams(newParams);
        }}
      />

      <div class='clear'>
        <div class='bottom_left_area'>
          <Button as='a' color='4' class='type1' text='취소' />
        </div>
        <div class='bottom_right_area'>
          <Button as='a' color='1' class='type1' text='저장' />
          <Button as='a' color='1' class='type1' text='결재' />
        </div>
      </div>
    </>
  );
}

export default App;
