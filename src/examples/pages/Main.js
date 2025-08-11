import { createPortal } from 'react-dom';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Link,
  useNavigate,
  json,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import useAxiosWithAuth from '../hooks/useAxiosWithAuth';
import useAuthNavigation from '../hooks/useAuthNavigation';

function App() {
  const navigateToLogin = useAuthNavigation();
  const axiosInstance = useAxiosWithAuth(navigateToLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      메인화면
    </>
  );
}

export default App;
