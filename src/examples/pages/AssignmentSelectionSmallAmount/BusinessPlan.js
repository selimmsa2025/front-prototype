import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import {
  Input,
  Select,
  DatePicker,
  Check,
  Button,
} from '../../Components/Element';
import DateRangePicker from '../../Components/DateRangePicker';
function BusinessPlan() {
  return (
    <>
      <Breadcrumb />
      <div className="page-title-wrap" data-type="responsive">
        <h2 className="h-tit">과제등록</h2>
      </div>
      <div class="contents_area">
        <div class="tit_area">
          <h2 class="h-tit2">사업계획</h2>
        </div>

        <div class="board_list">
          <table class="tstyle_write">
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
                <th scope="row" colSpan={2}>
                  과제분류<span class="essential">(*)</span>
                </th>
                <td>
                  <Select
                    name="sel1"
                    id="sel1"
                    class="form_sel"
                    title="조건을 선택하세요."
                    data={[{ id: '1', name: '소액과제(1000만원이하)' }]}
                  />
                </td>
                <th scope="row">
                  기관명<span class="essential">(*)</span>
                </th>
                <td>
                  <Select
                    name="sel2"
                    id="sel2"
                    class="form_sel"
                    title="조건을 선택하세요."
                    data={[{ id: '1', name: '행정안전부' }]}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan={2}>
                  과제명<span class="essential">(*)</span>
                </th>
                <td colSpan={'3'}>
                  <Input name="frm1" id="frm1" />
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  rowSpan={2}
                  style={{ borderRight: '1px solid #ddd' }}
                >
                  담당자정보
                </th>
                <th scope="row">
                  이름<span class="essential">(*)</span>
                </th>
                <td>
                  <Input name="frm2" id="frm2" />
                </td>
                <th scope="row">
                  부서<span class="essential">(*)</span>
                </th>
                <td>
                  <Select
                    name="sel3"
                    id="sel3"
                    class="form_sel"
                    title="조건을 선택하세요."
                    data={[{ id: '1', name: '행정제도과' }]}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  전화번호<span class="essential">(*)</span>
                </th>
                <td>
                  <Input name="frm3" id="frm3" />
                  (예:02-123-4567)
                </td>
                <th scope="row">
                  이메일<span class="essential">(*)</span>
                </th>
                <td>
                  <div class="form_group mail size_md">
                    <Input type="text" name="frm4" id="frm4" />
                    <span>@</span>
                    <Input
                      name="frm5"
                      id="frm5"
                      title="메일을 입력해주세요"
                      placeholder="메일을 입력해주세요"
                    />
                    <Select
                      name="sel4"
                      id="sel4"
                      class="size_sm"
                      title="조건을 선택하세요."
                      data={[
                        { id: 'all', name: '직접입력' },
                        { id: 'naver.com', name: 'naver.com' },
                        { id: 'google.com', name: 'google.com' },
                      ]}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan={2}>
                  연구용역방식<span class="essential">(*)</span>
                </th>
                <td>
                  <Select
                    name="sel5"
                    id="sel5"
                    class="form_sel"
                    title="조건을 선택하세요."
                    data={[{ id: '1', name: '위탁형' }]}
                  />
                </td>
                <th scope="row">
                  연구기간<span class="essential">(*)</span>
                </th>
                <td>
                  <DateRangePicker useRangeButton={false} />
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan={2}>
                  정부기능분류
                </th>
                <td colSpan={2}>
                  <div class="form_group">
                    <Input name="frm6" id="frm6" />
                    <Button
                      as={'button'}
                      type="submit"
                      text={'삭제'}
                      color={4}
                    />
                    <Button as={'button'} text={'검색'} color={1} />
                  </div>
                </td>
                <td />
              </tr>
              <tr>
                <th
                  scope="row"
                  style={{ borderRight: '1px solid #bbb' }}
                  rowSpan={2}
                >
                  예산규모
                </th>
                <th scope="row">
                  항목<span class="essential">(*)</span>
                </th>
                <td>
                  <Select
                    name="sel6"
                    id="sel6"
                    class="form_sel"
                    title="조건을 선택하세요."
                    data={[{ id: '1', name: '행정안전부' }]}
                  />
                </td>
                <th scope="row">
                  예산금액<span class="essential">(*)</span>
                </th>
                <td>
                  <div class="form_group">
                    <Input name="frm7" id="frm7" />원
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  긴급추진여부<span class="essential">(*)</span>
                </th>
                <td colSpan={2}>
                  <Select
                    name="sel7"
                    id="sel7"
                    class="form_sel"
                    title="조건을 선택하세요."
                    data={[{ id: '1', name: '일반' }]}
                  />
                </td>
                <td />
              </tr>

              <tr>
                <th
                  scope="row"
                  rowSpan={7}
                  style={{ borderRight: '1px solid #bbb' }}
                >
                  연구심의
                </th>
              </tr>
              <tr>
                <th scope="row" style={{ borderTop: '1px solid #bbb' }}>
                  심의일자<span class="essential">(*)</span>
                </th>
                <td colSpan={3}>
                  <DatePicker />
                </td>
              </tr>
              <tr>
                <th scope="row">심의결과 </th>
                <td colSpan={3}>
                  <div class="form_group">
                    <Input name="frm8" id="frm8" />
                    <Button as={'button'} text={'삭제'} color={4} />
                    <Button as={'button'} text={'검색'} color={1} />
                  </div>
                  [서식받기]정책연구과제 정결과보고서
                </td>
              </tr>
              <tr>
                <th scope="row" rowSpan={3}>
                  참석의원
                </th>
                <td colSpan={3}>
                  <div class="form_group">
                    구분
                    <Input name="frm10" id="frm10" />
                    성명<span class="essential">(*)</span>
                    <Input name="frm11" id="frm11" />
                    소속<span class="essential">(*)</span>
                    <Input name="frm12" id="frm12" />
                    전화번호
                    <Input name="frm13" id="frm13" />
                    <Button as={'button'} text={'+위원추가'} color={6} />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <div class="form_group">
                    구분
                    <Input name="frm14" id="frm14" />
                    성명<span class="essential">(*)</span>
                    <Input name="frm15" id="frm15" />
                    소속<span class="essential">(*)</span>
                    <Input name="frm16" id="frm16" />
                    전화번호
                    <Input name="frm17" id="frm17" />
                    <Button as={'button'} text={'-삭제'} color={6} />
                    <Button as={'button'} text={'+추가'} color={6} />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <div class="form_group">
                    구분
                    <Input name="frm18" id="frm18" />
                    성명<span class="essential">(*)</span>
                    <Input name="frm19" id="frm19" />
                    소속<span class="essential">(*)</span>
                    <Input name="frm20" id="frm20" />
                    전화번호
                    <Input name="frm21" id="frm21" />
                    <Button as={'button'} text={'-삭제'} color={6} />
                    <Button as={'button'} text={'+추가'} color={6} />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  참고파일<span class="essential">(*)</span>
                </th>
                <td colSpan={'4'}>
                  -#심의계획서, 심의결과보고서, 회의록 등
                  <div class="form_group">
                    <Input name="frm22" id="frm22" />
                    <Button as={'button'} text={'파일선택'} color={4} />
                    <Button as={'button'} text={'삭제'} color={4} />
                    <Button as={'button'} text={'검색'} color={1} />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan={2}>
                  계약방식<span class="essential">(*)</span>
                </th>
                <td>
                  <Select
                    name="sel8"
                    id="sel28"
                    class="form_sel"
                    title="조건을 선택하세요."
                    data={[{ id: '1', name: '수의계약' }]}
                  />
                </td>
                <th scope="row">
                  계약금액<span class="essential">(*)</span>
                </th>
                <td>
                  <div class="form_group">
                    <Input name="frm23" id="frm23" />원
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan={2}>
                  연구수행기관
                </th>
                <td colSpan={2}>
                  <div class="form_group">
                    <Input name="frm24" id="frm24" />
                    <Button as={'button'} text={'검색'} color={1} />
                    <Button as={'button'} text={'삭제'} color={4} />
                  </div>
                </td>
                <td />
              </tr>
              <tr>
                <th scope="row" colSpan={2}>
                  책임연구원
                </th>
                <td colSpan={2}>
                  <div class="form_group">
                    <Input name="frm25" id="frm25" />
                    <Button as={'button'} text={'검색'} color={1} />
                    <Button as={'button'} text={'삭제'} color={4} />
                  </div>
                </td>
                <td />
              </tr>

              <tr>
                <th
                  scope="row"
                  rowSpan={6}
                  style={{ borderRight: '1px solid #bbb' }}
                >
                  연구자선정심의
                </th>
              </tr>
              <tr>
                <th scope="row" style={{ borderTop: '1px solid #bbb' }}>
                  심의일자<span class="essential">(*)</span>
                </th>
                <td colSpan={3}>
                  <DatePicker />
                </td>
              </tr>
              <tr>
                <th scope="row">심의결과서 </th>
                <td colSpan={3}>
                  <div class="form_group">
                    <Input name="frm26" id="frm26" />
                    <Button as={'button'} text={'삭제'} color={4} />
                    <Button as={'button'} text={'검색'} color={1} />
                  </div>
                  [서식받기]정책연구과제 정결과보고서
                </td>
              </tr>
              <tr>
                <th scope="row" rowSpan={3}>
                  참석의원
                </th>
                <td colSpan={3}>
                  <div class="form_group">
                    구분
                    <Input name="frm27" id="frm27" />
                    성명<span class="essential">(*)</span>
                    <Input name="frm28" id="frm28" />
                    소속<span class="essential">(*)</span>
                    <Input name="frm29" id="frm29" />
                    전화번호
                    <Input name="frm30" id="frm30" />
                    <Button as={'button'} text={'+위원추가'} color={6} />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <div class="form_group">
                    구분
                    <Input name="frm31" id="frm31" />
                    성명<span class="essential">(*)</span>
                    <Input name="frm32" id="frm32" />
                    소속<span class="essential">(*)</span>
                    <Input name="frm33" id="frm33" />
                    전화번호
                    <Input name="frm34" id="frm34" />
                    <Button as={'button'} text={'-위원삭제'} color={6} />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <div class="form_group">
                    구분
                    <Input name="frm35" id="frm35" />
                    성명<span class="essential">(*)</span>
                    <Input name="frm36" id="frm36" />
                    소속<span class="essential">(*)</span>
                    <Input name="frm37" id="frm37" />
                    전화번호
                    <Input name="frm38" id="frm38" />
                    <Button as={'button'} text={'-위원삭제'} color={6} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default BusinessPlan;
