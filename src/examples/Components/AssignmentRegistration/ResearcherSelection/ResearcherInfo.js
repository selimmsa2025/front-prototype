import React from 'react';
import { Input, Select, DatePicker, Button } from '../../../Components/Element';

export default function ResearcherInfo () {
  return (
    <>
      <div class='tit_area'>
        <h2 class='h-tit2' style={{ marginTop: '5%' }}>
          연구자선정정보
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
              <th scope='row' colSpan={2}>
                계약일자<span class='essential'>(*)</span>
              </th>
              <td>
                <DatePicker />
              </td>
              <th scope='row'>
                계약방식<span class='essential'>(*)</span>
              </th>
              <td>
                <Select
                  name='sel1'
                  id='sel1'
                  class='form_sel'
                  title='조건을 선택하세요.'
                  data={[{ id: '1', name: '수의계약' }]}
                />
              </td>
            </tr>
            <tr>
              <th scope='row' colSpan={2}>
                계약금액<span class='essential'>(*)</span>
              </th>
              <td colSpan={'3'}>
                <Input
                  name='frm1'
                  id='frm1'
                  placeholder=''
                  value='100,000,000,000'
                />
              </td>
            </tr>
            <tr>
              <th
                scope='row'
                rowSpan={2}
                style={{ borderRight: '1px solid #ddd' }}
              >
                연구수행기관
              </th>
              <th scope='row'>
                기관명<span class='essential'>(*)</span>
              </th>
              <td>
                <div class='form_group'>
                  <Input
                    name='frm2'
                    id='frm2'
                    placeholder=''
                    value='안정성평가연구소'
                  />
                  <Button as={'button'} text={'검색'} color={1} />
                  <Button as={'button'} type='submit' text={'삭제'} color={4} />
                </div>
              </td>
              <th scope='row'>
                구분<span class='essential'>(*)</span>
              </th>
              <td>
                <p>정부출연기관</p>
              </td>
            </tr>
            <tr>
              <th scope='row'>전화번호</th>
              <td colSpan={3}>
                <p>055-750-3712</p>
              </td>
            </tr>

            <tr>
              <th scope='row' colSpan={2}>
                공동수행기관
              </th>
              <td colSpan={3}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button text={'+추가하기'} size={3} color={7} />
                </div>
              </td>
            </tr>
            <tr>
              <th
                scope='row'
                style={{ borderRight: '1px solid #bbb' }}
                rowSpan={2}
              >
                책임연구원
              </th>
              <th scope='row'>
                성명<span class='essential'>(*)</span>
              </th>
              <td>
                <div class='form_group'>
                  <Input name='frm3' id='frm3' placeholder='' value='조도현' />
                  <Button as={'button'} type='submit' text={'삭제'} color={4} />
                  <Button as={'button'} text={'검색'} color={1} />
                </div>
              </td>
              <th scope='row'>소속</th>
              <td>
                <p>한밭대학교 산하협력단</p>
              </td>
            </tr>
            <tr>
              <th scope='row'>전화번호</th>
              <td colSpan={3}></td>
            </tr>

            <tr>
              <th scope='row' colSpan={2}>
                연구원
              </th>
              <td colSpan={3}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button text={'+추가하기'} size={3} color={7} />
                </div>
              </td>
            </tr>

            <tr>
              <th scope='row' colSpan={2}>
                자문위원
              </th>
              <td colSpan={3}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button text={'+추가하기'} size={3} color={7} />
                </div>
              </td>
            </tr>

            <tr>
              <th scope='row' colSpan={2}>
                정책연구윤리 준수 서약서
              </th>
              <td colSpan={3}>
                <div class='form_group'>
                  <Input name='frm4' id='frm4' placeholder='' value='' />
                  <Button as={'button'} text={'파일선택'} color={1} />
                  <Button as={'button'} type='submit' text={'삭제'} color={4} />
                </div>
                <p style={{ fontSize: 'small' }}>
                  [서식받기]정책연구 윤리준수 서약서
                </p>
              </td>
            </tr>
            <tr>
              <th scope='row' colSpan={2}>
                계약서<span class='essential'>(*)</span>
              </th>
              <td colSpan={3}>
                <div class='form_group'>
                  <Input name='frm5' id='frm5' placeholder='' value='' />
                  <Button as={'button'} text={'파일선택'} color={1} />
                  <Button as={'button'} type='submit' text={'삭제'} color={4} />
                </div>
              </td>
            </tr>
            <tr>
              <th scope='row' colSpan={2}>
                과업지시서<span class='essential'>(*)</span>
              </th>
              <td colSpan={3}>
                <div class='form_group'>
                  <Input name='frm6' id='frm6' placeholder='' value='' />
                  <Button as={'button'} text={'파일선택'} color={1} />
                  <Button as={'button'} type='submit' text={'삭제'} color={4} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <p>*저장처리와 함께 첨부파일이 업로드됩니다.</p>

        <div class='tit_area'>
          <h2 class='h-tit2' style={{ marginTop: '5%' }}>
            연구자 선정심의 정보
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
                <th
                  scope='row'
                  rowSpan={6}
                  style={{ borderRight: '1px solid #bbb' }}
                >
                  연구자선정심의
                </th>
              </tr>
              <tr>
                <th scope='row' style={{ borderTop: '1px solid #bbb' }}>
                  심의일자<span class='essential'>(*)</span>
                </th>
                <td colSpan={3}>
                  <DatePicker />
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  심의결과서 <span class='essential'>(*)</span>
                </th>
                <td colSpan={3}>
                  <div class='form_group'>
                    <Input name='frm7' id='frm7' />
                    <Button as={'button'} text={'삭제'} color={4} />
                    <Button as={'button'} text={'검색'} color={1} />
                  </div>
                  [서식받기]정책연구과제 정결과보고서
                </td>
              </tr>
              <tr>
                <th scope='row'>참석의원</th>
                <td colSpan={3}>
                  <div class='form_group'>
                    구분
                    <Select
                      name='sel2'
                      id='sel2'
                      class='form_sel'
                      title='조건을 선택하세요.'
                      data={[{ id: '1', name: '선택' }]}
                    />
                    성명<span class='essential'>(*)</span>
                    <Input name='frm8' id='frm8' />
                    소속<span class='essential'>(*)</span>
                    <Input name='frm9' id='frm9' />
                    전화번호
                    <Input name='frm10' id='frm10' />
                    <Button as={'button'} text={'+위원추가'} color={6} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <p>*저장처리와 함께 첨부파일이 업로드됩니다.</p>
        </div>
      </div>
      <div class='bet_btn_area'>
        <div class='bottom_right_area'>
          <Button text={'저장하기'} size={3} color={1} />
          <Button text={'취소하기'} size={3} color={7} />
          <Button text={'목록으로'} size={3} color={4} />
        </div>
      </div>
    </>
  );
}
