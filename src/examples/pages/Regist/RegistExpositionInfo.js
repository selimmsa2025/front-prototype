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
import dayjs from 'dayjs';

const TableRow = ({ row, register }) => {
  return (
    <>
      <tr>
        <td aria-label='column'>A</td>
        <td aria-label='column'>
          <Input
            name='frm9'
            id='frm9'
            title='항목을 입력해주세요.'
            placeholder=''
          />
        </td>
        <td aria-label='column'>
          <Input
            name='frm10'
            id='frm10'
            title='항목을 입력해주세요.'
            placeholder=''
          />
        </td>
        <td aria-label='column'>
          <Input
            name='frm11'
            id='frm11'
            title='항목을 입력해주세요.'
            placeholder=''
          />
        </td>
      </tr>
    </>
  );
};

const TableRow2 = ({ row, register }) => {
  return (
    <>
      <tr>
        <td aria-label='column'>1</td>
        <td aria-label='column'>
          <Input
            name='frm9'
            id='frm9'
            title='항목을 입력해주세요.'
            placeholder=''
          />
        </td>
        <td aria-label='column'>
          <Input
            name='frm10'
            id='frm10'
            title='항목을 입력해주세요.'
            placeholder=''
          />
        </td>
        <td aria-label='column'>00000</td>
        <td aria-label='column'>
          <Select
            name='sel6'
            id='sel6'
            data={[
              { id: 1, name: '온라인' },
              { id: 2, name: 'column1' },
            ]}
          />
        </td>
      </tr>
    </>
  );
};

export default function RegistExpositionInfo ({}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
    getFieldState,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [rowData1, setRowData1] = useState([{ id: 1 }, { id: 2 }]);
  const [rowData2, setRowData2] = useState([{ id: 1 }, { id: 2 }]);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>참석등록(교육청, 공공기관)</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              심사대상기관, 심사위원 등 다른 정보를 수정할 경우 입력된
              심사점수가 삭제됩니다.
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
                  <Input
                    name='frm1'
                    id='frm1'
                    title='항목을 입력해주세요.'
                    placeholder=''
                  />
                  <span>개</span>
                </div>
                <div class='form_group'>
                  <strong class='form_label'>심사위원</strong>
                  <Input
                    name='frm1'
                    id='frm1'
                    title='항목을 입력해주세요.'
                    placeholder=''
                  />
                  <span>명</span>
                </div>
                <div class='form_group'>
                  <strong class='form_label'>현장심사</strong>
                  <Input
                    name='frm1'
                    id='frm1'
                    title='항목을 입력해주세요.'
                    placeholder=''
                  />
                  <span>명</span>
                </div>
                <div class='form_group'>
                  <strong class='form_label'>온라인심사</strong>
                  <Input
                    name='frm1'
                    id='frm1'
                    title='항목을 입력해주세요.'
                    placeholder=''
                  />
                  <span>명</span>
                </div>
              </div>
              <div class='form_wrap'>
                <div class='form_group'>
                  <strong class='form_label'>심사점수 입력시간</strong>
                  <div class='form_group sel_colum'>
                    <Select
                      name='sel2'
                      id='sel2'
                      data={[
                        { id: 1, name: '09' },
                        { id: 2, name: '10' },
                      ]}
                    />
                    <span>:</span>
                    <Select
                      name='sel3'
                      id='sel3'
                      data={[
                        { id: 1, name: '00' },
                        { id: 2, name: '10' },
                      ]}
                    />
                    <span>~</span>
                    <Select
                      name='sel4'
                      id='sel4'
                      data={[
                        { id: 1, name: '09' },
                        { id: 2, name: '10' },
                      ]}
                    />
                    <span>:</span>
                    <Select
                      name='sel5'
                      id='sel5'
                      data={[
                        { id: 1, name: '00' },
                        { id: 2, name: '10' },
                      ]}
                    />
                  </div>
                </div>
                <div class='form_group'>
                  <strong class='form_label'>현장심사 점수 입력 방식</strong>
                  <Radio
                    name='rdo_2'
                    data={[
                      {
                        value: '1',
                        title: '선택 1',
                      },
                      {
                        value: '2',
                        title: '선택 2',
                      },
                    ]}
                  />
                  <Button as='a' color='4' class='type2' text='설정' />
                </div>
              </div>
              <div class='form_wrap'>
                <div class='form_group'>
                  <strong class='form_label'>발표심사 가중치</strong>
                  <Input
                    name='frm6'
                    id='frm6'
                    title='항목을 입력해주세요.'
                    placeholder=''
                  />
                </div>
                <div class='form_group'>
                  <strong class='form_label'>1차 심사점수 가중치</strong>
                  <Input
                    name='frm7'
                    id='frm7'
                    title='항목을 입력해주세요.'
                    placeholder=''
                  />
                </div>
                <div class='form_group'>
                  <strong class='form_label'>2차 심사점수 가중치</strong>
                  <Input
                    name='frm8'
                    id='frm8'
                    title='항목을 입력해주세요.'
                    placeholder=''
                  />
                </div>
              </div>
            </div>
            <div class='bet_btn_area'>
              <div class='fr'>
                <Button as='button' color='1' text='생성' />
              </div>
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

          <div class='tit_area'>
            <div class='right_items'>
              <Button as='a' color='4' text='심사위원정보 출력' />
              <Button as='a' color='4' text='심사위원정보 엑셀 업로드' />
              <Button as='a' color='4' text='양식 다운로드' />
              <Button as='a' color='2' text='비밀번호 생성' />
            </div>
          </div>
          <div class='twin_area'>
            <div class=''>
              <div class='board_list'>
                <table class='tstyle_view not_line'>
                  <caption>목록 - column으로 구성</caption>
                  <colgroup>
                    <col style={{ width: '5%' }} />
                    <col style={{ width: '35%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '20%' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope='col'>column</th>
                      <th scope='col'>column</th>
                      <th scope='col'>column</th>
                      <th scope='col'>column</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rowData1.map((row) => {
                      return <TableRow row={row} register={register} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div class=''>
              <div class='board_list'>
                <table class='tstyle_view not_line'>
                  <caption>목록 - column으로 구성</caption>
                  <colgroup>
                    <col style={{ width: '5%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '30%' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope='col'>column</th>
                      <th scope='col'>column</th>
                      <th scope='col'>column</th>
                      <th scope='col'>column</th>
                      <th scope='col'>column</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rowData2.map((row) => {
                      return <TableRow2 row={row} register={register} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class='bet_btn_area'>
            <div class='bottom_left_area'>
              <Button as='a' color='3' class='type1' text='이전' />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
