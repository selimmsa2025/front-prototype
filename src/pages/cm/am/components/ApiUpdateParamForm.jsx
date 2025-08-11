import { Select } from 'components/element';
import React from 'react';

const ApiUpdateParamForm = ({ type, itemList, setItemList, isUpdate, artclList }) => {
    // 항목 필드 변경 핸들러
    const handleChange = (index, field, value) => {
        const updated = [...itemList];
        updated[index][field] = value;

        // isUpdate === true이고, 기존 항목 rowstatus가 없거나 null 이면 update로 설정 
        if (isUpdate && (updated[index].rowStatus === null || updated[index].rowStatus === undefined)) {
            updated[index].rowStatus = 'UPDATE';
        }

        setItemList(updated);
    };

    // 행 추가 (수정 모드면 rowStatus: 'NEW', 등록 모드면 없음)
    const handleAddRow = () => {
        const newItem = {
            apiArtclAtrbNm: '',
            apiArtclTypeCd: '',
            apiArtclEsntlYn: '',
            apiArtclCn: '',
            rowStatus: isUpdate ? 'NEW' : null,
            frstCrtPrcrId: 'admin',
        };

        if (isUpdate) {
            newItem.rowStatus = 'NEW';
        }

        setItemList([...itemList, newItem]);
    };

    // 행 삭제
    const handleDeleteRow = (index) => {
        const updated = [...itemList];

        // NEW인 항목은 그냥 제거
        if (updated[index].rowStatus === 'NEW') {
            updated.splice(index, 1);
        } else if (isUpdate) {
            // 수정 모드에서는 rowStatus를 DELETE로 변경
            updated[index].rowStatus = 'DELETE';
        } else {
            // 등록 모드에서는 그냥 제거
            updated.splice(index, 1);
        }

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
                    {itemList
                        .filter(item => item.rowStatus !== 'DELETE') // DELETE는 UI에 표시하지 않음
                        .map((item, index) => (
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
                                        name="httpCommSeCd"
                                        value={item.apiArtclTypeCd}
                                        onChange={(e) => handleChange(index, 'apiArtclTypeCd', e.target.value)}
                                        data={artclList}
                                    />
                                </td>
                                <td>
                                    <select
                                        value={item.apiArtclEsntlYn}
                                        onChange={(e) => handleChange(index, 'apiArtclEsntlYn', e.target.value)}
                                        className="form_sel size_sm"
                                    >
                                        <option value="N">선택</option>
                                        <option value="Y">필수</option>
                                    </select>
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
                        ))}
                </tbody>
            </table>

            {/* 행 추가 버튼 */}
            <div className="bottom_right_area">
                <button type="button" onClick={handleAddRow} className="btn4 type2">
                    + 행 추가
                </button>
            </div>
        </div>
    );
};

export default ApiUpdateParamForm;
