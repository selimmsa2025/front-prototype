import _ from 'lodash';
import { useState, useEffect } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import UserPoint from '../../Components/CooperationPoint/UserPoint';
import UserPointState from '../../Components/CooperationPoint/UserPointState';
export default function App () {
  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>지식</h2>
        left 메뉴가 없는 레이아웃
      </div>
    </>
  );
}
