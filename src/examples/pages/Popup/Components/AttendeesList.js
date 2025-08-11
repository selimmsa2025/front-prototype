import { useState, useEffect } from 'react';

export default function NoticeList({ dataList }) {
  return (
    <>
      <div className='board_list'>
        <table className='tstyle_view not_line'>
          <caption>참석자 조회 - 기관명(부서명), 직급, 성명, 참석일시, 사전등록여부로 구성</caption>
          <thead>
            <tr>
              <th scope='col'>기관명(부서명)</th>
              <th scope='col'>직급</th>
              <th scope='col'>성명</th>
              <th scope='col'>참석일시</th>
              <th scope='col'>사전등록여부</th>
            </tr>
          </thead>
          <tbody>
            {
              dataList.map((v, i) => (
                <tr key={i}>
                  <td aria-label='기관명(부서명)'>{`${v.orgname}(${v.departments})`}</td>
                  <td aria-label='직급'>{v.position}</td>
                  <td aria-label='성명'>{v.userName}</td>
                  <td aria-label='참석일시'>{v.attendanceDate}</td>
                  <td aria-label='사전등록여부'>{v.preRegistered ? '사전등록' : ''}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
}
