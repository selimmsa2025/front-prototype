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
import LeftTreeMenu from '../examples/Components/LeftTreeMenu';
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
      <Header />
      <main id='container'>
        <div class='inner in-between'>
          <LeftTreeMenu />

          <div class='contents'>
            <Outlet />
          </div>
        </div>
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
