import React from 'react';
import FavoriteCategory from '../Components/MainPage/FavoriteCategory';
import TopTen from '../Components/MainPage/TopTen';
import RecentKnowledgeArticles from '../Components/MainPage/RecentKnowledgeArticles';
import Manual from '../Components/MainPage/Manual';
import EventFestivalTravel from '../Components/MainPage/EventFestivalTravel';
import PromotionArea from '../Components/MainPage/PromotionArea';
import Community from '../Components/MainPage/Community';
import AdministrationSupport from '../Components/MainPage/AdministrationSupport';

export default function () {
  return (
    <div class="main_contents">
      <section class="section section1">
        <div class="main_tit_area">
          <h2 class="title">지식</h2>
        </div>
        <div class="knowledge_wrap">
          {/* 관심 카테고리 */}
          <FavoriteCategory />
          {/* 인기 Top10 */}
          <TopTen />
        </div>
      </section>
      {/* 최신 지식글 */}
      <RecentKnowledgeArticles />
      {/* 지침 편람 매뉴얼 */}
      <Manual />
      <section class="section section4">
        {/* 행사 축제 여행지 */}
        <EventFestivalTravel />
        {/* 홍보마당 */}
        <PromotionArea />
      </section>
      {/* 커뮤니티 */}
      <Community />
      {/* 온 행정지원 */}
      <AdministrationSupport />
    </div>
  );
}
