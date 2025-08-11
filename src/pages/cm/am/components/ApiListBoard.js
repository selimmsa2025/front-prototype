import { useState, useEffect } from 'react';
import EmptyRow from 'components/element/EmptyRow';
import { Link } from 'react-router-dom';

const ApiListBoard = ({ dataList, checkedList, setCheckedList }) => {
  const [checkAll, setCheckAll] = useState(false);

  // 개별 아이템이 체크되어 있는지 확인 (apiId 기준)
  const isChecked = (apiId) => checkedList.some((v) => v.apiId === apiId);

  // 개별 체크박스 클릭 핸들러
  const checkItem = (item) => {
    if (isChecked(item.apiId)) {
      // 이미 체크된 항목이라면 제외
      setCheckedList((prev) =>
        prev.filter((v) => v.apiId !== item.apiId)
      );
    } else {
      // 체크되지 않은 항목이면 추가
      setCheckedList((prev) => [...prev, { apiId: item.apiId, apiVerSn: item.apiVerSn }]);
    }
  };

  // 전체 선택/해제 핸들러
  const checkAllItems = () => {
    if (checkAll) {
      // 전체 체크 해제
      setCheckedList([]);
      setCheckAll(false);
    } else {
      // 전체 체크
      const allChecked = dataList.map((v) => ({
        apiId: v.apiId,
        apiVerSn: v.apiVerSn,
      }));
      setCheckedList(allChecked);
      setCheckAll(true);
    }
  };

  // dataList 변경 시 체크 상태 초기화
  useEffect(() => {
    setCheckedList([]);
    setCheckAll(false);
  }, [dataList]);

  // 체크리스트가 변경될 때마다 콘솔 출력 (확인용)
  useEffect(() => {
    console.log('✅ checkedList 변경됨:', checkedList);
  }, [checkedList]);

  return (
    <div className="board_list">
      <table className="tstyle_list">
        <caption>API 목록</caption>
        <colgroup>
          <col style={{ width: '10%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '10%' }} />
          <col style={{ width: '10%' }} />
          <col style={{ width: '10%' }} />
          <col style={{ width: '30%' }} />
          <col style={{ width: '10%' }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">
              <div className="form_chk ico_only">
                <input
                  type="checkbox"
                  id="chk_all"
                  title="전체선택"
                  checked={checkAll}
                  onChange={checkAllItems}
                />
                <label htmlFor="chk_all">
                  <span className="sr-only">전체선택</span>
                </label>
              </div>
            </th>
            <th scope="col">API명</th>
            <th scope="col">구분</th>
            <th scope="col">통신방식</th>
            <th scope="col">유형</th>
            <th scope="col">표준URI</th>
            <th scope="col">버전</th>
          </tr>
        </thead>
        <tbody>
          {dataList && dataList.length > 0 ? (
            dataList.map((v, i) => (
              <tr key={v.apiId}>
                <td aria-label="선택">
                  <div className="form_chk ico_only">
                    <input
                      type="checkbox"
                      id={`b_chk_${i}`}
                      checked={isChecked(v.apiId)}
                      onChange={() => checkItem(v)}
                    />
                    <label htmlFor={`b_chk_${i}`}>
                      <span className="sr-only">선택</span>
                    </label>
                  </div>
                </td>
                <td aria-label="API명">
                  <strong className="b_tit">
                    <Link
                      to="/am/api/detail"
                      state={{ apiId: v.apiId }}
                      className="ellipsis"
                    >
                      {v.apiNm}
                    </Link>
                  </strong>
                </td>
                <td aria-label="구분">{v.apiDmndRspnsSeNm}</td>
                <td aria-label="통신방식">{v.httpCommSeNm}</td>
                <td aria-label="유형">{v.apiPvsnShpNm}</td>
                <td aria-label="표준URI" className="txt_left">
                  {v.uriAddr}
                </td>
                <td aria-label="버전">Ver.{v.apiVerSn + 1}</td>
              </tr>
            ))
          ) : (
            <EmptyRow colSpan={7} message="로딩 중 또는 데이터 없음" />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ApiListBoard;
