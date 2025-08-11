import { useState, useEffect } from 'react';
import _ from 'lodash';

export default function NoticeList({ dataList }) {
  return (
    <>
      <div class='board_list'>
        <table class='tstyle_list'>
          <caption>
            공지사항 목록 - 번호, 제목, 작성자, 등록일자, 조회수로 구성
          </caption>
          <colgroup>
            <col style={{ width: '10%' }} />
            <col />
            <col style={{ width: '10%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '10%' }} />
          </colgroup>
          <thead>
            <tr>
              <th scope='col'>번호</th>
              <th scope='col'>제목</th>
              <th scope='col'>작성자</th>
              <th scope='col'>등록일자</th>
              <th scope='col'>조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr class='fix'>
              <td aria-label='번호'>
                <i class='ri-volume-up-line'></i>
                <span class='sr-only'>상단고정</span>
              </td>
              <td class='txt_left' aria-label='제목'>
                <strong class='b_tit'>
                  <a href='#' class='ellipsis'>
                    내용이 들어가는 자리입니다.
                  </a>
                </strong>
              </td>
              <td aria-label='작성자'>관리자</td>
              <td aria-label='등록일자'>YYYY.MM.DD</td>
              <td aria-label='조회수'>99</td>
            </tr>
            {_.filter(dataList, (data) => data.isFixed == true)?.map((v, i) => {
              return (
                <tr>
                  <td class='m_hidden' aria-label='번호'>
                    <span class='icon type1'>공지</span>
                  </td>
                  <td class='txt_left' aria-label='제목'>
                    <strong class='b_tit'>
                      <a
                        href='javascript:void(0)'
                        class='ellipsis'
                        title={`${v.useBlank ? '새창열림' : ''}`}
                      >
                        {v.title}
                      </a>
                    </strong>
                  </td>
                  <td aria-label='작성자'>{v.createUser}</td>
                  <td aria-label='등록일자'>{v.createDate}</td>
                  <td aria-label='조회수'>{v.hit}</td>
                </tr>
              );
            })}
            {_.filter(dataList, (data) => data.isFixed != true)?.map((v, i) => {
              return (
                <tr>
                  <td class='m_hidden' aria-label='번호'>
                    {v.index}
                  </td>
                  <td class='txt_left' aria-label='제목'>
                    <strong class='b_tit'>
                      <a
                        href='javascript:void(0)'
                        class='ellipsis'
                        title={`${v.useBlank ? '팝업열림' : ''}`}
                      >
                        {v.title}
                      </a>
                    </strong>
                  </td>
                  <td aria-label='작성자'>{v.createUser}</td>
                  <td aria-label='등록일자'>{v.createDate}</td>
                  <td aria-label='조회수'>{v.hit}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
