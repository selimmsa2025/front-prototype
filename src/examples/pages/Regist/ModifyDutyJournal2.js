import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import _, { remove } from 'lodash';
import BreadCrumb from '../../Components/Breadcrumb';
import ReactTable from '../../Components/ReactTable';
import { Popup } from '../../Components/Element';
import {
  Input,
  DatePicker,
  Check,
  Radio,
  Select,
  Button,
  Textarea,
  BarChart,
} from '../../Components/Element';
import { current } from '@reduxjs/toolkit';

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
    cellRender: (cell) => {
      //cell == data배열의 각 객체
      let title = cell.report;
      const onClickEvent = (e) => {
        console.log('test11', e);
      };
      if (!_.isEmpty(cell.report)) {
        return (
          <>
            <Button
              as='a'
              color='4'
              onClick={onClickEvent}
              class='2'
              text={title}
            />
          </>
        );
      } else {
        return null;
      }
    },
  },
];
const data = [
  {
    Institution: '부산',
    Mng: '테스트',
    time: '14:43:50',
    reporter: '테스트',
    detect: '무',
    report: '보고',
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

function App ({}) {
  const [tableData, setTableData] = useState([]);
  const [openNotice, setOpenNotice] = useState(false);
  const [openBubble, setOpenBubble] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [tab, setTab] = useState(0);
  const [specialList, setSpecialList] = useState([{ id: 1 }]);
  const [specialKey, setSpecialKey] = useState(1);

  useEffect(() => {
    setTableData(data);
  });

  const toggleNotice = () => {
    setOpenNotice(!openNotice);
  };
  const bubbleActive = () => {
    setOpenBubble(!openBubble);
  };

  const changeTab = (tabIndex) => {
    setTab(tabIndex);
  };

  const addSpecial = () => {
    setSpecialList((prev) => {
      return [...prev, { id: specialKey + 1 }];
    });
    setSpecialKey(specialKey + 1);
  };
  const removeSpecial = (id) => {
    setSpecialList((prev) => {
      return [..._.filter(prev, (v) => v.id != id)];
    });
  };
  const [documentList, setDocumentList] = useState([{ id: 1 }]);
  const [documentKey, setDocumentKey] = useState(1);

  const addDocument = () => {
    setDocumentList((prev) => {
      return [...prev, { id: documentKey + 1 }];
    });
    setDocumentKey(documentKey + 1);
  };
  const removeDocument = (id) => {
    setDocumentList((prev) => {
      return [..._.filter(prev, (v) => v.id != id)];
    });
  };

  return (
    <>
      <Popup
        showPopup={showPopup}
        onClose={() => {
          setShowPopup(false);
        }}
        leftButtonTitle={'취소'}
        rightButtonTitle={'확인'}
        leftButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        rightButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        title={'팝업 타이틀'}
        subTitle={'내용 타이틀'}
        contents={
          '대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.'
        }
      />
      {/* <!-- 컨텐츠 영역 --> */}
      <BreadCrumb />
      {/* 컨텐츠 타이틀 영역  */}
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>당직근무일지 수정</h2>
      </div>
      {/* 컨텐츠 타이틀 영역 */}
      {/* <!-- 컨텐츠 입력 영역 --> */}
      <div className='contents_area'>
        {/* <!-- 여기부터 컨텐츠 입력 --> */}
        <div className={`box_st4 txt_notice ${openNotice ? 'active' : ''}`}>
          <button type='button' className='title' onClick={toggleNotice}>
            알림말의 타이틀을 입력해주세요.
          </button>

          {/*<!-- 클릭시 분모 .txt_notice에 className="active" toggle  -->*/}
          <div className='hidden_bx'>
            <h3 className='tit'>행정안전부 당직실에서 말씀드립니다!</h3>
            <ul className='dot1'>
              <li>
                동절기 피해예방을 위한 당직근무 강화 안내
                <ul className='dot2'>
                  <li>창문개폐 확인, 취약시설 점검 등 시설물 관리 철저</li>
                  <li>사무실 전열기구 전원 차단 등 방화 점검 철저</li>
                  <li>피해발견 시 즉각 조치 및 상황보고</li>
                </ul>
                <p>
                  *각 기관 당직자는 청사 화재예방 및 순찰강화(정시·수시)를 하여
                  주시고, 특이사항이나 이상 징후 발생 시 즉각적인 상황보고가 될
                  수 있도록 안전을 기하여 주시기 바랍니다.
                </p>
              </li>
              <li>
                특이 사항, 이상 징후 발견 시 즉각 대응 및 상황 보고
                <ul className='dot2'>
                  <li>
                    최근 당직실에 걸려온 민원전화 불친절하게 대응하여 민원.
                    정보공개 등의 사례가 발생하고 있사오니. 유의하여 주시기
                    바랍니다.
                  </li>
                </ul>
              </li>
            </ul>
            <h3 className='tit'>기관별 당직자들께 부탁드립니다.</h3>
            <ul className='dot1'>
              <li>
                소속기관의 보고버튼을 선택하여 당직책임자, 당직보고자,
                당직근무인원을 입력해주세요.
                <p>*근무 중 이상이 있는 경우 유선으로 행안부 당직자에게 보고</p>
              </li>
              <li>시도 및 소속기관별 당직보고는 1회 보고로 완료됩니다.</li>
            </ul>
          </div>
        </div>

        <div className='box_st1 sch_top_wrap'>
          <div className='form_wrap width_half valign_middle'>
            <div className='form_group'>
              <strong className='form_label'>당직일</strong>
              <div className='datepicker_wrap'>
                {/* <!-- 
                                        달력 아이콘
                                        백그라운드로 할 경우 input에 cal 클래스 추가
                                        버튼으로 할 경우는 종료날짜처럼 버튼 추가
                                    --> */}
                <div className='form_datepicker'>
                  {/* <!-- <label for="sdate">시작날짜</label> --> */}
                  <div className='datepicker_item'>
                    <DatePicker
                      type={'date'}
                      name='sdate'
                      id='sdate'
                      pattern={'yyyy.MM.dd'}
                      title='시작날짜를 입력하세요. 입력방법 예시:2024.01.01'
                      placeholder='YYYY.MM.DD'
                      wihtoutWrapTag={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='form_group'>
              <strong className='form_label'>당직유형</strong>
              <ul className='chk_list'>
                <li>
                  <div className='form_chk'>
                    <Radio
                      name='rdo_1'
                      data={[
                        { value: '1', title: '숙직' },
                        { value: '2', title: '일직' },
                      ]}
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className='form_group'>
              <strong className='form_label'>보안점검번호</strong>
              <p>20240509-82945</p>
            </div>
            <div className='sch_btn_area'>
              <div class='bet_btn_area clear'>
                <div class='fl'>
                  <div className={`desc_bubble ${openBubble ? 'active' : ''}`}>
                    <button
                      type='button'
                      className='open'
                      onClick={() => bubbleActive(!openBubble)}
                    >
                      <span className='sr-only'>설명창열기</span>
                      <i className='ri-information-2-fill'></i>
                    </button>{' '}
                    {/*<!-- 클릭시 분모 .desc_bubble에 className="active" 추가 -->*/}
                    <div className='speech'>
                      <strong class='sp_tit'>도움말 제목</strong>
                      <p>[행사등록전 테스트용] 메뉴를 이용해주시기 바랍니다.</p>
                      <button
                        type='button'
                        className='close'
                        onClick={() => bubbleActive(!openBubble)}
                      >
                        <span className='sr-only'>설명창닫기</span>
                        <i className='ri-close-line'></i>
                      </button>{' '}
                      {/*<!-- 클릭시 분모 .desc_bubble에 className="active" 제거 -->*/}
                    </div>
                  </div>
                  <Button as='a' color='4' text='목록' />
                </div>
                <div class='fr'>
                  <Button as='a' color='2' text='삭제' />
                  <Button as='a' color='1' text='저장' />
                  <Button as='a' color='4' text='완료' />
                </div>
              </div>
            </div>
          </div>
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
              </li>{' '}
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
                  <div className='form_wrap width_half'>
                    <div className='form_group topover'>
                      <strong className='form_label'>
                        당직자<span className='essential'>(필수)</span>
                      </strong>
                      <div className='search_input'>
                        <Input
                          name='frm1'
                          id='frm1'
                          value='당직사령'
                          title='당직사령 팝업열림'
                          placeholder='당직사령'
                          readonly={true}
                          onClick={() => setShowPopup(!showPopup)}
                        />
                        {/*<!-- input 클릭시 팝업 열림 -->*/}
                      </div>
                      <div className='search_input'>
                        <Input
                          name='frm1'
                          id='frm1'
                          value='당직보좌관'
                          title='당직보좌관 팝업열림'
                          placeholder='당직보좌관'
                          readonly={true}
                          onClick={() => setShowPopup(!showPopup)}
                        />
                        {/*<!-- input 클릭시 팝업 열림 -->*/}
                      </div>
                    </div>
                  </div>
                  <div className='journal'>
                    <h3 className='title'>당직근무일지</h3>
                    <ul>
                      <li>
                        <strong>지시받은 사항</strong>
                        <Textarea
                          class='textarea h50'
                          maxlength='500'
                          name=''
                          id=''
                          placeholder='내용을 입력해주세요.'
                        ></Textarea>
                      </li>
                      <li>
                        <strong>조치사항</strong>
                        <Textarea
                          class='textarea h50'
                          maxlength='500'
                          name=''
                          id=''
                          placeholder='내용을 입력해주세요.'
                        ></Textarea>
                      </li>
                      <li>
                        <strong>지시한 사항</strong>
                        <Textarea
                          class='textarea h50'
                          maxlength='500'
                          name=''
                          id=''
                          placeholder='내용을 입력해주세요.'
                        ></Textarea>
                      </li>
                      <li>
                        <strong>조치결과 사항</strong>
                        <Textarea
                          class='textarea h50'
                          maxlength='500'
                          name=''
                          id=''
                          placeholder='내용을 입력해주세요.'
                        ></Textarea>
                      </li>
                      <li>
                        <strong>보고사항</strong>
                        <Textarea
                          class='textarea h50'
                          maxlength='500'
                          name=''
                          id=''
                          placeholder='내용을 입력해주세요.'
                        ></Textarea>
                      </li>
                      <li>
                        <strong>인계사항</strong>
                        <Textarea
                          class='textarea h50'
                          maxlength='500'
                          name=''
                          id=''
                          placeholder='내용을 입력해주세요.'
                        ></Textarea>
                      </li>
                    </ul>
                  </div>
                  <div className='report'>
                    <div className='tit_area'>
                      <h3 className='h-tit3'>시도 및 소속기관 당직상황보고</h3>
                      <div className='right_items'>
                        <span className='desc3'>
                          * 당직상황보고는 1분단위로 자동갱신
                        </span>
                        <Button as='a' color='4' text='새로고침'>
                          <i className='ri-restart-line'></i>
                        </Button>
                      </div>
                    </div>
                    <div className='table_area'>
                      <div className='board_list'>
                        <ReactTable
                          columns={columns}
                          data={tableData}
                          className='tstyle_view'
                        />
                      </div>
                      <div className='board_list'>
                        <ReactTable
                          columns={columns}
                          data={tableData}
                          className='tstyle_view'
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <p className='desc3'>
                  *당직보고 게시문 파일 업로드 영역에 마우스를 클릭하시거나
                  첨부하시고자 하는 파일을 끌어다가(Drag) 당직보고 게시문 파일
                  업로드 영역에 두시면(Drop) 됩니다.
                </p>
                <div className='file_upload'>
                  <p>
                    첨부할 파일을 여기에 끌어다 놓거나. 파일 선택 버튼을 직접
                    선택해주세요.
                  </p>
                  <Input
                    type='file'
                    id='fileIn1'
                    name='fileIn1'
                    title='파일선택'
                  />
                  <label for='fileIn1' className='btn1'>
                    <i className='ri-upload-line'></i> 파일선택
                  </label>
                </div>

                <div className='bet_btn_area'>
                  <div class='bottom_right_area'>
                    <Button as='a' color='1' size='3' text='저장' />
                  </div>
                </div>
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
                        <Select
                          name='sel1'
                          id='sel1'
                          class='form_sel size_sm'
                          title='column을 선택해주세요.'
                          data={[
                            { id: '', name: 'colum' },
                            { id: '1', name: 'colum' },
                            { id: '2', name: 'colum' },
                          ]}
                        />
                      </li>
                      <li className='shrink'>
                        <strong className='tit'>column</strong>
                        <div className='form_group sel_colum'>
                          <Select
                            name='sel2'
                            id='sel2'
                            class='form_sel'
                            title='column을 선택해주세요.'
                            data={[
                              { id: '', name: 'colum' },
                              { id: '1', name: 'colum1' },
                            ]}
                          />
                          <span>:</span>
                          <Select
                            name='sel3'
                            id='sel3'
                            class='form_sel'
                            title='column을 선택해주세요.'
                            data={[
                              { id: '', name: 'colum' },
                              { id: '1', name: 'colum1' },
                            ]}
                          />
                          <span>~</span>
                          <Select
                            name='sel4'
                            id='sel4'
                            class='form_sel'
                            title='column을 선택해주세요.'
                            data={[
                              { id: '', name: 'colum' },
                              { id: '1', name: 'colum1' },
                            ]}
                          />
                          <span>:</span>
                          <Select
                            name='sel5'
                            id='sel5'
                            class='form_sel'
                            title='column을 선택해주세요.'
                            data={[
                              { id: '', name: 'colum' },
                              { id: '1', name: 'colum1' },
                            ]}
                          />
                        </div>
                      </li>
                      <li className='full'>
                        <strong className='tit'>column</strong>
                        <Textarea
                          class='textarea h78'
                          maxlength=''
                          name=''
                          id=''
                          placeholder='내용을 입력해주세요.'
                        ></Textarea>
                      </li>
                    </ul>
                    <div className='fr'>
                      <Button as='a' color='1' text='저장' />
                    </div>
                  </div>
                  <div>
                    <ul className='colum_box'>
                      <li>
                        <strong className='tit'>column</strong>
                        <Select
                          name='sel1'
                          id='sel1'
                          class='form_sel'
                          title='column을 선택해주세요.'
                          data={[
                            { id: '', name: 'colum' },
                            { id: '1', name: 'colum1' },
                            { id: '2', name: 'colum2' },
                          ]}
                        />
                      </li>
                      <li className='shrink'>
                        <strong className='tit'>column</strong>
                        <div className='form_group sel_colum'>
                          <Select
                            name='sel2'
                            id='sel2'
                            class='form_sel'
                            title='column을 선택해주세요.'
                            data={[
                              { id: '', name: 'colum' },
                              { id: '1', name: 'colum1' },
                            ]}
                          />
                          <span>:</span>
                          <Select
                            name='sel3'
                            id='sel3'
                            class='form_sel'
                            title='column을 선택해주세요.'
                            data={[
                              { id: '', name: 'colum' },
                              { id: '1', name: 'colum1' },
                            ]}
                          />
                          <span>~</span>
                          <Select
                            name='sel4'
                            id='sel4'
                            class='form_sel'
                            title='column을 선택해주세요.'
                            data={[
                              { id: '', name: 'colum' },
                              { id: '1', name: 'colum1' },
                            ]}
                          />
                          <span>:</span>
                          <Select
                            name='sel5'
                            id='sel5'
                            class='form_sel'
                            title='column을 선택해주세요.'
                            data={[
                              { id: '', name: 'colum' },
                              { id: '1', name: 'colum1' },
                            ]}
                          />
                        </div>
                      </li>
                      <li className='full'>
                        <strong className='tit'>column</strong>
                        <Textarea
                          class='textarea h78'
                          name=''
                          id=''
                          placeholder='내용을 입력해주세요.'
                        ></Textarea>
                      </li>
                    </ul>
                    <div className='fr'>
                      <Button as='a' color='1' text='저장' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='box_st2 twin_area'>
                <div className='small'>
                  <div className='tit_area'>
                    <h3 className='h-tit3'>특근자 현황</h3>
                    <div className='right_items'>
                      {/* {index == optionList.length - 1 ? ( */}
                      <Button
                        as='a'
                        color='2'
                        onClick={addSpecial}
                        text='추가'
                      />
                      {/* ) : null} */}
                    </div>
                  </div>
                  <div className='board_list'>
                    <table className='tstyle_view not_line'>
                      <caption>목록 - column, 삭제버튼으로 구성</caption>
                      <thead>
                        <tr>
                          <th scope='col'>column</th>
                          <th scope='col'>column</th>
                          <th scope='col'>column</th>
                          <th scope='col'>
                            <span className='sr-only'>삭제버튼</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {specialList.map((special, index) => {
                          return (
                            <>
                              <tr>
                                <td aria-label='column'>테스트</td>
                                <td aria-label='column'>테스트</td>
                                <td aria-label='column'>테스트</td>
                                <td aria-label='삭제버튼'>
                                  {index > 0 ? (
                                    <Button
                                      as='a'
                                      color='4'
                                      size='2'
                                      text='삭제'
                                      onClick={() => {
                                        removeSpecial(special.id);
                                      }}
                                    />
                                  ) : null}
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='large'>
                  <div className='tit_area'>
                    <h3 className='h-tit3'>문서처리 현황</h3>
                    <div className='right_items'>
                      <Button
                        as='a'
                        color='2'
                        text='추가'
                        onClick={addDocument}
                      />
                    </div>
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
                          <th scope='col' rowspan='2'>
                            <span className='sr-only'>삭제버튼</span>
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
                                <td aria-label='삭제버튼'>
                                  {index > 0 ? (
                                    <Button
                                      as='a'
                                      color='4'
                                      size='2'
                                      text='삭제'
                                      onClick={() => {
                                        removeDocument(document.id);
                                      }}
                                    />
                                  ) : null}
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='box_st2'></div>
            </>
          )}
        </div>
        {/* <!-- //게시판 --> */}
      </div>
      {/* <!-- //컨텐츠 입력 영역 --> */}
      {/* <!-- //컨텐츠 영역 --> */}
    </>
  );
}

export default App;
