import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Breadcrumb from '../../Components/Breadcrumb';
import {
  Input,
  Select,
  DatePicker,
  Check,
  Button,
} from '../../Components/Element';
import DateRangePicker from '../../Components/DateRangePicker';

function Prototype() {
  const [saasList, setSaasList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/saas-be-catalog/v1/pilotsample/list',
          {}
        );
        console.log('응답 전체 데이터:', response.data);
        if (response.data?.resultData?.list) {
          console.log('resultdata.list:', response.data.resultData.list);
          setSaasList(response.data.resultData.list);
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
        <h2 className="h-tit">카탈로그 프로토타입</h2>
      </div>
      <div className="contents_area">
        <div className="tit_area">
          <h2 className="h-tit2">Test 테이블 목록</h2>
        </div>

        <div className="board_list">
          <table className="tstyle_write">
            <caption>SaaS 목록</caption>
            <colgroup>
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>Temp1</th>
                <th>Temp2</th>
                <th>Temp3</th>
                <th>Temp4</th>
              </tr>
            </thead>
            <tbody>
              {saasList.length > 0 ? (
                saasList.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.temp1}</td>
                    <td>{item.temp2}</td>
                    <td>{item.temp3}</td>
                    <td>{item.temp4}</td>
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

export default Prototype;
