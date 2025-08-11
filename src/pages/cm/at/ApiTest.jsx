import React, { useReducer, useEffect } from 'react';
import { Input, Select, Button } from 'components/element';
import api from 'api/api';
import Pagination from 'components/element/Pagination';
import { useNavigate } from 'react-router-dom';

// State 변수
const initialState = {
    dataList: [],
    totalCount: 0,
    searchData: {
        pageYn: 'Y',
        currentPage: 1,
        pageSize: 10,
        gdsNm: '',      // 상품명
        apiVerSn: 0,    // API 버전
        testStts: '',   // 테스트 상태
        ctlgRegYn: '',  // 카탈로그 등록여부
    },
};

const ActionTypes = {
  SET_DATA_LIST: 'SET_DATA_LIST',
  SET_TOTAL_COUNT: 'SET_TOTAL_COUNT',
  SET_SEARCH_DATA: 'SET_SEARCH_DATA',
  SET_RESET_SEARCH_DATA: 'SET_RESET_SEARCH_DATA',
};

// reducer
const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.SET_DATA_LIST:
        case ActionTypes.SET_TOTAL_COUNT:
            return {
                ...state,
                [action.field]: action.payload,
            }
        case ActionTypes.SET_SEARCH_DATA:
            return {
                ...state,
                searchData: { 
                    ...state.searchData,
                    [action.field]: action.payload
                },
            }
        case ActionTypes.SET_RESET_SEARCH_DATA:
            return {
                ...state,
                searchData: { 
                    ...state.searchData,
                    gdsPvsnMthSeCd: '',
                    gdsTypeCd: '',
                    gdsNm: '',
                }
            }
        default:
        return state;
    }
};

