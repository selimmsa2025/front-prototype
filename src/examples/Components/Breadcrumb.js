import React, { useEffect, useState } from 'react';
function App () {
  const [showUtil1, setShowUtil1] = useState(false);
  const toggleUtil1 = () => {
    setShowUtil1(!showUtil1);
  };

  return (
    <>
      <div class='breadcrumb-wrap'>
        <ol class='breadcrumb'>
          <li class='home'>
            <a href='#' class='txt'>
              홈
            </a>
          </li>
          <li>
            <a href='#' class='txt'>
              1Depth
            </a>
          </li>
          <li>
            <a href='#' class='txt'>
              2Depth
            </a>
          </li>
          <li>
            <a href='#' class='txt'>
              3Depth Last
            </a>
          </li>
        </ol>
        <div class='util'>
          {/* <!-- 
                            - .util_btn.open 클릭 시 해당 버튼의 부모 .share에 active 클래스 추가
                            - .open 클릭 시 .share class="active" 삭제
                        --> */}
          <article class={`share ${showUtil1 ? 'active' : ''}`}>
            <h2 class='title'>
              <a
                href='javascript:void(0)'
                class='util_btn open'
                onClick={toggleUtil1}
              >
                <span class='sr-only'>공유하기</span>
                <i class='ri-share-line'></i>
              </a>
            </h2>

            <div class='item'>
              <ul id='share' class='list'>
                <li class='facebook'>
                  <a href='javascript:void(0)'>페이스북</a>
                </li>
                <li class='twitter'>
                  <a href='javascript:void(0)'>트위터</a>
                </li>
                <li class='band'>
                  <a href='javascript:void(0)'>밴드</a>
                </li>
                <li class='kakaostory'>
                  <a href='javascript:void(0)'>카카오스토리</a>
                </li>
                <li class='kakaotalk'>
                  <a href='javascript:void(0)'>카카오톡</a>
                </li>
              </ul>
              <a href='javascript:void(0)' class='close' onClick={toggleUtil1}>
                닫기
              </a>
            </div>
          </article>

          <a class='util_btn print' href='javascript:void(0)'>
            <span class='sr-only'>인쇄</span>
            <i class='ri-printer-line'></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
