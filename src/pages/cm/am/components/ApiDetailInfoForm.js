import React from 'react';

const ApiDetailInfoForm = ({ api }) => {
    if (!api) return null;

    return (
        <div className='board_list'>
            <table className='tstyle_write'>
                <caption>API 기본 정보</caption>
                <colgroup>
                    <col style={{ width: '25%' }} />
                    <col style={{ width: '75%' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <th scope='row'>API명</th>
                        <td>{api.apiNm}</td>
                    </tr>
                    <tr>
                        <th scope='row'>제공자</th>
                        <td>{api.apiPvsnShpNm}</td>
                    </tr>
                    <tr>
                        <th scope='row'>요청/응답 유형</th>
                        <td>{api.apiDmndRspnsSeNm}</td>
                    </tr>
                    <tr>
                        <th scope='row'>통신방식 (HTTP)</th>
                        <td>{api.httpCommSeNm}</td>
                    </tr>
                    <tr>
                        <th scope='row'>표준 URI</th>
                        <td>{api.uriAddr}</td>
                    </tr>
                    <tr>
                        <th scope='row'>버전</th>
                        <td>Ver.{api.apiVerSn + 1}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ApiDetailInfoForm;
