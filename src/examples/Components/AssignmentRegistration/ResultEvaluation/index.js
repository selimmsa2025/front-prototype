import React from 'react';
import { Select, Radio, Button } from '../../../Components/Element';
import ResearchReport from './ResearchReport';
import EvaluationResultsInfo from './EvaluationResultsInfo';

export default function App () {
  return (
    <>
      <div class='contents_area'>
        <div class='tit_area'>
          <h2 class='h-tit2' style={{ marginTop: '5%' }}>
            과제정보
          </h2>
        </div>
        <div class='board_list'>
          <table class='tstyle_write'>
            <caption>공지사항 상세 - 항목들로 구성</caption>
            <colgroup>
              <col style={{ width: '10%' }} />
              <col style={{ width: '12%' }} />
              <col style={{ width: '28%' }} />
              <col style={{ width: '5%' }} />
              <col style={{ width: '45%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row' colSpan={2}>
                  과제명
                </th>
                <td colSpan={3}>사용자인터페이스_TEST</td>
              </tr>
              <tr>
                <th scope='row' colSpan={2}>
                  기관명
                </th>
                <td colSpan={3}>4차산업혁명위원회</td>
              </tr>

              <tr>
                <th
                  scope='row'
                  rowSpan={3}
                  style={{ borderRight: '1px solid #bbb' }}
                >
                  담당자정보
                </th>
              </tr>
              <tr>
                <th scope='row'>이름</th>
                <td>
                  <div class='form_group'>
                    관리자
                    <Button as={'button'} text={'이력'} color={7} />
                  </div>
                </td>
                <th scope='row'>부서</th>
                <td>
                  <p>행정제도과</p>
                </td>
              </tr>
              <tr>
                <th scope='row'>전화번호</th>
                <td>
                  <div class='form_group'>042-862-93651</div>
                </td>
                <th scope='row'>이메일</th>
                <td>
                  <p>helpkms14@mail.go.kr</p>
                </td>
              </tr>

              <tr>
                <th scope='row' colSpan={2}>
                  연구용역방식
                </th>
                <td>위탁형</td>
                <th scope='row'>연구기관</th>
                <td>20240424 ~ 20240427</td>
              </tr>

              <tr>
                <th scope='row' colSpan={2}>
                  연구수행기관
                </th>
                <td>테스트용</td>
                <th scope='row'>책임연구원</th>
                <td>관리자테스트</td>
              </tr>
              <tr>
                <th scope='row' colSpan={2}>
                  정보공개
                </th>
                <td>
                  <Select
                    name='sel2'
                    id='sel2'
                    class='form_sel'
                    title='조건을 선택하세요.'
                    data={[{ id: '1', name: '공개' }]}
                  />
                </td>
                <td colSpan={2}></td>
              </tr>
              <tr>
                <th
                  scope='row'
                  rowSpan={5}
                  style={{ borderRight: '1px solid #bbb' }}
                >
                  공공누리
                </th>
              </tr>
              <tr>
                <td colSpan={4}>
                  <strong>공공누리유형안내</strong>(공공누리에 대한 자세한
                  내용은 www.kogl.or.kr/open/info/kogl.do에서 확인하실 수
                  있습니다.)
                </td>
              </tr>
              <tr>
                <th
                  scope='row'
                  rowSpan={3}
                  style={{ borderRight: '1px solid #bbb' }}
                >
                  저작물 민간이용동의
                </th>
              </tr>
              <tr>
                <th scope='row'>
                  <Radio
                    name='radio_1'
                    data={[{ value: '1', title: '동의', checked: true }]}
                  />
                </th>
                <td colSpan={2}>
                  <div class='form_group'>
                    <p>공공누리유형</p>
                    <span class='essential'>(*)</span> 상업적이용표시를
                    허락하시겠습니까?
                    <Select
                      name='sel12'
                      id='sel12'
                      class='form_sel'
                      title='조건을 선택하세요.'
                      data={[{ id: '1', name: '동의' }]}
                    />
                    <span class='essential'>(*)</span> 저작물변경을
                    허용하시겠습니까?
                    <Select
                      name='sel13'
                      id='sel13'
                      class='form_sel'
                      title='조건을 선택하세요.'
                      checked='true'
                      data={[{ id: '1', name: '동의' }]}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <Radio
                    name='radio_1'
                    data={[{ value: '2', title: '비동의' }]}
                  />
                </th>
                <td colSpan={2}></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class='bet_btn_area'>
          <div class='bottom_right_area'>
            <Button text={'정보공개수정'} size={3} color={1} />
          </div>
        </div>
        <ResearchReport />
        <EvaluationResultsInfo />
      </div>
    </>
  );
}
