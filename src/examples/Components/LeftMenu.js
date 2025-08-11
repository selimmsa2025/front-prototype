import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

function App() {
  const navigate = useNavigate();

  const movePage = (e, url) => {
    e.preventDefault();
    navigate(url);
    //setTimeout(() => {
    //window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    //}, 0);
  };

  const [tabOpen, setTabOpen] = useState({
    main: true,
    style: true,
    component: true,
    page: true,
    specific: true,
    commonPopup: true,
    status: true,
  });

  const pageList = [
    { type: 'main', title: '메인', url: '/index' },
    { type: 'style', title: '가이드', url: '/guide' },
    { type: 'style', title: '버튼 가이드', url: '/buttonGuide' },
    { type: 'component', title: '캘린더', url: '/calendar' },
    { type: 'component', title: '트리', url: '/tree' },
    { type: 'component', title: '날짜선택', url: '/datePicker' },
    { type: 'component', title: '툴팁', url: '/tooltip' },
    { type: 'component', title: '탭', url: '/tab' },
    { type: 'component', title: '팝업', url: '/popup' },
    { type: 'page', title: '폼요소', url: '/form' },
    { type: 'page', title: '게시판 목록', url: '/board' },
    { type: 'page', title: '게시판 상세', url: '/board/view' },
    { type: 'page', title: '게시판 등록', url: '/board/Edit' },
    { type: 'page', title: '게시판 커뮤니티 - 기본', url: '/board/community' },
    {
      type: 'page',
      title: '게시판 커뮤니티 - 작은썸네일',
      url: '/board/community/thumbnail',
    },
    {
      type: 'page',
      title: '게시판 커뮤니티 - 갤러리',
      url: '/board/community/gallery',
    },
    {
      type: 'page',
      title: '게시판 목록 - 칼럼 많은 경우',
      url: '/board/columnScroll',
    },
    { type: 'page', title: '게시판 목록 - 수정', url: '/board/editableBoard' },
    {
      type: 'page',
      title: '게시판 목록 - 트리+일반형',
      url: '/board/withTreeBoard',
    },
    {
      type: 'page',
      title: '게시판 목록 - 데이터정렬',
      url: '/board/sortableBoard',
    },
    {
      type: 'page',
      title: '게시판 등록 - 첨부파일',
      url: '/board/edit/fileUpload',
    },
    { type: 'page', title: '게시판 상세 - 댓글', url: '/board/edit/comment' },
    {
      type: 'page',
      title: '게시판 상세 - 피드백',
      url: '/board/edit/feedback',
    },
    {
      type: 'page',
      title: '통합검색',
      url: '/integratedSearch',
    },
    {
      type: 'page',
      title: '로그인',
      url: '/login',
    },

    {
      type: 'specific',
      title: '목록 - 공지사항',
      url: '/notice',
    },
    {
      type: 'specific',
      title: '목록 - 문의사항',
      url: '/qna',
    },
    {
      type: 'specific',
      title: '목록 - 행사목록 조회(카드형)',
      url: '/eventCard',
    },
    {
      type: 'specific',
      title: '등록 - 사용자등록',
      url: '/registUser',
    },
    {
      type: 'specific',
      title: '등록 - 당직근무일지 등록',
      url: '/registDutyJournal',
    },
    {
      type: 'specific',
      title: '등록 - 당직근무일지 수정',
      url: '/modifyDutyJournal',
    },
    {
      type: 'specific',
      title: '상세 - 유의사항+에디터',
      url: '/cautionEditor',
    },
    {
      type: 'specific',
      title: '상세 - 자주묻는질문(FAQ)',
      url: '/faq',
    },
    {
      type: 'specific',
      title: '상세 - 당직근무일지',
      url: '/dutyJournal',
    },
    {
      type: 'specific',
      title: '협업포인트 - 메인(팝업4종)',
      url: '/cooperationPoint',
    },
    {
      type: 'specific',
      title: '협업포인트 - 협업포인트 현황',
      url: '/cooperationPoint/pointState',
    },
    {
      type: 'specific',
      title: '협업포인트 - 전체현황',
      url: '/cooperationPoint/totalStatus',
    },
    {
      type: 'specific',
      title: '블로그 - 홈',
      url: '/blog',
    },
    {
      type: 'specific',
      title: '블로그 - 낙서장',
      url: '/blog/noteBook',
    },
    {
      type: 'specific',
      title: '목록 - 업무위키',
      url: '/workWiki',
    },
    {
      type: 'specific',
      title: '상세 - 업무위키',
      url: '/workWiki/view',
    },
    {
      type: 'specific',
      title: '등록 - 업무위키',
      url: '/workWiki/edit',
    },
    {
      type: 'specific',
      title: '등록 - 당직근무일지 수정',
      url: '/modifyDutyJournal2',
    },
    {
      type: 'specific',
      title: '등록 - 당직근무일지 조회',
      url: '/dutyJournal2',
    },
    {
      type: 'specific',
      title: '상세 - 당직근무 기간설정목록조회',
      url: '/dutyPeriodList',
    },
    {
      type: 'specific',
      title: '등록 - 참석등록',
      url: '/attendRegist',
    },
    {
      type: 'specific',
      title: '등록 - 경진대회 기본정보 수정',
      url: '/registExpositionInfo',
    },
    {
      type: 'specific',
      title: '상세 - 경진대회 기본정보 조회',
      url: '/expositionInfo',
    },
    {
      type: 'specific',
      title: '상세 - 심사위원 점수입력 현황조회',
      url: '/judgePointStatus',
    },
    {
      type: 'specific',
      title: '상세 - 기관별 심사결과 현황 조회',
      url: '/instituteJudgeResult',
    },
    {
      type: 'specific',
      title: '상세 - 질의대상 조회',
      url: '/questionTarget',
    },
    {
      type: 'specific',
      title: '상세 - 질의목록 조회',
      url: '/questionList',
    },
    {
      type: 'specific',
      title: '상세 - 질의목록 조회(참석자)',
      url: '/attendQuestionList',
    },
    {
      type: 'specific',
      title: '등록 - 지식등록',
      url: '/knowledgeRegist',
    },
    {
      type: 'specific',
      title: '커뮤니티 - 홈',
      url: '/community/home',
    },
    {
      type: 'specific',
      title: '커뮤니티 - 업데이트',
      url: '/community/myCommunity',
    },
    {
      type: 'specific',
      title: '커뮤니티 - 우리기관',
      url: '/community/instCommunity',
    },
    {
      type: 'specific',
      title: '캘린더',
      url: '/calendar/calendar2',
    },
    {
      type: 'specific',
      title: '목록 - 설문조사목록일반',
      url: '/survey/SurveyList',
    },
    {
      type: 'specific',
      title: '등록 - 설문조사등록',
      url: '/survey/SurveyRegist',
    },
    {
      type: 'specific',
      title: '상세 - 설문조사상세',
      url: '/survey/SurveyDetail',
    },
    {
      type: 'specific',
      title: '상세 - 설문조사결과',
      url: '/survey/SurveyResult',
    },
    {
      type: 'specific',
      title: '좌측트리',
      url: '/leftTree/leftTree',
    },
    {
      type: 'specific',
      title: '상세-문의사항(QnA)답변',
      url: '/QnA/answer',
    },
    {
      type: 'specific',
      title: '토론형',
      url: '/discussionType',
    },
    {
      type: 'specific',
      title: '댓글',
      url: '/commentPage',
    },
    {
      type: 'specific',
      title: '상세 - 참석등록상세',
      url: '/attendRegistView',
    },

    {
      type: 'specific',
      title: '상세 - 행사관리',
      url: '/eventManage',
    },
    {
      type: 'specific',
      title: '과제등록 - 일반',
      url: '/assignmentSelection/standard',
    },
    {
      type: 'specific',
      title: '과제등록 - 소액(사업계획)',
      url: '/assignmentSelection/smallAmount/businessPlan',
    },
    {
      type: 'specific',
      title: '과제등록 - 소액(연구보고서)',
      url: '/assignmentSelection/smallAmount/researchReport',
    },
    {
      type: 'specific',
      title: '과제등록 - 소액(연구결과활용)',
      url: '/assignmentSelection/smallAmount/resultApplication',
    },
    {
      type: 'specific',
      title: '과제등록',
      url: '/assignmentRegistration',
    },
    {
      type: 'popup',
      title: '팝업 - 참석취소',
      url: '/popup/type1',
    },
    {
      type: 'popup',
      title: '팝업 - 참석처리(모바일공무원증)',
      url: '/popup/type2',
    },
    {
      type: 'popup',
      title: '팝업 - 참석처리(개인QR)',
      url: '/popup/type3',
    },
    {
      type: 'popup',
      title: '팝업 - 참석처리(행사QR)',
      url: '/popup/type4',
    },
    {
      type: 'popup',
      title: '팝업 - 행사참석자조회',
      url: '/popup/type5',
    },
    {
      type: 'popup',
      title: '팝업 - 심사위원심사',
      url: '/popup/type6',
    },
    {
      type: 'popup',
      title: '팝업 - 질의대상 등록',
      url: '/popup/type7',
    },
    {
      type: 'popup',
      title: '팝업 - 질의대상 수정',
      url: '/popup/type8',
    },
    {
      type: 'popup',
      title: '팝업 - 질의조회',
      url: '/popup/type9',
    },
    {
      type: 'popup',
      title: '팝업 - 질의등록',
      url: '/popup/type10',
    },
    {
      type: 'popup',
      title: '팝업 - 질의수정',
      url: '/popup/type11',
    },
    {
      type: 'popup',
      title: '팝업 - 행사QR',
      url: '/popup/type12',
    },
    {
      type: 'popup',
      title: '팝업 - 참석예정자 등록',
      url: '/popup/type13',
    },
    {
      type: 'popup',
      title: '팝업 - 참석예정자 수정',
      url: '/popup/type14',
    },
    {
      type: 'popup',
      title: '팝업 - 참석예정자 조회',
      url: '/popup/type15',
    },
    {
      type: 'popup',
      title: '팝업 - 참석예정자 일괄등록',
      url: '/popup/type16',
    },
    {
      type: 'popup',
      title: '팝업 - 기관담당자 등록',
      url: '/popup/type17',
    },
    {
      type: 'popup',
      title: '팝업 - 기관담당자 조회',
      url: '/popup/type18',
    },
    {
      type: 'popup',
      title: '팝업 - 참석자 등록',
      url: '/popup/type19',
    },
    {
      type: 'popup',
      title: '팝업 - 참석자 수정',
      url: '/popup/type20',
    },
    {
      type: 'popup',
      title: '팝업 - 참석자 조회',
      url: '/popup/type21',
    },
    {
      type: 'popup',
      title: '팝업 - 참석자 일괄등록',
      url: '/popup/type22',
    },
    {
      type: 'popup',
      title: '팝업 - 온행정지원 신청서조회',
      url: '/popup/type23',
    },
    {
      type: 'popup',
      title: '팝업 - 당직근무 상황보고',
      url: '/popup/type24',
    },
    {
      type: 'popup',
      title: '팝업 - 당직근무 상황보고 상세조회',
      url: '/popup/type25',
    },
    {
      type: 'popup',
      title: '팝업 - 문서처리 현황 등록',
      url: '/popup/type26',
    },
    {
      type: 'popup',
      title: '팝업 - 연혁',
      url: '/popup/type27',
    },
    {
      type: 'popup',
      title: '새창 - 페이지모음',
      url: '/newWindow',
    },
    {
      type: 'popup',
      title: '팝업 - 이력내용비교',
      url: '/popup/type28',
    },
    {
      type: 'popup',
      title: '팝업 - 등록완료',
      url: '/popup/type29',
    },
    {
      type: 'popup',
      title: '팝업 - 기관조회',
      url: '/popup/type30',
    },
    {
      type: 'popup',
      title: '팝업 - 이용자검색',
      url: '/popup/type31',
    },
    {
      type: 'popup',
      title: '팝업 - 권한그룹검색',
      url: '/popup/type32',
    },
    {
      type: 'popup',
      title: '팝업 - 키워드선택',
      url: '/popup/type33',
    },
    {
      type: 'popup',
      title: '팝업 - 커뮤니티포털',
      url: '/popup/type34',
    },
    {
      type: 'popup',
      title: '팝업 - 커뮤니티 기본정보관리',
      url: '/popup/type35',
    },
    {
      type: 'popup',
      title: '팝업 - 멤버선택',
      url: '/popup/type36',
    },
    {
      type: 'popup',
      title: '팝업 - 커뮤니티수정',
      url: '/popup/type37',
    },
    {
      type: 'popup',
      title: '팝업 - 이미지슬라이드',
      url: '/popup/type38',
    },
    {
      type: 'popup',
      title: '팝업 - 사용자선택(탭)',
      url: '/popup/type39',
    },
    {
      type: 'popup',
      title: '팝업 - 사용자선택2(탭)',
      url: '/popup/type40',
    },

    {
      type: 'status',
      title: '로딩페이지',
      url: '/integratedSearch',
    },
    {
      type: 'status',
      title: '에러페이지',
      url: '/fjdsivniwod',
    },
  ];
  return (
    <>
      <div class='left-menu'>
        <h2 class='lnb-tit'>UI 샘플</h2>

        <ul class='acco-list lnb-list'>
          <li
            class={`plus ${tabOpen.main ? 'active' : ''}`}
            onClick={() => {
              setTabOpen((prev) => {
                return {
                  ...prev,
                  main: !prev.main,
                };
              });
            }}
          >
            <a href='javascript:void(0)'>메인</a>
            <ul>
              {_.filter(pageList, (v) => v.type == 'main').map((page, i) => {
                return (
                  <li key={i}>
                    <a
                      href='javascript:void(0)'
                      onClick={(e) => {
                        e.stopPropagation();
                        movePage(e, page.url);
                      }}
                    >
                      {page.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>

          <li
            class={`plus ${tabOpen.style ? 'active' : ''}`}
            onClick={() => {
              setTabOpen((prev) => {
                return {
                  ...prev,
                  style: !prev.style,
                };
              });
            }}
          >
            <a href='javascript:void(0)'>스타일 가이드</a>
            <ul>
              {_.filter(pageList, (v) => v.type == 'style').map((page, i) => {
                return (
                  <li key={i}>
                    <a
                      href='javascript:void(0)'
                      onClick={(e) => {
                        e.stopPropagation();
                        movePage(e, page.url);
                      }}
                    >
                      {page.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
          <li
            class={`plus ${tabOpen.component ? 'active' : ''}`}
            onClick={() => {
              setTabOpen((prev) => {
                return {
                  ...prev,
                  component: !prev.component,
                };
              });
            }}
          >
            <a href='javascript:void(0)'>단위 컴포넌트</a>
            <ul>
              {_.filter(pageList, (v) => v.type == 'component').map(
                (page, i) => {
                  return (
                    <li key={i}>
                      <a
                        href='javascript:void(0'
                        onClick={(e) => {
                          e.stopPropagation();
                          movePage(e, page.url);
                        }}
                      >
                        {page.title}
                      </a>
                    </li>
                  );
                },
              )}
            </ul>
          </li>

          <li
            class={`plus ${tabOpen.page ? 'active' : ''}`}
            onClick={() => {
              setTabOpen((prev) => {
                return {
                  ...prev,
                  page: !prev.page,
                };
              });
            }}
          >
            <a href='javascript:void(0)'>페이지</a>
            <ul>
              {_.filter(pageList, (v) => v.type == 'page').map((page, i) => {
                return (
                  <li key={i}>
                    <a
                      href='javascript:void(0)'
                      onClick={(e) => {
                        e.stopPropagation();
                        movePage(e, page.url);
                      }}
                    >
                      {page.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
          <li
            class={`plus ${tabOpen.specific ? 'active' : ''}`}
            onClick={() => {
              setTabOpen((prev) => {
                return {
                  ...prev,
                  specific: !prev.specific,
                };
              });
            }}
          >
            <a href='javascript:void(0)'>특이케이스</a>
            <ul>
              {_.filter(pageList, (v) => v.type == 'specific').map(
                (page, i) => {
                  return (
                    <li key={i}>
                      <a
                        href='javascript:void(0)'
                        onClick={(e) => {
                          e.stopPropagation();
                          movePage(e, page.url);
                        }}
                      >
                        {page.title}
                      </a>
                    </li>
                  );
                },
              )}
            </ul>
          </li>
          <li
            class={`plus ${tabOpen.commonPopup ? 'active' : ''}`}
            onClick={() => {
              setTabOpen((prev) => {
                return {
                  ...prev,
                  commonPopup: !prev.commonPopup,
                };
              });
            }}
          >
            <a href='javascript:void(0)'>공통 팝업</a>
            <ul>
              {_.filter(pageList, (v) => v.type == 'popup').map((page, i) => {
                return (
                  <li key={i}>
                    <a
                      href='javascript:void(0)'
                      onClick={(e) => {
                        e.stopPropagation();
                        movePage(e, page.url);
                      }}
                    >
                      {page.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>

          <li
            class={`plus ${tabOpen.status ? 'active' : ''}`}
            onClick={() => {
              setTabOpen((prev) => {
                return {
                  ...prev,
                  status: !prev.status,
                };
              });
            }}
          >
            <a href='javascript:void(0)'>로딩&에러</a>
            <ul>
              {_.filter(pageList, (v) => v.type == 'status').map((page, i) => {
                return (
                  <li key={i}>
                    <a
                      href='javascript:void(0)'
                      onClick={(e) => {
                        e.stopPropagation();
                        movePage(e, page.url);
                      }}
                    >
                      {page.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
