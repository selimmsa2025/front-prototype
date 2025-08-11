import { useState, useEffect, useCallback } from 'react';
import {
  Input,
  Button,
  Select,
  Textarea,
  DatePicker,
} from '../../Components/Element';
import Breadcrumb from '../../Components/Breadcrumb';
import dayjs from 'dayjs';
import Editor from '../../Components/Editor';

export default function RegistUser ({}) {
  const [value, setValue] = useState('');

  const changeValue = (value) => {
    setValue(value);
  };

  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>Page Title</h2>
      </div>
      <div class='contents_area'>
        <div class='box_st3 desc_bx'>
          <h3 class='title'>시작하기 전에 유의사항에 대해 확인하겠습니다.</h3>
          <p>
            인터넷 신청은 본인과 등록된 거주인만 가능하며 무료로 발급받을 수
            있습니다. 본인 인증되지 않은 경우는 거주지 읍면동에 방문하거나
            우편으로 신청, 발급받을 수 있으며 발급 비용이 발생합니다.
          </p>
          <span class='line'></span>
          <h3 class='title'>시작하기 전에 유의사항 리스트를 알려드립니다.</h3>
          <ul class='dot1'>
            <li>특이 사항, 이상 징후 발견 시 즉각 대응 및 상황 보고</li>
            <li>
              특이 사항, 이상 징후 발견 시 즉각 대응 및 상황 보고
              <ul class='dot2'>
                <li>
                  최근 당직실에 걸려온 민원전화 불친절하게 대응하여 민원.
                  정보공개 등의 사례가 발생하고 있사오니. 유의하여 주시기
                  바랍니다.
                </li>
                <li>
                  최근 당직실에 걸려온 민원전화 불친절하게 대응하여 민원.
                  정보공개 등의 사례가 발생하고 있사오니. 유의하여 주시기
                  바랍니다. 최근 당직실에 걸려온 민원전화 불친절하게 대응하여
                  민원. 정보공개 등의 사례가 발생하고 있사오니. 유의하여 주시기
                  바랍니다.
                </li>
              </ul>
            </li>
          </ul>
          <div class='mt_10'>
            <Button as='a' color='4' />
            <Button as='a' color='4' />
          </div>
        </div>

        <div class='tit_area'>
          <h3 class='h-tit3'>Table Title</h3>
        </div>
        <div class='board_list'>
          <table class='tstyle_write'>
            <caption>게시판 상세 - 서브항목들로 구성</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>항목</th>
                <td>
                  <div id='editer'>
                    <Editor value={value} onChange={changeValue} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
