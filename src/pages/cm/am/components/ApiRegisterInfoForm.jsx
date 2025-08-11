import React from 'react';
import { Select } from 'components/element';


const ApiRegisterInfoForm = ({ apiInfo, handleChange, versionList, onVersionAddClick, rspnsList, httpList, pvsnList }) => {
    return (
        <>
            <h3 className="h-tit3">기본 정보 </h3>
            <div className="board_list">
                <table className="tstyle_write">
                    <caption>표준 API 등록 - 기본 정보 입력</caption>
                    <colgroup>
                        <col style={{ width: '25%' }} />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">API명 <span className="essential">(필수)</span></th>
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
                            <th scope="row">요청/응답 구분 <span className="essential">(필수)</span></th>
                            <td>
                                {rspnsList.filter(item => item.id !== '') // '' 전체 항목 임시 필터링
                                    .map((item) => (
                                        <label key={item.id}>
                                            <input
                                                type="radio"
                                                name="apiDmndRspnsSeCd"
                                                value={item.id}
                                                checked={apiInfo.apiDmndRspnsSeCd === item.id}
                                                onChange={handleChange}
                                            />
                                            {item.name}
                                        </label>
                                    ))}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">API 유형 <span className="essential">(필수)</span></th>
                            <td>
                                <Select
                                    name="apiPvsnShpCd"
                                    value={apiInfo.apiPvsnShpCd}
                                    onChange={handleChange}
                                    data={pvsnList}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">HTTP 통신 방식 <span className="essential">(필수)</span></th>
                            <td>
                                <Select
                                    name="httpCommSeCd"
                                    value={apiInfo.httpCommSeCd}
                                    onChange={handleChange}
                                    data={httpList}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">버전<span className="essential">(필수)</span></th>
                            <td>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Select
                                        name="apiVerSn"
                                        value={apiInfo.apiVerSn}
                                        onChange={handleChange}
                                        data={versionList}
                                        style={{ width: '90%' }}
                                    />
                                    <a text="버전 추가" href="#" className="btn1" onClick={(e) => {
                                        e.preventDefault();
                                        onVersionAddClick();
                                    }}
                                    >버전 추가</a>
                                </div>
                            </td>
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
            </div >
        </>
    );
};

export default ApiRegisterInfoForm;
