import { createPortal } from 'react-dom';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';

function App({
  totalCount,
  pageSize = 10,
  currentPage,
  onPageChange,
  useMoveButton = true,
  setTargetPage
}) {
  const totalPages = Math.ceil(totalCount / pageSize);

  const changePage = (pageNumber) => {
    if (pageNumber <= 0) {
      return;
    }
    if (pageNumber > totalPages) {
      return;
    }
    if (pageNumber == '' || isNaN(pageNumber)) {
      alert('숫자를 입력해주세요');
      return;
    }

    onPageChange(Number(pageNumber));
  };
  const renderPageNumbers = () => {
    let pageNumbers = [];

    const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
    const endPage = Math.min(startPage + 9, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <a
          key={i}
          className={`page-link ${i === currentPage ? 'active' : ''}`}
          href='#'
          onClick={(e) => {
            e.preventDefault();
            changePage(i);
          }}
        >
          {i}
        </a>,
      );
    }
    if (endPage < totalPages) {
      pageNumbers.push(<span class='page-link link-dot'></span>);
      pageNumbers.push(
        <a
          class='page-link'
          href='#'
          onClick={(e) => {
            e.preventDefault();
            changePage(totalPages);
          }}
        >
          {totalPages}
        </a>,
      );
    }
    return pageNumbers;
  };
  return (
    <>
      <div class='pagination'>
        <a
          class='page-navi prev'
          href='#'
          onClick={(e) => {
            e.preventDefault();
            changePage(currentPage - 1);
          }}
        >
          이전
        </a>
        <div class='page-links'>{renderPageNumbers()}</div>
        <a
          class='page-navi next'
          href='#'
          onClick={(e) => {
            e.preventDefault();
            changePage(currentPage + 1);
          }}
        >
          다음
        </a>
      </div>

      {useMoveButton != false && (
        <div class='page_nav'>
          <input
            type='number'
            name=''
            title='현재 페이지'
            class='curr_page'
            value={currentPage}
            onChange={(e) => {
              setTargetPage(e.target.value);
            }}
            onBlur={(e) => {
              setTargetPage(e.target.value);
            }}
          />
          <span class='total'>/{totalPages}</span>
          <a
            class='btn3'
            href='#'
            onClick={(e) => {
              e.preventDefault();
              changePage(currentPage);
            }}
          >
            이동
          </a>
        </div>
      )}
    </>
  );
}

export default App;
