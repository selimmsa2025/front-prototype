import React, { useEffect, useState } from 'react';
import { Button } from '../../Element';
import Popular from './Popular';
import Recent from './Recent';
export default function Community() {
  return (
    <section class="section section5">
      <div class="main_tit_area">
        <h2 class="title">커뮤니티</h2>
        <div class="right">
          <a href="javascript:void(0)">내 블로그 바로가기</a>
          <a href="javascript:void(0)">커뮤니티 가입목록 바로가기</a>
        </div>
      </div>

      <div class="commu_wrap">
        {/* 최근게시글 */}
        <Recent />
        {/* 인기 커뮤니티 */}
        <Popular />
      </div>
    </section>
  );
}
