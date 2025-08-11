import React, { useReducer, useEffect, useState } from 'react';
import { Button, Input } from 'components/element';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ApiKeyCertDetail from './ApiKeyCertDetail';
import ApiKeyCerted from './ApiKeyCerted';
import FileUploadBox from 'components/Common/FileUploadBox';

const initialState = {
  gdsData: null,
  editMode: false,
  form: {}
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, gdsData: action.payload, form: action.payload };
    case 'START_EDIT':
      return { ...state, editMode: action.payload };
    case 'CHANGE_FORM':
      return {
        ...state,
        form: { ...state.form, [action.name]: action.value }
      };
    case 'CANCEL_EDIT':
      return { ...state, form: state.gdsData };
    default:
      return state;
  }
}

function ApiKeyDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { gdsId, searchData } = location.state || {};
  const [state, dispatch] = useReducer(reducer, initialState);
  const { gdsData, form, editMode } = state;
  const [imageUrl, setImageUrl] = useState(null);
  const [files, setFiles] = useState([]);

  const checkValidation = [
    { key: 'gdsNm', msg: '상품명은 필수값 입니다.'},
    { key: 'gdsDtlCn', msg: '상품 상세내용은 필수값 입니다.'},
    { key: 'gdsSmryCn', msg: '상품 요약내용은 필수값 입니다.'},
    { key: 'mkrSeCd', msg: '제공업체는 필수값 입니다.'},
    { key: 'gdsSrvcDmnAddr', msg: '도메인은 필수값 입니다.'},
    { key: 'gdsSrvcDtlUrlAddr', msg: '서비스URL은 필수값 입니다.'},
  ]

  const getBoardData = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/saas-be-catalog/v1/gdsmng/info-gds',
        { gdsId }
      );
      const vo = response.data?.resultData?.resultVo;
      dispatch({ type: 'SET_DATA', payload: vo });
      
    if (vo?.atchFileSn) {
      try {
        const res = await axios.get(
          `http://localhost:8000/saas-be-catalog/v1/file/${vo.atchFileSn}`,
          { responseType: 'blob' }
        );
        
        const url = URL.createObjectURL(res.data);
        setImageUrl(url);
        
      } catch (err) {
        console.error('이미지 로딩 실패:', err);
      }
    }

    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };

  useEffect(() => {
    if (gdsId) getBoardData();
  }, [gdsId]);

  const gdsDelete = async () => {
  if (!window.confirm('상품을 삭제하면 구독플랜, 서비스도 삭제됩니다. \n삭제하시겠습니까?')) return;

  try {
    if (gdsData?.atchFileSn) {
      try {
        await axios.post(
          'http://localhost:8000/saas-be-catalog/v1/file/updateUseYn',
          { atchFileSn: gdsData.atchFileSn }
        );
        console.log('첨부파일 삭제 완료');
      } catch (fileError) {
        console.warn('첨부파일 삭제 실패:', fileError);
      }
    }

    const response = await axios.post(
      'http://localhost:8000/saas-be-catalog/v1/gdsmng/delete-gds',
      { gdsId }
    );

    if (response.data.resultData.resultCnt > 0) {
      alert('삭제되었습니다.');
      navigate('/gmgds/list', { state: { state: searchData } });
    } else {
      alert('삭제에 실패했습니다.');
    }
  } catch (error) {
    console.error('삭제 실패:', error);
  }
};


  const gdsUpdate = async () => {
    if (!window.confirm('저장하시겠습니까?')) return;

    for (const field of checkValidation) {
        if (!form[field.key] || form[field.key].trim() === '') {
          alert(field.msg);
          return;
        }
      }

    try {
      let atchFileSn = null;

      if (files.length > 0) {
        const item = files[0];
        let updatedFile = item;

        if (item.status === 'ready') {
          if (!item.file || !item.file.type.startsWith('image/')) {
            alert('이미지 파일만 업로드할 수 있습니다.');
            return;
          }

          const formData = new FormData();
          formData.append('uploadFile', item.file);
          formData.append('srvcSeCd', 'C0020001');
          formData.append('frstCrtPrcrId', 'sysadmin');

          const res = await axios.post(
            'http://localhost:8000/saas-be-catalog/v1/file/insert',
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
          );

          if (res.data.status === 'OK') {
            atchFileSn = res.data.resultData.atchFileSn;
            updatedFile = {
              ...item,
              status: 'done',
              atchFileSn: atchFileSn
            };
          } else {
            throw new Error(res.data.resultMsg || '파일 업로드 실패');
          }
        }

        setFiles([updatedFile]);
      }

      const updatedForm = {
        ...form,
        atchFileSn: atchFileSn
      };

      const response = await axios.post(
        'http://localhost:8000/saas-be-catalog/v1/gdsmng/update-gds',
        updatedForm
      );
      if (response.data.resultData.resultCnt > 0) {
        alert('저장되었습니다.');
        getBoardData();
        dispatch({ type: 'START_EDIT', payload: false });
      } else {
        alert('저장에 실패했습니다.');
      }
    } catch (error) {
      console.error('저장 실패:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE_FORM', name, value });
  };

  const handleRadioChange = (e) => {
    dispatch({ type: 'CHANGE_FORM', name: 'gdsPvsnMthSeCd', value: e.target.value });
  };

  if (!gdsData) return <p>Loading...</p>;

  return (
    <div>
      <div className='contents_area'>
        <div className='tit_area'>
          <h3 className='h-tit3'>API 인증키 관리</h3>
        </div>
        <div className='tit_area'>
          <h4 className='h-tit4'>SaaS 업체 신청 키 발급</h4>
        </div>
      </div>

      <table className='tstyle_write'>
        <caption>카탈로그 상세</caption>
        <colgroup>
          <col style={{ width: '15%' }} />
          <col style={{ width: '75%' }} />
        </colgroup>
        <tbody>
          <tr>
            <th scope='row'>상품구분</th>
            <td>
              {gdsData.gdsPvsnMthSeNm}
            </td>
          </tr>

          <tr>
            <th scope='row'>상품유형</th>
            <td>
              {gdsData.gdsTypeNm}
            </td>
          </tr>

          <tr>
            <th scope='row'>상품명{editMode && <span className='essential'>*</span>}</th>
            <td>
              {editMode ? (
                <Input name='gdsNm' value={form.gdsNm || ''} onChange={handleChange} />
              ) : (
                gdsData.gdsNm
              )}
            </td>
          </tr>

          <tr>
            <th scope='row'>서버구분{editMode && <span className='essential'>*</span>}</th>
            <td>
              {editMode ? (
                <Input name='gdsDtlCn' value={form.gdsDtlCn || ''} onChange={handleChange} />
              ) : (
                gdsData.gdsDtlCn
              )}
            </td>
          </tr>
        </tbody>
      </table>

      <div className='bet_btn_area'>
        
        <div className='bottom_right_area'>
          
            
              <Button
                color='2'
                className='type1'
                text='신청키 발급 요청'
                onClick={() => {
                  dispatch({ type: 'START_EDIT', payload: false });
                  dispatch({ type: 'CANCEL_EDIT' });
                }}
              />
              
        </div>
      </div>
      <ApiKeyCertDetail gdsId={gdsId} />

      <ApiKeyCerted gdsId={gdsId} />
    </div>
  );
}

export default ApiKeyDetail;
