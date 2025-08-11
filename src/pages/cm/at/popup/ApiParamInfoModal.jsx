import React, { useState } from 'react';
import CommonPopup from 'components/popup/CommonPopup';

const ApiParamInfoModal = ({ showPopup, onClose, headerInfo, requestInfo, startTest}) => {

    const [headerContent, setHeaderContent] = useState(JSON.stringify(headerInfo, null, 2));
    const [requestContent, setRequestContent] = useState(JSON.stringify(requestInfo, null, 2));

    return (
        <>
            <CommonPopup
                draggable={false}
                showPopup={showPopup}
                onClose={onClose}
                saveButtonTitle={'테스트 시작'}
                closeButtonTitle={'취소'}
                additionalButtonTitle={''}
                saveButtonOnClick={() => {
                    startTest(headerContent, requestContent);
                }}
                closeButtonOnClick={onClose}
				additionalButtonOnClick={onClose}
                title={'파라미터 정보'}
                size='middle'
            >
                <div className='board_list'>
                    <table className='tstyle_write h45'>
                        <caption>파라미터 정보 - Header, Request Body 로 구성</caption>
                        <tbody>
                             <tr>
                                <th scope='row'>Header</th>
                                <td>
                                    <textarea className='textarea h300' value={headerContent} onChange={(e) => {setHeaderContent(e.target.value)}} />
                                </td>
                                <th scope='row'>Request Body</th>
                                <td>
                                    <textarea className='textarea h300' value={requestContent} onChange={(e) => {setRequestContent(e.target.value)}} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CommonPopup>
        </>
    )
};

export default ApiParamInfoModal;