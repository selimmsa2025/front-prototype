import Breadcrumb from '../../Components/Breadcrumb';
import { Tab, Button } from '../../Components/Element';
import { useEffect, useState } from 'react';
import Table from '../../Components/Table';
import axios from 'axios';
import _ from 'lodash';
export default function TotalStatus () {
  const [tab, setTab] = useState(1);
  const [centralData, setCentralData] = useState({});
  const [localGovData, setLocalGovData] = useState({});
  const getCooPointTotalStatus = async () => {
    const response = await axios.get(
      '/mockupServer/getCooPointTotalStatus.json',
    );
    setCentralData(response.data.centralData);
    setLocalGovData(response.data.localGovData);
  };

  useEffect(() => {
    getCooPointTotalStatus();
  }, []);

  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>협업 포인트 전체현황</h2>
      </div>
      <Tab
        type={1}
        data={[
          { index: 1, title: '중앙부처' },
          { index: 2, title: '지자체·기타' },
        ]}
        currentIndex={tab}
        onChange={(index) => {
          setTab(index);
        }}
      />

      <div class='table_area'>
        <div class='board_list'>
          <table class='tstyle_write'>
            <caption>
              감사메세지 상세 - 감사메세지 총 건수, 감사메세지 총 점수로 구성
            </caption>
            <colgroup>
              <col style={{ width: '30%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>감사메세지 총 건수</th>
                <td class='txt_right'>
                  <b>{centralData.thanksMsgTotalCnt || 0}</b>
                </td>
              </tr>
              <tr>
                <th scope='row'>감사메세지 총 점수</th>
                <td class='txt_right'>
                  <b>{centralData.thanksMsgTotalPoint || 0}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class='board_list'>
          <table class='tstyle_write'>
            <caption>
              좋아요 상세 - 좋아요 총 건수, 좋아요 총 점수로 구성
            </caption>
            <colgroup>
              <col style={{ width: '30%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>감사메세지 총 건수</th>
                <td class='txt_right'>
                  <b>{localGovData.thanksMsgTotalCnt || 0}</b>
                </td>
              </tr>
              <tr>
                <th scope='row'>감사메세지 총 점수</th>
                <td class='txt_right'>
                  <b>{localGovData.thanksMsgTotalPoint || 0}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class='tit_area'>
        <h3 class='h-tit3'>기관별 TOP3</h3>
        <div class='right_items'>
          <Button as='a' color='4' text='TOP100' />
        </div>
      </div>

      <div class='board_list'>
        <Table
          columns={
            (tab == 1 ? centralData : localGovData).institutionData?.columns
          }
          data={(tab == 1 ? centralData : localGovData).institutionData?.rows}
          className='tstyle_view not_line'
        />
      </div>

      <div class='tit_area'>
        <h3 class='h-tit3'>부서별 TOP3</h3>
        <div class='right_items'>
          <Button as='a' color='4' text='TOP100' />
        </div>
      </div>

      <div class='board_list'>
        <Table
          columns={(tab == 1 ? centralData : localGovData).departData?.columns}
          data={(tab == 1 ? centralData : localGovData).departData?.rows}
          className='tstyle_view not_line'
        />
      </div>

      <div class='tit_area'>
        <h3 class='h-tit3'>사용자별 TOP3</h3>
        <div class='right_items'>
          <Button as='a' color='4' text='TOP100' />
        </div>
      </div>

      <div class='board_list'>
        <Table
          columns={(tab == 1 ? centralData : localGovData).userData?.columns}
          data={(tab == 1 ? centralData : localGovData).userData?.rows}
          className='tstyle_view not_line'
        />
      </div>
    </>
  );
}
