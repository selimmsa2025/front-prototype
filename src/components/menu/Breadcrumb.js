import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function App({ url, titleYn }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="breadcrumb-wrap">
        <ol className="breadcrumb">
          <li className="home">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className="txt"
            >
              홈
            </a>
          </li>
          {/* {menuList?.map((v, i) => {
            return ( */}
          <li key={1}>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="txt"
            >
              메뉴
            </a>
          </li>
          {/* );

          })} */}
        </ol>
        <div className="util">
          {/* <!-- 
                            - .util_btn.open 클릭 시 해당 버튼의 부모 .share에 active 클래스 추가
                            - .open 클릭 시 .share className="active" 삭제
                        --> */}
          <a
            href="/"
            className="util_btn print"
            onClick={() => window.print()}
          >
            <span className="sr-only">인쇄</span>
            <i className="ri-printer-line"></i>
          </a>
        </div>
      </div>
      {/* <div className="page-title-wrap" data-type="responsive">
        {(titleYn || 'Y') == 'Y' && menuNm != '' ? (
          <h2 className="h-tit">{menuNm}</h2>
        ) : (
          ''
        )}
        <div className="title-drop-wrap h-tit-drop">
          <button
            type="button"
            className={
              showIntroduction ? `h-tit h-drop-btn active` : `h-tit h-drop-btn`
            }
            onClick={introductionTogle}
          >
            {menuNm}
            <span className="sr-only">
              {showIntroduction ? '닫기' : '열기'}
            </span>
          </button>
          <div className="drop-menu">
            <div className="drop-in">
              <ul className="drop-list">
                {subMenuList?.map((menu, i) => {
                  return (
                    <li key={menu.menuId}>
                      <a
                        href="/"
                        className="item-link"
                        onClick={(e) => {
                          e.preventDefault();
                          menu.menuUrlAddr ? goToMenu(menu.menuUrlAddr) : null;
                        }}
                      >
                        {menu.menuNm}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;