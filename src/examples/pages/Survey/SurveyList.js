import { useState, useEffect } from 'react';
import {
  Input,
  DatePicker,
  Check,
  Radio,
  Select,
  Button,
} from '../../Components/Element';
import _ from 'lodash';
import BreadCrumb from '../../Components/Breadcrumb';
import ReactTable from '../../Components/ReactTable';
import Pagination from '../../Components/Board/Pagination';

const columns = [
  {
    id: 'id',
    header: '번호',
  },
  {
    id: 'title',
    header: '설문제목',
  },
  {
    id: 'depart',
    header: '설문부서',
  },
  {
    id: 'register',
    header: '등록자',
  },
  {
    id: 'appendCnt',
    header: '참여수',
  },
  {
    id: 'period',
    header: '설문기간',
  },
  {
    id: 'status',
    header: '설문상태',
    cellRender: (cell) => {
      //cell == data배열의 각 객체
      let value = cell.status || 1;
      let title = '';
      switch (value) {
        case 1:
          title = '진행중';
          break;
        case 2:
          title = '참여완료';
          break;
        case 3:
          title = '예약';
          break;
        case 4:
          title = '종료';
          break;
        default:
          break;
      }
      return (
        <>
          <span className={`tag${value}`}>{title}</span>
        </>
      );
    },
  },
  {
    id: 'append',
    header: '참여',
    cellRender: (cell) => {
      //cell == data배열의 각 객체
      let title = cell.append;
      const onClickEvent = (e) => {
        console.log('test :: ', e);
      };
      return (
        <>
          <Button
            as='a'
            color='4'
            onClick={onClickEvent}
            class='type2'
            text={title}
          />
        </>
      );
    },
  },
  {
    id: 'result',
    header: '결과',
    cellRender: (cell) => {
      //cell == data배열의 각 객체
      let title = cell.result;
      const onClickEvent = (e) => {
        console.log('test123 :: ', e);
      };
      return (
        <>
          <Button
            as='a'
            color='4'
            onClick={onClickEvent}
            class='type2'
            text={title}
          />
        </>
      );
    },
  },
];
const data = [
  {
    id: '1',
    title: '설문제목 입니다.',
    depart: '행정안전부',
    register: '등록자',
    appendCnt: '15',
    period: '2024-01-01 ~ 2024-05-01',
    status: 1,
    append: '참여',
    result: '결과',
  },
  {
    id: '2',
    title: '설문제목 입니다.',
    depart: '행정안전부',
    register: '등록자',
    appendCnt: '15',
    period: '2024-01-01 ~ 2024-05-01',
    status: 2,
    append: '참여',
    result: '결과',
  },
  {
    id: '3',
    title: '설문제목 입니다.',
    depart: '행정안전부',
    register: '등록자',
    appendCnt: '15',
    period: '2024-01-01 ~ 2024-05-01',
    status: 3,
    append: '참여',
    result: '결과',
  },
  {
    id: '4',
    title: '설문제목 입니다.',
    depart: '행정안전부',
    register: '등록자',
    appendCnt: '15',
    period: '2024-01-01 ~ 2024-05-01',
    status: 4,
    append: '참여',
    result: '결과',
  },
  {
    id: '5',
    title: '설문제목 입니다.',
    depart: '행정안전부',
    register: '등록자',
    appendCnt: '15',
    period: '2024-01-01 ~ 2024-05-01',
    status: 1,
    append: '참여',
    result: '결과',
  },
  {
    id: '6',
    title: '설문제목 입니다.',
    depart: '행정안전부',
    register: '등록자',
    appendCnt: '15',
    period: '2024-01-01 ~ 2024-05-01',
    status: 1,
    append: '참여',
    result: '결과',
  },
  {
    id: '7',
    title: '설문제목 입니다.',
    depart: '행정안전부',
    register: '등록자',
    appendCnt: '15',
    period: '2024-01-01 ~ 2024-05-01',
    status: 1,
    append: '참여',
    result: '결과',
  },
  {
    id: '8',
    title: '설문제목 입니다.',
    depart: '행정안전부',
    register: '등록자',
    appendCnt: '15',
    period: '2024-01-01 ~ 2024-05-01',
    status: 1,
    append: '참여',
    result: '결과',
  },
  {
    id: '9',
    title: '설문제목 입니다.',
    depart: '행정안전부',
    register: '등록자',
    appendCnt: '15',
    period: '2024-01-01 ~ 2024-05-01',
    status: 1,
    append: '참여',
    result: '결과',
  },
  {
    id: '10',
    title: '설문제목 입니다.',
    depart: '행정안전부',
    register: '등록자',
    appendCnt: '15',
    period: '2024-01-01 ~ 2024-05-01',
    status: 1,
    append: '참여',
    result: '결과',
  },
  {
    id: '11',
    title: '설문제목 입니다.',
    depart: '행정안전부',
    register: '등록자',
    appendCnt: '15',
    period: '2024-01-01 ~ 2024-05-01',
    status: 1,
    append: '참여',
    result: '결과',
  },
  {
    id: '12',
    title: '설문제목 입니다.',
    depart: '행정안전부',
    register: '등록자',
    appendCnt: '15',
    period: '2024-01-01 ~ 2024-05-01',
    status: 1,
    append: '참여',
    result: '결과',
  },
  {
    id: '13',
    title: '설문제목 입니다.',
    depart: '행정안전부',
    register: '등록자',
    appendCnt: '15',
    period: '2024-01-01 ~ 2024-05-01',
    status: 1,
    append: '참여',
    result: '결과',
  },
  {
    id: '14',
    title: '설문제목 입니다.',
    depart: '행정안전부',
    register: '등록자',
    appendCnt: '15',
    period: '2024-01-01 ~ 2024-05-01',
    status: 1,
    append: '참여',
    result: '결과',
  },
];

