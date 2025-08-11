import { useForm } from 'react-hook-form';
import { useState, useEffect, useCallback } from 'react';
import {
  Input,
  Button,
  Select,
  Textarea,
  DatePicker,
  Radio,
  Check,
} from '../../Components/Element';
import Breadcrumb from '../../Components/Breadcrumb';

const TableRow = ({ row }) => {
  return (
    <>
      <tr>
        <td aria-label='column'>1심사</td>
        <td aria-label='column'>
          <div class='form_chk ico_only'>
            <input type='checkbox' id='b_chk_1' title='선택' />
            <label for='b_chk_1'>
              <span class='sr-only'>선택</span>
            </label>
          </div>
        </td>
        <td aria-label='column'></td>
      </tr>
    </>
  );
};

export default function JudgePointStatus ({}) {
  const [rowData, setRowData] = useState([{ id: 1 }]);
  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>심사위원 점수 입력 현황 조회</h2>
      </div>

      <div class='contents_area'>
        <div class='box_st4 bx_info'>
          <ul>
            <li>
              <strong class='tit'>
                <i class='icon1'></i>행사명
              </strong>
              <p class='desc1'>실제행사</p>
            </li>
            <li>
              <strong class='tit'>
                <i class='icon2'></i>행사장소
              </strong>
              <p class='desc1'>세종특별자치시 가름로 232 (어진동)</p>
            </li>
            <li>
              <strong class='tit'>
                <i class='icon3'></i>행사일
              </strong>
              <p class='desc1'>2024-04-29 10:00~2024-04-30 10:00</p>
            </li>
            <li>
              <strong class='tit'>
                <i class='icon4'></i>행사기관
              </strong>
              <p class='desc1'>행정안전부</p>
            </li>
          </ul>
        </div>

        <div class='tit_area'>
          <div class='right_items'>
            <Button as='a' color='4' text='새로고침'>
              <i class='ri-restart-line'></i>
            </Button>
          </div>
        </div>
        <div class='board_list'>
          <table class='tstyle_view not_line col'>
            <caption>목록 - column으로 구성</caption>
            <thead>
              <tr>
                <th scope='col' rowspan='2'>
                  column
                </th>
                <th scope='col' colspan='2'>
                  column
                </th>
              </tr>
              <tr>
                <th scope='col'>column</th>
                <th scope='col'>column</th>
              </tr>
            </thead>
            <tbody>
              {rowData.map((row) => {
                return <TableRow row={row} />;
              })}
            </tbody>
          </table>
        </div>

        <div class='bet_btn_area'>
          <div class='bottom_left_area'>
            <Button as='a' color='3' class='type1' text='이전' />
          </div>
        </div>
      </div>
    </>
  );
}
