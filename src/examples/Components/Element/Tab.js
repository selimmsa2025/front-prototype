import React, { useEffect, useState } from 'react';
function App (params) {
  const { type = 1, currentIndex = 1, data = [], className = '' } = params;

  const moveTab = (targetIndex) => {
    if (targetIndex <= 0) {
      return;
    }
    if (targetIndex > data.length) {
      return;
    }
    params.onChange(targetIndex);
  };

  if (type == 1) {
    return (
      <>
        <div className={`tab_depth4 ${className}`}>
          <ul>
            {data?.map((tabData, index) => {
              return (
                <>
                  <li
                    className={`${
                      currentIndex == tabData.index ? 'active' : ''
                    }`}
                    onClick={() => {
                      params.onChange(tabData.index);
                    }}
                  >
                    <a href='javascript:void(0)'>{tabData.title}</a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </>
    );
  } else if (type == 2) {
    return (
      <>
        <div class={`tab_depth5 ${className}`}>
          {/* 요소가 6개 이상일 경우 .arr 버튼이 생성.
                              .arr 버튼 클릭시 하나씩 옆으로 슬라이드 되는 탭 입니다.  */}

          <div class='slide'>
            <ul>
              {data?.map((tabData, index) => {
                return (
                  <li
                    className={`${
                      currentIndex == tabData.index ? 'active' : ''
                    }`}
                    onClick={() => {
                      params.onChange(tabData.index);
                    }}
                  >
                    <a href='javascript:void(0)'>{tabData.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <a
            href='#'
            class='arr next'
            onClick={(e) => {
              e.preventDefault();
              moveTab(currentIndex + 1);
            }}
          >
            <span class='sr-only'>다음탭으로</span>
          </a>
          <a
            href='#'
            class='arr prev'
            onClick={(e) => {
              e.preventDefault();
              moveTab(currentIndex - 1);
            }}
          >
            <span class='sr-only'>이전탭으로</span>
          </a>
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default App;
