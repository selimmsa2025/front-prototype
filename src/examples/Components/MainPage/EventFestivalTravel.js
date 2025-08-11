import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Grid,
  EffectFade,
  Autoplay,
  Thumbs,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/thumbs';

export default function EventFestivalTravel() {
  const [eventFestivalTravelList, setEventFestivalTravelList] = useState([]);
  const [slideAutoActive, setSlideAutoActive] = useState(false);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const getEventFestivalTravelList = async () => {
    const response = await axios.get(
      '/mockupServer/getEventFestivalTravelList.json',
      {},
    );
    setEventFestivalTravelList(response.data);
  };
  useEffect(() => {
    getEventFestivalTravelList();
  }, []);

  return (
    <div class="box1">
      <h3 class="title">행사‧축제‧여행지</h3>
      <div class="event_slide_area">
        <div class="swiper event_slide2">
          <div class="swiper-wrapper">
            <Swiper
              thumbs={{ swiper: thumbsSwiper }}
              effect="fade"
              onClick={() => {
                console.log('mainswiper');
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              navigation={{
                nextEl: nextButtonRef.current,
                prevEl: prevButtonRef.current,
              }}
              watchSlidesProgress={true}
              modules={[
                Navigation,
                Pagination,
                Grid,
                EffectFade,
                Autoplay,
                Thumbs,
              ]}
            >
              {eventFestivalTravelList?.map((eventFestivalTravel, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <a href="javascript:void(0)" class="img">
                      <img
                        src={eventFestivalTravel.src}
                        alt={eventFestivalTravel.title}
                      />
                    </a>
                    <div class="info">
                      <span class="tag">{eventFestivalTravel.tag}</span>
                      <strong class="tit">
                        <a href="javascript:void(0)">
                          {eventFestivalTravel.title}
                        </a>
                      </strong>
                      <ul class="list">
                        <li>
                          <b>기간</b>
                          <p class="txt">{eventFestivalTravel.period}</p>
                        </li>
                        <li>
                          <b>장소</b>
                          <p class="txt">{eventFestivalTravel.location}</p>
                        </li>
                        <li>
                          <b>입장료</b>
                          <p class="txt">{eventFestivalTravel.entranceFee}</p>
                        </li>
                      </ul>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div thumbsSlider="" class="swiper event_slide1">
          <div class="swiper-wrapper">
            <Swiper
              className="category_slide"
              spaceBetween={19}
              slidesPerView={2}
              modules={[Navigation, Pagination, Grid, Thumbs]}
              onSwiper={setThumbsSwiper}
              watchSlidesProgress={true}
              breakpoints={{
                414: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 19,
                },
              }}
            >
              {eventFestivalTravelList?.map((eventFestivalTravel, idx) => {
                return (
                  <SwiperSlide key={`thumb_${idx}`}>
                    <img
                      src={eventFestivalTravel.src}
                      alt={eventFestivalTravel.title}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div class="assi">
          <div class="control">
            <span class="counts">
              <b>1</b>
              {eventFestivalTravelList.length}
            </span>
            <button
              type="button"
              class="pause"
              style={
                slideAutoActive
                  ? { display: 'inline-block' }
                  : { display: 'none ' }
              }
              onClick={() => {
                setSlideAutoActive(false);
              }}
            >
              <span class="sr-only">슬라이드 재생 멈추기</span>
              <i class="ri-pause-line"></i>
            </button>
            <button
              type="button"
              class="start"
              style={
                slideAutoActive
                  ? { display: ' none' }
                  : { display: 'inline-block' }
              }
              onClick={() => {
                setSlideAutoActive(true);
              }}
            >
              <span class="sr-only">슬라이드 재생 시작</span>
              <i class="ri-play-fill"></i>
            </button>
          </div>
          <div class="swiper-button-prev type_event" ref={prevButtonRef} />
          <div class="swiper-button-next type_event" ref={nextButtonRef} />

          <a href="javascript:void(0)" class="all_view">
            <span class="sr-only">전체보기</span>
            <i class="ri-add-line"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
