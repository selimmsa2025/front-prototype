import React, { useEffect, useReducer, useState } from 'react';
import { Button, Input } from 'components/element';
import axios from 'axios';
import FileUploadBox from 'components/Common/FileUploadBox';

const initialState = {
  dataList: [],
  selected: null,
  form: {
    srvcNm: '',
    srvcSmryCn: '',
    srvcDtlCn: '',
    frstCrtDt: '',
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

function GmGdsSrvcDetail({ gdsId }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [imageUrl, setImageUrl] = useState(null);
  const [files, setFiles] = useState([]);

  const getBoardList = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/saas-be-catalog/v1/gdsmng/list-srvc',
        { gdsId }
      );
      dispatch({ type: 'SET_LIST', payload: response.data?.resultData?.resultList || [] });
      
    } catch (error) {
      console.error('목록 조회 실패:', error);
    }
  };

  const handleRowClick = async (row) => {
    if (state.editMode) return;
    if (state.selected?.srvcId === row.srvcId) {
      dispatch({ type: 'CLEAR_SELECTION' });
      return;
    }
    try {
      const response = await axios.post(
        'http://localhost:8000/saas-be-catalog/v1/gdsmng/info-srvc',
        { gdsId, srvcId: row.srvcId }
      );
      const vo = response.data?.resultData?.resultVo;
      if (vo) {
        dispatch({ type: 'SELECT_ROW', payload: vo });

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
      }
    } catch (error) {
      console.error('상세 조회 실패:', error);
    }
  };

  const saveSrvc = async () => {
    if(state.form.srvcNm === ''){
      alert("서비스명은 필수값 입니다.");
      return;
    }else if(state.form.srvcSmryCn === ''){
      alert("서비스 요약내용은 필수값 입니다.");
      return;
    }else if(state.form.srvcDtlCn === ''){
      alert("서비스 상세내용은 필수값 입니다.");
      return;
    }

    if (!window.confirm('저장하시겠습니까?')) return;
    try {
      const isUpdate = !!state.form.srvcId;
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

      const url = isUpdate
        ? 'http://localhost:8000/saas-be-catalog/v1/gdsmng/update-srvc'
        : 'http://localhost:8000/saas-be-catalog/v1/gdsmng/insert-srvc';
      await axios.post(url, { gdsId, ...state.form, atchFileSn: atchFileSn });
      alert('저장되었습니다.');
      await getBoardList();
      if (isUpdate) {
        const updatedId = state.form.srvcId;
        const response = await axios.post(
          'http://localhost:8000/saas-be-catalog/v1/gdsmng/info-srvc',
          { gdsId, srvcId: updatedId }
        );
        const updatedVo = response.data?.resultData?.resultVo;
        if (updatedVo) {
          dispatch({ type: 'SELECT_ROW', payload: updatedVo });
          console.log(updatedVo);

          if (updatedVo?.atchFileSn) {
            try {
              const res = await axios.get(
                `http://localhost:8000/saas-be-catalog/v1/file/${updatedVo.atchFileSn}`,
                { responseType: 'blob' }
              );
              
              const url = URL.createObjectURL(res.data);
              setImageUrl(url);
            } catch (err) {
              console.error('이미지 로딩 실패:', err);
            }
          }
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
      if(state.form.atchFileSn){
        try {
        await axios.post(
          'http://localhost:8000/saas-be-catalog/v1/file/updateUseYn',
          { atchFileSn: state.form.atchFileSn }
        );
        console.log('첨부파일 삭제 완료');
        } catch (fileError) {
          console.warn('첨부파일 삭제 실패:', fileError);
        }
      }
      await axios.post(
        'http://localhost:8000/saas-be-catalog/v1/gdsmng/delete-srvc',
        { gdsId, srvcId: state.selected?.srvcId }
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
          <h3 className='h-tit3'>카탈로그 서비스</h3>
        </div>
        <div className='board_list'>
          <table className='tstyle_list'>
            <caption>카탈로그 서비스</caption>
            <thead>
              <tr>
                <th>순번</th>
                <th>서비스명</th>
                <th>서비스요약내용</th>
                <th>등록일자</th>
              </tr>
            </thead>
            <tbody>
              {state.dataList.length > 0 ? (
                state.dataList.map((v, i) => (
                  <tr
                    key={i}
                    onClick={() => {setImageUrl(''); handleRowClick(v)}}
                    style={{ cursor: 'pointer' }}
                  >
                    <td>{v.rnum}</td>
                    <td>{v.srvcNm}</td>
                    <td>{v.srvcSmryCn}</td>
                    <td>{v.frstCrtDt}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan='4'>데이터가 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {(state.selected || state.editMode) && (
          <table className='tstyle_write'>
            <caption>카탈로그서비스 상세</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col style={{ width: '75%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th>서비스명<span className='essential'>*</span></th>
                <td>
                  {state.editMode ? (
                    <Input name='srvcNm' value={state.form.srvcNm} onChange={handleChange} />
                  ) : (
                    state.selected?.srvcNm
                  )}
                </td>
              </tr>
              <tr>
                <th>서비스 요약내용<span className='essential'>*</span></th>
                <td>
                  {state.editMode ? (
                    <Input name='srvcSmryCn' value={state.form.srvcSmryCn} onChange={handleChange} />
                  ) : (
                    state.selected?.srvcSmryCn
                  )}
                </td>
              </tr>
              <tr>
                <th>서비스 상세내용<span className='essential'>*</span></th>
                <td>
                  {state.editMode ? (
                    <Input name='srvcDtlCn' value={state.form.srvcDtlCn} onChange={handleChange} />
                  ) : (
                    state.selected?.srvcDtlCn
                  )}
                </td>
              </tr>
              {state.form.frstCrtDt && !state.editMode && (
                <tr>
                  <th>등록일자</th>
                  <td>{state.form.frstCrtDt}</td>
                </tr>
              )}
              <tr>
                <th>이미지 첨부파일</th>
                <td>
                {state.editMode ? (
                  <>
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt="첨부 이미지"
                        style={{ maxWidth: '100%', maxHeight: '300px', border: '1px solid #ddd' }}
                      />
                    )}
                    <FileUploadBox onChange={(list) => { setFiles(list); setImageUrl(''); }} />
                  </>
                ) : (
                  <>
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt="첨부 이미지"
                        style={{ maxWidth: '100%', maxHeight: '300px', border: '1px solid #ddd' }}
                      />
                    )}
                  </>
                )}

                </td>
              </tr>
            </tbody>
          </table>
        )}

        <div className='bet_btn_area'>
          <div className='bottom_right_area'>
            {!state.selected && !state.editMode && (
              <Button
                color='3'
                className='type1'
                text='등록'
                onClick={() => {setImageUrl(''); dispatch({ type: 'START_INSERT' })}}
              />
            )}
            {state.selected && !state.editMode && (
              <>
                <Button
                  color='2'
                  className='type1'
                  text='삭제'
                  onClick={deletePlan}
                />
                <Button
                  color='3'
                  className='type1'
                  text='수정'
                  onClick={() => dispatch({ type: 'START_EDIT' })}
                />
              </>
            )}
            {state.editMode && (
              <>
                <Button
                  color='2'
                  className='type1'
                  text='취소'
                  onClick={() => dispatch({ type: 'CANCEL_EDIT' })}
                />
                <Button
                  color='1'
                  className='type1'
                  text='저장'
                  onClick={saveSrvc}
                />
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default GmGdsSrvcDetail;
