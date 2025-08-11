import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Breadcrumb from '../../examples/Components/Breadcrumb';
import { Button } from 'components/element';
import { useUserStore } from 'store/zustand/useUserStore';

//import DateRangePicker from '../../Components/DateRangePicker';

function UserLogin() {
  const [userList, setUserList] = useState([]);
  const { userId, userNm, authrtCd, authrtNm, setUser, resetUser } = useUserStore();


  const login = async (userId) => {
    try {
      
      const response = await axios.post(
        'http://localhost:8000/saas-be-catalog/v1/cmmn/user/user-login',{
          userId:userId
      });
      
      console.log('응답 전체 데이터:', response.data);
      let userInfo = response.data?.resultData?.userInfo;
      if (userInfo) {
        console.log('resultdata.userInfo:', userInfo);

        // 예시: 로그인 후 사용자 정보 세팅
        setUser({
          userId: userInfo.userId,
          userNm: userInfo.userNm,
          authrtCd: userInfo.authrtCd,
          authrtNm: userInfo.authrtNm,
          instGrntNo: userInfo.instGrntNo,
          instNm: userInfo.instNm,
          deptGrntNo: userInfo.deptGrntNo,
          deptNm: userInfo.deptNm,

        });       
      // state 확인      
      console.log("로그인 후 "+JSON.stringify(useUserStore.getState()));

      } else {
        console.warn('resultdata.userInfo가 존재하지 않습니다.');
      }
      
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };

  const logout = async () => {
    try {
        // 예시: 로그아웃 시 값 초기화
        resetUser({});
      // state 확인      
      console.log("로그아웃 후 "+useUserStore.getState().userNm);
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/saas-be-catalog//v1/cmmn/user/user-list',
          {}
        );
        console.log('응답 전체 데이터:', response.data);
        if (response.data?.resultData?.list) {
          console.log('resultdata.list:', response.data.resultData.list);
          setUserList(response.data.resultData.list);
        } else {
          console.warn('resultdata.list가 존재하지 않습니다.');
        }
      } catch (error) {
        console.error('데이터 가져오기 실패:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Breadcrumb />
      <div className="page-title-wrap" data-type="responsive">
        <h2 className="h-tit">카탈로그 포털</h2>
      </div>
      <div className="contents_area">
        <div className="tit_area">
          <h2 className="h-tit2">사용자 목록</h2>
        </div>

        <div className="board_list">
          <table className="tstyle_write">
            <caption>사용자 목록</caption>
            <colgroup>
              <col style={{ width: '5%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '25%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '5%' }} />
              <col style={{ width: '5%' }} />
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>기관명</th>
                <th>부서명</th>
                <th>권한명</th>
                <th>사용자명</th>
                <th>로그인</th>
                <th>로그아웃</th>
              </tr>
            </thead>
            <tbody>
              {userList.length > 0 ? (
                userList.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.instNm}</td>
                    <td>{item.deptNm}</td>
                    <td>{item.authrtNm}</td>
                    <td>{item.userNm}</td>
                    <td> 
                      <Button
                        as={'button'}
                        text={'로그인'}
                        color={4}
                        size={1}
                        onClick={(e) => login(item.userId)}
                        >
                        <i class='ri-arrow-right-up-line' />
                      </Button>
                    </td>
                    <td>  
                      <Button
                        as={'button'}
                        text={'로그아웃'}
                        color={4}
                        size={1}
                        onClick={(e) => logout()}
                        >
                        <i class='ri-arrow-right-up-line' />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">로딩 중 또는 데이터 없음</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
