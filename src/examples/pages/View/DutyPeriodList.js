import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
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

const TableRow = ({ row, onRowUpdate, onRemove }) => {
  // 각 입력 필드에 대한 참조를 관리하는 ref 배열 생성
  const [editMode, setEditMode] = useState(false);
  const [localRow, setLocalRow] = useState(row);

  const inputChange = (key, value) => {
    setLocalRow({ ...localRow, [key]: value });
  };
  const toggleEditMode = () => {
    setEditMode(!editMode);
    setLocalRow(row);
    if (editMode) {
      onRowUpdate(localRow); // 수정 완료 시 전역 상태 업데이트
    }
  };

  const cancelUpdate = () => {
    if (editMode) {
      setEditMode(!editMode);
    } else {
      onRemove(row.id);
    }
  };
  return (
    <tr key={row.id}>
      <td>{row.id}</td>
      <td>
        {editMode ? (
          <Input
            value={localRow.id1}
            onChange={(e) => inputChange('id1', e.target.value)}
          />
        ) : (
          <>{row.id1}</>
        )}
      </td>
      <td>
        {editMode ? (
          <Input
            value={localRow.id2}
            onChange={(e) => inputChange('id2', e.target.value)}
          />
        ) : (
          <>{row.id2}</>
        )}
      </td>
      <td>
        <Button
          as='a'
          color='4'
          onClick={cancelUpdate}
          text={editMode ? '취소' : '삭제'}
        />
        <Button
          as='a'
          color='4'
          onClick={toggleEditMode}
          text={editMode ? '완료' : '수정'}
        />
      </td>
    </tr>
  );
};
const TableRow2 = ({ row, onRowUpdate, onRemove }) => {
  // 각 입력 필드에 대한 참조를 관리하는 ref 배열 생성
  const [editMode, setEditMode] = useState(false);
  const [localRow, setLocalRow] = useState(row);

  const inputChange = (key, value) => {
    setLocalRow({ ...localRow, [key]: value });
  };
  const toggleEditMode = () => {
    setEditMode(!editMode);
    setLocalRow(row);
    if (editMode) {
      onRowUpdate(localRow); // 수정 완료 시 전역 상태 업데이트
    }
  };

  const cancelUpdate = () => {
    if (editMode) {
      setEditMode(!editMode);
    } else {
      onRemove(row.id);
    }
  };
  return (
    <tr key={row.id}>
      <td>{row.id}</td>
      <td>
        {editMode ? (
          <Input
            value={localRow.id1}
            onChange={(e) => inputChange('id1', e.target.value)}
          />
        ) : (
          <>{row.id1}</>
        )}
      </td>
      <td>
        {editMode ? (
          <Input
            value={localRow.id2}
            onChange={(e) => inputChange('id2', e.target.value)}
          />
        ) : (
          <>{row.id2}</>
        )}
      </td>
      <td>
        <Button
          as='a'
          color='4'
          onClick={cancelUpdate}
          text={editMode ? '취소' : '삭제'}
        />
        <Button
          as='a'
          color='4'
          onClick={toggleEditMode}
          text={editMode ? '완료' : '수정'}
        />
      </td>
    </tr>
  );
};

export default function DutyPeriodList({ }) {
  const [rowData1, setRowData1] = useState([
    {
      id: 1,
      id1: '대구광역시',
      id2: '대구광역시',
    },
    {
      id: 2,
      id1: '행정안전부',
      id2: '행정안전부',
    },
    {
      id: 3,
      id1: '과학기술정보통신부',
      id2: '과학기술정보통신부',
    },
  ]);
  const [rowData2, setRowData2] = useState([
    {
      id: 1,
      id1: '대구광역시',
      id2: '대구광역시',
    },
    {
      id: 2,
      id1: '행정안전부',
      id2: '행정안전부',
    },
    {
      id: 3,
      id1: '과학기술정보통신부',
      id2: '과학기술정보통신부',
    },
  ]);
  const [rowKey1, setRowKey1] = useState(rowData1.length || 0);
  const [rowKey2, setRowKey2] = useState(rowData2.length || 0);
  const addRow1 = () => {
    setRowData1((prev) => {
      return [
        ...prev,
        {
          id: rowKey1 + 1,
          id1: `관리기관${rowKey1 + 1}`,
          id2: `당직근무${rowKey1 + 1}`,
        },
      ];
    });
    setRowKey1(rowKey1 + 1);
  };
  const addRow2 = () => {
    setRowData2((prev) => {
      return [
        ...prev,
        {
          id: rowKey2 + 1,
          id1: `관리기관${rowKey2 + 1}`,
          id2: `당직근무${rowKey2 + 1}`,
        },
      ];
    });
    setRowKey2(rowKey2 + 1);
  };

  const removeRow1 = (id) => {
    setRowData1((prev) => {
      return [..._.filter(prev, (v) => v.id != id)];
    });
  };

  const updateRow1 = useCallback((row) => {
    setRowData1((prev) => {
      return prev.map((r) => {
        if (row.id == r.id) {
          return row;
        }
        return r;
      });
    });
  }, []);

  const removeRow2 = (id) => {
    setRowData2((prev) => {
      return [..._.filter(prev, (v) => v.id != id)];
    });
  };

  const updateRow2 = useCallback((row) => {
    setRowData2((prev) => {
      return prev.map((r) => {
        if (row.id == r.id) {
          return row;
        }
        return r;
      });
    });
  }, []);
  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>당직근무 기관설정 목록 조회</h2>
      </div>
      <div class='contents_area'>
        <div class='twin_area'>
          <div class=''>
            <div class='tit_area'>
              <h3 class='h-tit3'>당직근무 관리기관 현황</h3>
              <div class='right_items'>
                <Button as='a' color='2' text='추가' onClick={addRow1} />
              </div>
            </div>
            <div class='board_list'>
              <table class='tstyle_view not_line'>
                <caption>목록 - column, 버튼으로 구성</caption>
                <colgroup>
                  <col style={{ width: '5%' }} />
                  <col style={{ width: '35%' }} />
                  <col style={{ width: '10%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope='col'>column</th>
                    <th scope='col'>column</th>
                    <th scope='col'>column</th>
                    <th scope='col'>
                      <span class='sr-only'>버튼</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rowData1?.map((row) => {
                    return (
                      <>
                        {
                          <TableRow
                            row={row}
                            onRowUpdate={updateRow1}
                            onRemove={removeRow1}
                          />
                        }
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div class=''>
            <div class='tit_area'>
              <h3 class='h-tit3'>보고기관 현황 (대구광역시)</h3>
              <div class='right_items'>
                <Button as='a' color='2' text='추가' onClick={addRow2} />
              </div>
            </div>
            <div class='board_list'>
              <table class='tstyle_view not_line'>
                <caption>목록 - column, 버튼으로 구성</caption>
                <colgroup>
                  <col style={{ width: '5%' }} />
                  <col style={{ width: '35%' }} />
                  <col style={{ width: '10%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope='col'>column</th>
                    <th scope='col'>column</th>
                    <th scope='col'>column</th>
                    <th scope='col'>
                      <span class='sr-only'>버튼</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rowData2?.map((row) => {
                    return (
                      <>
                        {
                          <TableRow2
                            row={row}
                            onRowUpdate={updateRow2}
                            onRemove={removeRow2}
                          />
                        }
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
