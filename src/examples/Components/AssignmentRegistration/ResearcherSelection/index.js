import { useState } from 'react';
import { Button } from '../../../Components/Element';
import ResearcherInfo from './ResearcherInfo';

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
                <th scope='row'>연구기간</th>
                <td>20240416~20240418</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <ResearcherInfo />
    </>
  );
}
