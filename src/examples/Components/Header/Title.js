import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function App ({ setIsHeaderClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);

  // 나의 서비스 클릭
  const activeTogle = () => {
    setIsActive(!isActive);
  };

  // 통합검색 팝업
  const popTogle = () => {
    setIsActive(false);
    setIsOpen(!isOpen);
  };

  const [searchValue, setSearchVaue] = useState('퇴직');
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      if (inputRef.current) {
        inputRef.current.focus();
        document.body.style.overflow = 'hidden';
      }
    } else document.body.style.overflow = 'auto';
  }, [isOpen]);

  return (
    <>
      <div
        class='head-body'
        onClick={() => {
          setIsHeaderClick(true);
        }}
      >
        <div class='inner'>
          <div class='head-etc'>
            <ul class='etc-ul'>
              <li>
                <button type='button' class='plus'>
                  업무서비스
                </button>
                <div class='util_group'>
                  <ul class='util_list'>
                    <li>
                      <a href='#' target='_blank' title='새창 열림'>
                        서비스 1
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' title='새창 열림'>
                        서비스 2
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' title='새창 열림'>
                        서비스 3
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button type='button' class='plus'>
                  관련서비스
                </button>
                <div class='util_group'>
                  <ul class='util_list'>
                    <li>
                      <a href='#' target='_blank' title='새창 열림'>
                        서비스 1
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' title='새창 열림'>
                        서비스 2
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' title='새창 열림'>
                        서비스 3
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class='head-in'>
            <h1 class='logo'>
              <a
                href='/'
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                }}
              >
                <img
                  src='/img/layout/logo.png'
                  class='logo-im'
                  alt='온나라지식'
                />
              </a>
            </h1>

            <div class='right'>
              <button
                type='button'
                class='btn-navi navi-row sch'
                title='통합검색 레이어'
                onClick={popTogle}
              >
                <span>통합검색</span>
              </button>
              <div
                class={`${isOpen ? 'total_search is_open' : 'total_search'} `}
                data-type='full'
                id='popTotalSch'
                tabindex='0'
              >
                <div class='popup-in'>
                  <div class='popup_head sr-only'>
                    <h1 class='pop_tit'>통합검색</h1>
                  </div>
                  <div class='popup_body'>
                    <div class='pop_total_search_wrap'>
                      <div class='search_total_top'>
                        <div class='search_tit'>
                          <label for='search-total-input-id'>
                            검색어를 입력해주세요
                          </label>
                          <a href='#' class='btn-txt'>
                            검색에 어려움이 있으신가요?{' '}
                            <i class='ri-arrow-right-line'></i>
                          </a>
                        </div>

                        <div class='sch_form_wrap vert'>
                          <div class='sch_input'>
                            <input
                              ref={inputRef}
                              type='text'
                              class='form_control'
                              id='search-total-input-id'
                              placeholder='검색어 입력'
                              value={searchValue}
                              onChange={(e) => setSearchVaue(e.target.value)}
                            />
                            <button type='button' class='sch_button'>
                              <span class='sr-only'>검색</span>
                            </button>
                          </div>
                          <button type='button' class='add_sch_button'>
                            고급검색
                          </button>
                        </div>
                      </div>
                      <div class='search_text'>
                        <div class='sch_search_word'>
                          <div class='bx'>
                            <strong class='word_tit'>인기검색어</strong>
                            <ol class='popular_list'>
                              <li>
                                <a href='#'>안전보건교육</a>
                                <span class='state up'>1</span>
                              </li>
                              <li>
                                <a href='#'>산업재해조사표</a>
                                <span class='state'>NEW</span>
                              </li>
                              <li>
                                <a href='#'>퇴직금계산기</a>
                                <span class='state up'>3</span>
                              </li>
                              <li>
                                <a href='#'>육아휴직급여</a>
                                <span class='state'>-</span>
                              </li>
                              <li>
                                <a href='#'>실업인정신청</a>
                                <span class='state'>-</span>
                              </li>
                              <li>
                                <a href='#'>국민내일배움</a>
                                <span class='state down'>1</span>
                              </li>
                              <li>
                                <a href='#'>노사협의회</a>
                                <span class='state down'>1</span>
                              </li>
                              <li>
                                <a href='#'>산업안전보건</a>
                                <span class='state'>-</span>
                              </li>
                              <li>
                                <a href='#'>국민내일배움카드신청</a>
                                <span class='state up'>11</span>
                              </li>
                              <li>
                                <a href='#'>안전보건교육</a>
                                <span class='state'>-</span>
                              </li>
                            </ol>
                          </div>
                          <div class='bx'>
                            <strong class='word_tit'>최근검색어</strong>
                            <ul class='recently_list'>
                              <li>
                                <a href='#'>전자결제시스템</a>
                                <a href='#' class='close'>
                                  <span class='sr-only'>검색어 삭제</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>전자결제시스템</a>
                                <a href='#' class='close'>
                                  <span class='sr-only'>검색어 삭제</span>
                                </a>
                              </li>
                              <li>
                                <a href='#'>전자결제시스템</a>
                                <a href='#' class='close'>
                                  <span class='sr-only'>검색어 삭제</span>
                                </a>
                              </li>
                            </ul>
                            <a href='#' class='recently_all_close'>
                              최근검색어 전체 삭제<i class='ri-close-line'></i>
                            </a>
                          </div>
                        </div>

                        <ul
                          class='sch_keyword_list'
                          style={{ display: 'none' }}
                        >
                          <li class='li'>
                            <div class='text'>
                              <p class='txt'>
                                <span class='text_bold'>나의 퇴직</span>금
                                계산해 보기
                              </p>
                              <p class='url'>
                                https://labor.moel.go.kr/cmmt/calRtrmnt.do
                              </p>
                            </div>
                            <a
                              href='#'
                              class='more_view'
                              title='새창열림'
                              target='_blank'
                            >
                              <span>바로가기</span>
                            </a>
                          </li>
                          <li class='li'>
                            <div class='text'>
                              <p class='txt'>
                                <span class='text_bold'>퇴직</span>금 계산기
                              </p>
                            </div>
                          </li>
                          <li class='li'>
                            <div class='text'>
                              <p class='txt'>
                                <span class='text_bold'>퇴직</span>금 중간정산
                              </p>
                            </div>
                          </li>
                          <li class='li'>
                            <div class='text'>
                              <p class='txt'>
                                <span class='text_bold'>퇴직</span>금 미지급
                              </p>
                            </div>
                          </li>
                          <li class='li'>
                            <div class='text'>
                              <p class='txt'>
                                일용직<span class='text_bold'>퇴직</span>금
                              </p>
                            </div>
                          </li>
                          <li class='li'>
                            <div class='text'>
                              <p class='txt'>
                                육아휴직<span class='text_bold'>퇴직</span>금
                              </p>
                            </div>
                          </li>
                          <li class='li'>
                            <div class='text'>
                              <p class='txt'>
                                연차수당<span class='text_bold'>퇴직</span>금
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <button
                    type='button'
                    class='tot_sch_close'
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <span class='sr-only'>레이어 닫기</span>
                  </button>
                </div>
              </div>

              <div class='drop-wrap my-drop'>
                <button
                  type='button'
                  onClick={activeTogle}
                  class={
                    isActive
                      ? `btn-navi navi-row my drop-btn active`
                      : `btn-navi navi-row my drop-btn`
                  }
                >
                  <span>나의 서비스</span>
                  <span class='sr-only'>열기</span>
                </button>
                <div class='drop-menu'>
                  <div class='drop-in'>
                    <div class='drop-top-info'>
                      <p class='my-name'>홍길동님</p>
                      <dl class='my-time'>
                        <dt>로그아웃까지 남은 시간</dt>
                        <dd>
                          <span class='time'>12:00</span>
                          <button type='button' class='btn sm btn-txt'>
                            시간 연장
                          </button>
                        </dd>
                      </dl>
                    </div>
                    <ul class='drop-list'>
                      <li>
                        <a href='#' class='item-link'>
                          나의 서비스 홈
                        </a>
                      </li>
                      <li>
                        <a href='#' class='item-link'>
                          나의 신청내역
                        </a>
                      </li>
                      <li>
                        <a href='#' class='item-link'>
                          나의 생활정보
                        </a>
                      </li>
                      <li>
                        <a href='#' class='item-link'>
                          나의 정보관리
                        </a>
                      </li>
                    </ul>
                    <div class='drop-btm-btn'>
                      <button
                        type='button'
                        class='btn sm btn-txt ico-log ico-before'
                      >
                        로그아웃
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type='button'
                class='btn-navi navi-row all'
                id='m-gnb-open'
              >
                전체메뉴
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
