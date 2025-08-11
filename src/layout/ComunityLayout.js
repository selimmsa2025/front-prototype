import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
  useContext,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useAuthNavigation from '../examples/hooks/useAuthNavigation';
import Header from '../examples/Components/Header';
import LeftMenu from '../examples/Components/LeftMenu';
import Footer from '../examples/Components/Footer';
import HelpDesk from '../examples/Components/HelpDesk';
export default function Layout() {
  const navigateToLogin = useAuthNavigation();

  return (
    <>
      <Header />
      <main id='container'>
        <Outlet />
        <HelpDesk />
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
