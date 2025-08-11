import React, { useState } from 'react';
import { useEffect } from 'react';
import { insertApiVersion } from '../api/apiService';
import { fetchVersionList } from '../api/apiService';


const ApiVerPopup = ({ showPopup, onClose, onSave }) => {
  const [apiVerChgRsn, setApiVerChgRsn] = useState('');
  const [nextVer, setNextVer] = useState(null);



  useEffect(() => {
    const loadVersion = async () => {
      try {
        const versionList = await fetchVersionList();
        const maxVersion = Math.max(...versionList, -1); // 리스트에서 최대값 추출
        setNextVer(maxVersion + 2);// 다음 버전 표시용
      } catch (error) {
        console.error('버전 목록 불러오기 실패:', error);
        setNextVer(null);
      }
    };

    if (showPopup) {
      setApiVerChgRsn('');
      loadVersion();
    }
  }, [showPopup]);


  const handleSave = async () => {

    try {
      const payload = {
        apiVerChgRsn,
        useYn: 'Y',
        frstCrtPrcrId: 'admin',
      };

      const versionList = await insertApiVersion(payload);

      if (versionList?.length) {
        alert('등록이 완료되었습니다.');
        onSave({ versionList });
        onClose();
      } else {
        alert('버전 등록에 실패했습니다.');
      }
    } catch (error) {
      alert('버전 등록 중 오류가 발생했습니다.');
      console.error(error);
    }
  };


  if (!showPopup) return null;

  return (


    <div className="popup active" style={{ display: 'flex' }}>
      <div tabIndex="0"></div>

      {/* 여기 className 고침 */}
      <article tabIndex="0">
        <h3>표준 API 버전 등록</h3>

        <div className="pop_content">
          <div className="board_list">
            <table className="tstyle_write h45">
              <caption>API 버전 등록 - 변경사유 입력</caption>
              <tbody>
                <tr>
                  <th scope="row">API버전</th>
                  <td>
                  {nextVer !== null
                    ? <span>
                      새로 등록될 버전은 Ver.{nextVer} 입니다.
                    </span>
                    : '버전 정보를 불러오는 중...'}
                    </td>
                </tr>
                <tr>
                  <th scope="row">변경사유</th>
                  <td>
                    <textarea
                      className="form_text"
                      rows="4"
                      value={apiVerChgRsn}
                      onChange={(e) => setApiVerChgRsn(e.target.value)}
                      placeholder="변경사유를 입력해주세요 (선택)"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="sm_btn_box fr">
          <button className="btn4 type1" type="button" onClick={onClose}>
            취소
          </button>

          <button className="btn1 type3" type="button" onClick={handleSave}>
            저장
          </button>
        </div>

        {/* 닫기 버튼 - × 표시 추가 */}
        <button className="close_btn" onClick={onClose}>
        </button>
      </article>
    </div>
  );
};

export default ApiVerPopup;
