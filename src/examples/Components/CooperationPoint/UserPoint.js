import _ from 'lodash';
import { useState, useEffect } from 'react';
import { Button } from '../Element';
import axios from 'axios';
import SendThanksMsg from './Popup/SendThanksMsg';
import { Tooltip } from 'react-tooltip';
export default function UserPoint () {
  const [totalPoint, setTotalPoint] = useState(0);
  const [restPoint, setRestPoint] = useState(0);
  const [boxPoint, setBoxPoint] = useState(0);
  const [openSendMsg, setOpenSendMsg] = useState(false);
  const getUserPoint = async () => {
    //get current login user's total cooperation point by userId in serverside
    const response = await axios.get('/mockupServer/getUserPoint.json');
    const totalPoint = response.data.totalPoint;
    setTotalPoint(totalPoint);
    setRestPoint(totalPoint % 100);
    setBoxPoint(Math.trunc(totalPoint / 100));
  };
  useEffect(() => {
    getUserPoint();
  }, []);

  const closeSendMsgPop = () => {
    setOpenSendMsg(false);
  };

  return (
    <>
      {openSendMsg && <SendThanksMsg close={closeSendMsgPop} />}
      <div class='thk_point_wrap'>
        <div class='thk_p_top'>
          <div class='my_point'>
            <strong class='tit'>My Point!</strong>
            <div class='point_progress'>
              {/* <!-- 협업 포인트바 직접 style에 width값(%)로 조절 --> */}
              <span class='bar' style={{ width: `${restPoint}%` }}></span>
            </div>
            <div class='point_result'>
              <strong>{restPoint}</strong>
              <span> / 100</span>
            </div>
          </div>
          <div class='thk_send'>
            <Tooltip
              anchorSelect='#popupSample'
              content='감사 메시지 보내기 팝업'
              place='bottom'
              isOpen={true}
            />
            <Button
              as='a'
              color='1'
              id={'popupSample'}
              text='감사메세지 보내기'
              onClick={() => setOpenSendMsg(!openSendMsg)}
            ></Button>
          </div>
        </div>
        <div class='total_thk'>
          <p class='desc'>감사포인트 100당 바구니 한개가 채워집니다.</p>
          <ul class='basket_lst'>
            {Array.from({ length: 10 }, (_, i) => (
              <li key={i}>
                <img
                  src={
                    i < boxPoint
                      ? '/img/sub/icon_basket.png'
                      : '/img/sub/icon_basket2.png'
                  }
                  alt={i < boxPoint ? '채워진 바구니' : ''}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
