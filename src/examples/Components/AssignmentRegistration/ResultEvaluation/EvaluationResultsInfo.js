import React from 'react';
import {
  Input,
  Select,
  DatePicker,
  Check,
  Button,
  Textarea,
} from '../../Element';

export default function EvaluationResultsInfo () {
  return (
    <>
      <div class='tit_area'>
        <h2 class='h-tit2' style={{ marginTop: '5%' }}>
          평가결과 정보
        </h2>
      </div>
      <div class='board_list'>
        <table class='tstyle_write'>
          <caption>공지사항 상세 - 항목들로 구성</caption>
          <colgroup>
            <col style={{ width: '10%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '28%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '40%' }} />
          </colgroup>
          <tbody>
            <tr>
              <th scope='row' colSpan={2} rowSpan={3}>
                평가위원<span class='essential'>(*)</span>
              </th>
              <td colSpan={3}>
                <div class='form_group'>
                  구분
                  <Select
                    name='sel1'
                    id='sel1'
                    class='form_sel'
                    title='조건을 선택하세요.'
                    data={[{ id: '1', name: '위원장' }]}
                  />
                  성명<span class='essential'>(*)</span>
                  <Input name='frm1' id='frm1' />
                  소속<span class='essential'>(*)</span>
                  <Input name='frm2' id='frm2' />
                  <Button as={'button'} text={'-삭제'} color={6} />
                  <Button as={'button'} text={'-추가'} color={6} />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <div class='form_group'>
                  구분
                  <Select
                    name='sel2'
                    id='sel2'
                    class='form_sel'
                    title='조건을 선택하세요.'
                    data={[{ id: '1', name: '내부인원' }]}
                  />
                  성명<span class='essential'>(*)</span>
                  <Input name='frm3' id='frm3' />
                  소속<span class='essential'>(*)</span>
                  <Input name='frm4' id='frm4' />
                  <Button as={'button'} text={'-삭제'} color={6} />
                  <Button as={'button'} text={'-추가'} color={6} />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <div class='form_group'>
                  구분
                  <Select
                    name='sel3'
                    id='sel3'
                    class='form_sel'
                    title='조건을 선택하세요.'
                    data={[{ id: '1', name: '내부인원' }]}
                  />
                  성명<span class='essential'>(*)</span>
                  <Input name='frm5' id='frm5' />
                  소속<span class='essential'>(*)</span>
                  <Input name='frm6' id='frm6' />
                  <Button as={'button'} text={'-삭제'} color={6} />
                  <Button as={'button'} text={'-추가'} color={6} />
                </div>
              </td>
            </tr>

            <tr>
              <th scope='row' colSpan={2}>
                평가일자<span class='essential'>(*)</span>
              </th>
              <td colSpan={3}>
                <DatePicker />
              </td>
            </tr>

            <tr>
              <th scope='row' colSpan={2} rowSpan={4}>
                평가결과서<span class='essential'>(*)</span>
              </th>
            </tr>
            <tr>
              <td colSpan={2}>
                <div class='form_group'>
                  <Input name='frm7' id='frm7' />
                  <Check
                    name='chk_1'
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
                <div class='form_group'>
                  <Input name='frm8' id='frm8' />
                  <Button as={'button'} text={'파일선택'} color={6} />
                  <Button as={'button'} text={'삭제'} color={6} />
                </div>
              </td>
              <td />
            </tr>
            <tr scope='row'>
              <td colSpan={3}>
                <p>[서식받기] 정책연구 평가 결과서</p>
                <p>
                  평가결과서에 평가위원별 개별점수가 포함되지않도록{' '}
                  <strong style={{ color: '#FF7F00' }}>
                    반드시 프리즘 등롱욕 서식
                  </strong>
                  을 사용하시기 바랍니다.
                </p>
                <Check
                  name='chk_2'
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
            <tr>
              <th scope='row' colSpan={2}>
                담당자의견<span class='essential'>(*)</span>
              </th>
              <td colSpan={3}>
                <Textarea
                  name=''
                  rows='4'
                  cols='76'
                  style={{
                    resize: 'vertical',
                  }}
                />
              </td>
            </tr>

            <tr>
              <th
                scope='row '
                rowSpan={4}
                style={{ borderRight: '1px solid #bbb' }}
              >
                미흡과제 시정조치
              </th>
            </tr>
            <tr>
              <th scope='row'>시정조치구분</th>
              <td colSpan={2}>
                <Select
                  name='sel2'
                  id='sel2'
                  class='form_sel'
                  title='조건을 선택하세요.'
                  data={[{ id: '1', name: '불가이익부가' }]}
                />
              </td>
              <td />
            </tr>
            <tr>
              <th scope='row'>시정조치내용</th>
              <td colSpan={2}>
                <Input name='frm9' id='frm9' placeholder='과제테스트중입니다' />
              </td>
              <td />
            </tr>
            <tr>
              <th scope='row'>시정조치증빙서류</th>
              <td colSpan={2}>
                <div class='form_group'>
                  <Input name='frm10' id='frm10' />
                  <Button as={'button'} text={'파일선택'} color={6} />
                  <Button as={'button'} text={'삭제'} color={6} />
                </div>
              </td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
      <p>*저장처리와 함께 첨부파일이 업로드됩니다.</p>

      <div class='bet_btn_area'>
        <div class='bottom_right_area'>
          <Button text={'평가결과수정'} size={3} color={1} />
          <Button text={'평가결과삭제'} size={3} color={7} />
        </div>
      </div>
      <div class='bet_btn_area'>
        <div class='bottom_right_area'>
          <Button text={'취소하기'} size={3} color={7} />
          <Button text={'목록으로'} size={3} color={6} />
        </div>
      </div>
    </>
  );
}