function App ({}) {
  const [tableData, setTableData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const responseData = data.slice(startIndex, endIndex);

    setTableData(responseData);
    setTotalCount(data.length);
  }, [currentPage]);

  return (
    <>
      <BreadCrumb />
      {/* <!-- 컨텐츠 타이틀 영역 --> */}
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>page title</h2>
      </div>
      {/* <!-- //컨텐츠 타이틀 영역 --> */}

      {/* <!-- 컨텐츠 입력 영역 --> */}
      <div className='contents_area'>
        {/* <!-- 여기부터 컨텐츠 입력 --> */}

        <div className='box_st1 sch_top_wrap'>
          <div className='form_wrap width_half'>
            <div className='form_group'>
              <strong className='form_label'>검색 조건 1</strong>
              <Input
                name='frm1'
                id='frm1'
                title='검색어를 입력해주세요.'
                placeholder='검색어를 입력해주세요.'
              />
            </div>
            <div className='form_group'>
              <strong className='form_label'>검색 조건 2</strong>
              <Select
                name='sel1'
                id='sel1'
                class='form_sel size_sm'
                title='조건을 선택하세요.'
                data={[
                  { id: 'all', name: '전체' },
                  { id: '1', name: '조건1' },
                  { id: '2', name: '조건2' },
                ]}
              />
            </div>
            <div className='form_group'>
              <strong className='form_label'>검색 조건 3</strong>
              <Select
                name='sel2'
                id='sel2'
                class='form_sel size_sm'
                title='조건을 선택하세요.'
                data={[
                  { id: 'all', name: '전체' },
                  { id: '1', name: '조건1' },
                  { id: '2', name: '조건2' },
                ]}
              />
              <Input
                name='frm2'
                id='frm2'
                title='검색어를 입력해주세요.'
                placeholder='검색어를 입력해주세요.'
              />
            </div>
            <div className='form_group wrap'>
              <strong className='form_label'>검색 조건 4</strong>
              <div className='datepicker_wrap'>
                <DatePicker
                  type={'date'}
                  name='sdate'
                  id='sdate'
                  pattern={'yyyy.MM.dd'}
                  title='시작날짜를 입력하세요. 입력방법 예시:2024.01.01'
                  placeholder='YYYY.MM.DD'
                  wihtoutWrapTag={true}
                />
                <span className='date_bar'>-</span>
                <DatePicker
                  type={'date'}
                  name='sdate'
                  id='sdate'
                  pattern={'yyyy.MM.dd'}
                  title='종료날짜를 입력하세요. 입력방법 예시:2024.01.01'
                  placeholder='YYYY.MM.DD'
                  wihtoutWrapTag={true}
                />
              </div>
            </div>
            <div className='form_group valign_top'>
              <strong className='form_label'>검색 조건 5</strong>
              <Check
                name='chk_1'
                data={[
                  { value: '1', title: '선택1', displayTitle: true },
                  { value: '2', title: '선택2', displayTitle: true },
                  { value: '3', title: '선택3', displayTitle: true },
                  { value: '4', title: '선택4', displayTitle: true },
                ]}
              />
            </div>
            <div className='form_group valign_top'>
              <strong className='form_label'>검색 조건 6</strong>
              <Radio
                name='rdo_1'
                data={[
                  { value: '1', title: '선택1' },
                  { value: '2', title: '선택2' },
                  { value: '3', title: '선택3' },
                  { value: '4', title: '선택4' },
                ]}
              />
            </div>
            <div className='sch_btn_area'>
              <Button as='button' color='4' class='sch size_md' text='초기화' />
              <Button as='button' color='2' class='sch size_md' text='검색' />
            </div>
          </div>
        </div>

        {/* <!-- 게시판 --> */}
        <div className='board_info'>
          <p className='page not_line'>
            <span className='total'>
              검색 결과 <b>8,897</b>개
            </span>
          </p>

          <form name='' id='' method='post' action='' className='fr'>
            <fieldset>
              <legend className='blind'>게시판 정렬</legend>
              <div className='form'>
                <div className='item'>
                  <span className='label'>목록 표시 개수</span>
                  <div className='select_list'>
                    {' '}
                    {/*<!-- className="active" 추가 시 하위 메뉴 노출 -->*/}
                    <a href='javascript:void(0)'>
                      <span className='sr_only'>선택된 옵션</span>10개
                    </a>
                    <ul className='list'>
                      <li>
                        <a href='javascript:void(0)'>20개</a>
                      </li>
                      <li>
                        <a href='javascript:void(0)'>15개</a>
                      </li>
                      <li>
                        <a href='javascript:void(0)' className='on'>
                          10개
                        </a>
                      </li>{' '}
                      {/*<!-- 선택된 옵션일 경우 className="on" 추가 -->*/}
                    </ul>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <div className='board_list'>
          <ReactTable
            columns={columns}
            data={tableData}
            className='tstyle_list'
          />
          {/* <table className='tstyle_list'>
            <caption>
              공지사항 목록 - 번호, 설문제목, 설문부서, 등록자, 참여수,
              설문기간, 설문상태, 참여,결과로 구성
            </caption>
            <colgroup>
              <col style={{ width: '10%' }} />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th scope='col'>번호</th>
                <th scope='col'>설문제목</th>
                <th scope='col'>설문부서</th>
                <th scope='col'>등록자</th>
                <th scope='col'>참여수</th>
                <th scope='col'>설문기간</th>
                <th scope='col'>설문상태</th>
                <th scope='col'>참여</th>
                <th scope='col'>결과</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='m_hidden' aria-label='번호'>
                  1
                </td>
                <td className='txt_left' aria-label='설문제목'>
                  <strong className='b_tit'>
                    <a href='#' className='ellipsis'>
                      설문제목 내용이 들어갑니다.
                    </a>
                  </strong>
                </td>
                <td aria-label='설문부서'>행정안전부</td>
                <td aria-label='등록자'>등록자</td>
                <td aria-label='참여수'>15</td>
                <td aria-label='설문기간'>2024-01-01 ~ 2024-05-01</td>
                <td aria-label='설문상태'>
                  <span className='tag1'>진행중</span>
                </td>
                <td aria-label='참여'>
                  <a href='#' className='btn4 type2'>
                    참여
                  </a>
                </td>
                <td aria-label='결과'>
                  <a href='#' className='btn4 type2'>
                    결과
                  </a>
                </td>
              </tr>
              <tr>
                <td className='m_hidden' aria-label='번호'>
                  2
                </td>
                <td className='txt_left' aria-label='설문제목'>
                  <strong className='b_tit'>
                    <a href='#' className='ellipsis'>
                      설문제목 내용이 들어갑니다.
                    </a>
                  </strong>
                </td>
                <td aria-label='설문부서'>행정안전부</td>
                <td aria-label='등록자'>등록자</td>
                <td aria-label='참여수'>15</td>
                <td aria-label='설문기간'>2024-01-01 ~ 2024-05-01</td>
                <td aria-label='설문상태'>
                  <span className='tag2'>참여완료</span>
                </td>
                <td aria-label='참여'>
                  <a href='#' className='btn4 type2'>
                    참여
                  </a>
                </td>
                <td aria-label='결과'>
                  <a href='#' className='btn4 type2'>
                    결과
                  </a>
                </td>
              </tr>
              <tr>
                <td className='m_hidden' aria-label='번호'>
                  3
                </td>
                <td className='txt_left' aria-label='설문제목'>
                  <strong className='b_tit'>
                    <a href='#' className='ellipsis'>
                      설문제목 내용이 들어갑니다.
                    </a>
                  </strong>
                </td>
                <td aria-label='설문부서'>행정안전부</td>
                <td aria-label='등록자'>등록자</td>
                <td aria-label='참여수'>15</td>
                <td aria-label='설문기간'>2024-01-01 ~ 2024-05-01</td>
                <td aria-label='설문상태'>
                  <span className='tag3'>예약</span>
                </td>
                <td aria-label='참여'>
                  <a href='#' className='btn4 type2'>
                    참여
                  </a>
                </td>
                <td aria-label='결과'>
                  <a href='#' className='btn4 type2'>
                    결과
                  </a>
                </td>
              </tr>
              <tr>
                <td className='m_hidden' aria-label='번호'>
                  4
                </td>
                <td className='txt_left' aria-label='설문제목'>
                  <strong className='b_tit'>
                    <a href='#' className='ellipsis'>
                      설문제목 내용이 들어갑니다.
                    </a>
                  </strong>
                </td>
                <td aria-label='설문부서'>행정안전부</td>
                <td aria-label='등록자'>등록자</td>
                <td aria-label='참여수'>15</td>
                <td aria-label='설문기간'>2024-01-01 ~ 2024-05-01</td>
                <td aria-label='설문상태'>
                  <span className='tag4'>종료</span>
                </td>
                <td aria-label='참여'>
                  <a href='#' className='btn4 type2'>
                    참여
                  </a>
                </td>
                <td aria-label='결과'>
                  <a href='#' className='btn4 type2'>
                    결과
                  </a>
                </td>
              </tr>
              <tr>
                <td className='m_hidden' aria-label='번호'>
                  5
                </td>
                <td className='txt_left' aria-label='설문제목'>
                  <strong className='b_tit'>
                    <a href='#' className='ellipsis'>
                      설문제목 내용이 들어갑니다.
                    </a>
                  </strong>
                </td>
                <td aria-label='설문부서'>행정안전부</td>
                <td aria-label='등록자'>등록자</td>
                <td aria-label='참여수'>15</td>
                <td aria-label='설문기간'>2024-01-01 ~ 2024-05-01</td>
                <td aria-label='설문상태'>
                  <span className='tag1'>진행중</span>
                </td>
                <td aria-label='참여'>
                  <a href='#' className='btn4 type2'>
                    참여
                  </a>
                </td>
                <td aria-label='결과'>
                  <a href='#' className='btn4 type2'>
                    결과
                  </a>
                </td>
              </tr>
              <tr>
                <td className='m_hidden' aria-label='번호'>
                  6
                </td>
                <td className='txt_left' aria-label='설문제목'>
                  <strong className='b_tit'>
                    <a href='#' className='ellipsis'>
                      설문제목 내용이 들어갑니다.
                    </a>
                  </strong>
                </td>
                <td aria-label='설문부서'>행정안전부</td>
                <td aria-label='등록자'>등록자</td>
                <td aria-label='참여수'>15</td>
                <td aria-label='설문기간'>2024-01-01 ~ 2024-05-01</td>
                <td aria-label='설문상태'>
                  <span className='tag1'>진행중</span>
                </td>
                <td aria-label='참여'>
                  <a href='#' className='btn4 type2'>
                    참여
                  </a>
                </td>
                <td aria-label='결과'>
                  <a href='#' className='btn4 type2'>
                    결과
                  </a>
                </td>
              </tr>
              <tr>
                <td className='m_hidden' aria-label='번호'>
                  7
                </td>
                <td className='txt_left' aria-label='설문제목'>
                  <strong className='b_tit'>
                    <a href='#' className='ellipsis'>
                      설문제목 내용이 들어갑니다.
                    </a>
                  </strong>
                </td>
                <td aria-label='설문부서'>행정안전부</td>
                <td aria-label='등록자'>등록자</td>
                <td aria-label='참여수'>15</td>
                <td aria-label='설문기간'>2024-01-01 ~ 2024-05-01</td>
                <td aria-label='설문상태'>
                  <span className='tag1'>진행중</span>
                </td>
                <td aria-label='참여'>
                  <a href='#' className='btn4 type2'>
                    참여
                  </a>
                </td>
                <td aria-label='결과'>
                  <a href='#' className='btn4 type2'>
                    결과
                  </a>
                </td>
              </tr>
              <tr>
                <td className='m_hidden' aria-label='번호'>
                  8
                </td>
                <td className='txt_left' aria-label='설문제목'>
                  <strong className='b_tit'>
                    <a href='#' className='ellipsis'>
                      설문제목 내용이 들어갑니다.
                    </a>
                  </strong>
                </td>
                <td aria-label='설문부서'>행정안전부</td>
                <td aria-label='등록자'>등록자</td>
                <td aria-label='참여수'>15</td>
                <td aria-label='설문기간'>2024-01-01 ~ 2024-05-01</td>
                <td aria-label='설문상태'>
                  <span className='tag4'>종료</span>
                </td>
                <td aria-label='참여'>
                  <a href='#' className='btn4 type2'>
                    참여
                  </a>
                </td>
                <td aria-label='결과'>
                  <a href='#' className='btn4 type2'>
                    결과
                  </a>
                </td>
              </tr>
              <tr>
                <td className='m_hidden' aria-label='번호'>
                  9
                </td>
                <td className='txt_left' aria-label='설문제목'>
                  <strong className='b_tit'>
                    <a href='#' className='ellipsis'>
                      설문제목 내용이 들어갑니다.
                    </a>
                  </strong>
                </td>
                <td aria-label='설문부서'>행정안전부</td>
                <td aria-label='등록자'>등록자</td>
                <td aria-label='참여수'>15</td>
                <td aria-label='설문기간'>2024-01-01 ~ 2024-05-01</td>
                <td aria-label='설문상태'>
                  <span className='tag2'>참여완료</span>
                </td>
                <td aria-label='참여'>
                  <a href='#' className='btn4 type2'>
                    참여
                  </a>
                </td>
                <td aria-label='결과'>
                  <a href='#' className='btn4 type2'>
                    결과
                  </a>
                </td>
              </tr>
              <tr>
                <td className='m_hidden' aria-label='번호'>
                  10
                </td>
                <td className='txt_left' aria-label='설문제목'>
                  <strong className='b_tit'>
                    <a href='#' className='ellipsis'>
                      설문제목 내용이 들어갑니다.
                    </a>
                  </strong>
                </td>
                <td aria-label='설문부서'>행정안전부</td>
                <td aria-label='등록자'>등록자</td>
                <td aria-label='참여수'>15</td>
                <td aria-label='설문기간'>2024-01-01 ~ 2024-05-01</td>
                <td aria-label='설문상태'>
                  <span className='tag2'>참여완료</span>
                </td>
                <td aria-label='참여'>
                  <a href='#' className='btn4 type2'>
                    참여
                  </a>
                </td>
                <td aria-label='결과'>
                  <a href='#' className='btn4 type2'>
                    결과
                  </a>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>
        <Pagination
          totalCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={(page) => {
            setCurrentPage(page);
          }}
        />

        <div className='bottom_right_area'>
          <Button as='button' color='1' class='type1' text='설문조사 등록' />
        </div>
        {/* <!-- //게시판 --> */}
      </div>
      {/* <!-- //컨텐츠 입력 영역 --> */}
      {/* <!-- //컨텐츠 영역 --> */}
    </>
  );
}

export default App;
