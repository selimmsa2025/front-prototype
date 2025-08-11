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
  json,
} from 'react-router-dom';
import axios from 'axios';
import Pagination from './Pagination';
import SortableBoard from '../BoardList/SortableBoard';
import { Button } from '../Element';
function App({ searchText }) {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const getBoardList = async () => {
    const response = await axios.get('/mockupServer/getBoardList.json', {
      page: currentPage,
      searchText: searchText,
    });
    //sample code
    const data = sortedData(
      _.filter(response.data, (v) => v.title.indexOf(searchText) != -1),
    );
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const responseData = data.slice(startIndex, endIndex);
    setDataList(responseData);
    setTotalCount(data.length);
  };
  useEffect(() => {
    getBoardList();
  }, [currentPage, pageSize, searchText, sortConfig]);
  const changePageSize = (e, pageSize) => {
    e.preventDefault();
    setPageSize(pageSize);
    setShowPopup1(!showPopup1);
    setCurrentPage(1);
  };

  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [dataList, setDataList] = useState([]);

  const sortData = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    } else if (
      sortConfig.key === key &&
      sortConfig.direction === 'descending'
    ) {
      direction = null;
    }
    setSortConfig({ key, direction });
  };

  const sortedData = (data) => {
    if (!sortConfig.key || sortConfig.direction == null) return data;

    const sorted = [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === 'ascending' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });

    return sorted;
  };

  return (
    <>
      <div class='board_info'>
        <p class='page'>
          <span class='total'>
            총 게시글 <b>{totalCount}</b>건
          </span>
        </p>

        <div class='right_items type_btn'>
          <Button as='a' color='4' />
          <Button as='a' color='4' />
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

      <SortableBoard dataList={dataList} sortData={sortData} />

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

export default App;
