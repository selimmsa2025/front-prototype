import React, { useEffect, useState } from 'react';

function App () {
  return (
    <>
      <footer id='footer'>
        <div className='footer_wrap'>
          <div id='siteinfo'>
            <div className='footer_top'>
              <a href='/' className='logo'>
                <img src='/img/layout/logo_mois.svg' alt='행정안전부' />
              </a>
            </div>

            <div className='footer_info'>
              <div className='item addr'>
                <address>
                  (30112) 세종특별자치시 도움6로 42(어진동) 행정안전부
                </address>
                <p>
                  <strong>
                    안내전화 <a href='tel:042-250-5800'>042-250-5800</a>
                  </strong>{' '}
                  (정책연구 5번)(평일 09:00~18:00, 점심시간 제외)
                </p>
              </div>
            </div>
            <div className='f-btm'>
              <div className='f-btm-text'>
                <div className='f-menu'>
                  <a href='#' className='point'>
                    개인정보처리방침
                  </a>
                </div>
                <p className='f-copy'>
                  ⓒ Ministry of the Interior and Safety. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
