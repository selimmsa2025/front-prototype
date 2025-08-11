import _ from 'lodash';
import { useState, useEffect } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import UserPointState from '../../Components/CooperationPoint/UserPointState';
import { Tab } from '../../Components/Element';
export default function CooperationPointState () {
  const [tab, setTab] = useState(1);
  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>나의 협업포인트</h2>
      </div>
      <Tab
        type={1}
        data={[
          { index: 1, title: '메가부서' },
          { index: 2, title: '모든기관' },
        ]}
        currentIndex={tab}
        onChange={(index) => {
          setTab(index);
        }}
      />
      {tab == 1 ? (
        <UserPointState isMain={false} />
      ) : tab == 2 ? (
        <>
          <div></div>
        </>
      ) : null}
    </>
  );
}
