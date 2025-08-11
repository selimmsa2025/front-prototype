import { useState, useEffect } from 'react';
import Select from '../Element/Select';
import { DatePicker, Input } from '../Element';
import _ from 'lodash';
export default function App(params) {
  const { dataList, setDataList } = params;
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
        <table class='tstyle_list'>
          <caption>
            공지사항 목록 - 번호, 제목, 담당부서, 첨부, 등록일, 조회로 구성
          </caption>
          <colgroup>
            <col />
            <col />
            <col class='w15p' />
            <col />
            <col />
            <col />
            <col class='w15p' />
          </colgroup>
          <thead>
            <tr>
              <th scope='col'>
                <div class='form_chk ico_only'>
                  <input
                    type='checkbox'
                    id='chk_all'
                    title='전체선택'
                    checked={checkAll}
                    onClick={() => {
                      setCheckAll(!checkAll);
                    }}
                  />
                  <label for='chk_all'>
                    <span class='sr-only'>전체선택</span>
                  </label>
                </div>
              </th>
              <th scope='col'>번호</th>
              <th scope='col'>Column</th>
              <th scope='col'>Column</th>
              <th scope='col'>Column</th>
              <th scope='col'>Column</th>
              <th scope='col'>Column</th>
              <th scope='col'>Column</th>
            </tr>
          </thead>
          <tbody>
            {dataList?.map((v, i) => {
              return (
                <tr>
                  <td aria-label='선택'>
                    <div class='form_chk ico_only'>
                      <input
                        type='checkbox'
                        id={`b_chk_1_${i}`}
                        title='선택'
                        checked={checkedList.includes(i)}
                        onClick={() => {
                          checkItem(i);
                        }}
                      />
                      <label for={`b_chk_1_${i}`}>
                        <span class='sr-only'>선택</span>
                      </label>
                    </div>
                  </td>
                  <td class='m_hidden' aria-label='번호'>
                    {v.id}
                  </td>
                  <td aria-label=''>
                    <Input
                      value={v.title}
                      name='frm_ch1'
                      id='frm_ch1'
                      title='입력해주세요.'
                      placeholder='입력해주세요.'
                    />
                  </td>
                  <td aria-label=''>
                    <Select
                      class='size_sm'
                      name='sel1'
                      id='sel1'
                      title='조건을 선택하세요'
                      data={[
                        { id: 'all', name: '전체' },
                        { id: '1', name: '조건1' },
                        { id: '2', name: '조건2' },
                      ]}
                    />
                  </td>
                  <td class='txt_left' aria-label='제목'>
                    <Input
                      name='frm_ch2'
                      id='frm_ch2'
                      title='입력해주세요.'
                      placeholder='입력해주세요.'
                    />
                  </td>
                  <td aria-label='선택'>
                    <div class='form_chk ico_only'>
                      <input type='checkbox' id={`b_chk_1-${i}`} title='선택' />

                      <label for={`b_chk_1-${i}`}>
                        <span class='sr-only'>선택</span>
                      </label>
                    </div>
                  </td>
                  <td aria-label=''>
                    <Input
                      name='frm_ch3'
                      id='frm_ch3'
                      title='입력해주세요.'
                      placeholder='입력해주세요.'
                    />
                  </td>
                  <td aria-label='등록일'>
                    <DatePicker
                      type={'date'}
                      value={v.createDate}
                      onChange={(date) => {
                        setDataList((prev) => {
                          return _.map(prev, (p) => {
                            if (p.id == v.id) {
                              return {
                                ...p,
                                createDate: date,
                              };
                            } else {
                              return p;
                            }
                          });
                        });
                      }}
                      pattern={'yyyy.MM.dd'}
                      title='종료날짜를 입력하세요. 입력방법 예시:2024.12.31'
                      placeholder='YYYY.MM.DD'
                      wihtoutWrapTag={true}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
