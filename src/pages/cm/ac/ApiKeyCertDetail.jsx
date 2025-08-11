import React, { useEffect, useReducer } from 'react';
import { Button, Input } from 'components/element';
import axios from 'axios';

const initialState = {
  dataList: [],
  selected: null,
  form: {
    utztnCrgNm: '',
    utztnCrgCn: '',
    utztnCrgExpln: '',
    frstCrtDt: ''
  },
  editMode: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LIST':
      return { ...state, dataList: action.payload };

    case 'SELECT_ROW':
      return {
        ...state,
        selected: action.payload,
        form: action.payload,
        editMode: false
      };

    case 'CLEAR_SELECTION':
      return {
        ...state,
        selected: null,
        form: initialState.form,
        editMode: false
      };

    case 'START_INSERT':
      return {
        ...state,
        selected: null,
        form: initialState.form,
        editMode: true
      };

    case 'START_EDIT':
      return { ...state, editMode: true };

    case 'CHANGE_FORM':
      return {
        ...state,
        form: {
          ...state.form,
          [action.name]: action.value
        }
      };

    case 'CANCEL_EDIT':
      return {
        ...state,
        editMode: false,
        form: state.selected || initialState.form
      };

    default:
      return state;
  }
}

function ApiKeyCertDetail({ gdsId }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getBoardList = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/saas-be-catalog/v1/gdsmng/list-plan',
        { gdsId }
      );
      dispatch({ type: 'SET_LIST', payload: response.data?.resultData?.resultList || [] });
    } catch (error) {
      console.error('목록 조회 실패:', error);
    }
  };

  const handleRowClick = async (row) => {
    if (state.editMode) return;

    if (state.selected?.utztnCrgSn === row.utztnCrgSn) {
      dispatch({ type: 'CLEAR_SELECTION' });
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/saas-be-catalog/v1/gdsmng/info-plan',
        { gdsId, utztnCrgSn: row.utztnCrgSn }
      );
      const vo = response.data?.resultData?.resultVo;
      if (vo) {
        dispatch({ type: 'SELECT_ROW', payload: vo });
      }
    } catch (error) {
      console.error('상세 조회 실패:', error);
    }
  };

  const savePlan = async () => {
    if(state.form.utztnCrgNm === ''){
      alert("플랜명은 필수값 입니다.");
      return;
    }else if(state.form.utztnCrgCn === ''){
      alert("결제정보은 필수값 입니다.");
      return;
    }else if(state.form.utztnCrgExpln === ''){
      alert("플랜설명은 필수값 입니다.");
      return;
    }

    if (!window.confirm('저장하시겠습니까?')) return;
    try {
      const isUpdate = !!state.form.utztnCrgSn;
      const url = isUpdate
        ? 'http://localhost:8000/saas-be-catalog/v1/gdsmng/update-plan'
        : 'http://localhost:8000/saas-be-catalog/v1/gdsmng/insert-plan';

      await axios.post(url, { gdsId, ...state.form });

      alert('저장되었습니다.');
      await getBoardList();

      if (isUpdate) {
        const updatedSn = state.form.utztnCrgSn;
        const response = await axios.post(
          'http://localhost:8000/saas-be-catalog/v1/gdsmng/info-plan',
          { gdsId, utztnCrgSn: updatedSn }
        );
        const updatedVo = response.data?.resultData?.resultVo;
        if (updatedVo) {
          dispatch({ type: 'SELECT_ROW', payload: updatedVo });
        }
      } else {
        dispatch({ type: 'CLEAR_SELECTION' });
      }

      dispatch({ type: 'CANCEL_EDIT' });

    } catch (error) {
      console.error('저장 실패:', error);
      alert('저장 실패');
    }
  };

  const deletePlan = async () => {
    if (!window.confirm('삭제하시겠습니까?')) return;

    try {
      await axios.post(
        'http://localhost:8000/saas-be-catalog/v1/gdsmng/delete-plan',
        { gdsId, utztnCrgSn: state.selected?.utztnCrgSn }
      );
      alert('삭제되었습니다.');
      dispatch({ type: 'CLEAR_SELECTION' });
      getBoardList();
    } catch (error) {
      console.error('삭제 실패:', error);
    }
  };

  const handleChange = (e) => {
    dispatch({ type: 'CHANGE_FORM', name: e.target.name, value: e.target.value });
  };

  useEffect(() => {
    getBoardList();
  }, [gdsId]);

  return (
    <div>
      <div className='contents_area'>
        <div className='tit_area'>
          <h4 className='h-tit4'>SaaS 업체 JWT키 발급</h4>
        </div>
        
        <table className='tstyle_write'>
                <caption>카탈로그 상세</caption>
                <colgroup>
                  <col style={{ width: '15%' }} />
                  <col style={{ width: '75%' }} />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope='row'>신청 key</th>
                    <td>
                       <Input name='gdsNm' value="Sadf234sdfasf==asdfsawerwerawer" />
                    </td>
                  </tr>
        
                  <tr>
                    <th scope='row'>신청 Secret</th>
                    <td>
                      <Input name='gdsNm' value="Secret_23klsdfo23" />
                    </td>
                  </tr>
        
                  <tr>
                    <th scope='row'>신청 IP</th>
                    <td>
                      <Input name='gdsNm' value="192.168.1.100" />
                    </td>
                  </tr>
        
                  <tr>
                    <th scope='row'>JWT Key</th>
                    <td>
                      <Input name='gdsNm' value="JWT234sdaweasfa3234wasf23234234" />
                    </td>
                  </tr>
                </tbody>
              </table>
        
              <div className='bet_btn_area'>
                
                <div className='bottom_right_area'>
                  
                    
                      <Button
                        color='2'
                        className='type1'
                        text='인증키 발급 요청'
                        onClick={() => {
                          dispatch({ type: 'START_EDIT', payload: false });
                          dispatch({ type: 'CANCEL_EDIT' });
                        }}
                      />
                      
                </div>
              </div>

      
     

      </div>
    </div>
  );
}

export default ApiKeyCertDetail;
