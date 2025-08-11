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
import {
  Input,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
} from '../../../Components/Element';
import FileBoardType1 from '../../../Components/BoardList/FileBoardType1';
import FileBoardType2 from '../../../Components/BoardList/FileBoardType2';
function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataList, setDataList] = useState();
  const getBoardList = async () => {
    const response = await axios.get('/mockupServer/getFileUploadList.json');
    setDataList(response.data);
  };
  useEffect(() => {
    getBoardList();
  }, []);

  return (
    <>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>page title</h2>
      </div>
      <div className='contents_area'>
        <div className='tit_area'>
          <div className='right_items'>
            <Button as={'a'} color={4} text={`파일추가`}>
              {' '}
              <i className='ri-add-line'></i>
            </Button>{' '}
            <Button as={'a'} color={4} text={`삭제`}>
              {' '}
              <i className='ri-close-line'></i>
            </Button>
          </div>
        </div>
        <FileBoardType1 dataList={dataList} />
        <FileBoardType2 dataList={dataList} />
        <div className='box_st2'>
          <h3>파일업로드</h3>
          <p className='desc1'>헤딩의 정보를 보완하는 텍스트 설명</p>
          <div className='file_upload'>
            <p>
              첨부할 파일을 여기에 끌어다 놓거나. 파일 선택 버튼을 직접
              선택해주세요.
            </p>
            <input type='file' id='fileIn1' name='fileIn1' title='파일선택' />
            <label for='fileIn1' className='btn1'>
              <i className='ri-upload-line'></i> 파일선택
            </label>
          </div>
          <div className='att_box'>
            <h4 className='sr-only'>업로드된 파일</h4>
            <div className='top clear'>
              <strong className='tit'>
                <em>3개</em> / 10개
              </strong>
              <a href='#' className='fr close'>
                전체 파일 삭제
              </a>
            </div>
            <ul class='upload_list'>
              <li>
                <div class='file'>
                  <p>
                    전입신고서 [주민등록법 시행령 : 별지서식 15, 15호의2호]
                    [hwp, 17KB]
                  </p>
                  <button type='button' class='close'>
                    삭제
                  </button>
                </div>
              </li>
              <li>
                <div class='file'>
                  <p>
                    위임장(주민등록법 시행령 별지 제15호의2호서식) [hwp, 17KB]
                  </p>
                  <span class='spin'>
                    <span class='sr-only'>진행중</span>
                  </span>
                  {/* <!-- 업로드 진행완료시 class="on" 추가 --> */}
                </div>
              </li>
              <li>
                <div class='file'>
                  <p>
                    위임장(주민등록법 시행령 별지 제15호의2호서식) [hwp, 17KB]
                  </p>
                  <span class='spin on'>
                    <span class='sr-only'>완료</span>
                  </span>
                  {/* <!-- 업로드 진행완료시 class="on" 추가 --> */}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className='bet_btn_area'>
          <div className='fl'>
            <Button
              as={'a'}
              className={'type1'}
              color={4}
              text={'Left BTN(이전, 목록보기 등)'}
            />
          </div>
          <div className='fr'>
            <Button
              as={'a'}
              className={'type1'}
              color={3}
              text={'Secondary BTN'}
            />{' '}
            <Button
              as={'a'}
              className={'type1'}
              color={1}
              text={'Primary BTN'}
            />
          </div>
        </div> */}

        <div class='bet_btn_area'>
          <div class='bottom_left_area'>
            <Button
              as={'a'}
              className={'type1'}
              color={4}
              text={'Left BTN(이전, 목록보기 등)'}
            />
          </div>
          <div class='bottom_right_area'>
            <Button
              as={'a'}
              className={'type1'}
              color={3}
              text={'Secondary BTN'}
            />
            <Button
              as={'a'}
              className={'type1'}
              color={1}
              text={'Primary BTN'}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
