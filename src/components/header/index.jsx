import React, { useEffect, useState, useRef } from 'react';
import Title from './Title';
import Navigation from './Navigation';
import { useSelector } from 'react-redux';

const Header = () => {
  const prevScrollY = useRef(window.scrollY);
  const [isHeaderClick, setIsHeaderClick] = useState(false);

  useEffect(() => {
    const wrap = document.getElementById('wrap');
    const header = document.getElementById('header');

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > header.offsetHeight) {
        if (currentScrollY > prevScrollY.current) {
          wrap.classList.add('scrUp');
        } else {
          wrap.classList.remove('scrUp');
        }
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header id='header'>
        <div className='header-in'>
          <Title setIsHeaderClick={setIsHeaderClick} />
          <Navigation
            isHeaderClick={isHeaderClick}
            setIsHeaderClick={setIsHeaderClick}
          />
          <div className="header-right">
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;