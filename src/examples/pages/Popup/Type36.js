import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Pagination from '../../Components/Board/Pagination';
import ReactTable from '../../Components/ReactTable';
import Breadcrumb from '../../Components/Breadcrumb';
import CommonPopup from '../../Components/CommonPopup';
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
} from '../../Components/Element';
import { sortBy } from 'lodash';

function App () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const [typeSearchText, setTypeSearchText] = useState('');
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
  const [openBubble, setOpenBubble] = useState(false);
  const [checkedRadio, setCheckedRadio] = useState([]);
  const checkItem = (index) => {
    if (checkedRadio.includes(index)) {
      setCheckedRadio((prev) => {
        return prev.filter((v) => v != index);
      });
    } else {
      setCheckedRadio((prev) => {
        return [...prev, index];
      });
    }
  };

  const bubbleActive = (id) => {
    setOpenBubble(id);
  };

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
      {/* <!-- 팝업 --> */}
      <CommonPopup
        showPopup={showPopup}
        size='middle'
        onClose={() => {
          setShowPopup(false);
        }}
        saveButtonTitle={'적용'}
        closeButtonTitle={'닫기'}
        saveButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        closeButtonOnClick={(e) => {
          setShowPopup(false);
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {' '}
          {/*<!-- 팝업 보여질 경우 .active 추가 --> */}
          <h2>멤버 선택</h2>
          <div class='pop_content'>
            <div class='box_st1 sch_top_wrap'>
              <div class='form_wrap width_half'>
                <div class='form_group'>
                  <strong class='form_label'>이름</strong>
                  <Input
                    type='text'
                    class='form_text'
                    name='frm1'
                    id='frm1'
                    title='검색어를 입력해주세요.'
                    placeholder=''
                    register={register('search', {})}
                  />
                </div>
                <div class='form_group'>
                  <strong class='form_label'>사용자 ID</strong>
                  <Input
                    type='text'
                    class='form_text'
                    name='frm2'
                    id='frm2'
                    title='검색어를 입력해주세요.'
                    placeholder=''
                    register={register('userId', {})}
                  />
                </div>
                <div class='sch_btn_area'>
                  <Button
                    as='button'
                    color='4'
                    class='sch size_md'
                    text='초기화'
                    onClick={(e) => {
                      setSearchText('');
                      setTypeSearchText('');
                    }}
                  />
                  <Button
                    as='button'
                    color='2'
                    class='sch size_md'
                    text='검색'
                    onClick={(e) => {
                      const singleValue = getValues('search');
                      console.log(singleValue);
                      setSearchText(singleValue);
                    }}
                  />
                </div>
              </div>
            </div>
            <div class='board_info'>
              <p class='page not_line'>
                <span class='total'>
                  검색 결과 <b>{totalCount}</b>개
                </span>
              </p>

              <form name='' id='' method='post' action='' class='fr'>
                <fieldset>
                  <legend class='blind'>게시판 정렬</legend>
                  <div class='form'>
                    <div class='item'>
                      <span class='label'>목록 표시 개수</span>
                      <div class={`select_list ${showPopup1 ? 'active' : ''}`}>
                        {/*<!-- class="active" 추가 시 하위 메뉴 노출 --> */}
                        <a
                          href='javascript:void(0)'
                          onClick={(e) => {
                            setShowPopup1(!showPopup1);
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
                          {/*<!-- 선택된 옵션일 경우 class="on" 추가 --> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div class=''>
              <table class='tstyle_list'>
                <caption>멤버 선택 - 이름, 사용자ID, 부서으로 구성</caption>
                <colgroup>
                  <col style={{ width: '10%' }} />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope='col'>
                      <span class='sr-only'>라디오버튼</span>
                    </th>
                    <th scope='col'>
                      이름
                      <button
                        type='button'
                        class='btn_sort'
                        onClick={() => sortData('name')}
                      >
                        <span class='sr-only'>정렬변경</span>
                      </button>
                    </th>
                    <th scope='col'>
                      사용자ID
                      <button
                        type='button'
                        class='btn_sort'
                        onClick={() => sortData('id')}
                      >
                        <span class='sr-only'>정렬변경</span>
                      </button>
                    </th>
                    <th scope='col'>
                      부서
                      <button
                        type='button'
                        class='btn_sort'
                        onClick={() => sortData('department')}
                      >
                        <span class='sr-only'>정렬변경</span>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataList?.map((v, i) => {
                    return (
                      <>
                        <tr>
                          <td aria-label='Column'>
                            <div class='form_chk ico_only'>
                              <input
                                type='radio'
                                name='rdo_1'
                                id={`rdo_1-${i}`}
                                checked={checkedRadio.includes(i)}
                                onClick={() => {
                                  checkItem(i);
                                }}
                              />

                              <label for={`rdo_1-${i}`}></label>
                            </div>
                          </td>
                          <td aria-label='Column'>
                            {v.name}
                            <div
                              class={`desc_bubble ${
                                i == openBubble ? 'active' : ''
                              }`}
                            >
                              <button
                                type='button'
                                class='open'
                                onClick={() => bubbleActive(i)}
                              >
                                <span class='sr-only'>설명창열기</span>
                                <i class='ri-information-2-fill'></i>
                              </button>
                              {/*<!-- 클릭시 분모 .desc_bubble에 class="active" 추가 -->*/}
                              <div class='speech'>
                                <strong class='sp_tit'>도움말 제목</strong>
                                <ul class='dot_list2'>
                                  <li>
                                    <b>기관</b>행정안전부
                                  </li>
                                  <li>
                                    <b>이름</b>홍길동
                                  </li>
                                  <li>
                                    <b>부서</b>행정안전부 임시
                                  </li>
                                  <li>
                                    <b>직위/직급</b>일반직공무원
                                  </li>
                                  <li>
                                    <b>사무실 전화번호</b>02-1111-2222
                                  </li>
                                  <li>
                                    <b>온나라 메일</b>hong@mail.go.kr
                                  </li>
                                  <li>
                                    <b>기타메일</b>else@naver.com
                                  </li>
                                </ul>
                                <button
                                  type='button'
                                  class='close'
                                  onClick={() => bubbleActive(undefined)}
                                >
                                  <span class='sr-only'>설명창닫기</span>
                                  <i class='ri-close-line'></i>
                                </button>
                                {/*<!-- 클릭시 분모 .desc_bubble에 class="active" 제거 -->*/}
                              </div>
                            </div>
                          </td>
                          <td aria-label='Column'>{v.id}</td>
                          <td aria-label='Column'>{v.department}</td>
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
            <div class='board_list mt_25'>
              <table class='tstyle_box'>
                <caption>선택된 멤버</caption>
                <colgroup>
                  <col style={{ width: '20%' }} />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope='row'>
                      <i class='ri-user-3-line'></i> 선택된 멤버
                    </th>
                    <td>
                      <span>홍길동</span>
                      <span>selimmsa</span>
                      <span>임시 부서</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class='sm_btn_box fr'></div>
          </div>{' '}
          {/*<!-- 팝업 닫을 경우 분모.popup의 .active 삭제 -->*/}
        </form>
      </CommonPopup>
      {/* <!-- //팝업 --> */}
      <Breadcrumb />
      {/* <!-- 컨텐츠 타이틀 영역 --> */}
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>page title</h2>
      </div>
      <div class='contents_area'>
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
