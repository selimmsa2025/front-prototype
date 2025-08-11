import Breadcrumb from '../../Components/Breadcrumb';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from '../../Components/CommentList';
import { Input, Textarea, Button } from '../../Components/Element';
export default function EventManage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openTooltip, setOpenTooltip] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleToggleTooltip = (index) => {
    setOpenTooltip({ ...openTooltip, [index]: !openTooltip[index] });
  };

  return (
    <>
      <Breadcrumb />
      <div class="page-title-wrap" data-type="responsive">
        <h2 class="h-tit">행사관리</h2>
        <div class="title-drop-wrap h-tit-drop">
          {/* <!--
                      .h-drop-btn 클릭시 class="active" toggle.
                      sr-only의 텍스트도 열기/닫기로 변경 됨
                        --> */}
          <button
            type="button"
            class={`h-tit h-drop-btn ${mobileMenu && 'active'}`}
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            모바일 타이틀리<span class="sr-only">닫기</span>
          </button>
          <div class="drop-menu">
            <div class="drop-in">
              <ul class="drop-list">
                <li>
                  <a href="javascript:void(0)" class="item-link">
                    서브메뉴1
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="item-link">
                    서브메뉴2
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="item-link">
                    서브메뉴3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="contents_area">
        <div class="box_st_blue">
          <h3 class="top_lg">
            <img src="../img/layout/logo_mois.svg" alt="행정안전부" />
          </h3>
          <h4 class="tit">2024년 온행정지원시스템 확산교육</h4>
          <ul class="event_info_lst">
            <li>
              <strong class="lst_tit">위치</strong>
              <div class="desc">세종특별자치시 가름로 232 (어진동)</div>
            </li>
            <li>
              <strong class="lst_tit">행사일</strong>
              <div class="desc">2024-08-03 10:00~15:20</div>
            </li>
          </ul>
          <ul class="event_certi">
            <li>
              <a href="javascript:void(0)">
                <div class="event_item">
                  <i class="icon">
                    <img src="../img/sub/icon_event1.png" alt="" />
                  </i>
                  <strong class="item_tit">모바일 공무원증 QR 인증</strong>
                </div>
              </a>
              <div class={`desc_bubble ${openTooltip[1] && 'active'}`}>
                <button
                  type="button"
                  class="open"
                  onClick={() => {
                    handleToggleTooltip(1);
                  }}
                >
                  <span class="sr-only">설명창열기</span>
                  <i class="ri-information-2-fill"></i>
                </button>
                <div class="speech">
                  <p>현재 행사의 참석자를 조회할 수 있는 메뉴입니다.</p>
                  <button
                    type="button"
                    class="close"
                    onClick={() => {
                      handleToggleTooltip(1);
                    }}
                  >
                    <span class="sr-only">설명창닫기</span>
                    <i class="ri-close-line"></i>
                  </button>
                </div>
              </div>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="event_item">
                  <i class="icon">
                    <img src="../img/sub/icon_event2.png" alt="" />
                  </i>
                  <strong class="item_tit">개인 QR 인증</strong>
                </div>
              </a>
              <div class={`desc_bubble ${openTooltip[2] && 'active'}`}>
                <button
                  type="button"
                  class="open"
                  onClick={() => {
                    handleToggleTooltip(2);
                  }}
                >
                  <span class="sr-only">설명창열기</span>
                  <i class="ri-information-2-fill"></i>
                </button>
                <div class="speech">
                  <p>현재 행사의 참석자를 조회할 수 있는 메뉴입니다.</p>
                  <button
                    type="button"
                    class="close"
                    onClick={() => {
                      handleToggleTooltip(2);
                    }}
                  >
                    <span class="sr-only">설명창닫기</span>
                    <i class="ri-close-line"></i>
                  </button>
                </div>
              </div>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="event_item">
                  <i class="icon">
                    <img src="../img/sub/icon_event3.png" alt="" />
                  </i>
                  <strong class="item_tit">행사 QR</strong>
                </div>
              </a>
              <div class={`desc_bubble ${openTooltip[3] && 'active'}`}>
                <button
                  type="button"
                  class="open"
                  onClick={() => {
                    handleToggleTooltip(3);
                  }}
                >
                  <span class="sr-only">설명창열기</span>
                  <i class="ri-information-2-fill"></i>
                </button>
                {/* <!-- 클릭시 분모 .desc_bubble에 class="active" 추가 --> */}
                <div class="speech">
                  <p>현재 행사의 참석자를 조회할 수 있는 메뉴입니다.</p>
                  <button
                    type="button"
                    class="close"
                    onClick={() => {
                      handleToggleTooltip(3);
                    }}
                  >
                    <span class="sr-only">설명창닫기</span>
                    <i class="ri-close-line"></i>
                  </button>
                  {/* <!-- 클릭시 분모 .desc_bubble에 class="active" 제거 --> */}
                </div>
              </div>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="event_item">
                  <i class="icon">
                    <img src="../img/sub/icon_event4.png" alt="" />
                  </i>
                  <strong class="item_tit">참석자 확인</strong>
                </div>
              </a>
              <div class={`desc_bubble ${openTooltip[4] && 'active'}`}>
                <button
                  type="button"
                  class="open"
                  onClick={() => {
                    handleToggleTooltip(4);
                  }}
                >
                  <span class="sr-only">설명창열기</span>
                  <i class="ri-information-2-fill"></i>
                </button>
                {/* <!-- 클릭시 분모 .desc_bubble에 class="active" 추가 --> */}
                <div class="speech">
                  <p>현재 행사의 참석자를 조회할 수 있는 메뉴입니다.</p>
                  <button
                    type="button"
                    class="close"
                    onClick={() => {
                      handleToggleTooltip(4);
                    }}
                  >
                    <span class="sr-only">설명창닫기</span>
                    <i class="ri-close-line"></i>
                  </button>
                  {/* <!-- 클릭시 분모 .desc_bubble에 class="active" 제거 --> */}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
