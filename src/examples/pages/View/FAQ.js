import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../../Components/Breadcrumb';
import {
  Input,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
} from '../../Components/Element';
import Notice from '../../Components/Notice';
import FAQ from '../../Components/FAQ';
function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [typeSearchText, setTypeSearchText] = useState('');

  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>page title</h2>
      </div>
      <div class='contents_area'>
        <FAQ />
      </div>
    </>
  );
}

export default App;
