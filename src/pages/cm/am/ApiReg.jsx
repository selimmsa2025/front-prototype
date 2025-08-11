import React, { useState } from 'react';
import { useEffect } from 'react';
import ApiRegisterInfoForm from './components/ApiRegisterInfoForm';
import ApiRegisterParamTable from './components/ApiRegisterParamTable';
import ApiVerPopup from './components/ApiVerPopup';
import { am_insert_axios, goToApiList } from './api/apiService';
import { useNavigate } from 'react-router';
import { fetchVersionList } from './api/apiService';
import { fetchCodeLists } from 'api/code/codeService';

const ApiReg = () => {
    const navigate = useNavigate();
    // 기본 정보 상태
    const [apiInfo, setApiInfo] = useState({
        apiNm: '',
        apiPvsnShpCd: '',
        apiDmndRspnsSeCd: '',
        httpCommSeCd: '',
        uriAddr: '',
        apiVerSn: '',
    });

    // 항목 리스트 상태
    const [headerList, setHeaderList] = useState([]);
    const [requestList, setRequestList] = useState([]);
    const [responseList, setResponseList] = useState([]);

    // 버전 추가 팝업 
    const [showVersionPopup, setShowVersionPopup] = useState(false);
    const [versionList, setVersionList] = useState([]);

    // 공통 코드 
    const [pvsnList, setPvsnList] = useState([]);
    const [rspnsList, setRspnsList] = useState([]);
    const [httpList, setHttpList] = useState([]);
    const [artclTypeList, setArtclTypeList] = useState([]);

    // 버전 목록 조회
    const loadVersions = async () => {
        try {
            const versions = await fetchVersionList();
            console.log('버전 목록:', versions);

            const versionOptions = [
                { id: '', name: '선택' },
                ...versions.map(ver => ({
                    id: ver,
                    name: `Ver.${ver + 1}`
                }))
            ];

            setVersionList(versionOptions);
            return versionOptions; 
        } catch (err) {
            console.error("버전 목록 불러오기 실패", err);
        }
    };

    // 버전 추가시 버전 목록 갱신 
    const handleVersionAdded = async ({ apiVerSn }) => {
        const updated = await loadVersions();
        
        setVersionList(updated);                       // 버전 목록 갱신
        setApiInfo((prev) => ({
            ...prev,
            apiVerSn: apiVerSn,                          // 새 버전 선택값으로 설정
        }));
    };

    // 입력값 변경 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setApiInfo(prev => ({ ...prev, [name]: value }));
    };

    // 목록 페이지로 이동
    const handleBack = () => {
        goToApiList(navigate);
    };

    // 등록 요청
    const handleSubmit = async () => {
        try {
            const nextId = await am_insert_axios(apiInfo, headerList, requestList, responseList);
            console.log("$$$$$$$$$$$$$$$$$$$$$$$$", nextId);
            alert('등록이 완료되었습니다.');
            if (nextId) {
                navigate('/am/api/detail', { state: { apiId: nextId } });
            } else {
                alert('nextId가 없어 상세페이지로 이동할 수 없습니다.');
            }
        } catch (error) {
            console.error(error);
            alert('등록 중 오류가 발생했습니다.');
        }
    };

    useEffect(() => {
        // 버전 목록
        loadVersions();

        // 공통 코드 
        const loadCodes = async () => {
            const result = await fetchCodeLists(['B001', 'B003', 'B004', 'B006']);
            setPvsnList(result.B001);
            setRspnsList(result.B003);
            setHttpList(result.B004);
            setArtclTypeList(result.B006);
        };
        loadCodes();
    }, []);

    return (

        <div className="board_list">
            <div className='page-title-wrap' data-type='responsive'>
                <h2 className='h-tit'>saas 표준 API 등록</h2>
            </div>

            {/* 기본 정보 입력 */}
            <ApiRegisterInfoForm apiInfo={apiInfo} handleChange={handleChange} versionList={versionList} onVersionAddClick={() => setShowVersionPopup(true)}
                rspnsList={rspnsList}
                httpList={httpList}
                pvsnList={pvsnList} />

            {/* 버전 추가 팝업*/}
            {showVersionPopup && (
                <ApiVerPopup
                    showPopup={showVersionPopup}
                    onClose={() => setShowVersionPopup(false)}
                    onSave={handleVersionAdded}
                />
            )}

            {/* Header 파라미터 */}
            <h3 className='h-tit3'>Header Parameter</h3>
            <ApiRegisterParamTable type="HEADER" itemList={headerList} setItemList={setHeaderList} artclTypeList={artclTypeList} />

            {/* Request 파라미터 */}
            <h3 className='h-tit3'>Request Body</h3>
            <ApiRegisterParamTable type="REQUEST" itemList={requestList} setItemList={setRequestList} artclTypeList={artclTypeList} />

            {/* Response 파라미터 */}
            <h3 className='h-tit3'>Response Body</h3>
            <ApiRegisterParamTable type="RESPONSE" itemList={responseList} setItemList={setResponseList} artclTypeList={artclTypeList} />

            {/* 등록 버튼 */}
            <div className='bet_btn_area'>
                <div className="bottom_right_area" >
                    <button className="btn3 type1" onClick={handleBack}>취소</button>
                    <button onClick={handleSubmit} className="btn1 type1">저장</button>
                </div>
            </div>
        </div >
    );
};

export default ApiReg;
