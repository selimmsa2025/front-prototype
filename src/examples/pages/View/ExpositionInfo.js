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
import Table from '../../Components/Table';

const columns1 = [
  {
    id: 'id1',
    header: 'column1',
  },
  {
    id: 'id2',
    header: 'column2',
  },
  {
    id: 'id3',
    header: 'column3',
  },
  {
    id: 'id4',
    header: 'column4',
  },
];
const columns2 = [
  {
    id: 'id1',
    header: 'column1',
  },
  {
    id: 'id2',
    header: 'column2',
  },
  {
    id: 'id3',
    header: 'column3',
  },
  {
    id: 'id4',
    header: 'column4',
  },
  {
    id: 'id5',
    header: 'column5',
  },
];
const rowData1 = [
  {
    id: '1',
    id1: 'A',
    id2: 'A기관',
    id3: '88',
    id4: '99',
  },
  {
    id: '2',
    id1: 'A',
    id2: 'A기관',
    id3: '88',
    id4: '99',
  },
];

const rowData2 = [
  {
    id: 1,
    id1: '1',
    id2: '홍길동',
    id3: '010-1234-5678',
    id4: '0000',
    id5: '온라인',
  },
  {
    id: 2,
    id1: '1',
    id2: '홍길동',
    id3: '010-1234-5678',
    id4: '0000',
    id5: '온라인',
  },
];

export default function ExpositionInfo ({}) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>참석등록(교육청, 공공기관)</h2>
      </div>
      <div class='contents_area'>
        <div class='tit_area'>
          <div class='right_items'>
            <Button as='a' color='4' text='심사QR' />
            <Button as='a' color='4' text='심사점수 초기화' />
            <Button as='a' color='4' text='심사입력시간수정' />
            <Button as='button' type='submit' color='1' text='저장' />
            <Button as='a' color='2' text='수정경진대회 자료삭제' />
          </div>
        </div>

        <div class='box_st4 info_bx'>
          <p class='txt_help type1'>
            행사 시작시간 이후에는 심사점수 입력시간만 수정이 가능합니다.
            심사대상기관, 심사위원 등 다른 정보를 수정할 경우 입력된 심사점수가
            삭제됩니다.
          </p>
        </div>

        <div class='box_st2'>
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

          <div class='three_area'>
            <div class='form_wrap'>
              <div class='form_group'>
                <strong class='form_label'>심사대상기관</strong>
                <span>2</span>
                <span>개</span>
              </div>
              <div class='form_group'>
                <strong class='form_label'>심사위원</strong>
                <span>2</span>
                <span>명</span>
              </div>
              <div class='form_group'>
                <strong class='form_label'>현장심사</strong>
                <span>2</span>
                <span>명</span>
              </div>
              <div class='form_group'>
                <strong class='form_label'>온라인심사</strong>
                <span>2</span>
                <span>명</span>
              </div>
            </div>
            <div class='form_wrap'>
              <div class='form_group'>
                <strong class='form_label'>심사점수 입력시간</strong>
                <span>09 : 00 ~ 09 : 55</span>
              </div>
              <div class='form_group'>
                <strong class='form_label'>현장심사 점수 입력 방식</strong>
                <span>직접입력</span>
              </div>
            </div>
            <div class='form_wrap'>
              <div class='form_group'>
                <strong class='form_label'>발표심사 가중치</strong>
                <span>50</span>
              </div>
              <div class='form_group'>
                <strong class='form_label'>1차 심사점수 가중치</strong>
                <span>40</span>
              </div>
              <div class='form_group'>
                <strong class='form_label'>2차 심사점수 가중치</strong>
                <span>10</span>
              </div>
            </div>
          </div>
          <div class='sch_btn_area'>
            <div class={`desc_bubble ${tooltipOpen ? 'active' : ''}`}>
              <button
                type='button'
                class='open'
                onClick={() => {
                  setTooltipOpen(!tooltipOpen);
                }}
              >
                <span class='sr-only'>설명창열기</span>
                <i class='ri-information-2-fill'></i>
              </button>
              {/* <!-- 클릭시 분모 .desc_bubble에 class="active" 추가 --> */}
              <div class='speech'>
                <strong class='sp_tit'>도움말 제목</strong>
                <p>[행사등록전 테스트용] 메뉴를 이용해주시기 바랍니다.</p>
                <button
                  type='button'
                  class='close'
                  onClick={() => {
                    setTooltipOpen(!tooltipOpen);
                  }}
                >
                  <span class='sr-only'>설명창닫기</span>
                  <i class='ri-close-line'></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class='twin_area mt_20'>
          <div class=''>
            <div class='board_list'>
              <Table
                columns={columns1}
                data={rowData1}
                className='tstyle_view not_line'
              />
            </div>
          </div>
          <div class=''>
            <div class='board_list'>
              <Table
                columns={columns2}
                data={rowData2}
                className='tstyle_view not_line'
              />
            </div>
          </div>
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
