import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

export default function RecentKnowledgeArticles() {
  const [recentKnowledgeArticles, setRecentKnowledgeArticles] = useState([]);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const paginationRef = useRef(null);

  const getRecentKnowledgeArticles = async () => {
    const response = await axios.get(
      '/mockupServer/getRecentKnowledgeArticles.json',
      {},
    );
    setRecentKnowledgeArticles(response.data);
  };
  useEffect(() => {
    getRecentKnowledgeArticles();
  }, []);

  return (
    <section class="section section2">
      <div class="box1 type2">
        <h3 class="title">최신 지식글</h3>
        <div class="swiper bx_slide_st knowledge_slide">
          <div class="swiper-wrapper">
            <Swiper
              slidesPerView={4}
              spaceBetween={0}
              modules={[Navigation, Pagination, Grid]}
              navigation={{
                prevEl: prevButtonRef.current,
                nextEl: nextButtonRef.current,
              }}
              pagination={{
                el: paginationRef.current,
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 4,
                },
              }}
            >
              {recentKnowledgeArticles?.map((article, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <a href="javascript:void(0)">
                      <span className={`tag ${article.tagType}`}>
                        {article.tag}
                      </span>
                      <strong class="tit">{article.title}</strong>
                      <span class="date"> {article.date}</span>
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div class="assi">
          <div class="swiper-button-prev type_category" ref={prevButtonRef} />
          <div class="swiper-button-next type_category" ref={nextButtonRef} />
          <div class="swiper-pagination type_category" ref={paginationRef} />
        </div>
      </div>
    </section>
  );
}
