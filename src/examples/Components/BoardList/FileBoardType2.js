import { useState, useEffect } from 'react';
import { Button } from '../Element';
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
              <th scope='col'>번호</th>
              <th scope='col'>문서구분</th>
              <th scope='col'>파일명</th>
              <th scope='col'>크기</th>
              <th scope='col'>날짜</th>
              <th scope='col'>파일 업로드</th>
            </tr>
          </thead>
          <tbody>
            {dataList?.map((v, i) => {
              return (
                <>
                  <tr>
                    <td aria-label='번호' class='m_hidden'>
                      1
                    </td>
                    <td aria-label='문서구분'>{v.category}</td>
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
