import React, { useReducer, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Input } from 'components/element';
import ApiParamInfoModal from './popup/ApiParamInfoModal';
import ApiResultModal from './popup/ApiResultModal';
import ApiSelectModal from './popup/ApiSelectModal';
import { getGdsInfoApi, getApiTestListApi, saveApiTestApi, startTestApi } from './api';

// import { useUserStore } from 'store/zustand/useUserStore';

// State 변수
const initialState = {
    gdsDetailInfo: {},    // 상품 상세 정보
    apiTestList: [],      // API 테스트 대상 목록
    // 추가용 데이터
    apiTestData: {
        'gdsId': '',
        'apiId': '',
        'apiNm': '',
        'commRsltCd': '',
        'commRsltNm': '',
        // 'apiVerSn': 0,
        'uriAddr': '',
        'httpCommSeCd': '',
        'httpCommSeNm': '',
        'srvrSeCd': '',
        'headerContents': {},
        'reqBdyContents': {},
        'status': 'new',        //  row 기존 : normal, 추가 : new, update: 수정, deleted: 삭제
    },

    // 모달 관련 변수
    isApiParamOpen: false, 
    isApiResultOpen: false, 
    isApiSelectOpen: false,

    testTargetInfo: {}, // 테스트 타겟 정보
    selectedRow: null,
};

const ActionTypes = {
    ADD_API_TEST_ROW: 'ADD_API_TEST_ROW',
    REMOVE_API_TEST_ROW: 'REMOVE_API_TEST_ROW',
    SET_GDS_DETAIL_INFO: 'SET_GDS_DETAIL_INFO',
    SET_API_TEST_LIST: 'SET_API_TEST_LIST',
    SET_MODAL_API_PARAM: 'SET_MODAL_API_PARAM',
    SET_MODAL_API_SELECT: 'SET_MODAL_API_SELECT',
    OPEN_MODAL_API_PARAM: 'OPEN_MODAL_API_PARAM',
    OPEN_MODAL_API_RESULT: 'OPEN_MODAL_API_RESULT',
    OPEN_MODAL_API_SELECT: 'OPEN_MODAL_API_SELECT',
};

// reducer
const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.ADD_API_TEST_ROW:
            return {
                ...state,
                apiTestList: [...state.apiTestList, action.payload]
            }
        case ActionTypes.OPEN_MODAL_API_PARAM:
            return {
                ...state,
                isApiParamOpen: action.payload.isApiParamOpen,
                testTargetInfo: action.payload.testTargetInfo,
            }
        case ActionTypes.OPEN_MODAL_API_RESULT:
            return {
                ...state,
                isApiResultOpen: action.payload.isApiResultOpen,
                testTargetInfo: action.payload.testTargetInfo,
            }
        case ActionTypes.OPEN_MODAL_API_SELECT:
            return {
                ...state,
                isApiSelectOpen: action.payload.isApiSelectOpen,
                selectedRow: action.payload.selectedRow,
            }
        case ActionTypes.SET_GDS_DETAIL_INFO:
        case ActionTypes.SET_API_TEST_LIST:
        case ActionTypes.SET_MODAL_API_PARAM:
        case ActionTypes.SET_MODAL_API_SELECT:
            return {
                ...state,
                [action.field]: action.payload,
            }
        default:
            return state;
    }
};

