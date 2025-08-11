import { useState, useEffect } from 'react';

export default function App (params) {
  const { dataList } = params;
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
          <caption>
            공지사항 목록 - 번호, 제목, 담당부서, 첨부, 등록일, 조회로 구성
          </caption>
          <thead>
            <tr>
              <th scope='col'>
                <div class='form_chk ico_only'>
                  <input
                    type='checkbox'
                    id='chk_all'
                    title='전체선택'
                    checked={checkAll}
                    onClick={checkAllItems}
                  />
                  <label for='chk_all'>
                    <span class='sr-only'>전체선택</span>
                  </label>
                </div>
              </th>
              <th scope='col'>번호</th>
              <th scope='col'>제목</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>첨부</th>
              <th scope='col'>등록일</th>
              <th scope='col'>조회</th>
            </tr>
          </thead>
          <tbody>
            {dataList?.map((v, i) => {
              return (
                <>
                  <tr>
                    <td aria-label='선택'>
                      <div class='form_chk ico_only'>
                        <input
                          type='checkbox'
                          name={`b_chk_${i}`}
                          id={`b_chk_${i}`}
                          checked={checkedList.includes(i)}
                          onClick={() => {
                            checkItem(i);
                          }}
                        />
                        <label for={`b_chk_${i}`}>
                          <span class='sr-only'>선택</span>
                        </label>
                      </div>
                    </td>
                    <td class='m_hidden' aria-label='번호'>
                      {v.id}
                    </td>
                    <td class='txt_left' aria-label='제목'>
                      <strong class='b_tit'>
                        <a href='#' class='ellipsis'>
                          {v.title}
                        </a>

                        {i == 0 ? (
                          <span class='tag1'>필수</span>
                        ) : (
                          <img
                            src='/img/common/icon_new.jpg'
                            alt='새글'
                            class='b_new'
                          />
                        )}
                      </strong>
                    </td>
                    <td aria-label='담당부서'>{v.depart}</td>
                    <td aria-label='담당부서'>{v.depart}</td>
                    <td aria-label='담당부서'>{v.depart}</td>
                    <td aria-label='담당부서'>{v.depart}</td>
                    <td aria-label='담당부서'>{v.depart}</td>
                    <td
                      aria-label='첨부'
                      style={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <i class='attachment pdf'>
                        <span class='sr_only'>첨부파일 있음</span>
                      </i>
                    </td>
                    <td aria-label='등록일'>{v.createDate}</td>
                    <td aria-label='조회'>{v.count}</td>
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
