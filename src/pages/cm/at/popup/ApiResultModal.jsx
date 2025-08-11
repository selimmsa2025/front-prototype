import React, { useState, useEffect } from 'react';
import CommonPopup from 'components/popup/CommonPopup';
import api from 'api/api';

const ApiResultModal = ({ showPopup, onClose, apiResult, gdsIdParam}) => {

    const [gdsId, ] = useState(gdsIdParam);
    const [srvrSeCd, ] = useState(apiResult.srvrSeCd);
    const [apiId, ] = useState(apiResult.apiId);
    const [commRsltCn, setCommRsltCn] = useState('');

    const getApiCommRsltCn = () => {
         api.post("/saas-be-catalog/v1/at/prod/info-api-test-result", 
                    { gdsId: gdsId,  srvrSeCd: srvrSeCd, apiId: apiId} 
                )
            .then(res => {
                setCommRsltCn(res.data.resultData.info.commRsltCn);
            })
            .catch(error => {
                console.error("error:", error)
            });
    }

    useEffect(() => {
        getApiCommRsltCn();
    }, [])

    return (
        <>
            <CommonPopup
                draggable={false}
                showPopup={showPopup}
                onClose={onClose}
                saveButtonTitle={''}
                closeButtonTitle={'닫기'}
                additionalButtonTitle={''}
                saveButtonOnClick={''}
                closeButtonOnClick={onClose}
				additionalButtonOnClick={onClose}
                title={'API 조회 결과'}
                size='middle'
            >
                <textarea
                    className='textarea h300'
                    defaultValue={commRsltCn}
                    readOnly
                />
            </CommonPopup>
        </>
    )
};

export default ApiResultModal;