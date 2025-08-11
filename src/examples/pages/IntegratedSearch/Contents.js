import axios from 'axios';
import { useState, useEffect } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import { Input, Button, Tree, Textarea, Tab } from '../../Components/Element';
import useLoading from '../../hooks/useLoading';
import _ from 'lodash';
import { Tooltip } from 'react-tooltip';
export default function Contents () {
  const { loading, setLoading, LoadingElement } = useLoading(false);

  const [searchResult, setSearchResult] = useState({});

  const [tab, setTab] = useState(1);
  const [subTab, setSubTab] = useState(1);

  const getSearchResult = async () => {
    setLoading(true);
    const response = await axios.get('/mockupServer/getSearchResult.json');

    setTimeout(() => {
      setSearchResult(response.data);
      console.log(response.data);
      setLoading(false);
    }, 3000);
  };
  const search = () => {
    getSearchResult();
  };

  return (
    <>
      <div class='contents'>
        <div class='contents_area'>
          <div class='top_sch_total'>
            <strong class='form_label'>통합검색</strong>
            <div class='bx' id={'popupSample'}>
              <input
                type='text'
                class='form_text'
                name='frm2'
                id='frm2'
                title='검색어를 입력해주세요.'
                placeholder='검색어를 입력해주세요.'
              />
              <button
                type='button'
                class='btn1 icon_lf'
                onClick={() => {
                  search();
                }}
              >
                <i class='ri-search-line'></i>검색
              </button>
            </div>
            <Tooltip
              anchorSelect='#popupSample'
              content='ajax 로딩 예제'
              place='bottom'
              isOpen={true}
            />
          </div>

          <div class='sch_keyword'>
            <h3 class='tit'>#연관키워드</h3>
            <ul class='keywords'>
              <li>
                <a href='#'>itch</a>
              </li>
              <li>
                <a href='#'>경제</a>
              </li>
              <li>
                <a href='#'>지식행정</a>
              </li>
              <li>
                <a href='#'>공유</a>
              </li>
              <li>
                <a href='#'>활용</a>
              </li>
              <li>
                <a href='#'>시스템</a>
              </li>
              <li>
                <a href='#'>통계</a>
              </li>
              <li>
                <a href='#'>지식관리시스템</a>
              </li>
            </ul>
            <select
              name='sel1'
              id='sel1'
              class='form_sel size_sm'
              title='조건을 선택하세요.'
            >
              <option value='all'>연관내용 닫기</option>
              {/* <!-- 하단 .related_content에 클래스 class="active" 식제 --> */}
              <option value='1'>연관내용 열기</option>
              {/* <!-- 하단 .related_content에 클래스 class="active" 추가 --> */}
            </select>
          </div>

          <div class='related_content active'>
            <h4 class='sr-only'>연관내용</h4>
            <div class='tab_depth4'>
              <Tab
                type={1}
                data={[
                  { index: 1, title: '유형별' },
                  { index: 2, title: '작성자별' },
                  { index: 3, title: '기관별' },
                ]}
                currentIndex={tab}
                onChange={(index) => {
                  setTab(index);
                }}
              />
            </div>
            <Tab
              type={2}
              data={[
                { index: 1, title: '전체' },
                { index: 2, title: '각종 업무지식' },
                { index: 3, title: '간행물·편람·지침' },
                { index: 4, title: '주요 보고서' },
                { index: 5, title: '연설·보도·각종 동향' },
                { index: 6, title: '질의회신 심판 입법 등' },
              ]}
              currentIndex={subTab}
              onChange={(index) => {
                setSubTab(index);
              }}
            />
            <div class='box_st4'>{subTab}번 탭의 내용</div>
          </div>
          {!_.isEmpty(searchResult) ? (
            <>
              <div class='board_info mt_40'>
                <p class='page not_line'>
                  <span class='h-tit3'>
                    적용된 검색어 ‘<b class='point2'>{searchResult.keyword}</b>’
                    / 검색 결과 <b class='point2'>{searchResult.totalCount}</b>
                    개
                  </span>
                </p>

                <form name='' id='' method='post' action='' class='fr'>
                  <fieldset>
                    <legend class='blind'>게시판 정렬</legend>
                    <div class='form'>
                      <div class='item'>
                        <span class='label'>분류</span>
                        <div class='select_list'>
                          <a href='javascript:void(0)'>
                            <span class='sr_only'>선택된 옵션</span>관련도순
                          </a>
                          <ul class='list'>
                            <li>
                              <a href='javascript:void(0)'>최신순</a>
                            </li>
                            <li>
                              <a href='javascript:void(0)' class='on'>
                                관련도순
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class='item'>
                        <span class='label'>정렬 기준</span>
                        <div class='select_list'>
                          <a href='javascript:void(0)'>
                            <span class='sr_only'>선택된 옵션</span>관련도순
                          </a>
                          <ul class='list'>
                            <li>
                              <a href='javascript:void(0)'>최신순</a>
                            </li>
                            <li>
                              <a href='javascript:void(0)' class='on'>
                                관련도순
                              </a>
                            </li>
                            {/* <!-- 선택된 옵션일 경우 class="on" 추가 --> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>

              <ul class='total_sch_list'>
                {searchResult.result.map((v) => {
                  return (
                    <>
                      <li>
                        <span class='tag1'>카테고리명</span>
                        <span class='date'>2023.11.01</span>
                        <strong class='tit'>
                          <a href='#'>
                            2017년 <span class='keyword'>온나라지식</span>행정
                            운영 설문조사 및 골든벨 퀴즈 결과보고는 아래
                            공지사항을 보시면 해당 내용에 대해 알 수 있는
                            부분입니다. 공지사항을 참고해주시기 바랍니다.
                          </a>
                        </strong>
                        <p class='desc1'>
                          2017년 지식행정 운영 설문조사 및 골든벨 퀴즈
                          결과보고에 대한 내용이 들어갑니다.
                        </p>
                        <p class='text'>
                          <span class='name'>서승혜</span>
                          <span>소속명</span>
                        </p>
                        <p class='file_type pdf'>
                          첨부파일의 제목인 파일명이 들어갑니다. [pdf, 328MB]
                        </p>
                        <a href='#' class='btn4 type2'>
                          <span class='sr-only'>첨부파일</span>미리보기{' '}
                          <i class='ri-search-line'></i>
                        </a>
                        <ol class='txt_breadcrumb'>
                          <li>
                            <a href='#'>뉴스・소식</a>
                          </li>
                          <li>
                            <a href='#'>뉴스소식</a>
                          </li>
                        </ol>
                        <a href='#' class='more_view'>
                          자세히보기
                        </a>
                      </li>
                      <li>
                        <span class='tag1'>카테고리명</span>
                        <span class='date'>2023.11.01</span>
                        <strong class='tit'>
                          <a href='#'>
                            2017년 지식행정 운영 설문조사 및 골든벨 퀴즈
                            결과보고
                          </a>
                        </strong>
                        <p class='desc1'>
                          2017년 <span class='keyword'>온나라지식</span> 행정
                          운영 설문조사 및 골든벨 퀴즈 결과보고에 대한 내용이
                          들어갑니다.
                        </p>
                        <p class='text'>
                          <span class='name'>서승혜</span>
                          <span>소속명</span>
                        </p>
                        <p class='file_type pdf'>
                          첨부파일의 제목인 파일명이 들어갑니다. [pdf, 328MB]
                        </p>
                        <a href='#' class='btn4 type2'>
                          <span class='sr-only'>첨부파일</span>미리보기{' '}
                          <i class='ri-search-line'></i>
                        </a>
                        <ol class='txt_breadcrumb'>
                          <li>
                            <a href='#'>뉴스・소식</a>
                          </li>
                          <li>
                            <a href='#'>뉴스소식</a>
                          </li>
                        </ol>
                        <a href='#' class='more_view'>
                          자세히보기
                        </a>
                      </li>
                      <li>
                        <span class='tag1'>카테고리명</span>
                        <span class='date'>2023.11.01</span>
                        <strong class='tit'>
                          <a href='#'>
                            2017년 지식행정 운영 설문조사 및 골든벨 퀴즈
                            결과보고
                          </a>
                        </strong>
                        <p class='desc1'>
                          2017년 <span class='keyword'>온나라지식</span> 행정
                          운영 설문조사 및 골든벨 퀴즈 결과보고에 대한 내용이
                          들어갑니다.
                        </p>
                        <p class='text'>
                          <span class='name'>서승혜</span>
                          <span>소속명</span>
                        </p>
                        <p class='file_type pdf'>
                          첨부파일의 제목인 파일명이 들어갑니다. [pdf, 328MB]
                        </p>
                        <a href='#' class='btn4 type2'>
                          <span class='sr-only'>첨부파일</span>미리보기{' '}
                          <i class='ri-search-line'></i>
                        </a>
                        <ol class='txt_breadcrumb'>
                          <li>
                            <a href='#'>뉴스・소식</a>
                          </li>
                          <li>
                            <a href='#'>뉴스소식</a>
                          </li>
                        </ol>
                        <a href='#' class='more_view'>
                          자세히보기
                        </a>
                      </li>
                      <li>
                        <span class='tag1'>카테고리명</span>
                        <span class='date'>2023.11.01</span>
                        <strong class='tit'>
                          <a href='#'>
                            2017년 지식행정 운영 설문조사 및 골든벨 퀴즈
                            결과보고
                          </a>
                        </strong>
                        <p class='desc1'>
                          2017년 <span class='keyword'>온나라지식</span> 행정
                          운영 설문조사 및 골든벨 퀴즈 결과보고에 대한 내용이
                          들어갑니다.
                        </p>
                        <p class='text'>
                          <span class='name'>서승혜</span>
                          <span>소속명</span>
                        </p>
                        <p class='file_type pdf'>
                          첨부파일의 제목인 파일명이 들어갑니다. [pdf, 328MB]
                        </p>
                        <a href='#' class='btn4 type2'>
                          <span class='sr-only'>첨부파일</span>미리보기{' '}
                          <i class='ri-search-line'></i>
                        </a>
                        <ol class='txt_breadcrumb'>
                          <li>
                            <a href='#'>뉴스・소식</a>
                          </li>
                          <li>
                            <a href='#'>뉴스소식</a>
                          </li>
                        </ol>
                        <a href='#' class='more_view'>
                          자세히보기
                        </a>
                      </li>
                      <li>
                        <span class='tag1'>카테고리명</span>
                        <span class='date'>2023.11.01</span>
                        <strong class='tit'>
                          <a href='#'>
                            2017년 지식행정 운영 설문조사 및 골든벨 퀴즈
                            결과보고
                          </a>
                        </strong>
                        <p class='desc1'>
                          2017년 <span class='keyword'>온나라지식</span> 행정
                          운영 설문조사 및 골든벨 퀴즈 결과보고에 대한 내용이
                          들어갑니다.
                        </p>
                        <p class='text'>
                          <span class='name'>서승혜</span>
                          <span>소속명</span>
                        </p>
                        <p class='file_type pdf'>
                          첨부파일의 제목인 파일명이 들어갑니다. [pdf, 328MB]
                        </p>
                        <a href='#' class='btn4 type2'>
                          <span class='sr-only'>첨부파일</span>미리보기{' '}
                          <i class='ri-search-line'></i>
                        </a>
                        <ol class='txt_breadcrumb'>
                          <li>
                            <a href='#'>뉴스・소식</a>
                          </li>
                          <li>
                            <a href='#'>뉴스소식</a>
                          </li>
                        </ol>
                        <a href='#' class='more_view'>
                          자세히보기
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>

              <div class='clear mt_10'>
                <a href='#' class='fr btn-txt'>
                  더 많은 검색결과 보기 <i class='ri-arrow-right-line'></i>
                </a>
              </div>
            </>
          ) : (
            <div class='sch_empty'>
              <strong class='tit'>
                검색어 "<span class='point_color1'>온나라지식</span>"에 대한
                검색 결과가 없습니다.
              </strong>
              <p class='txt'>- 철자나 맞춤법 오류가 있는지 확인해주세요.</p>
              <p class='txt'>
                - 여러 단어로 나누거나 다른 검색어로 검색해 주세요.
              </p>
              <p class='txt'>- 보다 일반적인 단어로 검색해보세요.</p>
            </div>
          )}
        </div>
      </div>
      {loading ? <LoadingElement /> : null}
    </>
  );
}
