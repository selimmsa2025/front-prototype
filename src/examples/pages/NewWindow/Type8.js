import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import {
  Input,
  Button,
  Check,
  DatePicker,
  Radio,
  Textarea,
  Tree,
  Select,
  Toast,
} from '../../Components/Element';
import DateRangePicker from '../../Components/DateRangePicker';
import Pagination from '../../Components/Board/Pagination';
import { useForm } from 'react-hook-form';
export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const titleRef = useRef('');
  const [menu, setMenu] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [colorPop, setColorPop] = useState(false);
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
    console.log('🚀 ~ App ~ searchText:', searchText);
    getBoardList();
  }, [currentPage, pageSize, searchText, sortConfig]);
  const changePageSize = (e, pageSize) => {
    e.preventDefault();
    setPageSize(pageSize);
    setShowPopup1(!showPopup1);
    setCurrentPage(1);
  };

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

  const [toggleToast, setToggleToast] = useState({ show: false, title: '' });
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
      <div class="commu_left_menu">
        <ul>
          <li
            class={`${menu == 1 && 'active'}`}
            onClick={() => {
              setMenu(1);
            }}
          >
            <a href="javascript:void(0)">기본정보 관리</a>
            <ul class="submenu">
              <li>
                <a href="javascript:void(0)">멤버 목록</a>
              </li>
              <li>
                <a href="javascript:void(0)">멤버 신청 현황</a>
              </li>
            </ul>
          </li>
          <li
            class={`${menu == 2 && 'active'}`}
            onClick={() => {
              setMenu(2);
            }}
          >
            <a href="javascript:void(0)">커뮤니티 멤버 관리</a>
            <ul class="submenu">
              <li>
                <a href="javascript:void(0)">멤버 목록</a>
              </li>
              <li>
                <a href="javascript:void(0)">멤버 신청 현황</a>
              </li>
            </ul>
          </li>
          <li
            class={`${menu == 3 && 'active'}`}
            onClick={() => {
              setMenu(3);
            }}
          >
            <a href="javascript:void(0)">메뉴구성 관리</a>
            <ul class="submenu">
              <li>
                <a href="javascript:void(0)">멤버 목록</a>
              </li>
              <li>
                <a href="javascript:void(0)">멤버 신청 현황</a>
              </li>
            </ul>
          </li>
          <li
            class={`${menu == 4 && 'active'}`}
            onClick={() => {
              setMenu(4);
            }}
          >
            <a href="javascript:void(0)">화면타입 관리</a>
            <ul class="submenu">
              <li>
                <a href="javascript:void(0)">멤버 목록</a>
              </li>
              <li>
                <a href="javascript:void(0)">멤버 신청 현황</a>
              </li>
            </ul>
          </li>
          <li
            class={`${menu == 5 && 'active'}`}
            onClick={() => {
              setMenu(5);
            }}
          >
            <a href="javascript:void(0)">휴지통 관리</a>
            <ul class="submenu">
              <li>
                <a href="javascript:void(0)">멤버 목록</a>
              </li>
              <li>
                <a href="javascript:void(0)">멤버 신청 현황</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="new_page">
        <div class="page_con">
          <div class="page-title-wrap" data-type="responsive">
            <div class="title-drop-wrap h-tit-drop">
              <button
                type="button"
                class={`h-tit h-drop-btn ${mobileMenu && 'active'}`}
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                }}
              >
                커뮤니티 멤버 관리<span class="sr-only">닫기</span>
              </button>
              <div class="drop-menu">
                <div class="drop-in">
                  <ul class="drop-list">
                    <li>
                      <a href="#" class="item-link">
                        서브메뉴1
                      </a>
                    </li>
                    <li>
                      <a href="#" class="item-link">
                        서브메뉴2
                      </a>
                    </li>
                    <li>
                      <a href="#" class="item-link">
                        서브메뉴3
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3>커뮤니티 제목이 들어가는 자리입니다.</h3>

          <div class="commu_pop not_bg">
            <div class="wh_bx">
              <div class="left_profile">
                <span class="profile">
                  <img src="" alt="" />
                </span>
                <p class="desc2">커뮤니티 소개입니다. 커뮤니티 소개입니다.</p>
                <ul class="list">
                  <li class="icon1">
                    <a href="#">
                      <b>리더</b>
                      <p>홍길동</p>
                    </a>
                  </li>
                  <li class="icon2">
                    <a href="#">
                      <b>멤버수</b>
                      <p>297명</p>
                    </a>
                  </li>
                  <li class="icon3">
                    <a href="#">
                      <b>방문자수</b>
                      <p>3명</p>
                    </a>
                  </li>
                  <li class="icon4">
                    <a href="#">
                      <b>개설일</b>
                      <p>2023-04-05</p>
                    </a>
                  </li>
                </ul>
                <article class="tree">
                  <Tree />
                </article>

                <Select
                  name="sel2"
                  id="sel2"
                  class="size_sm"
                  title="조건을 선택하세요."
                  data={[
                    { id: 'all', name: '나의 커뮤니티' },
                    { id: '1', name: '조건1' },
                    { id: '2', name: '조건2' },
                  ]}
                />
              </div>

              <div class="con_pop">
                <div class="box_st1 sch_top_wrap">
                  <div class="form_wrap">
                    <div class="form_group wd_full">
                      <strong class="form_label">제목</strong>
                      <Input
                        name="frm1"
                        id="frm1"
                        title="제목을 입력해주세요."
                        placeholder="제목을 입력해주세요."
                        onChange={(e) => {
                          titleRef.current = e.target.value;
                        }}
                      />
                    </div>
                    <div class="form_group wd_full">
                      <strong class="form_label">등록자</strong>
                      <Input
                        name="frm2"
                        id="frm2"
                        title="등록자를 입력해주세요."
                        placeholder="등록자를 입력해주세요."
                      />
                    </div>
                    <div class="form_group wd_full">
                      <strong class="form_label">등록일</strong>
                      <DateRangePicker />
                    </div>
                    <div class="sch_btn_area">
                      <Button
                        as="button"
                        color="4"
                        class="sch size_md"
                        text="초기화"
                      />
                      <Button
                        as="button"
                        color="2"
                        class="sch size_md"
                        text="검색"
                        onClick={(e) => {
                          toggleToastPop({
                            title:
                              '주소가 복사되었습니다. 원하는 곳에 붙여넣기(Ctrl+V)해 주세요',
                          });
                          setSearchText(titleRef.current);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="board_info">
                  <p class="page">
                    <span class="total">
                      총 게시글 <b>{totalCount}</b>건
                    </span>
                  </p>

                  <div class="left_items type_btn">
                    <Button as="a" color="4" text="버튼1" />
                    <Button as="a" color="4" text="버튼2" />
                  </div>

                  <form name="" id="" method="post" action="">
                    <fieldset>
                      <legend class="blind">게시판 정렬</legend>
                      <div class="form">
                        <div class="item">
                          <span class="label">목록 표시 개수</span>
                          <div
                            class={`select_list ${showPopup1 ? 'active' : ''}`}
                          >
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
                                  href="javascript:void(0)"
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
                                  href="javascript:void(0)"
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
                <div class="board_list">
                  <table class="tstyle_list">
                    <caption>
                      공지사항 목록 - 번호, 제목, 담당부서, 첨부, 등록일, 조회로
                      구성
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">
                          번호
                          <button
                            type="button"
                            class="btn_sort"
                            onClick={() => sortData('id')}
                          >
                            <span class="sr-only">정렬변경</span>
                            <i />
                          </button>
                        </th>
                        <th scope="col">
                          제목{' '}
                          <button
                            type="button"
                            class="btn_sort"
                            onClick={() => sortData('title')}
                          >
                            <span class="sr-only">정렬변경</span>
                            <i />
                          </button>
                        </th>
                        <th scope="col">
                          담당부서{' '}
                          <button
                            type="button"
                            class="btn_sort"
                            onClick={() => sortData('depart')}
                          >
                            <span class="sr-only">정렬변경</span>
                            <i />
                          </button>
                        </th>
                        <th scope="col">첨부 </th>
                        <th scope="col">
                          등록일{' '}
                          <button
                            type="button"
                            class="btn_sort"
                            onClick={() => sortData('createDate')}
                          >
                            <span class="sr-only">정렬변경</span>
                            <i />
                          </button>
                        </th>
                        <th scope="col">
                          조회{' '}
                          <button type="button" class="btn_sort">
                            <span class="sr-only">정렬변경</span>
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
                              <td class="m_hidden" aria-label="번호">
                                {v.id}
                              </td>
                              <td class="txt_left" aria-label="제목">
                                <strong class="b_tit">
                                  <a href="#" class="ellipsis">
                                    {v.title}
                                  </a>
                                  <img
                                    src="/img/common/icon_new.jpg"
                                    alt="새글"
                                    class="b_new"
                                  />
                                </strong>
                              </td>
                              <td aria-label="담당부서">{v.depart}</td>
                              <td
                                aria-label="첨부"
                                style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                }}
                              >
                                <i class="attachment pdf">
                                  <span class="sr_only">첨부파일 있음</span>
                                </i>
                              </td>
                              <td aria-label="등록일">{v.createDate}</td>
                              <td aria-label="조회">{v.count}</td>
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

          <div class="bet_btn_area">
            <div class="bottom_left_area">
              <Button as="a" color="4" class=" type1" text="삭제" />
            </div>
            <div class="bottom_right_area">
              <div class="palette_area">
                <Button
                  as="a"
                  color="3"
                  class=" type1"
                  text="Secondary BTN"
                  onClick={() => {
                    setColorPop(!colorPop);
                  }}
                />
                {/* <!-- .color_popup에 class="active" 추가시 열림 --> */}
                <div class={`color_popup ${colorPop && 'active'}`}>
                  <article>
                    <h2>색상 변경</h2>
                    <div class="pop_content">
                      <ul class="color_palette">
                        <li>
                          <button type="button">
                            타이틀 전경
                            <span
                              class="color"
                              style={{ 'background-color': '#ddd' }}
                            ></span>
                          </button>
                        </li>
                        <li>
                          <button type="button">
                            타이틀 배경
                            <span
                              class="color"
                              style={{ 'background-color': '#246BEB' }}
                            ></span>
                          </button>
                        </li>
                        <li>
                          <button type="button">
                            기본정보 전경
                            <span
                              class="color"
                              style={{ 'background-color': '#4F4F4F' }}
                            ></span>
                          </button>
                        </li>
                        <li>
                          <button type="button">
                            기본정보 배경
                            <span
                              class="color"
                              style={{ 'background-color': '#fff' }}
                            ></span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="javascript:void(0)"
                      class="close_btn"
                      onClick={() => {
                        setColorPop(!colorPop);
                      }}
                    >
                      <span class="sr-only">팝업 닫기</span>
                    </a>
                  </article>
                </div>
              </div>
              <Button as="a" color="1" class=" type1" text="Secondary BTN" />
            </div>
          </div>
        </div>
        <Toast title={toggleToast.title} show={toggleToast.show} />
      </div>
    </>
  );
}
