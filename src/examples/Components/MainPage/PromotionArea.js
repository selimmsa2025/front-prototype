import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function PromotionArea() {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [init, setInit] = useState(false);
  useEffect(() => {
    if (prevButtonRef.current != null && init == false) {
      setInit(true);
    }
  }, [prevButtonRef]);
  return (
    <div className="box1">
      <h3 className="title">홍보마당</h3>
      <div className="event_slide_area">
        <div className="swiper ad_slide">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            centeredSlides={true}
            modules={[Navigation]}
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
          >
            {Array(3)
              .fill()
              .map((_, idx) => (
                <SwiperSlide key={idx}>
                  <a href="javascript:void(0)">
                    <img
                      src="../img/main/ad_img1.jpg"
                      alt={`홍보마당 포스터${idx + 1}`}
                    />
                  </a>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="assi">
          <div
            className="swiper-button-prev type_category"
            ref={prevButtonRef}
          />
          <div
            className="swiper-button-next type_category"
            ref={nextButtonRef}
          />
          <a href="javascript:void(0)" className="all_view">
            <span className="sr-only">전체보기</span>
            <i className="ri-add-line"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
