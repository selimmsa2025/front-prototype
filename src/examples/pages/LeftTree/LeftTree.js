import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Breadcrumb from '../../Components/Breadcrumb';
import TreeWithTab from '../../Components/TreeWithTab';
import axios from 'axios';
import {
  Input,
  Textarea,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
  Popup,
  Tooltip,
} from '../../Components/Element';

function App () {
  return (
    <>
      <Breadcrumb />

      {/* <!-- 컨텐츠 타이틀 영역 --> */}
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>page title</h2>
      </div>
      <div class='contents_area'></div>
    </>
  );
}
export default App;
