import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
  useContext,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import axios from 'axios';
import useAxiosWithAuth from '../examples/hooks/useAxiosWithAuth';
import useAuthNavigation from '../examples/hooks/useAuthNavigation';
import Header from '../examples/Components/Header';
import LeftMenu from '../examples/Components/LeftMenu';
import Footer from '../examples/Components/Footer';
import HelpDesk from '../examples/Components/HelpDesk';
export default function Layout() {
  const navigateToLogin = useAuthNavigation();
  const axiosInstance = useAxiosWithAuth(navigateToLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <main
        id='container'
        className={
          location.pathname == '/newWindow/type7' ||
            location.pathname == '/newWindow/type8'
            ? 'page_commu'
            : `new_page`
        }
      >
        <Outlet />
      </main>

      <div class='move_top'>
        <a href='#wrap' class='btn_top' title='상단으로 이동하기'>
          <span class='sr_only'>상단으로 이동</span>
        </a>
      </div>
    </>
  );
}
