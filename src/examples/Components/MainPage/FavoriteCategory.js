import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

export default function FavoriteCategory() {
  const [favoriteCategoryList, setFavoriteCategoryList] = useState([]);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const paginationRef = useRef(null);

  const getFavoriteCategoryList = async () => {
    const response = await axios.get(
      '/mockupServer/getFavoriteCategoryList.json',
      {},
    );
    setFavoriteCategoryList(response.data);
  };
  useEffect(() => {
    getFavoriteCategoryList();
  }, []);

  return (
    <div class="box1 type2">
      <div class="box_title">
        <h3 class="title">관심 카테고리</h3>
        <span class="desc">
          &nbsp; 설정 메뉴 &gt;<b class="point">3</b>
        </span>
        <a href="javascript:void(0)" class="setting_txt" title="팝업열림">
          카테고리 설정하기
        </a>
      </div>
      <div class="swiper bx_slide_st category_slide">
        <div class="swiper-wrapper">
          <Swiper
            className="category_slide"
            slidesPerView={1}
            grid={{
              rows: 1,
            }}
            spaceBetween={0}
            modules={[Navigation, Pagination, Grid]}
            navigation={{
              nextEl: nextButtonRef.current,
              prevEl: prevButtonRef.current,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 2,
                spaceBetween: 4,
                grid: {
                  rows: 2,
                },
              },
            }}
          >
            {favoriteCategoryList.map((favoriteCategory, idx) => {
              return (
                <SwiperSlide
                  className={
                    favoriteCategory.img
                      ? 'swiper-slide img_type'
                      : 'swiper-slide'
                  }
                  key={idx}
                >
                  <a href="javascript:void(0)">
                    {favoriteCategory.img && (
                      <i className="img">
                        <img
                          src={favoriteCategory.img}
                          alt={favoriteCategory.tag}
                        />
                      </i>
                    )}
                    <span className={`tag ${favoriteCategory.tagType}`}>
                      {favoriteCategory.tag}
                    </span>
                    <strong className="tit">{favoriteCategory.title}</strong>
                    <span className="date">{favoriteCategory.date}</span>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div class="assi">
        <div class="swiper-button-prev type_category" ref={prevButtonRef}></div>
        <div class="swiper-button-next type_category" ref={nextButtonRef}></div>
        <div class="swiper-pagination type_category" ref={paginationRef}></div>
      </div>
    </div>
  );
}
