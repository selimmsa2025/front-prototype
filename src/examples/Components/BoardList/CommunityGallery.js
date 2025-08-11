import { useState, useEffect } from 'react';

export default function App (params) {
  const { dataList, checkAll } = params;
  //체크박스
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

  useEffect(() => {
    if (checkAll) {
      setCheckedList(dataList.map((data, index) => index));
    } else {
      setCheckedList([]);
    }
  }, [checkAll]);

  useEffect(() => {
    setCheckedList([]);
  }, [dataList]);

  return (
    <>
      <div className='board_list'>
        <ul className='gallery_list'>
          {dataList?.map((v, i) => {
            return (
              <li>
                <a href='#' class='thumb' aria-hidden='true'>
                  <img src='/img/common/noimage.jpg' alt='' />
                </a>
                <div class='desc'>
                  <div class='form_chk'>
                    <input
                      type='checkbox'
                      name={`chk_${i}`}
                      id={`chk_${i}`}
                      checked={checkedList.includes(i)}
                      onClick={() => {
                        checkItem(i);
                      }}
                    />
                    <label for={`chk_${i}`}>
                      <span class='sr-only'>게시글 선택</span>
                    </label>
                  </div>
                  {v.categoryList.map((category) => {
                    return <span class='tag1'>{category}</span>;
                  })}
                  <strong class='title'>
                    <a href='#'>{v.title}</a>
                  </strong>
                  <span class='date'>
                    <strong class='sr-only'>작성일</strong>
                    {v.createDate}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='empty_txt'>등록된 데이터가 없습니다.</div>
    </>
  );
}
