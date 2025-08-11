import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import _ from 'lodash';
import {
  Input,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
  Textarea,
} from '../../Components/Element';
import DateRangePicker from '../../Components/DateRangePicker';
function App() {
  return (
    <>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>과제등록</h2>
      </div>
      <div class='contents_area'>
        <div class='tit_area'>
          <h2 class='h-tit2'>과제선정</h2>
        </div>

        <div class='board_list'>
          <table class='tstyle_write'>
            <caption>공지사항 상세 - 항목들로 구성</caption>
            <colgroup>
              <col style={{ width: '10%' }} />
              <col style={{ width: '12%' }} />
              <col style={{ width: '25%' }} />
              <col style={{ width: '13%' }} />
              <col style={{ width: '40%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row' colSpan={2}>
                  과제분류<span class='essential'>(*)</span>
                </th>
                <td>
                  <Select
                    name='sel1'
                    id='sel1'
                    class='form_sel'
                    title='조건을 선택하세요.'
                    data={[{ id: '1', name: '일반과제' }]}
                  />
                </td>
                <th scope='row'>
                  기관명<span class='essential'>(*)</span>
                </th>
                <td>
                  <Select
                    name='sel2'
                    id='sel2'
                    class='form_sel'
                    title='조건을 선택하세요.'
                    data={[{ id: '1', name: '행정안전부' }]}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row' colSpan={2}>
                  과제명<span class='essential'>(*)</span>
                </th>
                <td colSpan={'3'}>
                  <Input name='frm1' id='frm1' placeholder='' value='' />
                </td>
              </tr>
              <tr>
                <th
                  scope='row'
                  rowSpan={2}
                  style={{ borderRight: '1px solid #ddd' }}
                >
                  담당자정보
                </th>
                <th scope='row'>
                  이름<span class='essential'>(*)</span>
                </th>
                <td>
                  <Input name='frm2' id='frm2' placeholder='' value='' />
                </td>
                <th scope='row'>
                  부서<span class='essential'>(*)</span>
                </th>
                <td>
                  <Select
                    name='sel3'
                    id='sel3'
                    class='form_sel'
                    title='조건을 선택하세요.'
                    data={[{ id: '1', name: '행정제도과' }]}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  전화번호<span class='essential'>(*)</span>
                </th>
                <td>
                  <Input name='frm3' id='frm3' placeholder='' value='' />
                  (예:02-123-4567)
                </td>
                <th scope='row'>
                  이메일<span class='essential'>(*)</span>
                </th>
                <td>
                  <div class='form_group mail size_md'>
                    <Input type='text' name='frm4' id='frm4' />
                    <span>@</span>
                    <Input
                      name='frm5'
                      id='frm5'
                      title='메일을 입력해주세요'
                      placeholder='메일을 입력해주세요'
                    />
                    <Select
                      name='sel4'
                      id='sel4'
                      class='size_sm'
                      title='조건을 선택하세요.'
                      data={[
                        { id: 'all', name: '직접입력' },
                        { id: 'naver.com', name: 'naver.com' },
                        { id: 'google.com', name: 'google.com' },
                      ]}
                      onChange={(e) => {
                        let value = e.target.value;
                        //setValue('emailSecond', value);
                      }}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row' colSpan={2}>
                  연구용역방식<span class='essential'>(*)</span>
                </th>
                <td>
                  <Select
                    name='sel5'
                    id='sel5'
                    class='form_sel'
                    title='조건을 선택하세요.'
                    data={[{ id: '1', name: '위탁형' }]}
                  />
                </td>
                <th scope='row'>
                  연구기간<span class='essential'>(*)</span>
                </th>
                <td>
                  <DateRangePicker useRangeButton={false} />
                </td>
              </tr>
              <tr>
                <th scope='row' colSpan={2}>
                  정부기능분류
                </th>
                <td colSpan={2}>
                  <div class='form_group'>
                    <Input name='frm6' id='frm6' />
                    <Button
                      as={'button'}
                      type='submit'
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
                  scope='row'
                  style={{ borderRight: '1px solid #bbb' }}
                  rowSpan={2}
                >
                  예산규모
                </th>
                <th scope='row'>
                  항목<span class='essential'>(*)</span>
                </th>
                <td>
                  <Select
                    name='sel6'
                    id='sel6'
                    class='form_sel'
                    title='조건을 선택하세요.'
                    data={[{ id: '1', name: '행정안전부' }]}
                  />
                </td>
                <th scope='row'>
                  예산금액<span class='essential'>(*)</span>
                </th>
                <td>
                  <div class='form_group'>
                    <Input name='frm7' id='frm7' />원
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  긴급추진여부<span class='essential'>(*)</span>
                </th>
                <td colSpan={2}>
                  <Select
                    name='sel7'
                    id='sel7'
                    class='form_sel'
                    title='조건을 선택하세요.'
                    data={[{ id: '1', name: '일반' }]}
                  />
                </td>
                <td />
              </tr>
              <tr>
                <th scope='row' colSpan={2}>
                  정책연구과제신청서제출일자<span class='essential'>(*)</span>
                </th>
                <td colSpan={3}>
                  <DatePicker
                    type={'date'}
                    pattern={'yyyy.MM.dd'}
                    title='시작날짜를 입력하세요. 입력방법 예시:2024.01.01'
                    placeholder='YYYY.MM.DD'
                  />
                </td>
              </tr>
              <tr>
                <th
                  scope='row'
                  rowSpan={7}
                  style={{ borderRight: '1px solid #bbb' }}
                >
                  과제선정심의
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
                  심의결과 <span class='essential'>(*)</span>
                </th>
                <td colSpan={3}>
                  <div class='form_group'>
                    <Input name='frm8' id='frm8' />
                    <Button
                      as={'button'}
                      type='submit'
                      text={'삭제'}
                      color={4}
                    />
                    <Button as={'button'} text={'검색'} color={1} />
                  </div>
                  [서식받기]정책연구과제 정결과보고서
                </td>
              </tr>
              <tr>
                <th scope='row' rowSpan={3}>
                  참석의원
                </th>
                <td colSpan={3}>
                  <div class='form_group'>
                    구분
                    <Input name='frm9' id='frm9' />
                    성명<span class='essential'>(*)</span>
                    <Input name='frm10' id='frm10' />
                    소속<span class='essential'>(*)</span>
                    <Input name='frm11' id='frm11' />
                    전화번호
                    <Input name='frm12' id='frm12' />
                    <Button as={'button'} text={'+위원추가'} color={6} />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <div class='form_group'>
                    구분
                    <Input name='frm13' id='frm13' />
                    성명<span class='essential'>(*)</span>
                    <Input name='frm14' id='frm14' />
                    소속<span class='essential'>(*)</span>
                    <Input name='frm15' id='frm15' />
                    전화번호
                    <Input name='frm16' id='frm16' />
                    <Button as={'button'} text={'-삭제'} color={6} />
                    <Button as={'button'} text={'+추가'} color={6} />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <div class='form_group'>
                    구분
                    <Input name='frm17' id='frm17' />
                    성명<span class='essential'>(*)</span>
                    <Input name='frm18' id='frm18' />
                    소속<span class='essential'>(*)</span>
                    <Input name='frm19' id='frm19' />
                    전화번호
                    <Input name='frm20' id='frm20' />
                    <Button as={'button'} text={'-삭제'} color={6} />
                    <Button as={'button'} text={'+추가'} color={6} />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  참고파일<span class='essential'>(*)</span>
                </th>
                <td colSpan={'4'}>
                  -#심의계획서, 심의결과보고서, 회의록 등
                  <div class='form_group'>
                    <Input name='frm21' id='frm21' />
                    <Button
                      as={'button'}
                      type='submit'
                      text={'파일선택'}
                      color={4}
                    />
                    <Button
                      as={'button'}
                      type='submit'
                      text={'삭제'}
                      color={4}
                    />
                    <Button as={'button'} text={'검색'} color={1} />
                  </div>
                </td>
              </tr>

              <tr>
                <th scope='row' colSpan={'2'}>
                  과제개요<span class='essential'>(*)</span>
                </th>
                <td colSpan={'3'}>
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
                <th scope='row' colSpan={2}>
                  중복성검토방법
                </th>
                <td>
                  <Select
                    name='sel9'
                    id='sel9'
                    class='form_sel'
                    title='조건을 선택하세요.'
                    data={[{ id: '1', name: '프리즘이용' }]}
                  />
                </td>
                <th scope='row'>과제중복여부</th>
                <td>
                  <Select
                    name='sel10'
                    id='sel10'
                    class='form_sel'
                    title='조건을 선택하세요.'
                    data={[{ id: '1', name: '중복과제없음' }]}
                  />
                </td>
              </tr>

              <tr>
                <th scope='row' colSpan={2}>
                  정책연구과제심의신청서<span class='essential'>(*)</span>
                </th>
                <td colSpan={'3'}>
                  <p>[서식받기]정책연구과제심의신청서</p>
                  <div class='form_group'>
                    <Button
                      color={2}
                      size=' '
                      text='정책연구과제심의신청등록&과제중복성검사'
                    />
                    <p style={{ fontSize: 'small' }}>
                      *정책연구과제심의신청서를 등록하시면, 과제중복성검사
                      수행후 중복검사결과서가 생성됩니다.
                    </p>
                  </div>
                </td>
              </tr>

              <tr>
                <th scope='row' colSpan={2} rowSpan={2}>
                  정책연구과제중복검사결과서
                </th>
                <td colSpan={'2'}>
                  <div class='form_group'>
                    <Input
                      name='frm22'
                      id='frm22'
                      placeholder='중복검사결과서를선택해주세요'
                    />
                    <Button color={2} size=' ' text='중복검사결과서선택' />
                  </div>
                </td>
                <td />
              </tr>
              <tr>
                <td colSpan={2}>
                  <div class='form_group'>
                    <Input name='frm23' id='frm23' placeholder='중복검사일시' />
                    <Button color={2} size=' ' text='중복검사결과상세보기' />
                  </div>
                </td>
                <td />
              </tr>

              <tr>
                <th scope='row' colSpan={2}>
                  차별성검토보고서
                </th>
                <td colSpan={3}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px',
                    }}
                  >
                    <p>[서식받기]정책연구과제차별성검토보고서</p>
                    <div class='form_group'>
                      <Input name='frm24' id='frm24' />
                      <Button
                        as={'button'}
                        type='submit'
                        text={'파일선택'}
                        color={1}
                      />
                      <Button as={'button'} text={'삭제'} color={4} />
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <th scope='row' colSpan={2}>
                  정보공개<span class='essential'>(*)</span>
                </th>
                <td colSpan={2}>
                  <Select
                    name='sel11'
                    id='sel11'
                    class='form_sel'
                    title='부분공개'
                    data={[{ id: '1', name: '행정안전부' }]}
                  />
                </td>
                <td />
              </tr>

              <tr>
                <th
                  scope='row'
                  rowSpan={4}
                  style={{ borderRight: '1px solid #bbb' }}
                >
                  비공개정보
                </th>
              </tr>
              <tr>
                <th>
                  제한근거<span class='essential'>(*)</span>
                </th>
                <td colSpan={3}>
                  <Check
                    name='chk_1'
                    class='ico_only'
                    data={[
                      {
                        value: '1',
                        title: '1호',
                        checked: false,
                        displayTitle: true,
                      },
                      {
                        value: '2',
                        title: '2호',
                        checked: false,
                        displayTitle: true,
                      },
                      {
                        value: '3',
                        title: '3호',
                        checked: false,
                        displayTitle: true,
                      },
                      {
                        value: '4',
                        title: '4호',
                        checked: false,
                        displayTitle: true,
                      },
                      {
                        value: '5',
                        title: '5호',
                        checked: false,
                        displayTitle: true,
                      },
                      {
                        value: '6',
                        title: '6호',
                        checked: false,
                        displayTitle: true,
                      },
                      {
                        value: '7',
                        title: '7호',
                        checked: false,
                        displayTitle: true,
                      },
                      {
                        value: '8',
                        title: '8호',
                        checked: false,
                        displayTitle: true,
                      },
                    ]}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  사유<span class='essential'>(*)</span>
                </th>
                <td>
                  <Input name='frm25' id='frm25' />
                </td>
                <th>사유공개</th>
                <td>
                  <div class='form_group'>
                    <Select
                      name='sel12'
                      id='sel12'
                      class='form_sel'
                      title='조건을 선택하세요.'
                      data={[{ id: '1', name: '공개' }]}
                    />
                    <p style={{ fontSize: 'small' }}>
                      제한근거와 사유 정보 대국민 공개
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>비공개기간</th>
                <td>
                  <div class='form_group'>
                    <DatePicker
                      type={'date'}
                      pattern={'yyyy.MM.dd'}
                      title='시작날짜를 입력하세요. 입력방법 예시:2024.01.01'
                      placeholder='YYYY.MM.DD'
                    />
                    <p style={{ fontSize: 'small' }}>(2년이내)</p>
                  </div>
                </td>
                <th>자동전환여부</th>
                <td>
                  <div class='form_group'>
                    <Select
                      name='sel13'
                      id='sel13'
                      class='form_sel'
                      title='조건을 선택하세요.'
                      data={[{ id: '1', name: '비자동전환' }]}
                    />
                    <p style={{ fontSize: 'small' }}>
                      비공개 기간 경과시 자동으로 공개 전환
                    </p>
                  </div>
                </td>
              </tr>

              <tr>
                <th
                  scope='row'
                  rowSpan={5}
                  style={{ borderRight: '1px solid #bbb' }}
                >
                  공공누리
                </th>
              </tr>
              <tr>
                <td colSpan={4}>
                  <strong>공공누리유형안내</strong>(공공누리에 대한 자세한
                  내용은 www.kogl.or.kr/open/info/kogl.do에서 확인하실 수
                  있습니다.)
                </td>
              </tr>
              <tr>
                <th
                  scope='row'
                  rowSpan={3}
                  style={{ borderRight: '1px solid #bbb' }}
                >
                  저작물 민간이용동의
                </th>
              </tr>
              <tr>
                <th scope='row'>
                  <Radio
                    name='radio_1'
                    data={[{ value: '1', title: '동의', checked: true }]}
                  />
                </th>
                <td colSpan={2}>
                  <div class='form_group'>
                    <p>공공누리유형</p>
                    <span class='essential'>(*)</span> 상업적이용표시를
                    허락하시겠습니까?
                    <Select
                      name='sel14'
                      id='sel14'
                      class='form_sel'
                      title='조건을 선택하세요.'
                      data={[{ id: '1', name: '동의' }]}
                    />
                    <span class='essential'>(*)</span> 저작물변경을
                    허용하시겠습니까?
                    <Select
                      name='sel15'
                      id='sel15'
                      class='form_sel'
                      title='조건을 선택하세요.'
                      data={[{ id: '1', name: '동의' }]}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <Radio
                    name='radio_1'
                    data={[{ value: '2', title: '비동의' }]}
                  />
                </th>
                <td colSpan={2}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class='bet_btn_area'>
          <div class='bottom_right_area'>
            <Button text={'임시저장'} size={3} color={7} />
            <Button text={'저장하기'} size={3} color={1} />
            <Button text={'목록으로'} size={3} color={4} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
