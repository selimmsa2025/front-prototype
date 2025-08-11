import React, { useEffect, useState } from 'react';
import { Button } from '../Element';
function QuickMenu() {
  const [quickMenuExpanded, setQuickMenuExpanded] = useState(false);
  const [isRecentMenuClicked, setIsRecentMenuClicked] = useState(false);
  return (
    <div class="quick_area">
      <article id="quickMenu" class="quick">
        <h3 class="quick_tit">바로가기</h3>
        <div class={quickMenuExpanded == true ? 'area active' : 'area'}>
          <Button
            as="button"
            class="act_btn open"
            onClick={() => {
              setQuickMenuExpanded(true);
            }}
            text="펼치기"
          />

          <ul class="list">
            <li>
              <a href="javascript:void(0)" class="shortcut">
                My온나라지식
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="shortcut">
                즐겨찾기
              </a>
            </li>
            <li>
              <Button
                as="button"
                class="shortcut open"
                onClick={() => {
                  setIsRecentMenuClicked(true);
                }}
                title="팝업열기"
                text="최근접속메뉴"
              />
              <div
                class={
                  isRecentMenuClicked ? 'layer_pop_group on' : 'layer_pop_group'
                }
              >
                <strong class="tit">최근접속 메뉴</strong>
                <p class="text">
                  최근 접속한 메뉴를 20개까지 보여줍니다. 메뉴개편에 따라
                  2023.8.26. 이전 메뉴는 정상적으로 연결되지 않을 수 있습니다.
                </p>
                <ul class="mlist">
                  <li>업무위키 &gt; 인기 게시글Top10</li>
                  <li>업무위키 &gt; 행정업무수행경험</li>
                  <li>게시판 &gt;공지사항</li>
                  <li>일정&gt; 일정관리</li>
                  <li>My온나라지식</li>
                </ul>

                <button
                  type="button"
                  class="close"
                  onClick={() => {
                    setIsRecentMenuClicked(false);
                  }}
                >
                  <span class="sr-only">닫기</span>
                </button>
              </div>
            </li>
            <li>
              <a href="javascript:void(0)" class="shortcut">
                신청관리
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="shortcut">
                일정관리
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="shortcut">
                정책e음
              </a>
            </li>
          </ul>
          <Button
            text="접기"
            as="button"
            class="act_btn close"
            onClick={() => {
              setQuickMenuExpanded(false);
            }}
          />
        </div>
      </article>
    </div>
  );
}

export default QuickMenu;
