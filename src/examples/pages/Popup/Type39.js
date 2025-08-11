import React, { useEffect, useState, useRef } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import axios from 'axios';
import _ from 'lodash';
import {
  Input,
  Textarea,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
  Popup,
  Tooltip,
  Tab,
} from '../../Components/Element';
import Pagination from '../../Components/Board/Pagination';
import CommonPopup from '../../Components/CommonPopup';
import { keys, values } from 'lodash';
import { useForm } from 'react-hook-form';
function App() {
  const [searchText, setSearchText] = useState('');
  const [pageSize, setPageSize] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
  const [dataList, setDataList] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const getBoardList = async () => {
    const response = await axios.get('/mockupServer/getMemberList.json', {
      page: currentPage,
      searchText: searchText,
    });
    const data = sortedData(
      _.filter(response.data, (v) => v.name.indexOf(searchText) != -1),
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
  const [tab, setTab] = useState(1);
  return (
    <>
      {/* <!-- 팝업 --> */} {/* <!-- 팝업 보여질 경우 .active 추가 -->*/}
      <CommonPopup
        showPopup={showPopup}
        size="middle"
        onClose={() => {
          setShowPopup(false);
        }}
        saveButtonTitle={'저장'}
        closeButtonTitle={'닫기'}
        saveButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        closeButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        title={'사용자 선택'}
      >
        <div class="pop_content">
          <div class="pop_tabs_area">
            <Tab
              type={1}
              data={[
                { index: 1, title: '사용자' },
                { index: 2, title: '부서사용자' },
              ]}
              currentIndex={tab}
              onChange={(index) => {
                setTab(index);
              }}
            />
            <div class="sel_bx">
              <Select
                name="sel2"
                id="sel2"
                class="size_msm"
                title="조건을 선택하세요."
                data={[
                  { id: 'all', name: '전체' },
                  { id: '1', name: '조건1' },
                  { id: '2', name: '조건2' },
                ]}
              />
              <Select
                name="sel1"
                id="sel1"
                class="size_sm"
                title="조건을 선택하세요."
                data={[
                  { id: 'all', name: '전체' },
                  { id: '1', name: '조건1' },
                  { id: '2', name: '조건2' },
                ]}
              />
            </div>
          </div>

          <div class="box_st1 sch_top_wrap">
            <div class="form_wrap width_half">
              <div class="form_group">
                <strong class="form_label">이름</strong>
                <Input
                  name="frm1"
                  id="frm1"
                  title="검색어를 입력해주세요."
                  placeholder=""
                />
              </div>
              <div class="form_group">
                <strong class="form_label">사용자 ID</strong>
                <Input
                  name="frm2"
                  id="frm2"
                  title="검색어를 입력해주세요."
                  placeholder=""
                />
              </div>
              <div class="sch_btn_area">
                <Button
                  as="button"
                  color="4"
                  class="sch size_md"
                  text="초기화"
                />
                <Button as="button" color="2" class="sch size_md" text="검색" />
              </div>
            </div>
          </div>
          <div class="board_info">
            <p class="page not_line">
              <span class="total">
                검색 결과 <b>{totalCount}</b>개
              </span>
            </p>

            <form name="" id="" method="post" action="" class="fr">
              <fieldset>
                <legend class="blind">게시판 정렬</legend>
                <div class="form">
                  <div class="item">
                    <span class="label">목록 표시 개수</span>
                    <div class={`select_list ${showPopup1 ? 'active' : ''}`}>
                      {/*<!-- class="active" 추가 시 하위 메뉴 노출 --> */}
                      <a
                        href="javascript:void(0)"
                        onClick={(e) => {
                          setShowPopup1(!showPopup1);
                        }}
                      >
                        <span class="sr_only">선택된 옵션</span>
                        {pageSize}개
                      </a>
                      <ul class="list">
                        <li>
                          <a
                            href="javascript:void(0)"
                            class={`${pageSize == 9 ? 'on' : ''}`}
                            onClick={(e) => {
                              changePageSize(e, 9);
                            }}
                          >
                            9개
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            class={`${pageSize == 6 ? 'on' : ''}`}
                            onClick={(e) => {
                              changePageSize(e, 6);
                            }}
                          >
                            6개
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            class={`${pageSize == 3 ? 'on' : ''}`}
                            onClick={(e) => {
                              changePageSize(e, 3);
                            }}
                          >
                            3개
                          </a>
                        </li>
                        {/*<!-- 선택된 옵션일 경우 class="on" 추가 --> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="board_list">
            <table class="tstyle_list">
              <caption>멤버 선택 - 이름, 사용자ID, 부서으로 구성</caption>
              <colgroup>
                <col style={{ width: '20%' }} />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">번호</th>
                  <th scope="col">Column</th>
                </tr>
              </thead>
              <tbody>
                {dataList?.map((v, i) => {
                  return (
                    <>
                      <tr>
                        <td aria-label="Column">{i + 1}</td>
                        <td aria-label="Column">{v.department}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Pagination
            totalCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={(page) => {
              setCurrentPage(page);
            }}
          />

          <div class="tit_area top_line">
            <h3 class="h-tit3">선택된 계정</h3>
            <div class="right_items">
              <Button as="a" color="4" text="">
                선택삭제<i class="ri-close-line"></i>
              </Button>
            </div>
          </div>
          <div class="board_list">
            <table class="tstyle_list">
              <caption>
                목록 - 번호, Column, Column, Column, Column으로 구성
              </caption>
              <colgroup>
                <col style={{ width: '10%' }} />
                <col />
                <col style={{ width: '10%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '10%' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">번호</th>
                  <th scope="col">Column</th>
                  <th scope="col">Column</th>
                  <th scope="col">Column</th>
                  <th scope="col">Column</th>
                  <th scope="col">Column</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="m_hidden" aria-label="번호">
                    1
                  </td>
                  <td aria-label="Column">내용</td>
                  <td aria-label="Column">내용</td>
                  <td aria-label="Column">내용</td>
                  <td aria-label="Column">내용</td>
                  <td aria-label="Column">내용</td>
                </tr>
                <tr>
                  <td class="m_hidden" aria-label="번호">
                    2
                  </td>
                  <td aria-label="Column">내용</td>
                  <td aria-label="Column">내용</td>
                  <td aria-label="Column">내용</td>
                  <td aria-label="Column">내용</td>
                  <td aria-label="Column">내용</td>
                </tr>
                <tr>
                  <td class="m_hidden" aria-label="번호">
                    3
                  </td>
                  <td aria-label="Column">내용</td>
                  <td aria-label="Column">내용</td>
                  <td aria-label="Column">내용</td>
                  <td aria-label="Column">내용</td>
                  <td aria-label="Column">내용</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/*<!-- 팝업 닫을 경우 분모.popup의 .active 삭제 --> */}
      </CommonPopup>
      {/* <!-- //팝업 --> */}
      <Breadcrumb />
      {/* <!-- 컨텐츠 타이틀 영역 --> */}
      <div class="page-title-wrap" data-type="responsive">
        <h2 class="h-tit">page title</h2>
      </div>
      {/* <!-- //컨텐츠 타이틀 영역 --> */}
      {/* <!-- 컨텐츠 입력 영역 --> */}
      <div class="contents_area">
        <Button
          text={'팝업열기'}
          onClick={() => {
            setShowPopup(!showPopup);
          }}
        />
      </div>
      {/* <!-- //컨텐츠 입력 영역 --> */}
    </>
  );
}

export default App;
