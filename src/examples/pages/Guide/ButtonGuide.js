import { createPortal } from 'react-dom';
import React, { useEffect, useState, useMemo } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Link,
  useNavigate,
  json,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../../Components/Breadcrumb';
import {
  Input,
  Textarea,
  Select,
  DatePicker,
  Check,
  Radio,
} from '../../Components/Element';

function ButtonGuide () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumb />

      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>버튼 컬러 지정 가이드</h2>
      </div>
      <div class='contents_area'>
        <p class='desc3'>
          <strong>
            * 퍼블리싱되어 있는 파일과 버튼 컬러가 다른 경우 버튼가이드를
            우선으로 따라주세요. 단, 예외적인 상황일 경우 변경될 수 있습니다.
          </strong>
        </p>
        <p class='desc3 mb_20'>
          <strong>
            * 가이드에 없는 버튼은 퍼블리싱 파일에 맞춰 진행해주세요.
          </strong>
        </p>
        <h4 class='h-tit4 mb_5'>페이징</h4>
        <div>
          <div class='page_nav txt_left'>
            <input
              type='number'
              name=''
              title='현재 페이지'
              class='curr_page'
              value='5'
            />
            <span class='total'>/22</span>
            <a class='btn3' href='javacript:void(0)'>
              이동
            </a>
          </div>
        </div>
        <h4 class='h-tit4 mt_40 mb_5'>검색버튼</h4>
        <div>
          <button type='button' class='btn4 sch size_md'>
            초기화
          </button>
          <button type='button' class='btn2 sch size_md'>
            검색
          </button>
        </div>
        <h4 class='h-tit4 mt_40 mb_5'>파일업로드</h4>
        <div>
          <div class='file_upload size_sm mt_0 mb_0'>
            <input type='file' id='fileIn1' name='fileIn1' title='파일선택' />
            <label for='fileIn1' class='btn1'>
              <i class='ri-upload-line'></i> 파일선택
            </label>
          </div>
        </div>
        <h4 class='h-tit4 mt_40 mb_5'>행사등록/글쓰기</h4>
        <div>
          <a href='javacript:void(0)' class='btn1 type1'>
            행사등록
          </a>
          <a href='javacript:void(0)' class='btn1 type1'>
            글쓰기
          </a>
        </div>
        <h4 class='h-tit4 mt_40 mb_5'>삭제/ 목록/취소/이전/저장</h4>
        <div>
          <a href='javacript:void(0)' class='btn4 type1'>
            삭제
          </a>
          <a href='javacript:void(0)' class='btn4 type1'>
            취소
          </a>
          <a href='javacript:void(0)' class='btn3 type1'>
            이전
          </a>
          <a href='javacript:void(0)' class='btn3 type1'>
            임시저장
          </a>
          <a href='javacript:void(0)' class='btn3 type1'>
            목록
          </a>
          <a href='javacript:void(0)' class='btn1 type1'>
            저장
          </a>
        </div>
        <h4 class='h-tit4 mt_40 mb_5'>푸터 만족도 조사 버튼</h4>
        <div>
          <a href='javacript:void(0)' class='btn4'>
            취소
          </a>
          <a href='javacript:void(0)' class='btn1'>
            평가완료
          </a>
        </div>
        <h4 class='h-tit4 mt_40 mb_5'>
          삭제/완료처리/이전/복사/수정/저장/등록/답변/닫기 등
        </h4>
        <div>
          <a href='javacript:void(0)' class='btn4'>
            당직근무일지 QR
          </a>
          <a href='javacript:void(0)' class='btn4'>
            삭제
          </a>
          <a href='javacript:void(0)' class='btn4'>
            완료처리
          </a>
          <a href='javacript:void(0)' class='btn3'>
            이전버전보기
          </a>
          <a href='javacript:void(0)' class='btn3'>
            주소복사
          </a>
          <a href='javacript:void(0)' class='btn3'>
            수정
          </a>
          <a href='javacript:void(0)' class='btn3'>
            목록
          </a>
          <a href='javacript:void(0)' class='btn1'>
            저장
          </a>
          <a href='javacript:void(0)' class='btn1'>
            등록
          </a>
          <a href='javacript:void(0)' class='btn1'>
            결재
          </a>
          <a href='javacript:void(0)' class='btn1'>
            답변
          </a>
          <a href='javacript:void(0)' class='btn2'>
            완료
          </a>
          <a href='javacript:void(0)' class='btn4'>
            닫기
          </a>
          <a href='javacript:void(0)' class='btn2'>
            추가
          </a>
          <a href='javacript:void(0)' class='btn3'>
            이전화면
          </a>
          <a href='javacript:void(0)' class='btn1'>
            전체저장
          </a>
        </div>
        <h4 class='h-tit4 mt_40'>팝업 버튼 3가지 이상일 경우</h4>
        <p class='desc3 mb_5'>
          <strong>
            * 닫기버튼은 기본적으로 흰색바탕(.btn4)이지만, 버튼 3가지 이상
            들어가는 경우 하늘색바탕(.btn3)으로 들어갑니다.
          </strong>
        </p>
        <div class='clear'>
          <div class='sm_btn_box fl'>
            <a href='#' class='btn4 type1'>
              삭제
            </a>
          </div>
          <div class='sm_btn_box fr'>
            <a href='#' class='btn3 type1'>
              닫기
            </a>
            <a href='#' class='btn1 type1'>
              저장
            </a>
          </div>
        </div>

        <h4 class='h-tit4 mt_40 mb_5'>텍스트 + 아이콘 버튼</h4>
        <div>
          <a href='javacript:void(0)' class='btn2'>
            파일추가<i class='ri-add-line'></i>
          </a>
          <button type='submit' class='btn2 icon_lf'>
            <i class='ri-search-line'></i>검색
          </button>
          <a href='javacript:void(0)' class='btn4'>
            삭제<i class='ri-close-line'></i>
          </a>
          <a href='javacript:void(0)' class='btn4'>
            미리보기<i class='ri-search-line'></i>
          </a>
          <a href='javacript:void(0)' class='btn4'>
            새로고침<i class='ri-restart-line'></i>
          </a>
          <a href='javacript:void(0)' class='btn4'>
            인쇄<i class='ri-printer-line'></i>
          </a>
          <a href='javacript:void(0)' class='btn4' title='다운로드'>
            다운로드
          </a>
          <a href='javacript:void(0)' class='btn4' title='새창열림'>
            새창열림
          </a>
        </div>
        <h4 class='h-tit4 mt_40 mb_5'>아이콘 버튼</h4>
        <div>
          <a href='javacript:void(0)' class='btn4 ico_only'>
            <i class='ri-edit-line'></i>
            <span class='sr-only'>수정</span>
          </a>
          <a href='javacript:void(0)' class='btn4 ico_only'>
            <i class='ri-delete-bin-5-line'></i>
            <span class='sr-only'>삭제</span>
          </a>
          <a href='javacript:void(0)' class='btn4 ico_only'>
            <i class='ri-file-list-line'></i>
            <span class='sr-only'>문서</span>
          </a>
        </div>
        <h4 class='h-tit4 mt_40 mb_5'>트리구조 버튼</h4>
        <div>
          <article class='tree'>
            {/* <!--
                                파일트리입니다.
                                라이브러리 사용시 .tree 안에만 넣어주세요.
                                넣고 틀어지면 말씀부탁드립니다.
                            --> */}
            <ul class='depth_1'>
              <li>
                <div class='form_chk folder'>
                  <button type='button' class='fd_btn'>
                    <span class='sr-only'>파일열기</span>
                  </button>
                  {/* <!-- 하위메뉴가 보이지 않는 경우 class="on" 제거, 하위메뉴가 보일 경우 class="on" 추가 --> */}
                  <input type='checkbox' name='chk_fd1' id='chk_fd1' />
                  <label for='chk_fd1'>
                    <i></i>1뎁스폴더
                  </label>
                </div>
              </li>
              <li>
                <div class='form_chk folder'>
                  <button type='button' class='fd_btn on'>
                    <span class='sr-only'>파일열기</span>
                  </button>
                  {/* <!-- 하위메뉴가 보이지 않는 경우 class="on" 제거, 하위메뉴가 보일 경우 class="on" 추가 --> */}
                  <input type='checkbox' name='chk_fd2' id='chk_fd2' />
                  <label for='chk_fd2'>
                    <i></i>1뎁스폴더
                  </label>
                </div>
                <ul class='depth_2 active'>
                  {/* <!-- 폴더 오픈 시 class="active" 추가 --> */}
                  <li>
                    <div class='form_chk folder'>
                      <button type='button' class='fd_btn'>
                        <span class='sr-only'>파일열기</span>
                      </button>
                      {/* <!-- 하위메뉴가 보이지 않는 경우 class="on" 제거, 하위메뉴가 보일 경우 class="on" 추가 --> */}
                      <input type='checkbox' name='chk_fd3' id='chk_fd3' />
                      <label for='chk_fd3'>
                        <i></i>2뎁스폴더
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class='form_chk folder on'>
                      {/* <!-- 하위 메뉴 체크박스 일부 checked 되었을 경우, class="on" 추가 --> */}
                      <button type='button' class='fd_btn on'>
                        <span class='sr-only'>파일열기</span>
                      </button>
                      {/* <!-- 하위메뉴가 보이지 않는 경우 class="on" 제거, 하위메뉴가 보일 경우 class="on" 추가 --> */}
                      <input
                        type='checkbox'
                        name='chk_fd4'
                        id='chk_fd4'
                        checked=''
                      />
                      <label for='chk_fd4'>
                        <i></i>2뎁스폴더
                      </label>
                    </div>
                    <ul class='depth_3 active'>
                      {/* <!-- 폴더 오픈 시 class="active" 추가 --> */}
                      <li>
                        <div class='form_chk file'>
                          <input
                            type='checkbox'
                            name='chk_fl1'
                            id='chk_fl1'
                            checked=''
                          />
                          <label for='chk_fl1'>
                            <i></i>3뎁스파일
                          </label>
                        </div>
                      </li>
                      <li>
                        <div class='form_chk file'>
                          <input type='checkbox' name='chk_fl2' id='chk_fl2' />
                          <label for='chk_fl2'>
                            <i></i>3뎁스파일
                          </label>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div class='form_chk folder'>
                      <button type='button' class='fd_btn'>
                        <span class='sr-only'>파일열기</span>
                      </button>
                      {/* <!-- 하위메뉴가 보이지 않는 경우 class="on" 제거, 하위메뉴가 보일 경우 class="on" 추가 --> */}
                      <input type='checkbox' name='chk_fd5' id='chk_fd5' />
                      <label for='chk_fd5'>
                        <i></i>2뎁스폴더
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class='form_chk file'>
                      <input type='checkbox' name='chk_fl3' id='chk_fl3' />
                      <label for='chk_fl3'>
                        <i></i>2뎁스파일
                      </label>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div class='form_chk folder'>
                  <button type='button' class='fd_btn'>
                    <span class='sr-only'>파일열기</span>
                  </button>
                  <input type='checkbox' name='chk_fd6' id='chk_fd6' />
                  <label for='chk_fd6'>
                    <i></i>1뎁스폴더
                  </label>
                </div>
              </li>
              <li>
                <div class='form_chk file'>
                  <input type='checkbox' name='chk_fl4' id='chk_fl4' />
                  <label for='chk_fl4'>
                    <i></i>2뎁스파일
                  </label>
                </div>
              </li>
            </ul>
          </article>
          <div class='box_st1 type_category'>
            <div class='form_wrap'>
              <div class='form_group'>
                <a href='javacript:void(0)' class='btn2'>
                  추가
                </a>
                <a href='javacript:void(0)' class='btn4'>
                  삭제
                </a>
                <strong class='form_label'>카테고리 명</strong>
                <input
                  type='text'
                  class='form_text'
                  name='frm1'
                  id='frm1'
                  title='카테고리 명'
                  placeholder='카테고리 명'
                />
              </div>
            </div>
          </div>
        </div>
        <h4 class='h-tit4 mt_40 mb_5'>테이블 인풋박스 초기화/중복확인/검색</h4>
        <div>
          <div class='board_list size_md'>
            <table class='tstyle_write'>
              <caption>상세 - 항목들로 구성</caption>
              <colgroup>
                <col style={{ width: '30%' }} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope='row'>타이틀</th>
                  <td>
                    <div class='form_group'>
                      <input
                        type='text'
                        class='form_text'
                        name='frm2'
                        id='frm2'
                        title='항목을 입력해주세요.'
                        placeholder='항목을 입력해주세요.'
                        value='플레이스 홀더'
                      />
                      <button type='button' class='btn4'>
                        초기화
                      </button>
                      <button type='submit' class='btn2'>
                        검색
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>아이디</th>
                  <td>
                    <div class='form_group'>
                      <input
                        type='text'
                        class='form_text'
                        name='frm2'
                        id='frm2'
                        title='항목을 입력해주세요.'
                        placeholder='항목을 입력해주세요.'
                        value='플레이스 홀더'
                      />
                      <button type='button' class='btn4'>
                        중복확인
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>승인서비스항목</th>
                  <td>
                    <div class='form_group'>
                      <input
                        type='text'
                        class='form_text'
                        name='frm2'
                        id='frm2'
                        title='항목을 입력해주세요.'
                        placeholder='항목을 입력해주세요.'
                        value='플레이스 홀더'
                      />
                      <button type='submit' class='btn2'>
                        검색
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h4 class='h-tit4 mt_40 mb_5'>콘텐츠 탑박스 인 버튼</h4>
        <div>
          <div class='box_st3 desc_bx'>
            <h3 class='title'>시작하기 전에 유의사항 리스트를 알려드립니다.</h3>
            <ul class='dot1'>
              <li>특이 사항, 이상 징후 발견 시 즉각 대응 및 상황 보고</li>
              <li>
                특이 사항, 이상 징후 발견 시 즉각 대응 및 상황 보고
                <ul class='dot2'>
                  <li>
                    최근 당직실에 걸려온 민원전화 불친절하게 대응하여 민원.
                    정보공개 등의 사례가 발생하고 있사오니. 유의하여 주시기
                    바랍니다.
                  </li>
                  <li>
                    최근 당직실에 걸려온 민원전화 불친절하게 대응하여 민원.
                    정보공개 등의 사례가 발생하고 있사오니. 유의하여 주시기
                    바랍니다. 최근 당직실에 걸려온 민원전화 불친절하게 대응하여
                    민원. 정보공개 등의 사례가 발생하고 있사오니. 유의하여
                    주시기 바랍니다.
                  </li>
                </ul>
              </li>
            </ul>
            <div class='mt_10'>
              <a href='javacript:void(0)' class='btn4'>
                버튼1
              </a>
              <a href='javacript:void(0)' class='btn4'>
                버튼2
              </a>
            </div>
          </div>
        </div>
        <h4 class='h-tit4 mt_40 mb_5'>블로그 글 상세</h4>
        <div>
          <div class='board_list size_md'>
            <table class='tstyle_view'>
              <caption>column으로 구분</caption>
              <colgroup></colgroup>
              <thead>
                <tr>
                  <th scope='col'>column</th>
                  <th scope='col'>column</th>
                  <th scope='col'>column</th>
                  <th scope='col'>
                    <span class='sr-only'>버튼</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>대구광역시</td>
                  <td>대구광역시</td>
                  <td>
                    <a href='javacript:void(0)' class='btn4 type2'>
                      삭제
                    </a>
                    <a href='javacript:void(0)' class='btn4 type2'>
                      수정
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>대구광역시</td>
                  <td>대구광역시</td>
                  <td>
                    <a href='javacript:void(0)' class='btn4 type2'>
                      삭제
                    </a>
                    <a href='javacript:void(0)' class='btn4 type2'>
                      수정
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>대구광역시</td>
                  <td>대구광역시</td>
                  <td>
                    <a href='javacript:void(0)' class='btn4 type2'>
                      삭제
                    </a>
                    <a href='javacript:void(0)' class='btn4 type2'>
                      수정
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h4 class='h-tit4 mt_40 mb_5'>블로그 글 상세</h4>
        <div>
          <article class='comment_bx type2 mt_0 size_md'>
            <div class='form'>
              <form name='cmtForm' method='post' action=''>
                <fieldset>
                  <legend class='blind'>등록</legend>
                  <div class='assi'>
                    <select name='' id='' class='form_sel size_sm'>
                      <option value=''>댓글 달기</option>
                      <option value=''>댓글 달기</option>
                    </select>
                    <a href='javacript:void(0)' class='btn2'>
                      관심등록
                    </a>
                  </div>
                  <textarea
                    class='textarea'
                    name=''
                    rows='4'
                    cols='76'
                    placeholder='내용을 입력해 주세요.'
                  ></textarea>
                  <button type='button' class='btn1'>
                    등록
                  </button>
                </fieldset>
              </form>
            </div>

            <div class='list not_img' id=''>
              <ul>
                <li id='cmt1'>
                  <div class='comment'>
                    <span class='name'>사용자</span>
                    <span class='text'>소속명</span>
                    <span class='text date'>YYYY.MM.DD</span>
                    <p id='' class='txt'>
                      댓글내용이 들어가는 자리입니다.댓글내용이 들어가는
                      자리입니다.
                    </p>
                    <div class='right'>
                      <a href='javacript:void(0)' class='btn4 type2'>
                        스티커
                      </a>
                      <a href='javacript:void(0)' class='btn4 type2'>
                        삭제
                      </a>
                      <a href='javacript:void(0)' class='btn4 type2'>
                        수정
                      </a>
                      <a href='javacript:void(0)' class='btn4 type2'>
                        답변
                      </a>
                    </div>
                  </div>
                </li>
                <li id='cmt2'>
                  <div class='comment'>
                    <span class='name'>사용자</span>
                    <span class='text'>소속명</span>
                    <span class='text date'>YYYY.MM.DD</span>
                    <p id='' class='txt'>
                      댓글내용이 들어가는 자리입니다.댓글내용이 들어가는
                      자리입니다.
                    </p>
                    <div class='right'>
                      <a href='javacript:void(0)' class='btn4 type2'>
                        스티커
                      </a>
                      <a href='javacript:void(0)' class='btn4 type2'>
                        삭제
                      </a>
                      <a href='javacript:void(0)' class='btn4 type2'>
                        수정
                      </a>
                      <a href='javacript:void(0)' class='btn4 type2'>
                        답변
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <h4 class='h-tit4 mt_40 mb_5'>
          질의대상 조회 리스트 버튼(질의대상 추가, 삭제, 수정)
        </h4>
        <div>
          <div class='tit_area'>
            <div class='right_items'>
              <a href='javascript:void(0)' class='btn2'>
                질의대상 추가<i class='ri-add-line'></i>
              </a>
            </div>
          </div>
          <ul class='question_target'>
            <li>
              <strong class='tit'>행사관리</strong>
              <p class='desc1'>행사관리에 대한 질문을 등록합니다.</p>
              <div class='right_items'>
                <select
                  name='sel1'
                  id='sel1'
                  class='form_sel size_msm'
                  title='공개여부를 선택해주세요.'
                >
                  <option value=''>공개</option>
                  <option value='1'>비공개</option>
                </select>
                <a href='javacript:void(0)' class='btn4 type2'>
                  삭제
                </a>
                <a href='javacript:void(0)' class='btn4 type2'>
                  수정
                </a>
              </div>
            </li>
          </ul>
        </div>
        <h4 class='h-tit4 mt_40 mb_5'>QnA</h4>
        <div>
          <div class='board_list'>
            <ul class='faq'>
              <li class='active'>
                <button type='button' class='question'>
                  질문에 대한 내용이 들어가는 자리입니다.질문에 대한 내용이
                  들어가는 자리입니다.
                </button>
                {/* <!-- 클릭시 분모 <li>에 class="active" 추가 --> */}
                <div class='box clear'>
                  <p class='answer'>
                    답변에 대한 내용이 들어가는 자리입니다.답변에 대한 내용이
                    들어가는 자리입니다.답변에 대한 내용이 들어가는
                    자리입니다.답변에 대한 내용이 들어가는 자리입니다. 답변에
                    대한 내용입니다.
                  </p>
                  <div class='fr'>
                    <a href='javacript:void(0)' class='btn4 type2'>
                      수정하기
                    </a>
                    <a href='javacript:void(0)' class='btn4 type2'>
                      삭제하기
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <h3 class='h-tit2 mt_40 mb_20'>팝업 버튼 모음</h3>
        <h4 class='h-tit4 mb_5'>팝업 저장,닫기</h4>
        <div>
          <a href='javacript:void(0)' class='btn4 type3'>
            저장
          </a>
          <a href='javacript:void(0)' class='btn2 type3'>
            닫기
          </a>
        </div>
        <div class='mt_5'>
          <a href='javacript:void(0)' class='btn4 type3'>
            수정
          </a>
          <a href='javacript:void(0)' class='btn4 type3'>
            삭제
          </a>
          <a href='javacript:void(0)' class='btn2 type3'>
            닫기
          </a>
        </div>
        <div class='mt_5'>
          <a href='javacript:void(0)' class='btn4 type3'>
            등록
          </a>
          <a href='javacript:void(0)' class='btn2 type3'>
            닫기
          </a>
        </div>
        <div class='mt_5'>
          <a href='javacript:void(0)' class='btn4 type3'>
            내용 비교
          </a>
          <a href='javacript:void(0)' class='btn4 type3'>
            인쇄
          </a>
          <a href='javacript:void(0)' class='btn4 type3'>
            QR 인쇄
          </a>
          <a href='javacript:void(0)' class='btn4 type3'>
            보고
          </a>
          <a href='javacript:void(0)' class='btn2 type3'>
            취소
          </a>
        </div>
        <h4 class='h-tit4 mt_40 mb_5'>참석, 뒤로가기</h4>
        <div>
          <a href='javacript:void(0)' class='btn2 type3'>
            참석
          </a>
          <a href='javacript:void(0)' class='btn2 type3'>
            뒤로가기
          </a>
        </div>
        <h4 class='h-tit4 mt_40 mb_5'>이전화면, 전체저장</h4>
        <div>
          <a href='javacript:void(0)' class='btn4 type3'>
            이전화면
          </a>
          <a href='javacript:void(0)' class='btn2 type3'>
            전체저장
          </a>
        </div>
        <h4 class='h-tit4 mt_40 mb_5'>팝업 기타 버튼</h4>
        <div>
          <a href='javacript:void(0)' class='btn1 type3'>
            협업포인트 보내기
          </a>
        </div>
      </div>
    </>
  );
}

export default ButtonGuide;
