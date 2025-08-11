import React from 'react';
import { Input, DatePicker, Button, Textarea } from '../../Element';

export default function ResearchReport () {
  return (
    <>
      <div class='tit_area'>
        <h2 class='h-tit2' style={{ marginTop: '5%' }}>
          연구보고서
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
                보고서제목
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
                등록자
                <button type='button' class='btn_sort'>
                  <span class='sr-only'>정렬변경</span>
                  <i />
                </button>
              </th>
              <th scope='col'>
                등록일시
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
              <td>테스트_연구과제</td>
              <td>2024-04-25</td>
              <td>관리자</td>
              <td>2024-04-24 07:58:00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class='tit_area'>
        <h2 class='h-tit2'></h2>
      </div>
      <div class='board_list'>
        <table class='tstyle_write'>
          <caption>공지사항 상세 - 항목들로 구성</caption>
          <colgroup>
            <col style={{ width: '15%' }} />
            <col style={{ width: '35%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '40%' }} />
          </colgroup>
          <tbody>
            <tr>
              <th scope='row'>
                제목<span class='essential'>(*)</span>
              </th>
              <td colSpan={3}>
                <Input name='frm1' id='frm1' />
              </td>
            </tr>
            <tr>
              <th scope='row'>영문제목</th>
              <td>
                <Input name='frm2' id='frm2' />
              </td>
              <th scope='row'>부제목</th>
              <td>
                <Input name='frm3' id='frm3' />
              </td>
            </tr>

            <tr>
              <th scope='row'>
                목차<span class='essential'>(*)</span>
              </th>
              <td colSpan={3}>
                <Textarea
                  name=''
                  rows='4'
                  cols='76'
                  style={{
                    resize: 'vertical',
                  }}
                  placeholder='목차를 20자 이상 입력해주세요.'
                />
              </td>
            </tr>
            <tr>
              <th scope='row'>
                초록<span class='essential'>(*)</span>
              </th>
              <td colSpan={3}>
                <Textarea
                  name=''
                  rows='4'
                  cols='76'
                  style={{
                    resize: 'vertical',
                  }}
                  placeholder='초록을 20자 이상 입력해주세요.'
                />
              </td>
            </tr>

            <tr>
              <th scope='row'>
                주제어<span class='essential'>(*)</span>
              </th>
              <td colSpan={2}>
                <Input name='frm4' id='frm4' />
              </td>
              <td />
            </tr>

            <tr>
              <th scope='row'>제작일자</th>
              <td>
                <DatePicker />
              </td>
              <th scope='row'>제출일자</th>
              <td>
                <DatePicker />
              </td>
            </tr>

            <tr>
              <th scope='row'>공헌자</th>
              <td colSpan={2}>
                <div class='form_group'>
                  <Input name='frm5' id='frm5' />
                  <p style={{ fontSize: 'small' }}>(예:홍길동, 홍길순)</p>
                </div>
              </td>
              <td />
            </tr>
            <tr>
              <th scope='row'>
                연구보고서<span class='essential'>(*)</span>
              </th>
              <td colSpan={3}>
                <div class='form_group'>
                  <Input name='frm6' id='frm6' />
                  <Button
                    as={'button'}
                    type='submit'
                    text={'파일첨부'}
                    color={4}
                  />
                  <Button as={'button'} type='submit' text={'삭제'} color={4} />
                  <Button
                    as={'button'}
                    type='submit'
                    text={'+추가'}
                    color={4}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th scope='row'>
                중복검사
                <br />
                결과보고서<span class='essential'>(*)</span>
              </th>
              <td colSpan={3}>
                <div class='form_group'>
                  <Input name='frm7' id='frm7' />
                  <Button
                    as={'button'}
                    type='submit'
                    text={'파일첨부'}
                    color={4}
                  />
                  <Button as={'button'} type='submit' text={'삭제'} color={4} />
                </div>
                <p style={{ fontSize: 'small' }}>
                  -민간 유사검사 시스템을 활용하여 연구보고서에 대한 시행 후
                  결과보고서를 제출하세요.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class='bet_btn_area'>
        <div class='bottom_right_area'>
          <Button text={'추가하기'} size={3} color={1} />
          <Button text={'초기화'} size={3} color={7} />
        </div>
      </div>
    </>
  );
}
