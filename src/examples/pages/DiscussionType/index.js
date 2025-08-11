import _ from 'lodash';
import { useState, useEffect } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import DiscussionType from '../../Components/DiscussionType';
export default function App () {
  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>Page Title</h2>
      </div>
      <DiscussionType />
    </>
  );
}
