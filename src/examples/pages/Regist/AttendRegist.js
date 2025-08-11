import { useForm } from 'react-hook-form';
import { useState, useEffect, useRef } from 'react';
import { Input, Button, Select, Check, Radio } from '../../Components/Element';
import Breadcrumb from '../../Components/Breadcrumb';
import _ from 'lodash';

const TableRow = ({ row, onRemove, register, unregister, getValues }) => {
  const [localRow, setLocalRow] = useState(row);
  useEffect(() => {
    setLocalRow(row);
  }, [row]);

  const removeRow = () => {
    const values = getValues();
    const removeKeyList = [];
    Object.keys(values).forEach((key) => {
      if (key.startsWith(`${row.id}_`)) {
        removeKeyList.push(key);
      }
    });
    unregister(removeKeyList);
    onRemove(row);
  };

  return (
    <>
      <tr>
        <td aria-label='번호'>1</td>
        <td aria-label='기관유형'>
          <Select
            name='sel1'
            id='sel1'
            class='size_sm'
            data={[
              { id: 1, name: '중앙행정기관' },
              { id: 2, name: 'column1' },
              { id: 3, name: 'column2' },
            ]}
            register={register(`${row.id}_instituteType`, {})}
            defaultValue={localRow.institueType}
          />
        </td>
        <td aria-label='참석확인방법'>
          <Select
            name='sel2'
            id='sel2'
            class='size_sm'
            register={register(`${row.id}_attendCheckMethod`, {})}
            data={[
              { id: 1, name: '개인QR' },
              { id: 2, name: 'column1' },
              { id: 3, name: 'column2' },
            ]}
            defaultValue={localRow.attendCheckMethod}
          />
        </td>
        <td aria-label='기관명'>
          <Input
            name='frm1'
            id='frm1'
            title='항목을 입력해주세요.'
            placeholder=''
            register={register(`${row.id}_instituteName`, {
              required: '필수 입력사항입니다.',
            })}
            defaultValue={localRow.instituteName}
          />
        </td>
        <td aria-label='부서명'>
          <Input
            name='frm2'
            id='frm2'
            title='항목을 입력해주세요.'
            register={register(`${row.id}_departName`, {
              required: '필수 입력사항입니다.',
            })}
            placeholder=''
            defaultValue={localRow.departName}
          />
        </td>
        <td aria-label='성명'>
          <Input
            name='frm3'
            id='frm3'
            title='항목을 입력해주세요.'
            register={register(`${row.id}_name`, {
              required: '필수 입력사항입니다.',
            })}
            placeholder=''
            defaultValue={localRow.name}
          />
        </td>
        <td aria-label='직급'>
          <Input
            name='frm4'
            id='frm4'
            title='항목을 입력해주세요.'
            placeholder='예)7급'
            register={register(`${row.id}_position`, {
              required: '필수 입력사항입니다.',
            })}
            defaultValue={localRow.position}
          />
        </td>
        <td aria-label='휴대폰번호'>
          <Input
            name='frm5'
            id='frm5'
            title='항목을 입력해주세요.'
            placeholder=''
            register={register(`${row.id}_phoneNumber`, {
              required: '필수 입력사항입니다.',
            })}
            defaultValue={localRow.phoneNumber}
          />
        </td>
        <td aria-label='사무실전화번호'>
          <Input
            name='frm6'
            id='frm6'
            title='항목을 입력해주세요.'
            placeholder=''
            register={register(`${row.id}_officeNumber`, {})}
            defaultValue={localRow.officeNumber}
          />
        </td>
        <td aria-label='메일'>
          <Input
            name='frm7'
            id='frm7'
            title='항목을 입력해주세요.'
            placeholder=''
            register={register(`${row.id}_email`, {
              required: '필수 입력사항입니다.',
            })}
            defaultValue={localRow.email}
          />
        </td>
        <td aria-label='버튼'>
          <Button
            as='a'
            color='4'
            onClick={removeRow}
            class='type2'
            text='삭제'
          />
        </td>
      </tr>
    </>
  );
};

const rowTemplate = {
  id: '',
  instituteType: 1,
  attendCheckMethod: 1,
  instituteName: '',
  departName: '',
  name: '',
  position: '',
  phoneNumber: '',
  officeNumber: '',
  email: '',
};

export default function AttendRegist({ }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    unregister,
    getValues,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [rowKey, setRowKey] = useState(1);
  const [rowData, setRowData] = useState([
    {
      id: 1,
      instituteType: 1,
      attendCheckMethod: 1,
      instituteName: 'test',
      departName: 'test1',
      name: 'test2',
      position: 'test3',
      phoneNumber: 'test4',
      officeNumber: 'test5',
      email: 'test6',
    },
  ]);
  const addRow = () => {
    const added = { ...rowTemplate, id: rowKey + 1 };
    setRowData([...rowData, added]);
    setRowKey(rowKey + 1);
  };

  const removeRow = (row) => {
    setRowData([..._.filter(rowData, (v) => v.id != row.id)]);
  };

  const formRef = useRef(null);

  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>참석등록(교육청, 공공기관)</h2>
      </div>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
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
              <span class='desc1'>
                *사용자 추가 등록시 추가 버튼을 통해 참석자 등록해주세요.
              </span>
              <Button as='a' color='2' text='추가' onClick={addRow} />
            </div>
          </div>
          <div class='board_list'>
            <table class='tstyle_view not_line'>
              <caption>
                목록 - 번호, 기관유형, 참석확인방법, 기관명, 부서명, 성명, 직급,
                휴대폰번호, 사무실전화번호, 메일으로 구성
              </caption>
              <colgroup>
                <col style={{ width: '5%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '8%' }} />
                <col style={{ width: '8%' }} />
                <col style={{ width: '8%' }} />
                <col style={{ width: '8%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col'>번호</th>
                  <th scope='col'>기관유형</th>
                  <th scope='col'>참석확인방법</th>
                  <th scope='col'>
                    기관명<span class='essential'>(필수)</span>
                  </th>
                  <th scope='col'>
                    부서명<span class='essential'>(필수)</span>
                  </th>
                  <th scope='col'>
                    성명<span class='essential'>(필수)</span>
                  </th>
                  <th scope='col'>
                    직급<span class='essential'>(필수)</span>
                  </th>
                  <th scope='col'>
                    휴대폰번호<span class='essential'>(필수)</span>
                  </th>
                  <th scope='col'>사무실전화번호</th>
                  <th scope='col'>
                    메일<span class='essential'>(필수)</span>
                  </th>
                  <th scope='col'>
                    <span class='sr-only'>버튼</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rowData.map((row) => {
                  return (
                    <TableRow
                      row={row}
                      onRemove={removeRow}
                      register={register}
                      unregister={unregister}
                      getValues={getValues}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>

          <div class='bet_btn_area'>
            <div class='bottom_left_area'>
              <Button as='a' color='3' class='type1' text='이전' />
            </div>
            <div class='bottom_right_area'>
              <Button
                onClick={() => {
                  console.log('test :: ', rowData);
                }}
                type='submit'
                as='button'
                color='1'
                class='type1'
                text='참석등록'
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
