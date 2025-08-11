import React, { useEffect, useState } from 'react';
import { Button } from 'components/element';
import { am_list_axios, goToApiInsert, am_delete_axios } from './api/apiService'
import { fetchVersionList } from './api/apiService'; 
import SearchFilters from './components/SearchFilters';
import PageSizeSelector from 'components/element/PageSizeSelector';
import ApiListBoard from './components/ApiListBoard';
import Pagination from './components/element/Pagination';
import { useNavigate } from 'react-router-dom';

import { fetchCodeLists } from 'api/code/codeService';

const initialSearchText = {
    apiNm: '',
    apiDmndRspnsSeCd: '',
    httpCommSeCd: '',
    apiVerSn: '',
    apiPvsnShpCd: '',
};

const ApiList = () => {
    const navigate = useNavigate();
    // ===================== State =====================
    // 검색 상태
    const [searchText, setSearchText] = useState(initialSearchText);
    const [appliedFilters, setAppliedFilters] = useState(initialSearchText);

    // 페이지네이션 상태
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    // 테이블 정보 상태
    const [totalCount, setTotalCount] = useState(0);
    const [dataList, setDataList] = useState([]);

    // UI 상태
    const [sizeSelectorShow, setSizeSelectorShow] = useState(false);
    const [showDetailSch, setShowDetailSch] = useState(false);
    const [checkedList, setCheckedList] = useState([]);

    // API제공형태코드 (B001)
    const [pvsnList, setPvsnList] = useState([]);  //기본, 패키지, 웹오피스 ..
    //요청응답구분코드 (B003)
    const [rspnsList, setRspnsList] = useState([]); // 응답, 요청
    // HTTP통신구분코드 (B004)
    const [httpList, setHttpList] = useState([]); // GET, POST, DELETE ..

    // 버전 목록 상태
    const [versionOptions, setVersionOptions] = useState([]);


    // ===================== Function =====================
    // 검색 조건 변경 핸들러
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchText((prev) => ({ ...prev, [name]: value }));
    };

    // 검색 버튼 클릭
    const handleSearch = () => {
        setAppliedFilters({ ...searchText });
        setCurrentPage(1);
    };

    // 초기화 버튼 클릭
    const handleReset = () => {
        setSearchText(initialSearchText);
        setCurrentPage(1);
    };

    // 상세검색 토글
    const handleToggleDetail = () => {
        setShowDetailSch((prev) => !prev);
        setSearchText((prev) => ({
            ...prev,
            apiDmndRspnsSeCd: '',
            httpCommSeCd: '',
            apiVerSn: '',
            apiPvsnShpCd: '',
        }));
    };

    // 등록 페이지로 이동
    const handleToInsert = () => {
        goToApiInsert(navigate);
    };

    // 
    const handleDelete = async () => {
        if (checkedList.length === 0) {
            alert('삭제할 항목을 선택하세요.');
            return;
        }
        const confirmDelete = window.confirm(`선택한 ${checkedList.length}건을 삭제하시겠습니까?`);
        if (!confirmDelete) return;
        try {
            const result = await am_delete_axios(checkedList);  // ✅ 배열 그대로 전달
            console.log('삭제 결과:', result);
            if (result?.result !== 1) {
                alert('일부 항목 삭제에 실패했습니다.');
                return;
            }
            alert('삭제가 완료되었습니다.');
            setCheckedList([]); // 체크 초기화
            getBoardList(); // 목록 새로고침
        } catch (error) {
            console.error('삭제 중 오류 발생:', error);
            alert('삭제 중 오류가 발생했습니다.');
        }
    };

    // 목록 API 조회
    const getBoardList = async () => {
        try {
            const data = await am_list_axios(appliedFilters, currentPage, pageSize);
            setDataList(data.list);
            setTotalCount(data.totalCnt);
        } catch (error) {
            console.error('API 호출 실패:', error);
        }
    };

    // 목록 갱신 조건
    useEffect(() => {
        getBoardList();
    }, [appliedFilters, currentPage, pageSize]);

    // 버전 목록 조회 
    const loadVersionList = async () => {
        try {
            const res = await fetchVersionList();
            if (res?.length > 0) {
                const versionOpts = res.map(v => ({
                    id: v.toString(),                 // 실제 값
                    name: `Ver.${parseInt(v) + 1}`,   // 보여지는 값
                }));

                // '전체' 항목을 맨 앞에 추가
                setVersionOptions([
                    { id: '', name: '전체' },
                    ...versionOpts,
                ]);
            } else {
                // 결과가 없을 경우에도 '전체'만 표시
                setVersionOptions([{ id: '', name: '전체' }]);
            }
        } catch (error) {
            console.error("버전 목록 조회 실패:", error);
            // 에러 발생 시에도 '전체'만 표시
            setVersionOptions([{ id: '', name: '전체' }]);
        }
    };


    // <SELECT> 코드리스트 불러오기 컴포넌트
    useEffect(() => {
        const loadCodeLists = async () => {
            const result = await fetchCodeLists(['B001', 'B003', 'B004']);
            setPvsnList(result.B001);
            setRspnsList(result.B003);
            setHttpList(result.B004);
        };
        loadCodeLists();
        loadVersionList();
    }, []);

    // ===================== Render =====================
    return (
        <>
            <div className='page-title-wrap' data-type='responsive'>
                <h2 className='h-tit'>SaaS 표준 API 관리</h2>
            </div>
            <div className="contents_area">
                {/* 검색 조건 */}
                <SearchFilters
                    searchText={searchText}
                    onInputChange={handleInputChange}
                    onSearch={handleSearch}
                    onReset={handleReset}
                    showDetailSch={showDetailSch}
                    onToggleDetail={handleToggleDetail}
                    rspnsList={rspnsList}
                    httpList={httpList}
                    pvsnList={pvsnList}
                    versionOptions={versionOptions}
                />
                {/* 결과 목록 */}
                <div className='board_info'>
                    <p className='page'>
                        <span className='total'>
                            총 게시글 <b>{totalCount}</b>건
                        </span>
                    </p>
                    {/* 기본 정보 테이블 (기능 제작 요청-htp*/}
                    <div class='right_items type_btn'>
                        <Button
                            as='a'
                            color='4'
                            class='line'
                            download='download'
                            title='다운로드'
                            text=''
                            onClick={() => {
                                alert('엑셀다운로드기능 추가해야함');
                            }}
                        >
                            엑셀 다운로드
                        </Button>
                    </div>
                    <form>
                        <fieldset>
                            <legend className='blind'>게시판 정렬</legend>
                            <div className='form'>
                                <PageSizeSelector
                                    pageSize={pageSize}
                                    setPageSize={setPageSize}
                                    showPopup={sizeSelectorShow}
                                    setShowPopup={setSizeSelectorShow}
                                    optionType={1}
                                />
                            </div>
                        </fieldset>
                    </form>
                </div>
                {/* 테이블 */}
                <ApiListBoard
                    dataList={dataList}
                    checkedList={checkedList}
                    setCheckedList={setCheckedList}
                />
                {/* 페이지네이션 */}
                <Pagination
                    totalCount={totalCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={(page) => setCurrentPage(page)}
                />
                {/* 하단 버튼 영역 */}
                <div className='clear'>
                    <div className='bottom_right_area'>
                        <Button
                            as='a'
                            color='1'
                            className='type1'
                            text='삭제'
                            onClick={handleDelete}
                        />
                        <Button
                            as='a'
                            color='1'
                            className='type1'
                            text='등록'
                            onClick={handleToInsert}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ApiList;
