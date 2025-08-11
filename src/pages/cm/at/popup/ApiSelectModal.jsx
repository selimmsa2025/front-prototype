import React, { useState, useEffect, useMemo } from 'react';
import CommonPopup from 'components/popup/CommonPopup';
import api from 'api/api';
import Pagination from 'components/element/Pagination';

const ApiSelectModal = ({ showPopup, onClose, setSelectedApiData, selectedApiList }) => {

    const [apiList, setApiList] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [searchData, setSearchData] = useState({
        apiNm: '',
        pageYn: 'Y',
        currentPage: 1,
        pageSize: 10,
    });
    const [apiInfo, setApiInfo] = useState();

    const excludedIds = new Set(selectedApiList?.filter((row) => row.status !== 'deleted' ).map(item => item.apiId));

    const getStdApiList = () => {
        api.post("/saas-be-catalog/v1/at/prod/list-std-api", searchData)
            .then(res => {
                setApiList(res.data.resultData.list);
                setTotalCount(res.data.resultData.totalCnt);
            })
            .catch(error => {
                console.error("error:", error)
            });
    }

    // page 이동
    const movePage = (page) => {
        setSearchData((prev) => {
            return {
                ...prev,
                currentPage: page,
            }
        })
        getStdApiList();
    }

    useEffect(() => {
        getStdApiList();
        return () => {
            setApiInfo(null);
        }
    }, []);

    return (
        <>
            <CommonPopup
                draggable={false}
                showPopup={showPopup}
                onClose={onClose}
                saveButtonTitle={'API 선택'}
                closeButtonTitle={'취소'}
                additionalButtonTitle={''}
                saveButtonOnClick={() => {
                    if (apiInfo) {
                        setSelectedApiData(apiInfo);
                     } else {
                        alert('API 를 선택해주세요');
                     }
                }}
                closeButtonOnClick={onClose}
				additionalButtonOnClick={onClose}
                title={'API 목록'}
                size='middle'
            >
                <div className='board_list'>
                    <table className='tstyle_list'>
                        <caption>API 목록 - Header, Request Body 로 구성</caption>
                        <thead>
                            <tr>
                                <th scope='col'>API ID</th>
                                <th scope='col'>API 명</th>
                                <th scope='col'>API 제공 형태 코드</th>
                                <th scope='col'>등록일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                apiList
                                    .filter(item => !excludedIds.has(item.apiId))
                                    .map((data) => (
                                        <tr key={data.apiId} onClick={() => { setApiInfo(data) }}>
                                            <td>{data.apiId}</td>
                                            <td>{data.apiNm}</td>
                                            <td>{data.apiPvsnShpNm}</td>
                                            <td>{data.frstCrtDt}</td>
                                        </tr>
                                    ))
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
            </CommonPopup>
        </>
    )
};

export default ApiSelectModal;