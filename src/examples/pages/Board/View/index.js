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
import { Button, Tab } from '../../../Components/Element';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../../../Components/Breadcrumb';
import DraggableTab from '../../../Components/Element/DraggableTab';

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
      <div className='contents_area'>
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
        <DraggableTab
          type={2}
          data={[
            { index: 1, title: '탭1' },
            { index: 2, title: '탭2' },
            { index: 3, title: '탭3' },
            { index: 4, title: '탭4' },
            { index: 5, title: '탭5' },
            { index: 6, title: '탭6' },
          ]}
          currentIndex={tab}
          onChange={(index) => {
            setTab(index);
          }}
        />
        <h2 className='h-tit2'>H2 Title</h2>

        <div className='tit_area'>
          <h3 className='h-tit3'>Table Title</h3>
          <div className='right_items'>
            <Button text={'버튼1'} color={4} />{' '}
            <Button text={'버튼1'} color={4} />{' '}
            <Button text={'버튼1'} color={4} />
          </div>
        </div>

        <div className='board_list'>
          <table className='tstyle_write'>
            <caption>공지사항 상세 - 항목들로 구성</caption>
            <tbody>
              <tr>
                <th scope='row'>항목</th>
                <td colspan='3'>내용이 들어가는 자리입니다.</td>
              </tr>
              <tr>
                <th scope='row'>항목</th>
                <td colspan='3'>내용이 들어가는 자리입니다.</td>
              </tr>
              <tr>
                <th scope='row'>항목</th>
                <td>내용이 들어가는 자리입니다.</td>
                <th scope='row'>항목</th>
                <td>내용이 들어가는 자리입니다.</td>
              </tr>
              <tr>
                <th scope='row'>항목</th>
                <td>내용이 들어가는 자리입니다.</td>
                <th scope='row'>항목</th>
                <td>
                  내용이 들어가는 자리입니다.
                  <br />
                  내용이 들어가는 자리입니다.
                  <br />
                  <Button text={'버튼'} color={4} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='tit_area'>
          <h3 className='h-tit3'>Table Title</h3>
        </div>
        <div className='board_list'>
          <table className='tstyle_view'>
            <caption>
              공지사항 목록 - 번호, 제목, 담당부서, 첨부, 등록일, 조회로 구성
            </caption>
            <thead>
              <tr>
                <th scope='col'>제목</th>
                <th scope='col'>제목</th>
                <th scope='col'>제목</th>
                <th scope='col'>제목</th>
                <th scope='col'>제목</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
              </tr>
              <tr>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
              </tr>
              <tr>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
              </tr>
              <tr>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
              </tr>
              <tr>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
                <td aria-label='내용'>내용</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class='tit_area'>
          <h3 class='h-tit3'>Table Title</h3>
          <div class='right_items'>
            <Button
              text={'전체 다운로드'}
              title='다운로드'
              download='download'
              color={4}
            />
          </div>
        </div>
        <div className='file_list'>
          <ul>
            <li className='pdf'>
              <p className='text'>
                첨부파일의 제목인 파일명이 들어갑니다. [pdf, 328MB]
              </p>
              <div>
                <Button
                  text={'다운로드'}
                  title='다운로드'
                  download='download'
                  color={4}
                />{' '}
                <Button
                  text={'바로가기'}
                  target='_blank'
                  title='새창열림'
                  color={4}
                />
              </div>
            </li>
            <li className='hwp'>
              <p className='text'>
                첨부파일의 제목인 파일명이 들어갑니다. [hwp, 328MB]
              </p>
              <div>
                <Button
                  text={'다운로드'}
                  title='다운로드'
                  download='download'
                  color={4}
                />{' '}
                <Button
                  text={'바로가기'}
                  target='_blank'
                  title='새창열림'
                  color={4}
                />
              </div>
            </li>
            <li className='img'>
              <p className='text'>
                첨부파일의 제목인 파일명이 들어갑니다. [img, 328MB]
              </p>
              <div>
                <Button
                  text={'다운로드'}
                  title='다운로드'
                  download='download'
                  color={4}
                />{' '}
                <Button
                  text={'바로가기'}
                  target='_blank'
                  title='새창열림'
                  color={4}
                />
              </div>
            </li>
            <li className='doc'>
              <p className='text'>
                첨부파일의 제목인 파일명이 들어갑니다. [doc, 328MB]
              </p>
              <div>
                <Button
                  text={'다운로드'}
                  title='다운로드'
                  download='download'
                  color={4}
                />{' '}
                <Button
                  text={'바로가기'}
                  target='_blank'
                  title='새창열림'
                  color={4}
                />
              </div>
            </li>
            <li className='xls'>
              <p className='text'>
                첨부파일의 제목인 파일명이 들어갑니다. [xls, 328MB]
              </p>
              <div>
                <Button
                  text={'다운로드'}
                  title='다운로드'
                  download='download'
                  color={4}
                />{' '}
                <Button
                  text={'바로가기'}
                  target='_blank'
                  title='새창열림'
                  color={4}
                />
              </div>
            </li>
            <li className='ppt'>
              <p className='text'>
                첨부파일의 제목인 파일명이 들어갑니다. [ppt, 328MB]
              </p>
              <div>
                <Button
                  text={'다운로드'}
                  title='다운로드'
                  download='download'
                  color={4}
                />{' '}
                <Button
                  text={'바로가기'}
                  target='_blank'
                  title='새창열림'
                  color={4}
                />
              </div>
            </li>
            <li className='zip'>
              <p className='text'>
                첨부파일의 제목인 파일명이 들어갑니다. [zip, 328MB]
              </p>
              <div>
                <Button
                  text={'다운로드'}
                  title='다운로드'
                  download='download'
                  color={4}
                />{' '}
                <Button
                  text={'바로가기'}
                  target='_blank'
                  title='새창열림'
                  color={4}
                />
              </div>
            </li>
          </ul>
        </div>

        <div class='bet_btn_area'>
          <div class='bottom_left_area'>
            <Button text={'Left BTN(이전, 목록보기 등)'} size={3} color={4} />
          </div>
          <div class='bottom_right_area'>
            <Button text={'Secondary BTN'} size={3} color={3} />
            <Button text={'Primary BTN'} size={3} color={1} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
