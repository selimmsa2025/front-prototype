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
              <th scope='col'>
                Column(title)
                <span class='essential'>
                  *<span class='sr-only'>필수</span>
                </span>
              </th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>담당부서</th>
              <th scope='col'>첨부</th>
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
                      </strong>
                    </td>
                    <td aria-label='담당부서'>
                      <span class='state_icon type1'>진행</span>
                    </td>
                    <td aria-label='담당부서'>
                      <i class='ri-save-3-fill'></i>
                      <span class='sr-only'>문서</span>
                    </td>
                    <td aria-label='담당부서'>
                      <a href='javscript:void(0)'>
                        <i class='ri-edit-line'></i>
                        <span class='sr-only'>수정</span>
                      </a>
                    </td>
                    <td aria-label='담당부서'>
                      <a href='javscript:void(0)'>
                        <i class='ri-delete-bin-5-line'></i>
                        <span class='sr-only'>삭제</span>
                      </a>
                    </td>
                    <td aria-label='담당부서'>
                      <span class='state_icon'>대기</span>
                    </td>
                    <td aria-label='담당부서'>
                      <span class='state_icon type2'>완료</span>
                    </td>
                    <td aria-label='담당부서'>
                      <span class='state_icon type1'>진행</span>
                    </td>
                    <td aria-label='담당부서'>{v.depart}</td>
                    <td aria-label='담당부서'>{v.depart}</td>
                    <td aria-label='담당부서'>{v.depart}</td>
                    <td aria-label='담당부서'>{v.depart}</td>
                    <td aria-label='담당부서'>{v.depart}</td>
                    <td aria-label='담당부서'>{v.depart}</td>
                    <td aria-label='담당부서'>{v.depart}</td>
                    <td aria-label='담당부서'>{v.depart}</td>
                    <td aria-label='담당부서'>{v.depart}</td>
                    <td aria-label='담당부서'>{v.depart}</td>
                    <td aria-label='담당부서'>{v.depart}</td>
                    <td aria-label='첨부'>
                      <i class='attachment pdf'>
                        <span class='sr_only'>첨부파일 있음</span>
                      </i>
                    </td>
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
