import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../../Components/Breadcrumb';
import {
  Input,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
} from '../../Components/Element';
import ReactTable from '../../Components/ReactTable';
import Table from '../../Components/Table';
function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tab, setTab] = useState(0);

  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [dutyData, setDutyData] = useState({
    dutyOfficer: '',
    recievedOrder: '',
    actionInfo: '',
    orderInfo: '',
    actionResult: '',
    reportInfo: '',
    transferInfo: '',
  });
  const getTableData = async () => {
    const response = await axios.get('/mockupServer/getTableData.json');
    setColumns(response.data.columns);
    setData(response.data.data);
  };
  const getDutyData = async () => {
    const response = await axios.get('/mockupServer/getDutyJournalData.json');
    setDutyData(response.data);
  };
  useEffect(() => {
    getTableData();
    getDutyData();
  }, []);

  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>당직근무(행정안전부)</h2>
      </div>
      <div class='contents_area'>
        <div class='sign'>
          <table class='tstyle_view'>
            <caption>당직근무결재인 - 담당, 과장으로 구분</caption>
            <colgroup>
              <col style={{ width: '20%' }} />
              <col style={{ width: '40%' }} />
              <col style={{ width: '40%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row' rowspan='3'>
                  결재
                </th>
                <th scope='col'>담당</th>
                <th scope='col'>과장</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class='board_title'>
          <h3>2024년 01월 01일 당직근무일지</h3>
          <span class='tag1'>일직</span>
          <div class='fr'>
            <Button as='a' color='4' class='type2' text='수정' />
            <Button as='a' color='2' class='type2' text='결재' />
          </div>
        </div>

        <div class='duty_area'>
          <div class='tab_depth4'>
            <ul>
              <li class={`${tab == 0 ? 'active' : ''}`}>
                <a href='javascript:;' onClick={() => setTab(0)}>
                  당직근무일지
                </a>
              </li>
              {/* <!-- 선택된 옵션일 경우 class="active" 추가 --> */}
              <li className={`${tab == 1 ? 'active' : ''}`}>
                <a href='javascript:;' onClick={() => setTab(1)}>
                  보안점검일지
                </a>
              </li>
            </ul>
          </div>
          {tab == 0 ? (
            <>
              <div class='box_st2'>
                <div class='width_half'>
                  <div class='journal'>
                    <h3 class='title'>당직근무일지</h3>
                    <ul>
                      <li>
                        <strong>당직자</strong>
                        <p class='txt'>{dutyData.dutyOfficer}</p>
                      </li>
                      <li>
                        <strong>지시받은 사항</strong>
                        <p class='txt'>{dutyData.recievedOrder}</p>
                      </li>
                      <li>
                        <strong>조치사항</strong>
                        <p class='txt'>{dutyData.actionInfo}</p>
                      </li>
                      <li>
                        <strong>지시한 사항</strong>
                        <p class='txt'>{dutyData.orderInfo}</p>
                      </li>
                      <li>
                        <strong>조치결과 사항</strong>
                        <p class='txt'>{dutyData.actionResult}</p>
                      </li>
                      <li>
                        <strong>보고사항</strong>
                        <p class='txt'>{dutyData.reportInfo}</p>
                      </li>
                      <li>
                        <strong>인계사항</strong>
                        <p class='txt'>{dutyData.transferInfo}</p>
                      </li>
                    </ul>
                  </div>
                  <div class='report'>
                    <h3 class='title'>시도 및 소속기관 당직상황보고</h3>
                    <div class='table_area'>
                      <div class='board_list'>
                        {/* react-table 라이브러리 사용한 테이블 컴포넌트
                        <ReactTable columns={columns} data={data} /> */}
                        <Table
                          columns={columns}
                          data={data}
                          className='tstyle_view'
                        />
                      </div>
                      <div class='board_list'>
                        {/* react-table 라이브러리 사용한 테이블 컴포넌트
                        <ReactTable columns={columns} data={data} /> */}
                        <Table
                          columns={columns}
                          data={data}
                          className='tstyle_view'
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class='file_list'>
                  <ul>
                    <li class='pdf'>
                      <p class='text'>
                        <a href='#' download='download' title='다운로드'>
                          첨부파일의 제목인 파일명이 들어갑니다. [pdf, 328MB]
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : tab == 1 ? (
            <>
              <div className=''></div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
