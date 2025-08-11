import React, { useState} from 'react';
// import axios from 'axios';

// saas-be-catalog : kr.go.iop.ci.cmn.file 패키지 확인 

/**
 * FileUploadBox 컴포넌트
 * 
 * - parentId (게시물 PK): 선택사항, 기존 파일 조회 시 사용
 * - onChange: 파일 상태 변경 시 호출되는 콜백 함수
 * 
 * 주요 기능 및 연동 API
 * 1. 파일 선택 및 상태 관리 (status: 'ready' | 'done')
 *    - 'ready': 새로 선택한 파일, 서버 업로드 전 상태
 *    - 'done': 서버에 저장 완료된 파일
 * 2. 파일 삭제: 리스트 초기화 및 onChange 호출
 * 3. 파일 크기 제한: 최대 50MB
 * 
 * 상태 변경 시 onChange 호출 예:
 * - 새 파일 선택: onChange([newFile], { type: 'new', file: newFile.file })
 * - 삭제: onChange([], { type: 'deleted' })
 * - 기존 파일 조회: onChange(fileList, { type: 'existing', atchFileSn: firstFileSn })
 * - 파일 없음: onChange([], { type: 'none' })
 * 
 * 컴포넌트 테스트 페이지 : src > pages > shlee > FileUploadPage.jsx
 * 
 */


export default function FileUploadBox({ parentId, onChange }) {
  const [fileList, setFileList] = useState([]);

  // 파일 선택
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const maxSize = 50 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('50MB 이하의 파일만 업로드 가능합니다.');
      e.target.value = '';
      return;
    }

    const newFile = { file, status: 'ready', isExisting: false };
    setFileList([newFile]);
    onChange && onChange([newFile], { type: 'new', file });
  };

  // 파일 삭제 
  const handleDelete = () => {
    setFileList([]);
    onChange && onChange([], { type: 'deleted' });
  };

  return (
    <div className="box_st2">
      <h3>파일업로드</h3>
      <div className="file_upload">
        <input type="file" id="fileIn1" onChange={handleFileChange} />
        <label htmlFor="fileIn1" className="btn1">
          <i className="ri-upload-line"></i> 파일선택
        </label>
      </div>

      <div className="att_box">
        <ul className="upload_list">
          {fileList.map((item, index) => (
            <li key={index}>
              <div className="file">
                <p>
                  {item.file.name} [
                  {item.file.size >= 1024 * 1024
                    ? `${(item.file.size / (1024 * 1024)).toFixed(2)} MB`
                    : `${Math.round(item.file.size / 1024)} KB`}
                  ]
                </p>
                <button type="button" className="close" onClick={handleDelete}>삭제</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
