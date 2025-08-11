import { useState, useEffect } from 'react';
import _ from 'lodash';
import BreadCrumb from '../../Components/Breadcrumb';
import {
  Input,
  DatePicker,
  Check,
  Radio,
  Select,
  Button,
  Textarea,
  BarChart,
  BarEChart,
} from '../../Components/Element';

const chartData = [
  {
    label: '보기1',
    value: '60',
  },
  {
    label: '보기2',
    value: '30',
  },
  {
    label: '보기3',
    value: '115',
  },
  {
    label: '기타',
    value: '10',
  },
];
const chartData2 = [
  {
    label: '보기1',
    value: '30',
  },
  {
    label: '보기2',
    value: '76',
  },
  {
    label: '기타',
    value: '48',
  },
];

function App ({}) {
  return (
    <>
      <BreadCrumb />

      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>설문조사 결과</h2>
      </div>

      <div class='contents_area'>
        <div class='board_list'>
          <table class='tstyle_write'>
            <caption>
              설문조사 결과 - 설문제목, 설문개요, 설문기간, 설문부서로 구성
            </caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col style={{ width: '35%' }} />
              <col style={{ width: '15%' }} />
              <col style={{ width: '35%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>설문제목</th>
                <td>설문 제목</td>
                <th scope='row'>설문개요</th>
                <td>설문 개요</td>
              </tr>
              <tr>
                <th scope='row'>설문기간</th>
                <td>2024-01-01 ~ 2024-05-31</td>
                <th scope='row'>설문부서</th>
                <td>내용이 들어가는 자리입니다.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul class='box_st5 survey'>
          <li>
            <div class='tit'>
              <strong>[성별] 성별을 선택해주세요.</strong>
              <span class='essential'>(필수/단일선택)</span>
            </div>
            <div>
              {BarEChart ? (
                <BarEChart chartData={chartData} />
              ) : (
                <ul class='bar_graph_list'>
                  <li>
                    <p class='label'>보기1000 예시입니다.</p>
                    <div class='bar_graph type1'>
                      <div class='bar'>
                        <span style={{ width: '40%' }}>40%</span>
                      </div>
                      <p class='num'>
                        <span>100</span> / <b>40%</b>
                      </p>
                    </div>
                  </li>
                  <li>
                    <p class='label'>보기2 예시입니다.</p>
                    <div class='bar_graph type2'>
                      <div class='bar'>
                        <span style={{ width: '60%' }}>60%</span>
                      </div>
                      <p class='num'>
                        <span>100</span> / <b>60%</b>
                      </p>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div class='tit'>
              <strong>[질문1] 질문 내용1</strong>
              <span class='essential'>(필수/단일선택)</span>
            </div>
            <div>
              {BarChart ? (
                <BarChart chartData={chartData2} />
              ) : (
                <ul class='bar_graph_list'>
                  <li>
                    <p class='label'>보기1 예시입니다.</p>
                    <div class='bar_graph type1'>
                      <div class='bar'>
                        <span style={{ width: '20%' }}>20%</span>
                      </div>
                      <p class='num'>
                        <span>100</span> / <b>20%</b>
                      </p>
                    </div>
                  </li>
                  <li>
                    <p class='label'>보기2 예시입니다.</p>
                    <div class='bar_graph type2'>
                      <div class='bar'>
                        <span style={{ width: '40%' }}>40%</span>
                      </div>
                      <p class='num'>
                        <span>100</span> / <b>40%</b>
                      </p>
                    </div>
                  </li>
                  <li>
                    <p class='label'>보기3 예시입니다.</p>
                    <div class='bar_graph type3'>
                      <div class='bar'>
                        <span style={{ width: '30%' }}>30%</span>
                      </div>
                      <p class='num'>
                        <span>100</span> / <b>30%</b>
                      </p>
                    </div>
                  </li>
                  <li>
                    <p class='label'>보기4 예시입니다.</p>
                    <div class='bar_graph type4'>
                      <div class='bar'>
                        <span style={{ width: '10%' }}>10%</span>
                      </div>
                      <p class='num'>
                        <span>100</span> / <b>10%</b>
                      </p>
                    </div>
                  </li>
                </ul>
              )}
            </div>

            <div class='mt_15'>
              <Button as='a' color='4' text='순위 상세보기' />
              <Button as='a' color='1' text='기타 답변보기' />
            </div>
          </li>
          <li>
            <div class='tit'>
              <strong>[질문2] 질문 내용2</strong>
              <span class='desc1'>(주관식)</span>
            </div>
            <Button as='a' color='1' text='주관식 답변보기' />
          </li>
        </ul>

        <div class='bet_btn_area'>
          <div class='bottom_left_area'>
            <Button as='a' color='3' text='목록' />
          </div>
          <div class='bottom_right_area'>
            <Button as='a' color='4' text='엑셀' />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