const ApiTest = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { dataList, totalCount, searchData } = state;
    const navigate = useNavigate();

    const handleChange = (actionType, field) => (e, nextValue) => {
        let value;
        // etc
        if (nextValue !== undefined) {
            value = nextValue;
        // input, select => (event)
        } else if (e?.target) {
            value = e.target.value;
        }
        dispatch({ type: actionType, field, payload: value })
    };

    const search = (searchData) => {
        api.get("/saas-be-catalog/v1/at/prod/list-api-test", { params: searchData } )
            .then(res => {
                dispatch({ type: ActionTypes.SET_DATA_LIST, field: 'dataList', payload: res.data.resultData.list});
                dispatch({ type: ActionTypes.SET_TOTAL_COUNT, field: 'totalCount', payload: res.data.resultData.totalCnt});
            })
            .catch(error => {
                console.error("error:", error)
            });

    };

    // page 이동
    const movePage = (page) => {
        const updatePageParam = { ...state.searchData, currentPage: page }
        dispatch({ type: ActionTypes.SET_SEARCH_DATA, field: 'currentPage', payload: page });
        search(updatePageParam);
    }

    useEffect(() => {
        search(searchData);
    }, []);

    return (
        <>
            <div className='page-title-wrap' data-type='responsive'>
                <h2 className='h-tit'>SaaS 등록 테스트 관리</h2>
            </div>

            <div className='contents_area'>
                <div id='guide1'>
                    <h2 className='h-tit4 mb_10'>SaaS 테스트 목록</h2>
                </div>

                {/* 검색  */}
                <div className='box_st1 sch_top_wrap'>
                     <div className='form_wrap width_half'>
                        <div className='form_group'>
                            <strong className='form_label'>상품 명</strong>
                            <Input
                                className='form_text'
                                name='gdsNm'
                                id='gdsNm'
                                title='검색어를 입력해주세요.'
                                placeholder='검색어를 입력해주세요.'
                                value={searchData.gdsNm}
                                onChange={handleChange(ActionTypes.SET_SEARCH_DATA, 'gdsNm')}
                            />
                        </div>
                        <div className='form_group'>
                            <strong className='form_label'>API 버전</strong>
                            <Select
                                name='apiVerSn'
                                id='apiVerSn'
                                className='form_sel size_sm'
                                title='조건을 선택하세요.'
                                data={[
                                    { id: 'all', name: '전체' },
                                    { id: '1', name: '조건1' },
                                    { id: '2', name: '조건2' },
                                ]}
                            />
                        </div>
                        <div className='form_group'>
                            <strong className='form_label'>테스트 상태</strong>
                            <Select
                                name='testStts'
                                id='testStts'
                                className='form_sel size_sm'
                                title='조건을 선택하세요.'
                                data={[
                                    { id: 'all', name: '전체' },
                                    { id: '1', name: '조건1' },
                                    { id: '2', name: '조건2' },
                                ]}
                            />
                        </div>
                        <div className='form_group'>
                            <strong className='form_label'>카탈로그 등록여부</strong>
                            <Select
                                name='ctlgRegYn'
                                id='ctlgRegYn'
                                className='form_sel size_sm'
                                title='조건을 선택하세요.'
                                data={[
                                    { id: 'all', name: '전체' },
                                    { id: '1', name: '조건1' },
                                    { id: '2', name: '조건2' },
                                ]}
                            />
                        </div>
                    </div>


                     <div className='sch_btn_area'>
                        <Button
                            as={'button'}
                            className={'sch'}
                            text={'초기화'}
                            color={2}
                            onClick={ handleChange(ActionTypes.SET_RESET_SEARCH_DATA) }
                        />
                        <Button
                            as={'button'}
                            className={'sch'}
                            text={'검색'}
                            color={1}
                            onClick={() => {
                                search(searchData);
                            }}
                        />
                     </div>
                </div>
                {/* 검색 끝 */}
                

                <div className='board_info'>
                    <p className='page'>
                        <span className='total'>
                            총 게시글 <b>{ totalCount }</b>건
                        </span>
                    </p>

                    <form>
                        <fieldset>
                            <legend className='blind'>게시판 정렬</legend>
                            <div className='form'>
                                <div className='item'>
                                    <span className='label'>목록 표시 개수</span>
                                    <div className='select_list'>
                                        <a href="/" >
                                            <span className='sr_only'>선택된 옵션</span>
                                            20 개
                                        </a>
                                        <ul className='list'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>

                {/* SaaS 테스트 목록 */}
                <div className='board_list'>
                    <table className='tstyle_list'>
                        <caption> SaaS 테스트 목록 - 상품 명, 표준 API 버전, 서버 구분, 테스트 상태, 테스트 일자, 카탈로그 등록 여부 로 구성</caption>
                        <thead>
                            <tr>
                                <th scope='col'>상품 명</th>
                                <th scope='col'>표준 API 버전</th>
                                <th scope='col'>서버 구분</th>
                                <th scope='col'>테스트 상태</th>
                                <th scope='col'>테스트 일자</th>
                                <th scope='col'>카탈로그 등록 여부</th>
                            </tr>
                        </thead>
                        <tbody>
                            { dataList ? 
                                dataList.map((v, i) => {
                                    return (
                                        <tr key={v.gdsId + v.srvrSeCd} style={{ cursor: 'pointer' }} onClick={() => navigate(`/cm/at/api-test/${v.gdsId}/${v.srvrSeCd}`)}>
                                            <td aria-label='상품 명'>{v.gdsNm}</td>
                                            <td aria-label='표준 API 버전'>{v.apiVerSn}</td>
                                            <td aria-label='서버 구분'>{v.srvrSeNm}</td>
                                            <td aria-label='테스트 상태'>{v.testStts}</td>
                                            <td aria-label='테스트 일자'>{v.commDt}</td>
                                            <td aria-label='카탈로그 등록 여부'>
                                                {v.ctlgRegYn === 'Y' ? 
                                                    <a href="/" className="btn4 type2">카탈로그 등록</a> : '미등록' }
                                            </td>
                                        </tr>
                                    )
                                })
                                : 
                                <tr>
                                    <td colSpan={4}> 데이터가 없습니다. </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>

                <Pagination
                    totalCount={totalCount}
                    pageSize={searchData.pageSize}
                    currentPage={searchData.currentPage}
                    onPageChange={(page) => {
                        movePage(page);
                    }}
                />

            </div>
        </>
    )
};

export default ApiTest;
