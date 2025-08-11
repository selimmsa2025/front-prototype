import { create } from 'zustand';

export const useUserStore = create((set) => ({
    // state 
    userId : '',
    userNm : '',
    authrtCd : '',
    authrtNm : '',
    instGrntNo : '',
    instNm : '',
    deptGrntNo : '',
    deptNm : '',

    // actions
    // 액션: 사용자 정보 설정
    setUser: ({ userId, userNm, authrtCd, authrtNm, instGrntNo, instNm, deptGrntNo, deptNm }) =>
        set(() => ({
            userId,
            userNm,
            authrtCd,
            authrtNm,
            instGrntNo,
            instNm,
            deptGrntNo,
            deptNm,
        })),

    // 액션: 사용자 정보 초기화
    resetUser: () =>
        set(() => ({
            userId : '',
            userNm : '',
            authrtCd : '',
            authrtNm : '',
            instGrntNo : '',
            instNm : '',
            deptGrntNo : '',
            deptNm : '',
        })),
}))