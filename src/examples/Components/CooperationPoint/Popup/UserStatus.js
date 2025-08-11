import axios from 'axios';
import { useState, useEffect } from 'react';
import _ from 'lodash';
import { Button, Textarea } from '../../Element';

export default function UserStatus ({ close }) {
  const [userInfo, setUserInfo] = useState({});
  const getUserInfo = async () => {
    const response = await axios.get('/mockupServer/getUserstatus.json');
    setUserInfo(response.data.userInfo);
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  const sendMessage = () => {
    //send logic

    close();
  };
  return (
    <>
      <div class='popup active'>
        <article class='size_md'>
          <h2 class='txt_center'>사용자 정보</h2>
          <div class='pop_content'>
            <div class='board_list'>
              <table class='tstyle_write'>
                <caption>
                  사용자 정보 - 성명, 소속, 직위/직급, 이메일, 사무실, 팩스,
                  담당업무, 경력사항으로 이루어짐
                </caption>
                <colgroup>
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '30%' }} />
                  <col style={{ width: '20%' }} />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope='row'>성명</th>
                    <td colspan='3'>{userInfo.name}</td>
                  </tr>
                  <tr>
                    <th scope='row'>소속</th>
                    <td colspan='3'>{userInfo.depart}</td>
                  </tr>
                  <tr>
                    <th scope='row'>직위/직급</th>
                    <td>{userInfo.position}</td>
                    <th scope='row'>이메일</th>
                    <td>{userInfo.email}</td>
                  </tr>
                  <tr>
                    <th scope='row'>사무실</th>
                    <td>{userInfo.office}</td>
                    <th scope='row'>팩스</th>
                    <td>{userInfo.fax}</td>
                  </tr>
                  <tr>
                    <th scope='row'>담당업무</th>
                    <td colspan='3'>{userInfo.task}</td>
                  </tr>
                  <tr>
                    <th scope='row'>경력사항</th>
                    <td colspan='3'>{userInfo.career}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class='box_st5 type2'>
              <h3 class='tit1 txt_center'>
                <b class='point_color1'>전정일</b>님에게 마음을 담은
                감사메세지를 보내시겠습니까?
              </h3>
              <Textarea
                name='text_content'
                id='fr_textarea'
                class='textarea mt_20'
                placeholder='감사메세지를 입력해주세요.'
              />
              <p class='txt_center mt_20'>
                <span class='txt_help'>
                  작성하시는 감사메세지 내용은 온-나라 이음 사용자 모두가 볼 수
                  있음을 알려드립니다.
                </span>
              </p>
              <div class='center_btn_area mt_20'>
                <Button
                  as='a'
                  color='1'
                  class='type3'
                  text='협업포인트 보내기'
                  onClick={sendMessage}
                />
              </div>
            </div>
          </div>
          <a href='javscript:void(0)' class='close_btn' onClick={close}>
            <span class='sr-only'>팝업 닫기</span>
          </a>
        </article>
      </div>
    </>
  );
}
