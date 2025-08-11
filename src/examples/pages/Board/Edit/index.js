import { createPortal } from 'react-dom';
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
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../../../Components/Breadcrumb';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import {
  Button,
  Check,
  DatePicker,
  Input,
  Radio,
  Select,
} from '../../../Components/Element';
import DateRangePicker from '../../../Components/DateRangePicker';
function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>page title</h2>
      </div>
      <div class='contents_area'>
        <h2 class='h-tit2'>H2 Title</h2>

        <div class='tit_area'>
          <h3 class='h-tit3'>Table Title</h3>
          <div class='right_items'>
            <Button text={'버튼'} color={4} />{' '}
            <Button text={'버튼'} color={4} />{' '}
            <Button text={'버튼'} color={4} />
          </div>
        </div>

        <div class='board_list'>
          <table class='tstyle_write'>
            <caption>공지사항 상세 - 항목들로 구성</caption>
            <colgroup>
              <col style={{ width: '10%' }} />
              <col style={{ width: '40%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '40%' }} />
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
                <th scope='row'>타이틀</th>
                <td>
                  <Select
                    name='sel1'
                    id='sel1'
                    class='size_sm'
                    title='조건을 선택하세요.'
                    data={[
                      { id: 'all', name: '전체' },
                      { id: '1', name: '조건1' },
                      { id: '2', name: '조건2' },
                    ]}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <div class='form_group'>
                    <Input
                      name='frm2'
                      id='frm2'
                      title='항목을 입력해주세요.'
                      placeholder='항목을 입력해주세요.'
                      value='플레이스 홀더'
                      disabled
                    />
                    <Button as={'button'} text={'초기화'} color={4} />
                    <Button as={'button'} text={'검색'} color={2} />
                  </div>
                </td>
                <th scope='row'>타이틀</th>
                <td>
                  <DatePicker
                    type={'date'}
                    name='sdate'
                    id='sdate'
                    pattern={'yyyy.MM.dd'}
                    title='시작날짜를 입력하세요. 입력방법 예시:2024.01.01'
                    placeholder='YYYY.MM.DD'
                  />
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
                    />
                    <Button as={'button'} text={'버튼'} color={4} />
                    <Button
                      as={'button'}
                      type='submit'
                      text={'버튼'}
                      color={1}
                    />
                  </div>
                </td>
                <th scope='row'>타이틀</th>
                <td>
                  <div class='form_group'>
                    <Select
                      name='sel2'
                      id='sel2'
                      class='size_sm'
                      title='조건을 선택하세요.'
                      data={[
                        { id: 'all', name: '전체' },
                        { id: '1', name: '조건1' },
                        { id: '2', name: '조건2' },
                      ]}
                    />
                    <Input
                      name='frm4'
                      id='frm4'
                      title='항목을 입력해주세요.'
                      placeholder='항목을 입력해주세요.'
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <Radio
                    name='rdo_1'
                    data={[
                      { value: '1', title: '선택 1' },
                      { value: '2', title: '선택 2' },
                      { value: '3', title: '선택 3' },
                    ]}
                  />
                </td>
                <th scope='row'>타이틀</th>
                <td>
                  <Input
                    name='frm5'
                    id='frm5'
                    title='항목을 입력해주세요.'
                    placeholder='항목을 입력해주세요.'
                  />

                  <p class='txt_help'>도움말입니다.</p>
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <DateRangePicker
                    pattern={'yyyy-MM'}
                    value={'2024-05-23'}
                    type={'month'}
                    useRangeButton={false}
                  />
                </td>
                <th scope='row'>타이틀</th>
                <td>
                  <Check
                    name='chk_1'
                    data={[
                      { value: '1', title: '선택 1' },
                      { value: '2', title: '선택 2' },
                      { value: '3', title: '선택 3' },
                    ]}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class='tit_area'>
          <h3 class='h-tit3'>Table Title</h3>
          <div class='right_items'>
            <Button text={'버튼'} color={4} />{' '}
            <Button text={'버튼'} color={4} />{' '}
            <Button text={'버튼'} color={4} />
          </div>
        </div>
        <div class='board_list'>
          <table class='tstyle_write'>
            <caption>공지사항 상세 - 항목들로 구성</caption>
            <colgroup>
              <col style={{ width: '10%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>
                  Error<span class='essential'>(필수)</span>
                </th>
                <td>
                  <Input
                    name='frm6_1'
                    id='frm6_1'
                    class={'error'}
                    title='항목을 입력해주세요.'
                    placeholder='항목을 입력해주세요.'
                  />
                  <p class='color_txt type1'>메시지 내용</p>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  Warning<span class='essential'>(필수)</span>
                </th>
                <td>
                  <Input
                    name='frm6_1'
                    id='frm6_1'
                    class={'warning'}
                    title='항목을 입력해주세요.'
                    placeholder='항목을 입력해주세요.'
                  />
                  <p class='color_txt type2'>메시지 내용</p>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  Success<span class='essential'>(필수)</span>
                </th>
                <td>
                  <Input
                    name='frm6_1'
                    id='frm6_1'
                    class={'success'}
                    title='항목을 입력해주세요.'
                    placeholder='항목을 입력해주세요.'
                  />
                  <p class='color_txt type3'>메시지 내용</p>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  Information<span class='essential'>(필수)</span>
                </th>
                <td>
                  <Input
                    name='frm6_1'
                    id='frm6_1'
                    class={'information'}
                    title='항목을 입력해주세요.'
                    placeholder='항목을 입력해주세요.'
                  />

                  <p class='color_txt type4'>메시지 내용</p>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  타이틀<span class='essential'>(필수)</span>
                </th>
                <td>
                  <Input
                    name='frm6'
                    id='frm6'
                    title='항목을 입력해주세요.'
                    placeholder='항목을 입력해주세요.'
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <Select
                    name='sel3'
                    id='sel3'
                    class='size_sm'
                    title='조건을 선택하세요.'
                    data={[
                      { id: 'all', name: '전체' },
                      { id: '1', name: '조건1' },
                      { id: '2', name: '조건2' },
                    ]}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <div class='form_group'>
                    <Input
                      name='frm7'
                      id='frm7'
                      title='항목을 입력해주세요.'
                      placeholder='항목을 입력해주세요.'
                      value='플레이스 홀더'
                      disabled
                    />

                    <Button as={'button'} text={'초기화'} color={4} />
                    <Button as={'button'} text={'검색'} color={2} />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <DatePicker
                    type={'date'}
                    name='sdate'
                    id='sdate'
                    pattern={'yyyy.MM.dd'}
                    title='시작날짜를 입력하세요. 입력방법 예시:2024.01.01'
                    placeholder='YYYY.MM.DD'
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <div class='form_group'>
                    <Input
                      name='frm8'
                      id='frm8'
                      title='항목을 입력해주세요.'
                      placeholder='항목을 입력해주세요.'
                    />
                    <Button text={'버튼'} color={4} />
                    <Button text={'버튼'} color={1} />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <div class='form_group'>
                    <Select
                      name='sel4'
                      id='sel4'
                      class='size_sm'
                      title='조건을 선택하세요.'
                      data={[
                        { id: 'all', name: '전체' },
                        { id: '1', name: '조건1' },
                        { id: '2', name: '조건2' },
                      ]}
                    />
                    <Input
                      name='frm9'
                      id='frm9'
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
                    name='rdo_1'
                    data={[
                      { value: '1', title: '선택 1' },
                      { value: '2', title: '선택 2' },
                      { value: '3', title: '선택 3' },
                    ]}
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

                  <p class='txt_help'>도움말입니다.</p>
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <DateRangePicker
                    pattern={'yyyy-MM'}
                    value={'2024-05-23'}
                    type={'month'}
                    useRangeButton={false}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>타이틀</th>
                <td>
                  <Check
                    name='chk_1'
                    data={[
                      { value: '1', title: '선택 1' },
                      { value: '2', title: '선택 2' },
                      { value: '3', title: '선택 3' },
                    ]}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class='box_st2'>
          <h3>파일업로드</h3>
          <p class='desc1'>헤딩의 정보를 보완하는 텍스트 설명</p>
          <div class='file_upload'>
            <p>
              첨부할 파일을 여기에 끌어다 놓거나. 파일 선택 버튼을 직접
              선택해주세요.
            </p>
            <input type='file' id='fileIn1' name='fileIn1' title='파일선택' />
            <label for='fileIn1' class='btn1'>
              <i class='ri-upload-line'></i>파일선택
            </label>
          </div>
          <div class='att_box'>
            <h4 class='sr-only'>업로드된 파일</h4>
            <div class='top clear'>
              <strong class='tit'>
                <em>3개</em> / 10개
              </strong>
              <a href='#' class='fr close'>
                전체 파일 삭제
              </a>
            </div>
            <ul class='upload_list'>
              <li>
                <div class='file'>
                  <p>
                    전입신고서 [주민등록법 시행령 : 별지서식 15, 15호의2호]
                    [hwp, 17KB]
                  </p>
                  <button type='button' class='close'>
                    삭제
                  </button>
                </div>
              </li>
              <li>
                <div class='file'>
                  <p>
                    위임장(주민등록법 시행령 별지 제15호의2호서식) [hwp, 17KB]
                  </p>
                  <span class='spin'>
                    <span class='sr-only'>진행중</span>
                  </span>
                  {/* <!-- 업로드 진행완료시 class="on" 추가 --> */}
                </div>
              </li>
              <li>
                <div class='file'>
                  <p>
                    위임장(주민등록법 시행령 별지 제15호의2호서식) [hwp, 17KB]
                  </p>
                  <span class='spin on'>
                    <span class='sr-only'>완료</span>
                  </span>
                  {/* <!-- 업로드 진행완료시 class="on" 추가 --> */}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class='bet_btn_area'>
          <div class='bottom_left_area'>
            <Button text={'Left BTN(이전, 목록보기 등)'} size={3} color={4} />
          </div>
          <div class='bottom_right_area'>
            <Button
              text={'Secondary BTN'}
              size={3}
              color={3}
              data-tooltip-id='tooltip-secondary'
              data-tooltip-content='Secondary BTN 도움말입니다.'
            />
            <Tooltip id='tooltip-secondary' />{' '}
            <Button
              text={'Primary BTN'}
              size={3}
              color={1}
              id='tooltip-primary'
            />
            <Tooltip
              anchorSelect='#tooltip-primary'
              content='Primary BTN 도움말입니다.'
              place='bottom-end'
              openEvents={{ click: true }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
