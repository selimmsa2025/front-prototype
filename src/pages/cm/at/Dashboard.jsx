import React, { useReducer, useEffect, useCallback } from 'react';
import Breadcrumb from '../../../examples/Components/Breadcrumb';
import { Input, Select, Button } from '../../../examples/Components/Element';
import api from 'api/api';
import Pagination from '../../../examples/Components/Board/Pagination';

// zustand 상태관리 사용
import { useCounterStore } from 'store/zustand/counterStore';

// State 변수
const initialState = {
    dataList: [],
    totalCount: 0,
    paging: {
        pageSize: 10,
        currentPage: 1,
    },
    searchData: {
        pageYn: 'Y',
        currentPage: 1,
        pageSize: 10,
        gdsPvsnMthSeCd: '',
        gdsTypeCd: '',
        gdsNm: '',
    }
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

const DashBoard = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { dataList, totalCount, paging, searchData } = state;

    // zustand
    const { count, increment, decrement, reset } = useCounterStore();

    const handleRowClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

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

    // 대시보드 목록 조회
    const search = useCallback(async (searchData) => {
        await api.get("/saas-be-catalog/api/v1/dashboard/list", { params: searchData } )
            .then(res => {
                dispatch({ type: ActionTypes.SET_DATA_LIST, field: 'dataList', payload: res.data.resultData.list});
                dispatch({ type: ActionTypes.SET_TOTAL_COUNT, field: 'totalCount', payload: res.data.resultData.totalCnt});
            })
            .catch(error => {
                console.error("error:", error)
            });

    }, []);

    // page 이동
    const movePage = (page) => {
        const updatePageParam = { ...state.searchData, currentPage: page }
        dispatch({ type: ActionTypes.SET_SEARCH_DATA, field: 'currentPage', payload: page });
        search(updatePageParam);
    }

    useEffect(() => {
        search(searchData);
    }, [search]);

    return (
        <>
            <Breadcrumb />
            <div className='page-title-wrap' data-type='responsive'>
                <h2 className='h-tit'>대시보드</h2>
            </div>

            <div className='contents_area'>

                <div>
                    <h2>카운터: {count}</h2>
                    <button className='btn2 icon_lf' onClick={increment}>+</button>
                    <button className='btn4' onClick={decrement}>-</button>
                    <button className='btn4' onClick={reset}>Reset</button>
                </div>

                 <div id='guide1'>
                    <h2 className='h-tit4 mb_10'>대시보드 제공 상품 목록</h2>
                 </div>

                 <div className='box_st1 sch_top_wrap'>
                    <div className='form_wrap width_three'>
                        <div className='form_group'>
                            <strong className='form_label auto'>상품 구분</strong>
                            <Select
                                name="gdsPvsnMthSeCd"
                                id="gdsPvsnMthSeCd"
                                class="form_sel size_sm"
                                title="상품 구분을 선택하세요."
                                data={[
                                    { id: 'all', name: '전체' },
                                ]}
                             />
                        </div>
                        <div className='form_group'>
                             <strong className='form_label auto'>상품 유형</strong>
                             <Select
                                name='gdsTypeCd'
                                id='gdsTypeCd'
                                class='form_sel size_sm'
                                title='조건을 선택하세요.'
                                data={[
                                    { id: 'all', name: '전체' },
                                    { id: '1', name: '조건1' },
                                    { id: '2', name: '조건2' },
                                ]}
                              />
                        </div>
                        <div className='form_group'>
                            <strong className='form_label auto'>상품명</strong>
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

                        <div class='sch_btn_area'>
                            <Button
                                as={'button'}
                                class={'sch'}
                                text={'초기화'}
                                color={2}
                                onClick={ handleChange(ActionTypes.SET_RESET_SEARCH_DATA) }
                            />
                            <Button
                                as={'button'}
                                class={'sch'}
                                text={'검색'}
                                color={1}
                                onClick={() => {
                                    search(searchData);
                                }}
                            />
                        </div>
                    </div>
                 </div>

                 <div class='board_info'>

                    <p class='page'>
                        <span class='total'>
                            총 게시글 <b>{ totalCount }</b>건
                        </span>
                    </p>


                    <form>
                        <fieldset>
                            <legend class='blind'>게시판 정렬</legend>
                                <div class='form'>
                                <div class='item'>
                                    <span class='label'>목록 표시 개수</span>
                                    <div class='select_list'>
                                        <ul class='list'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class='item'>
                                    <span class='label'>검색 기간</span>
                                    <div class='select_list'>
                                    <a href='#test'>
                                        <span class='sr_only'>선택된 옵션</span>전체
                                    </a>
                                    <ul class='list'>
                                        <li>
                                            <a href='#test'>전체</a>
                                        </li>
                                        <li>
                                            <a href='#test'>전체</a>
                                        </li>
                                        <li>
                                            <a href='#test' class='on'>전체</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>

                                <div class='item'>
                                    <span class='label'>정렬 기준</span>
                                    <div class='select_list'>
                                    <a href='#test' >
                                        <span class='sr_only'>선택된 옵션</span>관련도순
                                    </a>
                                    <ul class='list'>
                                        <li>
                                            <a href='#test'>최신순</a>
                                        </li>
                                        <li>
                                            <a href='#test' class='on'>
                                                관련도순
                                            </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                        </fieldset>
                    </form>
                 </div>

                 {/* 게시판 */}
                 <div class='board_list'>
                     <table class='tstyle_list'>
                        <caption> 대시보드 목록 - 상품 구분, 상품 유형, 상품명, 등록일자로 구성</caption>
                        <thead>
                            <tr>
                                <th scope='col'>상품 구분</th>
                                <th scope='col'>상품 유형</th>
                                <th scope='col'>상품명</th>
                                <th scope='col'>등록일자</th>
                            </tr>
                        </thead>
                        <tbody>
                            { dataList ? 
                                dataList.map((v, i) => {
                                    return (
                                        <tr key={v.gdsId} style={{ cursor: 'pointer' }} onClick={() => handleRowClick(v.gdsDashAddr)} >
                                            <td aria-label='상품 구분'>{v.gdsPvsnMthSeNm}</td>
                                            <td aria-label='상품 유형'>{v.gdsTypeNm}</td>
                                            <td aria-label='상품 명'>{v.gdsNm}</td>
                                            <td aria-label='등록일자'>{v.frstCrtDt}</td>
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
                    pageSize={paging.pageSize}
                    currentPage={paging.currentPage}
                    onPageChange={(page) => {
                        movePage(page);
                    }}
                />

            </div>
        </>
    );
};

export default DashBoard;