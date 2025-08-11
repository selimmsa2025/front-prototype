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
        <h2 class='h-tit'>나의 협업포인트</h2>
      </div>
      <UserPoint />
      <UserPointState isMain={true} />
    </>
  );
}
