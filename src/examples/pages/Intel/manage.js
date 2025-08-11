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
        <h2 className='h-tit'>카탈로그 관리</h2>
      </div>
      <div class='contents_area'>
        <div class='board_list'>
          <table class='tstyle_write'>
            <caption>SaaS 등록</caption>
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

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ResearchReport;
