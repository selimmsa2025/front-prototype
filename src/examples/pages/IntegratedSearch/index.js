import axios from 'axios';
import { useState, useEffect } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import { Input, Button, Tree, Textarea } from '../../Components/Element';
import _ from 'lodash';
import LeftSide from './LeftSide';
import Contents from './Contents';
import RightSide from './RightSide';
export default function App () {
  return (
    <>
      {/* 왼쪽 사이드바  작업완료.*/}
      <LeftSide />
      {/* 가운데 검색결과 작업필요.*/}
      <Contents />
      {/* 오른쪽 사이드바 작업필요*/}
      <RightSide />
    </>
  );
}
