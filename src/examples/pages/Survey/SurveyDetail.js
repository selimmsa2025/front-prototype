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
  Textarea,
} from '../../Components/Element';
function App ({}) {
  return (
    <>
      <BreadCrumb />

      {/* <!-- 컨텐츠 타이틀 영역 --> */}
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>설문조사 상세</h2>
      </div>
      {/* <!-- //컨텐츠 타이틀 영역 --> */}

      {/* <!-- 컨텐츠 입력 영역 --> */}
      <div class='contents_area'>
        {/* <!-- 여기부터 컨텐츠 입력 --> */}

        <div class='board_list'>
          <table class='tstyle_write'>
            <caption>
              설문조사 상세 - 설문제목, 설문개요, 설문기간, 설문부서로 구성
            </caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col style={{ width: '35%' }} />
              <col style={{ width: '15%' }} />
              <col style={{ width: '35%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>설문제목</th>
                <td>설문 제목</td>
                <th scope='row'>설문개요</th>
                <td>설문 개요</td>
              </tr>
              <tr>
                <th scope='row'>설문기간</th>
                <td>2024-01-01 ~ 2024-05-31</td>
                <th scope='row'>설문부서</th>
                <td>내용이 들어가는 자리입니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul class='box_st5 survey'>
          <li>
            <div class='tit'>
              <strong>[성별] 성별을 선택해주세요.</strong>
              <span class='essential'>(필수/단일선택)</span>
            </div>

            <Radio
              name='rdo_1'
              data={[
                { value: '1', title: '남자' },
                { value: '2', title: '여자' },
              ]}
            />
          </li>
          <li>
            <div class='tit'>
              <strong>[질문1] 질문 내용1</strong>
              <span class='essential'>(필수/단일선택)</span>
            </div>
            <Check
              name='chk_1'
              data={[
                { value: '1', title: '선택1', displayTitle: true },
                { value: '2', title: '선택2', displayTitle: true },
                { value: '3', title: '선택3', displayTitle: true },
                {
                  value: '4',
                  title: '기타',
                  displayTitle: true,
                  liClass: 'w100p',
                },
              ]}
            />
            <Textarea name='' id='' class='textarea' />
          </li>
          <li>
            <div class='tit'>
              <strong>[질문2] 질문 내용2</strong>
              <span class='desc1'>(주관식)</span>
            </div>
            <Textarea name='' id='' class='textarea' />
          </li>
        </ul>

        <div class='bet_btn_area'>
          <div class='bottom_left_area'>
            <Button as='a' color='4' class='type1' text='목록' />
          </div>
          <div class='bottom_right_area'>
            <Button as='a' color='3' class='type1' text='삭제' />
            <Button as='a' color='1' class='type1' text='수정' />
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
