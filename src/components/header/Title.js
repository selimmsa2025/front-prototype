import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import UserMenu from './UserMenu';

function Title({ setIsHeaderClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);

  // 나의 서비스 클릭
  const activeTogle = () => {
    setIsActive(!isActive);
  };

  // 통합검색 팝업
  const popTogle = () => {
    setIsActive(false);
    setIsOpen(!isOpen);
  };

  const [searchValue, setSearchVaue] = useState('퇴직');
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      if (inputRef.current) {
        inputRef.current.focus();
        document.body.style.overflow = 'hidden';
      }
    } else document.body.style.overflow = 'auto';
  }, [isOpen]);

  return (
    <>
      <div
        className='head-body'
        onClick={() => {
          setIsHeaderClick(true);
        }}
      >
        <div className='inner'>
          {/* <div className='head-etc'>
            <ul className='etc-ul'>
              <li>
                <button type='button' className='plus'>
                  업무서비스
                </button>
                <div className='util_group'>
                  <ul className='util_list'>
                    <li>
                      <a href='#' target='_blank' title='새창 열림'>
                        서비스 1
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' title='새창 열림'>
                        서비스 2
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' title='새창 열림'>
                        서비스 3
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div> */}
          <div className='head-in'>
            <h1 className='logo'>
              <a
                href='/'
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                }}
              >
                <img
                  src='/img/layout/new_logo.png'
                  className='logo-im'
                  alt='온나라지식'
                />
              </a>
            </h1>

            <div className='right'>
              <UserMenu />
              <button
                type='button'
                className='btn-navi navi-row all'
                id='m-gnb-open'
              >
                전체메뉴
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Title;
