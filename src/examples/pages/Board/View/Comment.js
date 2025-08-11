import { createPortal } from 'react-dom';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Link,
  useNavigate,
  json,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../../../Components/Breadcrumb';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import {
  Button,
  Check,
  DatePicker,
  Input,
  Radio,
  Select,
  Tab,
} from '../../../Components/Element';
import DateRangePicker from '../../../Components/DateRangePicker';
import Comment from '../../../Components/Board/Comment';

function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);

  return (
    <>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>page title</h2>
      </div>
      <Tab
        type={1}
        data={[
          { index: 1, title: '탭1' },
          { index: 2, title: '탭2' },
          { index: 3, title: '탭3' },
          { index: 4, title: '탭4' },
          { index: 5, title: '탭5' },
        ]}
        currentIndex={tab}
        onChange={(index) => {
          setTab(index);
        }}
      />
      <div class='contents_area'>
        <h2 class='h-tit2'>H2 Title</h2>

        <div class='tit_area'>
          <h3 class='h-tit3'>Table Title</h3>
          <div class='right_items'>
            <Button text={'버튼'} color={4} />{' '}
            <Button text={'버튼'} color={4} />{' '}
            <Button text={'버튼'} color={4} />
          </div>
        </div>
        <div class='board_list'>
          <table class='tstyle_write'>
            <caption>게시판 상세 - 서브항목들로 구성</caption>
            <tbody>
              <tr>
                <th scope='row'>서브항목</th>
                <td>내용이 들어가는 자리입니다.</td>
                <th scope='row'>서브항목</th>
                <td>내용이 들어가는 자리입니다.</td>
              </tr>
              <tr>
                <th scope='row'>서브항목</th>
                <td>내용이 들어가는 자리입니다.</td>
                <th scope='row'>서브항목</th>
                <td>내용이 들어가는 자리입니다.</td>
              </tr>
              <tr>
                <th scope='row'>서브항목</th>
                <td>
                  내용이 들어가는 자리입니다.
                  <Button as={'a'} color={4} class='type2' text={`버튼`} />{' '}
                  <Button as={'a'} color={4} class='type2' text={`버튼`} />
                </td>
                <th scope='row'>서브항목</th>
                <td>내용이 들어가는 자리입니다.</td>
              </tr>
              <tr>
                <th scope='row'>서브항목</th>
                <td>내용이 들어가는 자리입니다.</td>
                <th scope='row'>서브항목</th>
                <td>내용이 들어가는 자리입니다.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class='tit_area'>
          <h3 class='h-tit3'>Table Title</h3>
        </div>
        <div class='board_list'>
          <table class='tstyle_write'>
            <caption>게시판 상세 - 서브항목들로 구성</caption>
            <tbody>
              <tr>
                <th scope='row'>서브항목</th>
                <td>내용이 들어가는 자리입니다.</td>
              </tr>
              <tr>
                <th scope='row'>서브항목</th>
                <td>내용이 들어가는 자리입니다.</td>
              </tr>
              <tr>
                <th scope='row'>서브항목</th>
                <td>
                  내용이 들어가는 자리입니다.내용이 들어가는 자리입니다.내용이
                  들어가는 자리입니다.내용이 들어가는 자리입니다.내용이 들어가는
                  자리입니다.내용이 들어가는 자리입니다.내용이 들어가는
                  자리입니다.내용이 들어가는 자리입니다.
                  <br />
                  <Button as={'a'} color={4} class='type2' text={`버튼`} />{' '}
                  <Button as={'a'} color={4} class='type2' text={`버튼`} />
                </td>
              </tr>
              <tr>
                <th scope='row'>서브항목</th>
                <td>내용이 들어가는 자리입니다.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class='bet_btn_area'>
          <div class='bottom_left_area'>
            <Button text={'Left BTN(이전, 목록보기 등)'} size={3} color={4} />
          </div>
          <div class='bottom_right_area'>
            <Button
              text={'Secondary BTN'}
              size={3}
              color={3}
              data-tooltip-id='tooltip-secondary'
              data-tooltip-content='Secondary BTN 도움말입니다.'
            />
            <Tooltip id='tooltip-secondary' />{' '}
            <Button
              text={'Primary BTN'}
              size={3}
              color={1}
              id='tooltip-primary'
            />
            <Tooltip
              anchorSelect='#tooltip-primary'
              content='Primary BTN 도움말입니다.'
              place='bottom-end'
              openEvents={{ click: true }}
            />
          </div>
        </div>

        <Comment />
      </div>
    </>
  );
}

export default App;
