import { React } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import {
  Input,
  Select,
  DatePicker,
  Button,
  Textarea,
} from '../../Components/Element';
function ResearchReport () {
  return (
    <>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>연구보고서</h2>
      </div>
      <div class='contents_area'>
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
                <td>
                  <Input name='frm1' id='frm1' />
                </td>
                <th scope='row'>부제목</th>
                <td>
                  <Input name='frm2' id='frm2' />
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
                  />
                </td>
              </tr>

              <tr>
                <th scope='row'>
                  발행연도<span class='essential'>(*)</span>
                </th>
                <td colSpan={2}>
                  <Select
                    name='sel1'
                    id='sel1'
                    class='form_sel'
                    title='조건을 선택하세요.'
                    data={[{ id: '1', name: '선택' }]}
                  />
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
                    <Input name='frm3' id='frm3' />
                  </div>
                </td>
                <td>
                  <p style={{ fontSize: 'small' }}>(예:홍길동, 홍길순)</p>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  연구보고서<span class='essential'>(*)</span>
                </th>
                <td colSpan={3}>
                  <div class='form_group'>
                    <Input name='frm4' id='frm4' />
                    <Button
                      as={'button'}
                      type='submit'
                      text={'파일첨부'}
                      color={4}
                    />
                    <Button
                      as={'button'}
                      type='submit'
                      text={'삭제'}
                      color={4}
                    />
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
                    <Input name='frm5' id='frm5' />
                    <Button
                      as={'button'}
                      type='submit'
                      text={'파일첨부'}
                      color={4}
                    />
                    <Button
                      as={'button'}
                      type='submit'
                      text={'삭제'}
                      color={4}
                    />
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
      </div>
    </>
  );
}

export default ResearchReport;
