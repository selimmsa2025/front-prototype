import React from 'react';
import EmptyRow from 'components/element/EmptyRow';
import { Select } from 'components/element';

const ApiRegisterParamTable = ({ itemList, setItemList, artclTypeList }) => {
    // 필드 변경 핸들러
    const handleChange = (index, field, value) => {
        const updated = [...itemList];
        updated[index][field] = value;
        setItemList(updated);
    };

    // 행 추가
    const handleAddRow = () => {
        setItemList([
            ...itemList,
            {
                apiArtclAtrbNm: '',     // 파라미터명
                apiArtclTypeCd: '',     // 데이터 타입 코드 (예: B0060005 = String)
                apiArtclEsntlYn: '',   // 필수 여부 (Y/N)
                apiArtclCn: '',         // 설명
            },
        ]);
    };

    // 행 삭제
    const handleDeleteRow = (index) => {
        const updated = itemList.filter((_, i) => i !== index);
        setItemList(updated);
    };


    return (
        <div className="board_list">
            <table className="tstyle_list">
                <caption>파라미터 정보 - 항목 리스트 구성</caption>
                <colgroup>
                    <col style={{ width: '25%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '15%' }} />
                    <col />
                    <col style={{ width: '10%' }} />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">Property</th>
                        <th scope="col">Type</th>
                        <th scope="col">필수여부</th>
                        <th scope="col">Description</th>
                        <th scope="col">-</th>
                    </tr>
                </thead>
                <tbody>
                    {itemList && itemList.length > 0 ? (
                        itemList.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="text"
                                        value={item.apiArtclAtrbNm}
                                        onChange={(e) => handleChange(index, 'apiArtclAtrbNm', e.target.value)}
                                        className="form_text"
                                        placeholder="예: Authorization"
                                    />
                                </td>
                                <td>
                                    <Select
                                        name="artclTypeList"
                                        value={item.apiArtclTypeCd}
                                        onChange={(e) => handleChange(index, 'apiArtclTypeCd', e.target.value)}
                                        data={artclTypeList}
                                    />
                                </td>
                                <td>
                                    <Select
                                        name="apiArtclEsntlYn"
                                        value={item.apiArtclEsntlYn}
                                        onChange={(e) => handleChange(index, 'apiArtclEsntlYn', e.target.value)}
                                        data={[
                                            { id: 'Y', name: '필수' },
                                            { id: 'N', name: '선택' },
                                        ]}
                                        className="size_sm"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={item.apiArtclCn}
                                        onChange={(e) => handleChange(index, 'apiArtclCn', e.target.value)}
                                        className="form_text"
                                        placeholder="예: 사용자 인증 토큰"
                                    />
                                </td>
                                <td>
                                    <button type="button" onClick={() => handleDeleteRow(index)}>
                                        삭제
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <EmptyRow colSpan={5} message="추가된 정보가 없음" />
                    )}
                </tbody>

            </table>

            {/* 행 추가 버튼 */}
            <div className="bottom_right_area" >
                <button type="button" onClick={handleAddRow}>+ 행 추가</button>
            </div>

        </div>
    );
};

export default ApiRegisterParamTable;
