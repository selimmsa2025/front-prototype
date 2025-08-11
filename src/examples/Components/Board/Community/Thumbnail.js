import { createPortal } from 'react-dom';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Link,
  useNavigate,
  json,
} from 'react-router-dom';
import { Button } from '../../Element';
import axios from 'axios';
import Pagination from './Pagination';
import CommunityThumbnail from '../../BoardList/CommunityThumbnail';

function App({ searchText }) {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const getBoardList = async () => {
    const response = await axios.get('/mockupServer/getCommunityList.json', {
      page: currentPage,
      searchText: searchText,
    });
    //sample code
    const data = _.filter(
      response.data,
      (v) => v.title.indexOf(searchText) != -1,
    );
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const responseData = data.slice(startIndex, endIndex);
    setDataList(responseData);
    setTotalCount(data.length);
  };
  useEffect(() => {
    getBoardList();
  }, [currentPage, pageSize, searchText]);

  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [dataList, setDataList] = useState([]);

  const changePageSize = (e, pageSize) => {
    e.preventDefault();
    setPageSize(pageSize);
    setShowPopup1(!showPopup1);
    setCurrentPage(1);
  };

  //체크박스
  const [checkAll, setCheckAll] = useState(false);
  return (
    <>
      <div className='board_info'>
        <div className='left_items'>
          <div className='form_chk'>
            <input
              type='checkbox'
              name='chk_all'
              id='chk_all'
              checked={checkAll}
              onClick={() => {
                setCheckAll(!checkAll);
              }}
            />
            <label for='chk_all'>전체선택</label>
          </div>
        </div>
        <div class='right_items type_btn'>
          <Button as='a' color='4' />
          <Button as='a' color='4' />
        </div>

        <form name='' id='' method='post' action=''>
          <fieldset>
            <legend className='blind'>게시판 정렬</legend>
            <div className='form'>
              <div className='item'>
                <span className='label'>목록 표시 개수</span>
                <div className={`select_list ${showPopup1 ? 'active' : ''}`}>
                  <a
                    href='javascript:void(0)'
                    onClick={(e) => {
                      setShowPopup1(!showPopup1);
                      setShowPopup2(false);
                      setShowPopup3(false);
                    }}
                  >
                    <span className='sr_only'>선택된 옵션</span>
                    {pageSize}개
                  </a>
                  <ul className='list'>
                    <li>
                      <a
                        href='javascript:void(0)'
                        className={`${pageSize == 20 ? 'on' : ''}`}
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
                        className={`${pageSize == 15 ? 'on' : ''}`}
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
                        className={`${pageSize == 10 ? 'on' : ''}`}
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

              <div className='item'>
                <span className='label'>검색 기간</span>
                <div className={`select_list ${showPopup2 ? 'active' : ''}`}>
                  <a
                    href='javascript:void(0)'
                    onClick={(e) => {
                      setShowPopup1(false);
                      setShowPopup2(!showPopup2);
                      setShowPopup3(false);
                    }}
                  >
                    <span className='sr_only'>선택된 옵션</span>전체
                  </a>
                  <ul className='list'>
                    <li>
                      <a href='javascript:void(0)'>전체</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)'>전체</a>
                    </li>
                    <li>
                      <a href='javascript:void(0)' className='on'>
                        전체
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <CommunityThumbnail dataList={dataList} checkAll={checkAll} />
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
