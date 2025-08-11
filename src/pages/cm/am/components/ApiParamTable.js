import React from 'react';
import EmptyRow from 'components/element/EmptyRow';

const paramGroupMap = {
    B0050001: 'Header Parameter',
    B0050002: 'Request Body',
    B0050003: 'Response Body',
};

const ApiParamTable = ({ groupedParams }) => {
    return (
        <>
            {Object.keys(paramGroupMap).map((code) => (
                <div key={code} style={{ marginTop: '20px' }}>
                    <h4>{paramGroupMap[code]}</h4>
                    <table className='tstyle_list' border="1" cellPadding="5" cellSpacing="0">
                        <colgroup>
                            <col style={{ width: '25%' }} />
                            <col style={{ width: '20%' }} />
                            <col style={{ width: '20%' }} />
                            <col style={{ width: '35%' }} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>속성명</th>
                                <th>타입</th>
                                <th>필수</th>
                                <th>설명</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groupedParams[code]?.length > 0 ? (
                                groupedParams[code].map((param, idx) => (
                                    <tr key={idx}>
                                        <td>{param.apiArtclAtrbNm}</td>
                                        <td>{param.apiArtclTypeNm}</td>
                                        <td>{param.apiArtclEsntlYn === 'Y' ? '필수' : '선택'}</td>
                                        <td>{param.apiArtclCn}</td>
                                    </tr>
                                ))
                            ) : (
                                <EmptyRow colSpan={4} message="데이터 없음" />
                            )}
                        </tbody>
                    </table>
                </div>
            ))}
        </>
    );
};

export default ApiParamTable;
