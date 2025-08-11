import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
  useContext,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useAxiosWithAuth from '../examples/hooks/useAxiosWithAuth';
import useAuthNavigation from '../examples/hooks/useAuthNavigation';
import Header from '../examples/Components/Header';
import Footer from '../examples/Components/Footer';
import QuickMenu from '../examples/Components/MainPage/QuickMenu';
export default function Layout() {
  const navigateToLogin = useAuthNavigation();
  const axiosInstance = useAxiosWithAuth(navigateToLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Header />
      <main id="container" className="main_wrap">
        <div class="inner">
          <Outlet />
          <QuickMenu />
        </div>
      </main>

      <Footer />

      <div class="move_top">
        <a href="#wrap" class="btn_top" title="상단으로 이동하기">
          <span class="sr_only">상단으로 이동</span>
        </a>
      </div>
    </>
  );
}
