import { useState, useEffect } from 'react';
import _ from 'lodash';
import BreadCrumb from '../../Components/Breadcrumb';
import {
  Input,
  DatePicker,
  Check,
  Radio,
  Select,
  Button,
} from '../../Components/Element';

function App ({}) {
  const [optionList, setOptionList] = useState([{ id: 1 }]);
  const [optionKey, setOptionKey] = useState(1);

  const addOption = () => {
    setOptionList((prev) => {
      return [...prev, { id: optionKey + 1 }];
    });
    setOptionKey(optionKey + 1);
  };
  const removeOption = (id) => {
    setOptionList((prev) => {
      return [..._.filter(prev, (v) => v.id != id)];
    });
  };

  const [optionList2, setOptionList2] = useState([{ id: 1 }]);
  const [optionKey2, setOptionKey2] = useState(1);

  const addOption2 = () => {
    setOptionList2((prev) => {
      return [...prev, { id: optionKey2 + 1 }];
    });
    setOptionKey2(optionKey2 + 1);
  };
  const removeOption2 = (id) => {
    setOptionList2((prev) => {
      return [..._.filter(prev, (v) => v.id != id)];
    });
  };

  const [surveyList, setSurveyList] = useState([{ id: 1 }]);
  const [surveyKey, setSurveyKey] = useState(1);
  const addSurvey = () => {
    setSurveyList((prev) => {
      return [...prev, { id: surveyKey + 1 }];
    });
    setSurveyKey(surveyKey + 1);
  };
  const removeSurvey = () => {
    setSurveyList((prev) => {
      const result = prev;
      result.pop();
      return [...result];
    });
  };

  return (
    <>
      <BreadCrumb />
      {/* <!-- 컨텐츠 타이틀 영역 --> */}
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>설문조사 등록</h2>
      </div>
      {/* <!-- //컨텐츠 타이틀 영역 --> */}

      {/* <!-- 컨텐츠 입력 영역 --> */}
      <div class='contents_area'>
        {/* <!-- 여기부터 컨텐츠 입력 --> */}

        <div class='board_list'>
          <table class='tstyle_write'>
            <caption>설문조사 등록 - 타이틀들로 구성</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col style={{ width: '85%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>
                  타이틀<span class='essential'>(필수)</span>
                </th>
                <td>
                  <Input
                    name='frm1'
                    id='frm1'
                    title='항목을 입력해주세요.'
                    placeholder='항목을 입력해주세요.'
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <Input
                    name='frm2'
                    id='frm2'
                    title='항목을 입력해주세요.'
                    placeholder='항목을 입력해주세요.'
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <div class='datepicker_wrap'>
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
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <div class='form_group'>
                    <Input
                      name='frm3'
                      id='frm3'
                      title='항목을 입력해주세요.'
                      placeholder='항목을 입력해주세요.'
                      value='플레이스 홀더'
                      disabled=''
                    />
                    <Button as='button' color='4' text='초기화' />
                    <Button as='button' color='2' text='검색' />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <div class='form_group'>
                    <Input
                      name='frm4'
                      id='frm4'
                      title='항목을 입력해주세요.'
                      placeholder='항목을 입력해주세요.'
                    />
                    <Button as='button' color='4' />
                    <Button as='button' color='1' />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <div class='form_group'>
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
                      name='frm5'
                      id='frm5'
                      title='검색어를 입력해주세요.'
                      placeholder='검색어를 입력해주세요.'
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <Radio
                    class='mr_20'
                    name='rdo_1'
                    data={[
                      { value: '1', title: '선택1' },
                      { value: '2', title: '선택2' },
                      { value: '3', title: '선택3' },
                    ]}
                  />
                  <Input
                    class='size_xmd dp_in_blck'
                    name='frm1'
                    id='frm1'
                    title='항목을 입력해주세요.'
                    placeholder='항목을 입력해주세요.'
                    readonly='readonly'
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <Check
                    name='chk_1'
                    data={[
                      { value: '1', title: '선택1', displayTitle: true },
                      { value: '2', title: '선택2', displayTitle: true },
                      { value: '3', title: '선택3', displayTitle: true },
                    ]}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <ul class='category_write'>
                    {/* <!--
                                                '항목추가' 버튼을 누르면 <li>요소가 하나씩 생겨납니다.
                                                '항목삭제' 버튼을 누르면 해당 <li>요소가 삭제됩니다.
                                                <li>요소가 하나만 남아있을 경우 '항목삭제' 버튼은 사라집니다.
                                            --> */}
                    {optionList.map((option, index) => {
                      return (
                        <>
                          <li>
                            <span class='label'>보기{option.id}</span>
                            <input
                              type='text'
                              class='form_text'
                              name='frm6'
                              id='frm6'
                              title='항목을 입력해주세요.'
                              placeholder='항목을 입력해주세요.'
                            />
                            {index > 0 ? (
                              <Button
                                as='button'
                                onClick={() => {
                                  removeOption(option.id);
                                }}
                                color='4'
                                class='minus'
                                text=''
                              >
                                <span class='sr-only'></span>
                              </Button>
                            ) : null}
                            {index == optionList.length - 1 ? (
                              <Button
                                as='button'
                                onClick={addOption}
                                color='2'
                                class='plus'
                                text=''
                              >
                                <span class='sr-only'></span>
                              </Button>
                            ) : null}
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class='tit_area'>
          <div class='right_items'>
            {/* <!-- 
                                처음에는 '질문추가' 버튼만 존재하다 클릭시
                                '질문삭제' 버튼도 추가되어 보여집니다. 
                             --> */}
            <Button onClick={addSurvey} as='a' color='2' text='질문추가' />
            {surveyList.length > 0 && (
              <Button onClick={removeSurvey} as='a' color='4' text='질문삭제' />
            )}
          </div>
        </div>
        <div class='board_list'>
          {surveyList.map((survey, index) => {
            return (
              <>
                <table class='tstyle_write thin' key={`${survey.id}_${index}`}>
                  <caption>설문조사 등록 추가(1) - 타이틀들로 구성</caption>
                  <colgroup>
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '85%' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope='row'>
                        타이틀<span class='essential'>(필수)</span>
                      </th>
                      <td>
                        <Input
                          name='frm9'
                          id='frm9'
                          title='항목을 입력해주세요.'
                          placeholder='항목을 입력해주세요.'
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>타이틀</th>
                      <td>
                        <Input
                          name='frm10'
                          id='frm10'
                          title='항목을 입력해주세요.'
                          placeholder='항목을 입력해주세요.'
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>타이틀</th>
                      <td>
                        <Check
                          name='chk_2'
                          data={[
                            { value: '1', title: '선택1', displayTitle: true },
                            { value: '2', title: '선택2', displayTitle: true },
                            { value: '3', title: '선택3', displayTitle: true },
                          ]}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>타이틀</th>
                      <td>
                        <ul class='category_write'>
                          {/* <!--
                                                        '항목추가' 버튼을 누르면 <li>요소가 하나씩 생겨납니다.
                                                        '항목삭제' 버튼을 누르면 해당 <li>요소가 삭제됩니다.
                                                        <li>요소가 하나만 남아있을 경우 '항목삭제' 버튼은 사라집니다.
                                                    --> */}
                          {optionList2.map((option, index) => {
                            return (
                              <>
                                <li>
                                  <span class='label'>보기{option.id}</span>
                                  <input
                                    type='text'
                                    class='form_text'
                                    name='frm6'
                                    id='frm6'
                                    title='항목을 입력해주세요.'
                                    placeholder='항목을 입력해주세요.'
                                  />
                                  {index > 0 ? (
                                    <Button
                                      as='button'
                                      onClick={() => {
                                        removeOption2(option.id);
                                      }}
                                      color='4'
                                      class='minus'
                                      text=''
                                    >
                                      <span class='sr-only'></span>
                                    </Button>
                                  ) : null}
                                  {index == optionList2.length - 1 ? (
                                    <Button
                                      as='button'
                                      onClick={addOption2}
                                      color='2'
                                      class='plus'
                                      text=''
                                    >
                                      <span class='sr-only'></span>
                                    </Button>
                                  ) : null}
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            );
          })}
        </div>

        <div class='bet_btn_area'>
          <div class='bottom_left_area'>
            <Button as='a' color='4' class='type1' text='취소' />
          </div>
          <div class='bottom_right_area'>
            <Button as='a' color='3' class='type1' text='임시저장' />
            <Button as='a' color='1' class='type1' text='등록' />
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
