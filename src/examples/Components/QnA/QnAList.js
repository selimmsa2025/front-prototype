import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

export default function QnAList ({ dataList }) {
  const checkNewPost = (date) => {
    let postDate = dayjs(date);
    let currentDate = dayjs();
    const difference = currentDate.diff(postDate, 'day');

    return Math.abs(difference) <= 1;
  };

  const QnAListComponent = ({ dataList, index }) => {
    return (
      <>
        {dataList?.map((v, i) => {
          return (
            <>
              <QnAItem
                key={v.id}
                data={v}
                index={index == undefined ? `${i}` : `${index}-${i}`}
              />
            </>
          );
        })}
      </>
    );
  };

  const QnAItem = ({ data, index }) => {
    return (
      <>
        <tr>
          <td class='m_hidden' aria-label='번호'>
            {data.id}
          </td>
          <td
            class='txt_left'
            style={
              index.split('-').length > 1
                ? {
                    paddingLeft: `${
                      1.5 + (index.split('-').length - 1) * 2.5
                    }rem`,
                  }
                : {}
            }
            aria-label='제목'
          >
            <strong class='b_tit'>
              {index.split('-').length > 1 ? (
                <span class='icon reply'>Re</span>
              ) : (
                ''
              )}
              <a href='#' class='ellipsis'>
                {data.title}
              </a>
              {/* 등록한지 하루미만인 포스트일경우 신규아이콘표시 */}
              {checkNewPost(data.createDate) ? (
                <img src='/img/common/icon_new.jpg' alt='새글' class='b_new' />
              ) : null}
            </strong>
          </td>
          <td aria-label='작성자'>{data.createUser}</td>
          <td aria-label='등록일자'>{data.createDate}</td>
          <td aria-label='조회수'>{data.hit}</td>
        </tr>
        {data.replies?.length > 0 ? (
          <>
            <QnAListComponent dataList={data.replies} index={index} />
          </>
        ) : null}
      </>
    );
  };

  return (
    <>
      <div class='board_list'>
        <table class='tstyle_list'>
          <caption>
            문의사항 목록 - 번호, 제목, 작성자, 등록일자, 조회수로 구성
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
            <QnAListComponent dataList={dataList} />
          </tbody>
        </table>
      </div>
    </>
  );
}
