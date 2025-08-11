import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from './Breadcrumb';
import Header from './Header';

import Footer from './Footer';

function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [typeSearchText, setTypeSearchText] = useState('');

  return (
    <>
      <Header />
      <main id='container'>
        <div class='inner in-between'>
          <div class='contents'>
            <div class='contents_area'>
              <div class='error_page'>
                <i>
                  <img src='../img/common/error_page.png' alt='' />
                </i>
                <h2 class='tit'>
                  죄송합니다. <br />
                  현재 찾을 수 없는 페이지를 요청 하셨습니다.
                </h2>
                <p class='text'>
                  존재하지 않는 주소를 입력하셨거나, 요청하신 페이지의 주소가
                  변경 및 삭제되어 찾을 수 없습니다.
                  <br />
                  궁금하신 점이 있으시면 언제든 고객센터를 통해 문의해 주시기
                  바랍니다. 감사합니다.
                </p>
                <div class='center_btn_area'>
                  <a href='#' class='btn4 type1'>
                    온나라지식 메인으로
                  </a>
                  <a href='#' class='btn1 type1'>
                    이전페이지
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <div class='move_top'>
        <a href='#wrap' class='btn_top' title='상단으로 이동하기'>
          <span class='sr_only'>상단으로 이동</span>
        </a>
      </div>
    </>
  );
}

export default App;
