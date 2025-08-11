import { useState, useEffect } from 'react';
import _ from 'lodash';
import Table from '../../Components/Table';
import BreadCrumb from '../../Components/Breadcrumb';
import { Input, Select, Button } from '../../Components/Element';

const columns = [
  {
    id: 'Institution',
    header: '기관',
  },
  {
    id: 'Mng',
    header: '책임자',
  },
  {
    id: 'time',
    header: '확인시간',
  },
  {
    id: 'reporter',
    header: '보고자',
  },
  {
    id: 'detect',
    header: '이상유무',
  },
  {
    id: 'report',
    header: '보고',
  },
];
const columns2 = [
  {
    id: 'column1',
    header: 'column',
  },
  {
    id: 'column2',
    header: 'column',
  },
  {
    id: 'column3',
    header: 'column',
  },
];
const data = [
  {
    Institution: '부산',
    Mng: '테스트',
    time: '14:43:50',
    reporter: '테스트',
    detect: '무',
    report: '',
  },
  {
    Institution: '대구',
    Mng: '',
    time: '',
    reporter: '',
    detect: '',
  },
  {
    Institution: '인천',
    Mng: '',
    time: '',
    reporter: '',
    detect: '',
    report: '',
  },
  {
    Institution: '광주',
    Mng: '',
    time: '',
    reporter: '',
    detect: '',
    report: '',
  },
  {
    Institution: '대전',
    Mng: '',
    time: '',
    reporter: '',
    detect: '',
    report: '',
  },
  {
    Institution: '울산',
    Mng: '',
    time: '',
    reporter: '',
    detect: '',
    report: '',
  },
  {
    Institution: '세종',
    Mng: '',
    time: '',
    reporter: '',
    detect: '',
    report: '',
  },
  {
    Institution: '경기',
    Mng: '',
    time: '',
    reporter: '',
    detect: '',
    report: '',
  },
  {
    Institution: '강원',
    Mng: '',
    time: '',
    reporter: '',
    detect: '',
    report: '',
  },
  {
    Institution: '충북',
    Mng: '',
    time: '',
    reporter: '',
    detect: '',
    report: '',
  },
  {
    Institution: '충남',
    Mng: '',
    time: '',
    reporter: '',
    detect: '',
    report: '',
  },
  {
    Institution: '전북',
    Mng: '',
    time: '',
    reporter: '',
    detect: '',
    report: '',
  },
  {
    Institution: '전남',
    Mng: '',
    time: '',
    reporter: '',
    detect: '',
    report: '',
  },
  {
    Institution: '제주',
    Mng: '',
    time: '',
    reporter: '',
    detect: '',
    report: '',
  },
];
const data2 = [{ column1: '테스트', column2: '테스트', column3: '테스트' }];
function App ({}) {
  const [tableData, setTableData] = useState([]);
  const [tableData2, setTableData2] = useState([]);
  const [openBubble, setOpenBubble] = useState(false);
  const [tab, setTab] = useState(0);
  const [documentList, setDocumentList] = useState([{ id: 1 }]);
  const [documentKey, setDocumentKey] = useState(1);

  const changeTab = (tabIndex) => {
    setTab(tabIndex);
  };

  useEffect(() => {
    setTableData(data);
  });

  useEffect(() => {
    setTableData2(data2);
  });

  const bubbleActive = () => {
    setOpenBubble(!openBubble);
  };
  return (
    <>
      {/* <!-- 컨텐츠 영역 --> */}
      <BreadCrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>당직근무일지 조회</h2>
      </div>
      {/* <!-- //컨텐츠 타이틀 영역 --> */}

      {/* <!-- 컨텐츠 입력 영역 --> */}
      <div className='contents_area'>
        {/* <!-- 여기부터 컨텐츠 입력 --> */}
        <div className='board_title'>
          <h3>2024년 01월 01일 당직근무일지</h3>
          <span className='tag1'>일직</span>
        </div>

        {/* <!-- 게시판 --> */}
        <div className='duty_area'>
          <div className='tab_depth4'>
            <ul>
              <li className={`${tab == 0 ? 'active' : ''}`}>
                <a
                  href='javascript:;'
                  onClick={() => {
                    setTab(0);
                  }}
                >
                  당직근무일지
                </a>
              </li>
              {/*<!-- 선택된 옵션일 경우 className="active" 추가 -->*/}
              <li className={`${tab == 1 ? 'active' : ''}`}>
                <a
                  href='javascript:;'
                  onClick={() => {
                    setTab(1);
                  }}
                >
                  보안점검일지
                </a>
              </li>
            </ul>
          </div>
          {tab == 0 ? (
            <>
              <div className='box_st2'>
                <div className='width_half'>
                  <div className='journal'>
                    <h3 className='title'>행정안전부 당직상황</h3>
                    <ul>
                      <li>
                        <strong>당직자</strong>
                        <div
                          className={`desc_bubble ${
                            openBubble ? 'active' : ''
                          }`}
                        >
                          <button
                            type='button'
                            className='open'
                            onClick={() => bubbleActive(!openBubble)}
                          >
                            <span className='sr-only'>설명창열기</span>
                            <i className='ri-information-2-fill'></i>
                          </button>
                          {/*<!-- 클릭시 분모 .desc_bubble에 className="active" 추가 -->*/}
                          <div className='speech'>
                            <strong class='sp_tit'>도움말 제목</strong>
                            <p>
                              [행사등록전 테스트용] 메뉴를 이용해주시기
                              바랍니다.
                            </p>
                            <button
                              type='button'
                              className='close'
                              onClick={() => bubbleActive(!openBubble)}
                            >
                              <span className='sr-only'>설명창닫기</span>
                              <i className='ri-close-line'></i>
                            </button>
                            {/*<!-- 클릭시 분모 .desc_bubble에 className="active" 제거 -->*/}
                          </div>
                        </div>
                        <p className='txt'>
                          행정안전부 / 지방행정주사(일반임기제) / 관리자
                        </p>
                      </li>
                      <li>
                        <strong>지시받은 사항</strong>
                        <p className='txt'>내용이 들어가는 자리입니다.</p>
                      </li>
                      <li>
                        <strong>조치사항</strong>
                        <p className='txt'>내용이 들어가는 자리입니다.</p>
                      </li>
                      <li>
                        <strong>지시한 사항</strong>
                        <p className='txt'>내용이 들어가는 자리입니다.</p>
                      </li>
                      <li>
                        <strong>조치결과 사항</strong>
                        <p className='txt'>내용이 들어가는 자리입니다.</p>
                      </li>
                      <li>
                        <strong>보고사항</strong>
                        <p className='txt'>내용이 들어가는 자리입니다.</p>
                      </li>
                      <li>
                        <strong>인계사항</strong>
                        <p className='txt'>내용이 들어가는 자리입니다.</p>
                      </li>
                    </ul>
                  </div>
                  <div className='report'>
                    <h3 className='title'>시도 및 소속기관 당직상황보고</h3>
                    <div className='table_area'>
                      <div className='board_list'>
                        <Table
                          columns={columns}
                          data={tableData}
                          className='tstyle_view'
                        />
                      </div>
                      <div className='board_list'>
                        <Table
                          columns={columns}
                          data={tableData}
                          className='tstyle_view'
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='file_list'>
                  <ul>
                    <li className='pdf'>
                      <p className='text'>
                        <a href='#' download='download' title='다운로드'>
                          첨부파일의 제목인 파일명이 들어갑니다. [pdf, 328MB]
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <div className='box_st2'></div>
          )}
        </div>

        <div className='box_st2'>
          <div className='tit_area'>
            <h3 className='h-tit3'>청사내의 순찰점검</h3>
          </div>
          <div className='twin_area'>
            <div>
              <ul className='colum_box'>
                <li>
                  <strong className='tit'>column</strong>
                  <p>내용이 들어가는 자리입니다.</p>
                </li>
                <li className='shrink'>
                  <strong className='tit'>column</strong>
                  <p>내용이 들어가는 자리입니다.</p>
                </li>
                <li className='full'>
                  <strong className='tit'>column</strong>
                  <p>내용이 들어가는 자리입니다.</p>
                </li>
              </ul>
            </div>
            <div>
              <ul className='colum_box'>
                <li>
                  <strong className='tit'>column</strong>
                  <p>내용이 들어가는 자리입니다.</p>
                </li>
                <li className='shrink'>
                  <strong className='tit'>column</strong>
                  <p>내용이 들어가는 자리입니다.</p>
                </li>
                <li className='full'>
                  <strong className='tit'>column</strong>
                  <p>내용이 들어가는 자리입니다.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='box_st2 twin_area'>
          <div className='small'>
            <div className='tit_area'>
              <h3 className='h-tit3'>특근자 현황</h3>
            </div>
            <div className='board_list'>
              <Table
                columns={columns2}
                data={tableData2}
                className='tstyle_view not_line'
              />
            </div>
          </div>
          <div className='large'>
            <div className='tit_area'>
              <h3 className='h-tit3'>문서처리 현황</h3>
            </div>
            <div className='board_list'>
              <table className='tstyle_view not_line col'>
                <caption>목록 - column, 삭제버튼으로 구성</caption>
                <thead>
                  <tr>
                    <th scope='col' rowspan='2'>
                      column
                    </th>
                    <th scope='col' colspan='3'>
                      column
                    </th>
                    <th scope='col' rowspan='2'>
                      column
                    </th>
                    <th scope='col' rowspan='2'>
                      column
                    </th>
                    <th scope='col' rowspan='2'>
                      column
                    </th>
                  </tr>
                  <tr>
                    <th scope='col'>column</th>
                    <th scope='col'>column</th>
                    <th scope='col'>column</th>
                  </tr>
                </thead>
                <tbody>
                  {documentList.map((document, index) => {
                    return (
                      <>
                        <tr>
                          <td aria-label='column'>테스트</td>
                          <td aria-label='column'>테스트</td>
                          <td aria-label='column'>테스트</td>
                          <td aria-label='column'>테스트</td>
                          <td aria-label='column'>테스트</td>
                          <td aria-label='column'>테스트</td>
                          <td aria-label='column'>테스트</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class='bet_btn_area'>
          <div class='bottom_left_area'>
            <Button as='a' color='3' class='type1' text='목록' />
          </div>
          <div class='bottom_right_area'>
            <Button as='a' color='4' class='type1' text='삭제' />
          </div>
        </div>
        {/* <!-- //게시판 --> */}
      </div>
      {/* <!-- //컨텐츠 입력 영역 --> */}

      {/* <!-- //컨텐츠 영역 --> */}
    </>
  );
}

export default App;
