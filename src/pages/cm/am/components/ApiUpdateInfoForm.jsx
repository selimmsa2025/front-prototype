import React from 'react';

const ApiUpdateInfoForm = ({
    apiInfo,
    handleChange,
    isEdit,
}) => {

    return (
        <>
            <h3 className="h-tit3">기본 정보 </h3>
            <div className="board_list">
                <table className="tstyle_write">
                    <caption>표준 API {isEdit ? '수정' : '등록'} - 기본 정보 입력</caption>
                    <colgroup>
                        <col style={{ width: '15%' }} />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">API명<span className="essential">(필수)</span></th>
                            <td>
                                <input
                                    name="apiNm"
                                    value={apiInfo.apiNm}
                                    onChange={handleChange}
                                    className="form_text"
                                    placeholder="API명을 입력해주세요."
                                    type="text"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'>요청/응답 유형</th>
                            <td>{apiInfo.apiDmndRspnsSeNm}</td>
                        </tr>
                        <tr>
                            <th scope='row'>제공자</th>
                            <td>{apiInfo.apiPvsnShpNm}</td>
                        </tr>
                        <tr>
                            <th scope='row'>통신방식 (HTTP)</th>
                            <td>{apiInfo.httpCommSeNm}</td>
                        </tr>
                        <tr>
                            <th scope='row'>버전</th>
                            <td>Ver.{apiInfo.apiVerSn + 1}</td>
                        </tr>
                        <tr>
                            <th scope="row">URI<span className="essential">(필수)</span></th>
                            <td>
                                <input
                                    name="uriAddr"
                                    value={apiInfo.uriAddr}
                                    onChange={handleChange}
                                    className="form_text"
                                    placeholder="/v1/user/insert"
                                    type="text"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ApiUpdateInfoForm;
