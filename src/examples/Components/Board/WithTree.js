import { createPortal } from 'react-dom';
import React, { useEffect, useState, useRef } from 'react';
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
import TreeWithTab from '../TreeWithTab';
import BasicBoard from '../BoardList/BasicBoard';
import { Button } from '../Element';

function App({ searchText }) {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [selectKey, setSelectKey] = useState('');
  const [keyChanged, setKeyChanged] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [dataList, setDataList] = useState([]);
  const isInitialMount = useRef(true);
  const getBoardList = async () => {
    const response = await axios.get(`/mockupServer/getCommunityList.json`, {
      page: currentPage,
      searchText: searchText,
      selectKey: selectKey,
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
  }, [currentPage, pageSize, searchText, selectKey]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setCurrentPage(1);
      alert(`데이터가 변경되었습니다`);
    }
  }, [selectKey]);

  const changeSelectKey = (key) => {
    setSelectKey(selectKey == key ? '' : key);
  };

  const changePageSize = (e, pageSize) => {
    e.preventDefault();
    setPageSize(pageSize);
    setShowPopup1(!showPopup1);
    setCurrentPage(1);
  };

  const [treeData, setTreeData] = useState(undefined);
  const getTreeDataList = async () => {
    const response = await axios.get('/mockupServer/getTreeDataList.json');
    setTreeData(response.data);
  };
  useEffect(() => {
    getTreeDataList();
  }, []);

  return (
    <>
      <div class='in-between sub'>
        {treeData && (
          <TreeWithTab treeData={treeData} setSelectKey={changeSelectKey} />
        )}
        <div class='contents'>
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

          <BasicBoard dataList={dataList} />
        </div>
      </div>
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
