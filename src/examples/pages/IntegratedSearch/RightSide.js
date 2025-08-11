import axios from 'axios';
import { useState, useEffect } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import { Input, Button, Tree, Textarea } from '../../Components/Element';
import _ from 'lodash';
export default function RightSide () {
  return (
    <>
      <div class='right-search'>
        <div class='box_st4'>
          <h3 class='tit'>인기검색어</h3>
          <ol class='popular_list'>
            <li>
              <a href='#'>안전보건교육</a>
              <span class='state up'>1</span>
            </li>
            <li>
              <a href='#'>산업재해조사표</a>
              <span class='state'>NEW</span>
            </li>
            <li>
              <a href='#'>퇴직금계산기</a>
              <span class='state up'>3</span>
            </li>
            <li>
              <a href='#'>육아휴직급여</a>
              <span class='state'>-</span>
            </li>
            <li>
              <a href='#'>실업인정신청</a>
              <span class='state'>-</span>
            </li>
            <li>
              <a href='#'>국민내일배움</a>
              <span class='state down'>1</span>
            </li>
            <li>
              <a href='#'>노사협의회</a>
              <span class='state down'>1</span>
            </li>
            <li>
              <a href='#'>산업안전보건</a>
              <span class='state'>-</span>
            </li>
            <li>
              <a href='#'>국민내일배움카드신청</a>
              <span class='state up'>11</span>
            </li>
            <li>
              <a href='#'>안전보건교육</a>
              <span class='state'>-</span>
            </li>
          </ol>
        </div>

        <div class='box_st4'>
          <h3 class='tit'>내가 찾은 검색어</h3>
          <ul class='filter_col'>
            <li>
              <button type='button' title='삭제'>
                뉴스<i class='sr_only'>제거</i>
              </button>
            </li>
            <li>
              <button type='button' title='삭제'>
                자주 묻는 질문<i class='sr_only'>제거</i>
              </button>
            </li>
            <li>
              <button type='button' title='삭제'>
                자료<i class='sr_only'>제거</i>
              </button>
            </li>
            <li>
              <button type='button' title='삭제'>
                지식<i class='sr_only'>제거</i>
              </button>
            </li>
            <li>
              <button type='button' title='삭제'>
                온나라<i class='sr_only'>제거</i>
              </button>
            </li>
            <li>
              <button type='button' title='삭제'>
                업무<i class='sr_only'>제거</i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
