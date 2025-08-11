import { useState, useEffect } from 'react';

export default function App(params) {
  const { dataList, handleAddUser } = params;
  //체크박스
  const [checkAll, setCheckAll] = useState(false);
  const [checkedList, setCheckedList] = useState([]);

  const checkItem = (index) => {
    if (checkedList.includes(index)) {
      setCheckedList((prev) => {
        return prev.filter((v) => v != index);
      });
    } else {
      setCheckedList((prev) => {
        return [...prev, index];
      });
    }
  };
  const checkAllItems = () => {
    if (checkAll) {
      setCheckAll(false);
      setCheckedList([]);
    } else {
      setCheckAll(true);
      setCheckedList(dataList.map((data, index) => index));
    }
  };

  useEffect(() => {
    setCheckedList([]);
    setCheckAll(false);
  }, [dataList]);

  return (
    <>
      <div class='board_list'>
        <table class='tstyle_list'>
          <caption>목록 - 번호, Column으로 구성</caption>
          <colgroup>
            <col style={{ width: '10%' }} />
            <col />
            <col style={{ width: '10%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '10%' }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">아이디</th>
              <th scope="col">이름</th>
              <th scope="col">부서(과)</th>
              <th scope="col">연락처</th>
              <th scope="col">담당업무</th>
            </tr>
          </thead>
          <tbody>
            {dataList?.map((v, i) => {
              return (
                <>
                  <tr>
                    <td class='m_hidden' aria-label='번호'>
                      {v.직원번호}
                    </td>
                    <td class='txt_left' aria-label='제목'>
                      <strong class='b_tit'>
                        <a href='#' class='ellipsis' onClick={(e) => { e.preventDefault(); handleAddUser?.(v.직원번호) }}>
                          {v.아이디}
                        </a>
                      </strong>
                    </td>
                    <td aria-label="Column">내용</td>
                    <td aria-label="Column">내용</td>
                    <td aria-label="Column">내용</td>
                    <td aria-label="Column">내용</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
