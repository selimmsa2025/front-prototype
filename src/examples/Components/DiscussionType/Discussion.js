import React from 'react';

export default function Discussion () {
  return (
    <div class='board_list'>
      <table class='tstyle_write'>
        <caption>
          토론 상세 - 토론유형, 완료여부, 제목, 개설자, 개설일, 토론시작일,
          토론종료일, 토론현황, 찬성자수, 반대자수 들로 구성
        </caption>
        <colgroup>
          <col style={{ width: '15%' }} />
          <col style={{ width: '35%' }} />
          <col style={{ width: '15%' }} />
          <col style={{ width: '35%' }} />
        </colgroup>
        <tbody>
          <tr>
            <th scope='row'>토론유형</th>
            <td>찬반기권토론</td>
            <th scope='row'>완료여부</th>
            <td>진행토론</td>
          </tr>
          <tr>
            <th scope='row'>제목</th>
            <td colspan='3'>질의응답 테스트 내용이 들어갑니다.</td>
          </tr>
          <tr>
            <th scope='row'>개설자</th>
            <td>유저1111</td>
            <th scope='row'>개설일</th>
            <td>2023-12-12</td>
          </tr>
          <tr>
            <th scope='row'>토론시작일</th>
            <td>2023-12-12</td>
            <th scope='row'>토론종료일</th>
            <td>2023-12-14</td>
          </tr>
          <tr>
            <th scope='row'>토론현황</th>
            <td colspan='3'>
              <div class='graph_bar'>
                <span class='text'>찬성 (30%)</span>
                <div class='bar'>
                  <span class='y' style={{ width: '30%' }}>
                    <span class='sr-only'>찬성</span>
                  </span>
                  <span class='n' style={{ width: '70%' }}>
                    <span class='sr-only'>반대</span>
                  </span>
                </div>
                <span class='text'>(70%) 반대</span>
              </div>
            </td>
          </tr>
          <tr>
            <th scope='row'>찬성자수</th>
            <td>2</td>
            <th scope='row'>반대자수</th>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
