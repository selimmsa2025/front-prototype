import { useState, useEffect } from 'react';
import { Button, Input } from '../Element';

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
              <th scope='col'>파일명</th>
              <th scope='col'>크기</th>
              <th scope='col'>날짜</th>
              <th scope='col'>파일 업로드</th>
              <th scope='col'>설명</th>
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
                    <td aria-label='파일명' class='txt_left'>
                      <strong class='b_tit'>
                        <span class='ellipsis'>{v.title}</span>
                      </strong>
                    </td>
                    <td aria-label='크기'>{v.fileSize}</td>
                    <td aria-label='날짜'>{v.createDate}</td>
                    <td aria-label='파일 업로드'>
                      <Button as={'a'} color={4} text={`파일선택`}>
                        {' '}
                        <i class='ri-search-line'></i>
                      </Button>
                    </td>
                    <td class='w15p' aria-label='설명'>
                      <Input
                        name='frm1'
                        id='frm1'
                        title='항목을 입력해주세요.'
                        placeholder='항목을 입력해주세요.'
                        value={v.description}
                      />
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