const ApiTestDetail = () => {

    const navigate = useNavigate();
    const { gdsId, srvrSeCd } = useParams();
    
    // reducer state
    const [state, dispatch] = useReducer(reducer, initialState);
    const { apiTestList, apiTestData, gdsDetailInfo, isApiParamOpen, testTargetInfo,
            isApiResultOpen, isApiSelectOpen, selectedRow } = state;

    // const { userId } = useUserStore();

    // 파라미터 정보 모달 열기
    const openModalParam = (testTarget) => {
        dispatch({ 
            type: ActionTypes.OPEN_MODAL_API_PARAM, 
            payload: {
                testTargetInfo: testTarget,
                isApiParamOpen: true
            }
        });
    }

    // 파라미터 정보 모달 닫기
    const closeModalParam = () => {
        dispatch({ 
            type: ActionTypes.OPEN_MODAL_API_PARAM, 
            payload: {
                testTargetInfo: null,
                isApiParamOpen: false
            }
        });
    }

    // 결과 모달 열기
    const openModalApiResult = (testTarget) => {
        dispatch({ 
            type: ActionTypes.OPEN_MODAL_API_RESULT, 
            payload: {
                testTargetInfo: testTarget,
                isApiResultOpen: true
            }
        });
    };

    // 결과 모달 닫기
    const closeModalApiResult = () => {
        dispatch({ 
            type: ActionTypes.OPEN_MODAL_API_RESULT, 
            payload: {
                testTargetInfo: null,
                isApiResultOpen: false
            }
        });
    };

    // API 선택 모달 열기
    const openModalApiSelect = (rowIndex) => {
        dispatch({ 
            type: ActionTypes.OPEN_MODAL_API_SELECT, 
            payload: {
                selectedRow: rowIndex,
                isApiSelectOpen: true
            }
        });
    }

    // API 선택 모달 닫기
    const closeModalApiSelect = () => {
        dispatch({ type: ActionTypes.SET_MODAL_API_SELECT, field:'isApiSelectOpen' ,payload: false });
    };

    useEffect(() => {
        getGdsInfo();
        getApiTestList();
    }, []);

    const addApiTestRow = () => {
        dispatch({ type: ActionTypes.ADD_API_TEST_ROW, payload: apiTestData });
    };

    const removeApiTestRow = (apiId, indexToRemove) => {
        
        const rowToRemove = apiTestList.map((row, idx) => {
            // 1. 신규 행 (id 없음)
            if(!row.apiId) {
                return idx === indexToRemove ? null : row;
            }
            // 2. 기존 행 (DB 삭제 필요)
            if (row.status === "normal" && row.apiId === apiId) {
            // if (row.status === "normal" || row.status === "updated") {
                return {...row, status: 'deleted'};
            }

            // 3. 추가 후 삭제 (DB 삭제 필요 없음)
            if (row.status === "new") {
                return idx === indexToRemove ? null : row;
            }

            return row;
        }).filter(Boolean) // null 값 제거

        dispatch({
            type: ActionTypes.SET_API_TEST_LIST,
            field: 'apiTestList' ,
            payload: rowToRemove 
        });
    };

    const getGdsInfo = async () => {
        const { data } = await getGdsInfoApi({ gdsId: gdsId, srvrSeCd: srvrSeCd });
        dispatch({ 
            type: ActionTypes.SET_GDS_DETAIL_INFO,
            field: 'gdsDetailInfo' ,
            payload: data?.info,
        });
    };

    const getApiTestList = async () => {
        const { data } = await getApiTestListApi({ gdsId: gdsId,  srvrSeCd: srvrSeCd, artclSeType: 'req' });

        const rowWithStatus = data.list.map((row) => ({
                ...row,
                status: 'normal'
            }));

        dispatch({
            type: ActionTypes.SET_API_TEST_LIST,
            field: 'apiTestList',
            payload: rowWithStatus,
        });
    };

    // 목록으로 이동
    const moveList = () => {
        navigate(`/cm/at/api-test`);
    };

    const saveApiTest = async () => {
        await saveApiTestApi(apiTestList);
        // api.post("/saas-be-catalog/api/v1/apitest/gds-test/insert", apiTestList)
        //     .then(res => {
        //         console.log('res:', res);
        //     })
        //     .catch(error => {
        //         alert('테스트 중 오류가 발생하였습니다.');
        //         console.error("error:", error)
        //     });
    };

    const startTest = async(headerInfo, requestInfo) => {
        const param = {
            headerContents: headerInfo ? JSON.parse(headerInfo) : {},
            reqBdyContents: requestInfo ? JSON.parse(requestInfo) : {},
            uriAddr: testTargetInfo.uriAddr,
            httpCommSeNm: testTargetInfo.httpCommSeNm,
            srvrSeCd: testTargetInfo.srvrSeCd,
            gdsId: gdsDetailInfo.gdsId,
            apiId: testTargetInfo.apiId,
            frstChgPrcrId: "sysadmin"
        };

        const { status } = await startTestApi(param);
        if (status === 200) {
            alert('테스트가 완료되었습니다.');
            closeModalParam();
            getApiTestList();
        } else {
            alert('테스트 중 오류가 발생하였습니다.');
        }
    };

    const setSelectedApiData = (apiData) => {
        const addApiTestList = apiTestList.map((row, idx) =>
            idx === selectedRow ? { ...row, 
                    gdsId: gdsDetailInfo.gdsId,
                    apiNm: apiData.apiNm,
                    apiId: apiData.apiId,
                    srvrSeCd: gdsDetailInfo.srvrSeCd,
                } : row
        );

        dispatch({
            type: ActionTypes.SET_API_TEST_LIST,
            field: 'apiTestList' ,
            payload: addApiTestList 
        });

        closeModalApiSelect();
    }
 
    return (
        <>
            <div className='page-title-wrap' data-type='responsive'>
                <h2 className='h-tit'>SaaS 등록 테스트 상세</h2>
            </div>

            <div className='contents_area'>

                 <div className='tit_area'>
                    <h3 className='h-tit3'>SaaS 등록 테스트 상품 정보</h3>
                 </div>

                 <div className='board_list'>
                     <table className='tstyle_write'>
                        <caption>SaaS 등록 테스트 상품 정보 - 상품 구분, 제공 업체, 상품 유형, 서버 구분, 상품 명 으로 구성</caption>
                        <tbody>
                            <tr>
                                <th scope='row'>상품 구분</th>
                                <td>{gdsDetailInfo.gdsPvsnMthSeNm}</td>
                                <th scope='row'>제공 업체</th>
                                <td>{gdsDetailInfo.mkrSeNm}</td>
                            </tr>
                            <tr>
                                <th scope='row'>상품 유형</th>
                                <td>{gdsDetailInfo.gdsTypeNm}</td>
                                <th scope='row'>서버 구분</th>
                                <td>{gdsDetailInfo.srvrSeNm}</td>
                            </tr>
                            <tr>
                                <th scope='row'>상품 명</th>
                                <td colSpan='3'>{gdsDetailInfo.gdsNm}</td>
                            </tr>
                        </tbody>
                     </table>
                 </div>

                 <div className='tit_area'>
                    <h3 className='h-tit3'>SaaS 표준 API 목록</h3>
                     <div className='right_items'>
                        <Button as='a'color='2' onClick={addApiTestRow} text='추가'/>
                     </div>
                 </div>

                 <div className='board_list'>
                    <table className='tstyle_view not_line'>
                        <caption>SaaS 표준 API 목록 - 상품정보 API, 파라미터 정보 등.. 으로 구성</caption>
                        <thead>
                            <tr>
                                <th scope='col'>순번</th>
                                <th scope='col'>상품정보 API</th>
                                <th scope='col'>URI</th>
                                {/* <th scope='col'>파라미터 정보</th> */}
                                <th scope='col'>테스트 진행</th>
                                <th scope='col'>테스트 결과</th>
                                <th scope='col'>테스트 일자</th>
                                <th scope='col'>결과 로그</th>
                                <th scope='col'>
                                    <span className='sr-only'>삭제버튼</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            { apiTestList ? 
                                apiTestList
                                    .filter((row) => row.status !== 'deleted')  // 삭제된 행은 화면에서 숨김
                                    .map((data, index) => {
                                        return (
                                            <tr key={data.apiId}>
                                                <td aria-label='column'>{index + 1}</td>
                                                <td aria-label='column'>
                                                    { data.apiNm ? data.apiNm :
                                                        <div className='search_input'>
                                                            <Input
                                                                name='frm1'
                                                                id='frm1'
                                                                title='API를 선택해 주세요.'
                                                                placeholder='API를 선택해 주세요.'
                                                                defaultValue=''
                                                                onClick={() => openModalApiSelect(index)}
                                                            />
                                                        </div>
                                                    }
                                                </td>
                                                <td aria-label='column'>
                                                    { data.uriAddr }
                                                </td>
                                                {/* <td aria-label='column'>
                                                    <Button onClick={() => openModalParam(data)} className='btn4'>
                                                        <i className='ri-arrow-down-s-fill'></i>
                                                    </Button>
                                                </td> */}
                                                <td aria-label='column'>
                                                    <Button as='a' color='4' size='2' onClick={() => openModalParam(data)} text='시작'/>
                                                </td>
                                                <td aria-label='column'>{data.commRsltNm}</td>
                                                <td aria-label='column'>{data.commDt ? data.commDt : '-'}</td>
                                                <td aria-label='column'>
                                                    <Button as='a' color='4' size='2' text='결과' onClick={() => openModalApiResult(data)} />
                                                </td>
                                                <td aria-label='삭제버튼'>
                                                    <Button as='a' onClick={() => removeApiTestRow(data.apiId, index)} color='4' size='2' text='삭제'/>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    : 
                                    <tr>
                                        <td colSpan={8}> 데이터가 없습니다. </td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                 </div>

                 <div className='bet_btn_area'>
                    <div className='bottom_left_area'>
                        <Button text={'목록'} size={3} color={4} onClick={moveList} />
                    </div>
                    <div className='bottom_right_area'>
                        {/* <Button text={'+'} size={3} color={3} /> */}
                        <Button text={'저장'} size={3} color={1} onClick={saveApiTest} />
                    </div>
                </div>

                {   isApiParamOpen && testTargetInfo ? 
                    <ApiParamInfoModal 
                    showPopup={isApiParamOpen}
                    onClose={closeModalParam}
                    headerInfo={testTargetInfo.headerContents}
                    requestInfo={testTargetInfo.reqBdyContents}
                    startTest={startTest}
                    />
                    : null
                }

                {   isApiResultOpen ? 
                    <ApiResultModal 
                    showPopup={isApiResultOpen}
                    onClose={closeModalApiResult}
                    apiResult={testTargetInfo}
                    gdsIdParam={gdsDetailInfo.gdsId}
                    />
                    : null
                }

                 {   isApiSelectOpen ? 
                    <ApiSelectModal 
                    showPopup={isApiSelectOpen}
                    onClose={closeModalApiSelect}
                    setSelectedApiData={setSelectedApiData}
                    selectedApiList={apiTestList}
                    />
                    : null
                }

            </div>
        </>
    )
};

export default ApiTestDetail;
