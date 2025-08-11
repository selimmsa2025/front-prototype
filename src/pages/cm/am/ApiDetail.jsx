import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from 'components/element';
import { am_detail_axios, goToApiList, am_delete_axios } from './api/apiService';

import ApiDetailInfoForm from './components/ApiDetailInfoForm';
import ApiParamTable from './components/ApiParamTable';


const ApiDetail = () => {

    const location = useLocation();
    const navigate = useNavigate();
    // ===================== State =====================
    // 목록에서 전달받은 state(apiId 추출)
    const apiId = location?.state?.apiId;

    // API 기본정보 및  파라미터 목록
    const [api, setApi] = useState(null);
    const [paramList, setParamList] = useState([]);

    //에러 및 로딩 상태
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    //삭제 파라미터
    const [checkedList, setCheckedList] = useState([]);

    // ===================== Function =====================
    // 파라미터 리스트 그룹화
    const groupBy = (list, key) =>
        list.reduce((acc, item) => {
            (acc[item[key]] = acc[item[key]] || []).push(item);
            return acc;
        }, {});

    // 파라미터 그룹핑 (구분 코드 기준)
    const groupedParams = groupBy(paramList, 'apiArtclSeCd');

    // 목록 페이지로 이동
    const handleBack = () => {
        goToApiList(navigate);
    };

    const handleEdit = () => {
        navigate('/am/api/update', {
            state: { apiId: apiId },
        });
    };

    // api 삭제
    const handleDelete = async () => {
        console.log('🗑️ 삭제할 항목:', checkedList);

        if (!window.confirm('정말 삭제하시겠습니까?')) return;

        try {
            const filters = checkedList.map(item => ({
                apiId: item.apiId,
                apiVerSn: item.apiVerSn,
            }));

            const result = await am_delete_axios(filters);

            alert('삭제가 완료되었습니다.');
            handleBack();
        } catch (error) {
            alert('삭제 중 오류가 발생했습니다.');
            console.error('❌ 삭제 실패:', error);
        }
    };
    // 상세 데이터 조회
    useEffect(() => {
        const fetchData = async () => {
            if (!apiId) {
                setError('API ID가 유효하지 않습니다.');
                setLoading(false);
                return;
            }
            try {
                const apiData = await am_detail_axios(apiId);
                setApi(apiData);
                setParamList(apiData?.paramList || []);
            } catch (error) {
                setError('API 상세 조회 중 오류가 발생했습니다.');
                console.error('API 상세조회 실패:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [apiId]);

    useEffect(() => {
        if (api) {
            setCheckedList([{ apiId: api.apiId, apiVerSn: api.apiVerSn }]);
            console.log('✅ 체크리스트 설정:', { apiId: api.apiId, apiVerSn: api.apiVerSn });
        }
    }, [api]);

    // ===================== Render =====================
    // 🔻 에러 화면 처리 (추후 컴포넌트 제작 및 공동사용)_250729_lsc
    if (error) {
        return (
            <div className="package-section-wrapper">
                <h2 className="h-tit">에러 발생</h2>
                <p>{error}</p>
                <Button as="a" color="4" className="type1" text="목록으로" onClick={handleBack} />
            </div>
        );
    }
    // 🔻 로딩 중 (추후 컴포넌트 제작 및 공동사용)
    if (loading) {
        return <div className="package-section-wrapper">불러오는 중...</div>;
    }

    return (
        <div className="package-section-wrapper">
            <div className="page-title-wrap" data-type="responsive">
                <h2 className="h-tit">API 상세 정보</h2>
                {/* 기본 정보 테이블 (기능 제작 요청-htp*/}  
                <div class='right_items'>
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
            </div>
            <div className="contents_area">
                {/* 기본 정보 테이블 */}
                <ApiDetailInfoForm api={api} />
                {/* 파라미터 정보 테이블 */}
                <ApiParamTable groupedParams={groupedParams} />
                {/* 하단 버튼 영역 */}
                <div className="clear">
                    <div className="bottom_left_area">
                        <Button as="a" color="4" className="type1" text="목록" onClick={handleBack} />
                    </div>
                    <div className="bottom_right_area">
                        <Button
                            as='a'
                            color='1'
                            className='type1'
                            text='삭제'
                            onClick={handleDelete} // 삭제 로직 연결 
                        />
                        <Button as="a" color="1" className="type1" text="수정" onClick={handleEdit} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApiDetail;
