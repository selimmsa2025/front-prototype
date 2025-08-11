import React from 'react';
import { Input, DatePicker, Check, Button } from '../../../Components/Element';
export default function App () {
  return (
    <div class='contents_area'>
      <div class='tit_area'>
        <h2 class='h-tit2' style={{ marginTop: '5%' }}>
          과제정보
        </h2>
      </div>

      <div class='board_list'>
        <table class='tstyle_write'>
          <caption>공지사항 상세 - 항목들로 구성</caption>
          <colgroup>
            <col style={{ width: '10%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '28%' }} />
            <col style={{ width: '5%' }} />
            <col style={{ width: '45%' }} />
          </colgroup>
          <tbody>
            <tr>
              <th scope='row' colSpan={2}>
                <p>과제명</p>
              </th>
              <td colSpan={3}>테스트 과제</td>
            </tr>
            <tr>
              <th scope='row' colSpan={2}>
                기관명
              </th>
              <td colSpan={3}>
                <p>행정안전부</p>
              </td>
            </tr>

            <tr>
              <th
                scope='row'
                rowSpan={3}
                style={{ borderRight: '1px solid #bbb' }}
              >
                담당자정보
              </th>
            </tr>
            <tr>
              <th scope='row'>이름</th>
              <td>
                <div class='form_group'>
                  관리자
                  <Button as={'button'} text={'이력'} color={7} />
                </div>
              </td>
              <th scope='row'>부서</th>
              <td>
                <p>행정제도과</p>
              </td>
            </tr>
            <tr>
              <th scope='row'>전화번호</th>
              <td>
                <div class='form_group'>042-862-93651</div>
              </td>
              <th scope='row'>이메일</th>
              <td>
                <p>helpkms14@mail.go.kr</p>
              </td>
            </tr>
            <tr>
              <th scope='row' colSpan={2}>
                연구용역방식
              </th>
              <td>위탁형</td>
              <th scope='row'>
                <p>연구기간</p>
              </th>
              <td>20240416~20240418</td>
            </tr>
            <tr>
              <th scope='row' colSpan={2}>
                연구수행기관
              </th>
              <td>테스트용</td>
              <th scope='row'>
                <p>책임연구원</p>
              </th>
              <td>관리자테스트</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class='tit_area'>
        <h2 class='h-tit2' style={{ marginTop: '5%' }}>
          <div class='form_group'>
            중간점검 정보
            <Check
              name='chk_1'
              data={[
                {
                  value: '1',
                  title: '미점검',
                  displayTitle: true,
                  checked: false,
                },
              ]}
            />
          </div>
        </h2>
      </div>
      <div class='board_list'>
        <table class='tstyle_list'>
          <caption>
            공지사항 목록 - 번호, 첨부, 게시글 분류, 제목, 등록자, 등록일,
            조회수로 구성
          </caption>
          <thead>
            <tr>
              <th scope='col'>
                순번
                <button type='button' class='btn_sort'>
                  <span class='sr-only'>정렬변경</span>
                  <i />
                </button>
              </th>
              <th scope='col'>
                제출일자
                <button type='button' class='btn_sort'>
                  <span class='sr-only'>정렬변경</span>
                  <i />
                </button>
              </th>
              <th scope='col'>
                게시글 분류
                <button type='button' class='btn_sort'>
                  <span class='sr-only'>정렬변경</span>
                  <i />
                </button>
              </th>
              <th scope='col'>
                중간점검일자
                <button type='button' class='btn_sort'>
                  <span class='sr-only'>정렬변경</span>
                  <i />
                </button>
              </th>
              <th scope='col'>
                등록자
                <button type='button' class='btn_sort'>
                  <span class='sr-only'>정렬변경</span>
                  <i />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>20240424</td>
              <td>20240424</td>
              <td>관리자</td>
              <td>2024-04-24 07:58:00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class='tit_area'>
        <h2 class='h-tit2' style={{ marginTop: '5%' }}>
          <div class='form_group'></div>
        </h2>
      </div>
      <div class='board_list'>
        <table class='tstyle_write'>
          <caption>공지사항 상세 - 항목들로 구성</caption>
          <colgroup>
            <col style={{ width: '10%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '28%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '35%' }} />
          </colgroup>
          <tbody>
            <tr>
              <th scope='row' colSpan={2}>
                제출일자
                <span class='essential'>(*)</span>
              </th>
              <td>
                <DatePicker />
              </td>
              <th scope='row'>
                중간점검일자
                <span class='essential'>(*)</span>
              </th>
              <td>
                <DatePicker />
              </td>
            </tr>
            <tr>
              <th scope='row' colSpan={2}>
                중간산출물 <span class='essential'>(*)</span>
              </th>
              <td colSpan={2}>
                <div class='form_group'>
                  <Input name='frm1' id='frm1' />
                  <Button as={'button'} type='submit' text={'삭제'} color={4} />
                  <Button as={'button'} text={'검색'} color={1} />
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope='row' colSpan={2}>
                중간점검 결과서 <span class='essential'>(*)</span>
              </th>
              <td colSpan={2}>
                <div class='form_group'>
                  <Input name='frm2' id='frm2' />
                  <Button as={'button'} type='submit' text={'삭제'} color={4} />
                  <Button as={'button'} text={'검색'} color={1} />
                </div>
                <p>[서식받기]연구진행상황 중간점검 결과서</p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p>* 저장처리와 함께 첨부파일이 업로드됩니다.</p>
      </div>

      <div class='bet_btn_area'>
        <div class='bottom_right_area'>
          <Button text={'추가하기'} size={3} color={1} />
          <Button text={'초기화'} size={3} color={7} />
          <Button text={'취소하기'} size={3} color={7} />
          <Button text={'목록으로'} size={3} color={4} />
        </div>
      </div>
    </div>
  );
}
