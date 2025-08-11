import axios from 'axios';

/**
 * 코드 리스트를 받아와서 { 그룹코드: [id, name] } 형태로 반환
 * @param {string[]} groupCdList - 조회할 공통 코드 그룹 리스트 (예: ['A001', 'B003', 'C004'])
 * @returns {Promise<object>} - 예: { A001: [...], B003: [...], C004: [...] }
 */
export const fetchCodeLists = async (groupCdList = []) => {
    if (!groupCdList.length) return {};
    try {
        const response = await axios.post( 'http://localhost:8000/saas-be-catalog/v1/code/list-cd', { comGroupCdList: groupCdList });

        const groupedCodes = groupCdList.reduce((acc, cd) => {
            acc[cd] = [];
            return acc;
        }, {});

        response.data.resultData.list.forEach(item => {
            const group = item.comGroupCd;
            if (groupedCodes[group]) {
                groupedCodes[group].push({
                    id: item.comCd,
                    name: item.cdNm,
                });
            }
        });
        
        // 각 그룹에 "전체" 항목 추가
        const addAll = list => [{ id: '', name: '전체' }, ...list];
        for (const group of groupCdList) {
            groupedCodes[group] = addAll(groupedCodes[group]);
        }
        return groupedCodes;
    } catch (error) {
        console.error('공통 코드 조회 실패:', error);
        // 오류 시 전체 항목만 반환
        return groupCdList.reduce((acc, cd) => {
            acc[cd] = [{ id: '', name: '전체' }];
            return acc;
        }, {});
    }
};
