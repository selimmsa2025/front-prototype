import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App ({ isHeaderClick, setIsHeaderClick }) {
  const navigate = useNavigate();

  const [showNavigationIndex, setShowNavigationIndex] = useState(0);
  const [showSubmenu, setShowSubmenu] = useState(0);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const menuItems = [
    { title: '게시판', url: '' },
    { title: '지식', url: '' },
    { title: '업무위키', url: '' },
    { title: '커뮤니티', url: '' },
    { title: '담벼락', url: '' },
    { title: '협업포인트', url: '' },
    { title: '더보기', url: '' },
  ];

  const subTitleList = [1, 2, 3, 4, 5];

  useEffect(() => {
    if (isHeaderClick) {
      closeNavigation();
      setIsHeaderClick(false);
    }
  }, [isHeaderClick]);

  const closeNavigation = () => {
    setShowNavigationIndex(0);
    setShowSubmenu(0);
    document.body.classNameList.remove('is-w-gnb');
  };
  const openNavigation = (index) => {
    if (index == showNavigationIndex) {
      closeNavigation();
    } else {
      setShowNavigationIndex(index);
      setShowSubmenu(1);
      document.body.classNameList.add('is-w-gnb');
    }
  };
  
  return (
    <>
      {false && (
      <div className='head-gnb'>
        <div className='inner'>
          <nav id='gnb1'>
            <ul>
              {menuItems.map((menu, i) => {
                return (
                  <li
                    className={`plus ${
                      showNavigationIndex == i + 1 ? 'active' : ''
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      openNavigation(i + 1);
                    }}
                    tabIndex={i == menuItems.length - 1 ? 1 : undefined}
                    onKeyDown={
                      i == menuItems.length - 1
                        ? (event) => {
                            if (event.key === 'Tab') {
                              if (showNavigationIndex != menuItems.length) {
                                closeNavigation();
                              }
                            }
                          }
                        : undefined
                    }
                  >
                    <a
                      href='/'
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(menu.url);
                        document.body.classNameList.remove('is-w-gnb');
                      }}
                    >
                      {menu.title}
                    </a>
                    <div className='submenu'>
                      <strong className='sub_title'>
                        <span>{menu.title}</span>
                      </strong>
                      <ul>
                        {subTitleList.map((subTitle, subIndex) => {
                          return (
                            <li
                              className={`${
                                showSubmenu == subIndex + 1 ? 'active' : ''
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowSubmenu(subIndex + 1);
                              }}
                            >
                              <a href='/'>2depth {subTitle}</a>
                              <div className='dep3'>
                                <strong className='dep3_title'>
                                  <a href='/'>2depth {subTitle} title</a>
                                </strong>
                                <ul>
                                  <li>
                                    <a
                                      href='/'
                                      target='_blank'
                                      title='새창 열림'
                                    >
                                      3depth 1
                                    </a>
                                  </li>
                                  <li>
                                    <a href='/'>3depth 2</a>
                                  </li>
                                  <li>
                                    <a href='/'>3depth 3</a>
                                  </li>
                                  <li>
                                    <a href='/'>3depth 4</a>
                                  </li>
                                  <li>
                                    <a href='/'>3depth 5</a>
                                  </li>
                                  <li>
                                    <a href='/'>3depth 6</a>
                                  </li>
                                  <li>
                                    <a href='/'>3depth 7</a>
                                  </li>
                                  <li>
                                    <a href='/'>3depth 8</a>
                                  </li>
                                  <li
                                    tabIndex={
                                      i == menuItems.length - 1 &&
                                      subIndex == subTitleList.length - 1
                                        ? 1
                                        : undefined
                                    }
                                    onKeyDown={
                                      i == menuItems.length - 1 &&
                                      subIndex == subTitleList.length - 1
                                        ? (event) => {
                                            if (event.key === 'Tab') {
                                              closeNavigation();
                                            }
                                          }
                                        : undefined
                                    }
                                  >
                                    <a href='/'>3depth 9</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div> )};

      <nav id={`gnb2`} className={`${showMobileMenu ? ' active' : ''}`}>
        <a
          href="/"
          className='control open'
          onClick={() => {
            setShowMobileMenu(!showMobileMenu);
          }}
        >
          <span>전체메뉴</span> <span className='sr_only'>열기</span>
        </a>
        <ul>
          <li className='active'>
            <a href='/'>1 Depth </a>
            <div className='submenu'>
              <ul>
                <li>
                  <a href='/'>2 Depth 1</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 2</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href='/'>2 Depth 2</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 2</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href='/'>2 Depth 3</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href='/'>1 Depth </a>
            <div className='submenu'>
              <ul>
                <li>
                  <a href='/'>2 Depth 1</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 2</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href='/'>2 Depth 2</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 2</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href='/'>2 Depth 3</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href='/'>1 Depth </a>
            <div className='submenu'>
              <ul>
                <li>
                  <a href='/'>2 Depth 1</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 2</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href='/'>2 Depth 2</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 2</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href='/'>2 Depth 3</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href='/'>1 Depth </a>
            <div className='submenu'>
              <ul>
                <li>
                  <a href='/'>2 Depth 1</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 2</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href='/'>2 Depth 2</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 2</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href='/'>2 Depth 3</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href='/'>1 Depth </a>
            <div className='submenu'>
              <ul>
                <li>
                  <a href='/'>2 Depth 1</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 2</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href='/'>2 Depth 2</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 2</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href='/'>2 Depth 3</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href='/'>1 Depth </a>
            <div className='submenu'>
              <ul>
                <li>
                  <a href='/'>2 Depth 1</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 2</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href='/'>2 Depth 2</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 2</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href='/'>2 Depth 3</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href='/'>1 Depth </a>
            <div className='submenu'>
              <ul>
                <li>
                  <a href='/'>2 Depth 1</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 2</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href='/'>2 Depth 2</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 2</a>
                      </li>
                      <li>
                        <a href='/'>3 Depth 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href='/'>2 Depth 3</a>
                  <div className='dep3'>
                    <strong className='dep3_title'>
                      <a href='/'>2 Depth title</a>
                    </strong>
                    <ul>
                      <li>
                        <a href='/'>3 Depth 1</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <a
          href="/"
          onClick={() => {
            setShowMobileMenu(!showMobileMenu);
          }}
          className='control close'
        >
          <span>전체메뉴</span> <span className='sr_only'>닫기</span>
        </a>
      </nav>
    </>
  );
}

export default App;
