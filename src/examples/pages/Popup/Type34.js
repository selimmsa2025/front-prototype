import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import CommonPopup from '../../Components/CommonPopup';
import DateRangePicker from '../../Components/DateRangePicker';
import Tree from '../../Components/Element/Tree';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import _ from 'lodash';
import Pagination from '../../Components/Board/Pagination';
// import Toast from '../../Components/Element/Toast';
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
  Toast,
} from '../../Components/Element';
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
  const [searchText, setSearchText] = useState('');
  const [typeSearchText, setTypeSearchText] = useState('');
  const [selectKey, setSelectKey] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
  const [treeData, setTreeData] = useState(undefined);
  const [pageSize, setPageSize] = useState(10);
  const [dataList, setDataList] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [toggleToast, setToggleToast] = useState({ show: false, title: '' });
  const getTreeDataList = async () => {
    const response = await axios.get('/mockupServer/getTreeDataList.json');
    setTreeData(response.data);
  };
  const getBoardList = async () => {
    const response = await axios.get('/mockupServer/getBoardList2.json', {
      page: currentPage,
      searchText: searchText,
    });
    const data = sortedData(
      _.filter(response.data, (v) => v.title.indexOf(searchText) != -1),
    );
    console.log('🚀 ~ getBoardList ~ data:', data, searchText);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const responseData = data.slice(startIndex, endIndex);
    console.log(responseData);
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

  useEffect(() => {
    getTreeDataList();
  });

  const makeTitle = () => {
    return (
      <>
        <h3>
          커뮤니티 제목이 들어가는 자리입니다.{' '}
          <Button as='a' color='4' text='커뮤니티 관리' />
        </h3>
      </>
    );
  };

  const toggleToastPop = ({ title, autoClose = 3000 }) => {
    setToggleToast({
      show: true,
      title: title,
    });
    setTimeout(() => {
      setToggleToast({ title: title, show: false });
    }, autoClose);
  };
  return (
    <>
      <CommonPopup
        showPopup={showPopup}
        size='large'
        onClose={() => {
          setShowPopup(false);
        }}
        closeButtonTitle=''
        closeButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        title={makeTitle}
        showSubTitle={true}
        subTitle='온나라 지식'
      >
        <div class='pop_content'>
          <div class='commu_pop'>
            <div class='wh_bx'>
              <div class='left_profile'>
                <span class='profile'>
                  <img src='' alt='' />
                </span>
                <p class='desc1'>커뮤니티 소개입니다. 커뮤니티 소개입니다.</p>
                <ul class='list'>
                  <li class='icon1'>
                    <a href='javascript:void(0)'>
                      <b>리더</b>
                      <p>홍길동</p>
                    </a>
                  </li>
                  <li class='icon2'>
                    <a href='javascript:void(0)'>
                      <b>멤버수</b>
                      <p>297명</p>
                    </a>
                  </li>
                  <li class='icon3'>
                    <a href='javascript:void(0)'>
                      <b>방문자수</b>
                      <p>3명</p>
                    </a>
                  </li>
                  <li class='icon4'>
                    <a href='javascript:void(0)'>
                      <b>개설일</b>
                      <p>2023-04-05</p>
                    </a>
                  </li>
                </ul>

                <article class='tree'>
                  <Tree treeData={treeData} setSelectKey={setSelectKey} />
                </article>

                <Select
                  name='sel1'
                  id='sel1'
                  class='form_sel'
                  title='조건을 선택하세요.'
                  register={register('select', {})}
                  data={[
                    { id: 'all', name: '나의 커뮤니티' },
                    { id: '1', name: '조건1' },
                    { id: '2', name: '조건2' },
                  ]}
                />
              </div>

              <div class='con_pop'>
                <div class='box_st1 sch_top_wrap'>
                  <div class='form_wrap'>
                    <div class='form_group wd_full'>
                      <strong class='form_label'>제목</strong>

                      <Input
                        type='text'
                        class='form_text'
                        name='frm1'
                        id='frm1'
                        title='제목을 입력해주세요.'
                        placeholder='제목을 입력해주세요.'
                        register={register('search', {})}
                      />
                    </div>
                    <div class='form_group wd_full'>
                      <strong class='form_label'>등록자</strong>
                      <Input
                        type='text'
                        class='form_text'
                        name='frm2'
                        id='frm2'
                        title='등록자를 입력해주세요.'
                        placeholder='등록자를 입력해주세요.'
                        register={register('register', {})}
                      />
                    </div>
                    <div class='form_group wd_full'>
                      <strong class='form_label'>등록일</strong>
                      <DateRangePicker />
                    </div>
                    <div class='sch_btn_area'>
                      <Button
                        as='a'
                        color='4'
                        class='sch size_md'
                        text='초기화'
                        onClick={(e) => {
                          setSearchText('');
                          setTypeSearchText('');
                        }}
                      />
                      <Button
                        as='a'
                        color='2'
                        class='sch size_md'
                        text='검색'
                        onClick={(e) => {
                          toggleToastPop({
                            title:
                              '주소가 복사되었습니다. 원하는 곳에 붙여넣기(Ctrl+V)해 주세요',
                          });
                          const singleValue = getValues('search');
                          console.log(singleValue);
                          setSearchText(singleValue);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class='board_info'>
                  <p class='page'>
                    <span class='total'>
                      총 게시글 <b>{totalCount}</b>건
                    </span>
                  </p>

                  <div class='left_items type_btn'>
                    <Button color='4' href='javascript:void(0)' text='버튼1' />
                    <Button color='4' href='javascript:void(0)' text='버튼2' />
                  </div>

                  <form name='' id='' method='post' action=''>
                    <fieldset>
                      <legend class='blind'>게시판 정렬</legend>
                      <div class='form'>
                        <div class='item'>
                          <span class='label'>목록 표시 개수</span>
                          <div
                            class={`select_list ${showPopup1 ? 'active' : ''}`}
                          >
                            {/*<!-- class="active" 추가 시 하위 메뉴 노출 -->*/}
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
                            </ul>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
                <div class='board_list'>
                  <table class='tstyle_list'>
                    <caption>
                      공지사항 목록 - 번호, 첨부, 게시글 분류, 제목, 등록자,
                      등록일, 조회수로 구성
                    </caption>
                    <thead>
                      <tr>
                        <th scope='col'>
                          번호
                          <button
                            type='button'
                            class='btn_sort'
                            onClick={() => sortData('id')}
                          >
                            <span class='sr-only'>정렬변경</span>
                            <i />
                          </button>
                        </th>
                        <th scope='col'>첨부</th>
                        <th scope='col'>
                          게시글 분류{' '}
                          <button
                            type='button'
                            class='btn_sort'
                            onClick={() => sortData('Classification')}
                          >
                            <span class='sr-only'>정렬변경</span>
                            <i />
                          </button>
                        </th>
                        <th scope='col'>
                          제목{' '}
                          <button
                            type='button'
                            class='btn_sort'
                            onClick={() => sortData('title')}
                          >
                            <span class='sr-only'>정렬변경</span>
                            <i />
                          </button>
                        </th>
                        <th scope='col'>
                          등록자{' '}
                          <button
                            type='button'
                            class='btn_sort'
                            onClick={() => sortData('creater')}
                          >
                            <span class='sr-only'>정렬변경</span>
                            <i />
                          </button>
                        </th>
                        <th scope='col'>
                          등록일{' '}
                          <button
                            type='button'
                            class='btn_sort'
                            onClick={() => sortData('createDate')}
                          >
                            <span class='sr-only'>정렬변경</span>
                            <i />
                          </button>
                        </th>
                        <th scope='col'>
                          조회수{' '}
                          <button type='button' class='btn_sort'>
                            <span class='sr-only'>정렬변경</span>
                            <i />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataList?.map((v, i) => {
                        return (
                          <>
                            <tr>
                              <td class='m_hidden' aria-label='번호'>
                                {v.id}
                              </td>
                              <td
                                aria-label='첨부'
                                style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                }}
                              >
                                <i class='attachment pdf'>
                                  <span class='sr_only'>첨부파일 있음</span>
                                </i>
                              </td>
                              <td aria-label='게시글 분류'>
                                {v.classification}
                              </td>
                              <td class='txt_left' aria-label='제목'>
                                <strong class='b_tit'>
                                  <a href='javascript:void(0)' class='ellipsis'>
                                    {v.title}
                                  </a>
                                  <img
                                    src='/img/common/icon_new.jpg'
                                    alt='새글'
                                    class='b_new'
                                  />
                                </strong>
                              </td>
                              <td aria-label='등록자'>{v.creater}</td>
                              <td aria-label='등록일'>{v.createDate}</td>
                              <td aria-label='조회'>{v.count}</td>
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
              </div>
            </div>
          </div>
        </div>{' '}
        <Toast title={toggleToast.title} show={toggleToast.show} />
      </CommonPopup>

      <Breadcrumb />
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
    </>
  );
}

export default App;
