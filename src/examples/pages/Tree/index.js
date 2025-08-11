import { createPortal } from 'react-dom';
import React, { useEffect, useState, useMemo } from 'react';
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
import Breadcrumb from '../../Components/Breadcrumb';

import Tree from '../../Components/Element/Tree';
import "rc-tree/assets/index.css"

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>트리</h2>
      </div>
      <div class='contents_area'>
        <h2 class='h-tit2'>기본트리</h2>
        <article class="tree">
          <Tree />
        </article>
      </div>
    </>
  );
}

export default App;
