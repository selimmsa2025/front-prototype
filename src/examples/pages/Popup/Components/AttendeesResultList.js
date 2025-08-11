import { useState, useEffect } from 'react';

export default function NoticeList({ dataList }) {
  return (
    <>
      <div className='board_list'>
        <table className='tstyle_view not_line'>
          <caption>참석자 조회 - 번호, 소속기관, 참석자명, 결과, 비고로 구성</caption>
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">소속기관</th>
              <th scope="col">참석자명</th>
              <th scope="col">결과</th>
              <th scope="col">비고</th>
            </tr>
          </thead>
          <tbody>
            {
              dataList.map((v, i) => (
                <tr key={i}>
                  <td aria-label="번호">{v.id}</td>
                  <td aria-label="소속기관">{v.orgName}</td>
                  <td aria-label="참석자명">{v.userName}</td>
                  <td aria-label="결과">{v.status}</td>
                  <td aria-label="비고">{v.remark}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
}
