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
  const checkAllItems = () => {
    if (checkAll) {
      setCheckedList([]);
    } else {
      setCheckedList(dataList.map((data, index) => index));
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
      <div className='commu_list'>
        <ul>
          {dataList?.map((v, i) => {
            return (
              <li>
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
                  <span className='sr-only'>게시글 선택</span>
                </label>
                <div className='bx'>
                  <div className='txt_box'>
                    {v.categoryList.map((category) => {
                      return <span className='tag1'>{category}</span>;
                    })}
                    <strong className='title'>
                      <a href='#'>{v.title}</a>
                    </strong>
                    <ul className='list'>
                      {v.metaDataList.map((metaData) => {
                        return <li>{metaData}</li>;
                      })}
                    </ul>
                    <p className='text'>
                      메타데이터제목:
                      <span className='point'>{v.metaDataTitle}</span>
                    </p>
                    <div className='right'>
                      <a href='#' className='btn1'>
                        버튼
                      </a>
                    </div>
                  </div>
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
