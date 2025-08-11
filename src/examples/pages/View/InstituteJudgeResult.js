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

export default function InstituteJudgeResult ({}) {
  const [rowData, setRowData] = useState([{ id: 1 }, { id: 2 }]);
  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>기관별 심사결과 현황 조회</h2>
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
            <li>
              <strong class='tit'>
                <i class='icon5'></i>심사구분
              </strong>
              <Radio
                name='rdo_1'
                data={[
                  {
                    value: 1,
                    title: '총점',
                    checked: true,
                  },
                  {
                    value: 2,
                    title: '발표심사',
                  },
                ]}
              />
            </li>
            <li>
              <strong class='tit'>
                <i class='icon6'></i>정렬순서
              </strong>
              <Radio
                name='rdo_2'
                data={[
                  {
                    value: 1,
                    title: '기관코드',
                    checked: true,
                  },
                  {
                    value: 2,
                    title: '총점(내림차순)',
                  },
                ]}
              />
            </li>
          </ul>

          <div class='sch_btn_area'>
            <Button as='a' color='4' class='sch size_md' text='심사결과 출력' />
            <Button as='a' color='2' class='sch size_md' text='검색' />
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
                <th scope='col' rowspan='2'>
                  column
                </th>
                <th scope='col' colspan='2'>
                  column
                </th>
                <th scope='col' colspan='2'>
                  column
                </th>
                <th scope='col' colspan='2'>
                  column
                </th>
                <th scope='col' rowspan='2'>
                  column
                </th>
                <th scope='col' rowspan='2'>
                  column
                </th>
              </tr>
              <tr>
                <th scope='col'>column</th>
                <th scope='col'>column</th>
                <th scope='col'>column</th>
                <th scope='col'>column</th>
                <th scope='col'>column</th>
                <th scope='col'>column</th>
              </tr>
            </thead>
            <tbody>
              {rowData.map((row) => {
                return (
                  <>
                    <tr>
                      <td aria-label='column'>테스트</td>
                      <td aria-label='column'>테스트</td>
                      <td aria-label='column'>테스트</td>
                      <td aria-label='column'>테스트</td>
                      <td aria-label='column'>테스트</td>
                      <td aria-label='column'>테스트</td>
                      <td aria-label='column'>테스트</td>
                      <td aria-label='column'>테스트</td>
                      <td aria-label='column'>테스트</td>
                      <td aria-label='column'>테스트</td>
                    </tr>
                  </>
                );
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
