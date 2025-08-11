import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../../../Components/Breadcrumb';
import {
  Input,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
} from '../../../Components/Element';
import Answer from '../../../Components/QnA/Ansewer';
function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [typeSearchText, setTypeSearchText] = useState('');

  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>등록된 답변</h2>
      </div>
      <div class='contents_area'>
        <Answer />
      </div>
    </>
  );
}

export default App;
