import { useState, useEffect } from 'react';
import _ from 'lodash';
import Question from './Question';
export default function QnA ({}) {
  return (
    <>
      <Question />{' '}
      <div class='bottom_left_area'>
        <a href='javascript:void(0)' class='btn4 type1'>
          목록
        </a>
      </div>
    </>
  );
}
