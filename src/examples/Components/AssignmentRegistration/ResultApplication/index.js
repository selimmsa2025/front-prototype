import React from 'react';
import {
  Input,
  Select,
  DatePicker,
  Check,
  Button,
} from '../../../Components/Element';

export default function App() {
  return (
    <>
      <div class="contents_area">
        <div class="tit_area">
          <h2 class="h-tit2" style={{ marginTop: '5%' }}>
            과제정보
          </h2>
        </div>

        <div class="board_list">
          <table class="tstyle_write">
            <colgroup>
              <col style={{ width: '10%' }} />
              <col style={{ width: '12%' }} />
              <col style={{ width: '28%' }} />
              <col style={{ width: '5%' }} />
              <col style={{ width: '45%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row" colSpan={2}>
                  과제명
                </th>
                <td colSpan={3}>테스트과제</td>
              </tr>
              <tr>
                <th scope="row" colSpan={2}>
                  기관명
                </th>
                <td colSpan={3}>행정안전부</td>
              </tr>

              <tr>
                <th
                  scope="row"
                  rowSpan={3}
                  style={{ borderRight: '1px solid #bbb' }}
                >
                  담당자정보
                </th>
              </tr>
              <tr>
                <th scope="row">이름</th>
                <td>
                  <div class="form_group">
                    관리자
                    <Button
                      as={'button'}
                      text={'이력'}
                      color={7}
                      onClick={() => {}}
                    />
                  </div>
                </td>
                <th scope="row">부서</th>
                <td>
                  <p>행정제도과</p>
                </td>
              </tr>
              <tr>
                <th scope="row">전화번호</th>
                <td>
                  <div class="form_group">042-862-93651</div>
                </td>
                <th scope="row">이메일</th>
                <td>
                  <p>helpkms14@mail.go.kr</p>
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan={2}>
                  연구용역방식
                </th>
                <td>위탁형</td>
                <th scope="row">연구기간</th>
                <td>20240416~20240418</td>
              </tr>
              <tr>
                <th scope="row" colSpan={2}>
                  연구수행기관
                </th>
                <td>테스트용</td>
                <th scope="row">책임연구원</th>
                <td>관리자테스트</td>
              </tr>
            </tbody>
          </table>

          <div class="tit_area">
            <h2 class="h-tit2" style={{ marginTop: '5%' }}>
              확인결과 정보
            </h2>
          </div>

          <div class="board_list">
            <table class="tstyle_write">
              <colgroup>
                <col style={{ width: '10%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '28%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '40%' }} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row" colSpan={2}>
                    활용확인날짜
                  </th>
                  <td>
                    <DatePicker />
                  </td>
                  <th scope="row">
                    확인구분<span class="essential">(*)</span>
                  </th>
                  <td>
                    <Select
                      name="sel1"
                      id="sel1"
                      class="form_sel"
                      title="조건을 선택하세요."
                      data={[{ id: '1', name: '법령제·개정' }]}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row" colSpan={2} rowSpan={4}>
                    확인결과보고서<span class="essential">(*)</span>
                  </th>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <div class="form_group">
                      <Input name="frm1" id="frm1" />
                      <Check
                        name="chk_1"
                        data={[
                          {
                            value: '1',
                            title: '삭제',
                            displayTitle: true,
                            checked: false,
                          },
                        ]}
                      />
                    </div>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td colSpan={2}>
                    <div class="form_group">
                      <Input name="frm2" id="frm2" />
                      <Button as={'button'} text={'파일선택'} color={6} />
                      <Button as={'button'} text={'삭제'} color={6} />
                    </div>
                  </td>
                  <td />
                </tr>
                <tr scope="row">
                  <td colSpan={3}>
                    <p>[서식받기] 정책연구 평가 결과서</p>
                    <p>
                      평가결과서에 평가위원별 개별점수가 포함되지않도록{' '}
                      <strong style={{ color: '#FF7F00' }}>
                        반드시 프리즘 등록용 서식
                      </strong>
                      을 사용하시기 바랍니다.
                    </p>
                    <Check
                      name="chk_2"
                      data={[
                        {
                          value: '1',
                          title: '내용복사 불가',
                          displayTitle: true,
                          checked: false,
                        },
                        {
                          value: '2',
                          title: '내용편집 불가',
                          displayTitle: true,
                          checked: false,
                        },
                        {
                          value: '3',
                          title: '파일인쇄 불가',
                          displayTitle: true,
                          checked: false,
                        },
                      ]}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <p>*저장처리와 함게 첨부파일이 업로드 됩니다.</p>
          </div>
          <div class="bet_btn_area">
            <div class="bottom_right_area">
              <Button text={'수정하기'} size={3} color={1} />
              <Button text={'취소하기'} size={3} color={2} />
              <Button text={'목록으로'} size={3} color={7} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
