import React from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import { Input, Select, Radio, Button } from '../../Components/Element';
function ResultApplication () {
  return (
    <>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>연구결과활용</h2>
      </div>
      <div class='contents_area'>
        <div class='board_list'>
          <table class='tstyle_write'>
            <caption>공지사항 상세 - 항목들로 구성</caption>
            <colgroup>
              <col style={{ width: '10%' }} />
              <col style={{ width: '12%' }} />
              <col style={{ width: '15%' }} />
              <col style={{ width: '23%' }} />
              <col style={{ width: '40%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>
                  활용구분<span class='essential'>(*)</span>
                </th>
                <td colSpan={3}>
                  <Select
                    name='sel1'
                    id='sel1'
                    class='form_sel'
                    title='조건을 선택하세요.'
                    data={[{ id: '1', name: '정책반영' }]}
                  />
                </td>
                <td />
              </tr>
              <tr>
                <th scope='row'>
                  정보공개<span class='essential'>(*)</span>
                </th>
                <td colSpan={2}>
                  <Select
                    name='sel1'
                    id='sel1'
                    class='form_sel'
                    title='조건을 선택하세요.'
                    data={[{ id: '1', name: '공개' }]}
                  />
                </td>
                <td colSpan={2} />
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
                    data={[{ value: '1', title: '동의' }]}
                  />
                </th>
                <td colSpan={2}>
                  <div class='form_group'>
                    <p>공공누리유형</p>
                    <span class='essential'>(*)</span> 상업적이용표시를
                    허락하시겠습니까?
                    <Select
                      name='sel12'
                      id='sel12'
                      class='form_sel'
                      title='조건을 선택하세요.'
                      data={[{ id: '1', name: '동의' }]}
                    />
                    <span class='essential'>(*)</span> 저작물변경을
                    허용하시겠습니까?
                    <Select
                      name='sel13'
                      id='sel13'
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

export default ResultApplication;
