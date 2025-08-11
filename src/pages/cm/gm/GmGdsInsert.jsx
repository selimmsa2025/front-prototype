import React, { useState } from 'react';
import { Button, Input } from 'components/element';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import FileUploadBox from 'components/Common/FileUploadBox';

function GmGdsInsert() {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchData } = location.state || {};
  const [files, setFiles] = useState([]);

  const checkValidation = [
    { key: 'gdsPvsnMthSeCd', msg: '상품 구분은 필수값 입니다.'},
    { key: 'gdsTypeCd', msg: '상품 유형은 필수값 입니다.'},
    { key: 'gdsNm', msg: '상품명은 필수값 입니다.'},
    { key: 'gdsDtlCn', msg: '상품 상세내용은 필수값 입니다.'},
    { key: 'gdsSmryCn', msg: '상품 요약내용은 필수값 입니다.'},
    { key: 'mkrSeCd', msg: '제공업체는 필수값 입니다.'},
    { key: 'gdsApiVerSn', msg: '표준 API버전은 필수값 입니다.'},
    { key: 'gdsSrvcDmnAddr', msg: '도메인은 필수값 입니다.'},
    { key: 'gdsSrvcDtlUrlAddr', msg: '서비스URL은 필수값 입니다.'},
  ]

  const [form, setForm] = useState({
    gdsPvsnMthSeCd: '',
    gdsTypeCd: '',
    gdsNm: '',
    gdsDtlCn: '',
    gdsSmryCn: '',
    mkrSeCd: '',
    gdsApiVerSn: '',
    gdsSrvcDmnAddr: '',
    gdsSrvcDtlUrlAddr: '',
    gdsFaqAddr: '',
    gdsDashAddr: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e) => {
    setForm((prev) => ({ ...prev, gdsPvsnMthSeCd: e.target.value }));
  };

  const handleSubmit = async () => {
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
        'http://localhost:8000/saas-be-catalog/v1/gdsmng/insert-gds',
        updatedForm
      );

      if (response.data.resultData.resultCnt > 0) {
        alert('등록되었습니다.');
        navigate('/gmgds/list', { state: { state: searchData } });
      } else {
        alert('등록 실패했습니다.');
      }
    } catch (error) {
      console.error('등록 실패:', error);
      alert('등록 중 오류 발생');
    }
  };

  return (
    <div>
      <div className='contents_area'>
        <div className='tit_area'>
          <h3 className='h-tit3'>카탈로그 등록</h3>
        </div>
      </div>

      <table className='tstyle_write'>
        <caption>카탈로그 등록</caption>
        <colgroup>
          <col style={{ width: '15%' }} />
          <col style={{ width: '75%' }} />
        </colgroup>
        <tbody>
          <tr>
            <th scope='row'>상품구분<span className='essential'>*</span></th>
            <td>
              <label>
                <input type='radio' name='gdsPvsnMthSeCd' value='A0010001' onChange={handleRadioChange} checked={form.gdsPvsnMthSeCd === 'A0010001'} /> 기관(SaaS형)
              </label>
              <label style={{ marginLeft: '10px' }}>
                <input type='radio' name='gdsPvsnMthSeCd' value='A0010002' onChange={handleRadioChange} checked={form.gdsPvsnMthSeCd === 'A0010002'} /> 개별(SaaS형)
              </label>
              <label style={{ marginLeft: '10px' }}>
                <input type='radio' name='gdsPvsnMthSeCd' value='A0010003' onChange={handleRadioChange} checked={form.gdsPvsnMthSeCd === 'A0010003'} /> 개별(설치형)
              </label>
            </td>
          </tr>
          <tr>
            <th scope='row'>상품유형<span className='essential'>*</span></th>
            <td>
              <select
                name='gdsTypeCd'
                value={form.gdsTypeCd}
                onChange={handleChange}
                style={{ width: '100%', height: '30px' }}
                className='form_sel size_sm'
              >
                <option value=''>선택</option>
                <option value='A0020001'>패키지</option>
                <option value='A0020002'>웹오피스</option>
              </select>
            </td>
          </tr>
          <tr>
            <th scope='row'>상품명<span className='essential'>*</span></th>
            <td>
              <Input name='gdsNm' value={form.gdsNm} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <th scope='row'>상품상세내용<span className='essential'>*</span></th>
            <td>
              <Input name='gdsDtlCn' value={form.gdsDtlCn} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <th scope='row'>상품요약내용<span className='essential'>*</span></th>
            <td>
              <Input name='gdsSmryCn' value={form.gdsSmryCn} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <th scope='row'>제공업체<span className='essential'>*</span></th>
            <td>
              <select
                name='mkrSeCd'
                value={form.mkrSeCd}
                onChange={handleChange}
                style={{ width: '100%', height: '30px' }}
                className='form_sel size_sm'
              >
                <option value=''>선택</option>
                <option value='A0030001'>삼성</option>
                <option value='A0030002'>네이버</option>
                <option value='A0030003'>아라소프트</option>
                <option value='A0030004'>한컴소프트</option>
              </select>
            </td>
          </tr>
           <tr>
            <th scope='row'>표준 API버전<span className='essential'>*</span></th>
            <td>
              <select
                name='gdsApiVerSn'
                value={form.gdsApiVerSn}
                onChange={handleChange}
                style={{ width: '100%', height: '30px' }}
                className='form_sel size_sm'
              >
                <option value=''>선택</option>
                <option value='0'>0</option>
                <option value='1'>1</option>
              </select>
            </td>
          </tr>
          <tr>
            <th scope='row'>도메인<span className='essential'>*</span></th>
            <td>
              <Input name='gdsSrvcDmnAddr' value={form.gdsSrvcDmnAddr} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <th scope='row'>서비스URL<span className='essential'>*</span></th>
            <td>
              <Input name='gdsSrvcDtlUrlAddr' value={form.gdsSrvcDtlUrlAddr} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <th scope='row'>FAQ URL</th>
            <td>
              <Input name='gdsFaqAddr' value={form.gdsFaqAddr} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <th scope='row'>대시보드 URL</th>
            <td>
              <Input name='gdsDashAddr' value={form.gdsDashAddr} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <th scope='row'>이미지 첨부파일</th>
            <td>
              <FileUploadBox onChange={(list) => { setFiles(list);}} />
            </td>
          </tr>
        </tbody>
      </table>

      <div className='bet_btn_area'>
        <div className='bottom_left_area'>
          <Button
            as='a'
            color='4'
            className='type1'
            text='목록'
            onClick={() => navigate('/gmgds/list', { state: { state: searchData } })}
          />
        </div>
        <div className='bottom_right_area'>
          <Button
            color='1'
            className='type1'
            text='저장'
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default GmGdsInsert;
