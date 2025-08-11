import _ from 'lodash';
import { useState, useEffect } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import Board from '../../Components/Board';
export default function App () {
  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>지식</h2>
      </div>
      <Board />
      <div class='contents_area'>
        <div class='ajax-spinner-bars'>
          <div class='bar-1'></div>
          <div class='bar-2'></div>
          <div class='bar-3'></div>
          <div class='bar-4'></div>
          <div class='bar-5'></div>
          <div class='bar-6'></div>
          <div class='bar-7'></div>
          <div class='bar-8'></div>
        </div>
      </div>
    </>
  );
}
