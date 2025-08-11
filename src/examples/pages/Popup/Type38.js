import React, { useEffect, useState, useRef } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import axios from 'axios';
import {
  Input,
  Textarea,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
  Popup,
  Tooltip,
} from '../../Components/Element';
import CommonPopup from '../../Components/CommonPopup';
import { keys, values } from 'lodash';
import { useForm } from 'react-hook-form';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Pagination } from 'swiper/modules';
import CustomPagination from '../../pages/Popup/Components/Pagination';
function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [imageList, setImageList] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const formRef = useRef(null);
  const [pageSize, setPageSize] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [mainSwiper, setMainSwiper] = useState(null);

  const topNextButtonRef = useRef(null);
  const topPrevButtonRef = useRef(null);

  const bottomNextButtonRef = useRef(null);
  const bottomPrevButtonRef = useRef(null);

  const mainSwiperPaginationRef = useRef(null);
  const thumbSwiperPaginationRef = useRef(null);

  const getImageList = async () => {
    const response = await axios.get('/mockupServer/getSliderImage.json');
    let imageData = response.data;
    setImageList(imageData);
    setTotalCount(imageData.length);
  };
  useEffect(() => {
    getImageList();
  }, []);

  useEffect(() => {
    if (showPopup && mainSwiper && currentPage !== mainSwiper.activeIndex + 1) {
      mainSwiper.slideTo(currentPage - 1);
    }
  }, [currentPage, mainSwiper]);

  return (
    <>
      {/* <!-- 팝업 --> */} {/* <!-- 팝업 보여질 경우 .active 추가 -->*/}
      <CommonPopup
        showPopup={showPopup}
        size="large"
        onClose={() => {
          setShowPopup(false);
          setMainSwiper(null);
          setThumbsSwiper(null);
        }}
        saveButtonTitle={'저장'}
        closeButtonTitle={'닫기'}
        saveButtonOnClick={(e) => {
          formRef.current.dispatchEvent(
            new Event('submit', { cancelable: true, bubbles: true }),
          );
        }}
        closeButtonOnClick={(e) => {
          setShowPopup(false);
          setMainSwiper(null);
          setThumbsSwiper(null);
        }}
        title={'캐비닛 이미지 슬라이드'}
      >
        <Swiper
          modules={[Navigation, Thumbs, Pagination]}
          thumbs={{ swiper: thumbsSwiper }}
          onSwiper={setMainSwiper}
          onSlideChange={(swiper) => {
            setCurrentPage(swiper.activeIndex + 1);
          }}
          navigation={{
            nextEl: topNextButtonRef.current,
            prevEl: topPrevButtonRef.current,
          }}
          pagination={{
            el: mainSwiperPaginationRef.current,
            dynamicBullets: true,
          }}
          className="imgSlide2"
        >
          {imageList?.map((image, idx) => (
            <SwiperSlide key={idx}>
              <span className="img">
                <img src={image.imagePath} alt={`nature-${idx + 1}`} />
              </span>
              <a href={image.imagePath} target="_blank" className="fr btn-txt">
                원본 이미지 보기<i className="ri-add-line"></i>
              </a>
            </SwiperSlide>
          ))}
          <button
            ref={topNextButtonRef}
            type="button"
            className="slide2_button_next"
          >
            <span className="sr-only">다음슬라이드</span>
          </button>
          <button
            ref={topPrevButtonRef}
            type="button"
            className="slide2_button_prev"
          >
            <span className="sr-only">이전슬라이드</span>
          </button>
          <div class="pagination_bg">
            <div class="swiper-pagination" ref={mainSwiperPaginationRef}></div>
          </div>
        </Swiper>

        {/* Thumbnail Swiper */}
        <div className="bottom_slide">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            modules={[Navigation, Thumbs, Pagination]}
            className="imgSlide1"
            watchSlidesProgress
            navigation={{
              nextEl: bottomNextButtonRef.current,
              prevEl: bottomPrevButtonRef.current,
            }}
            pagination={{
              el: thumbSwiperPaginationRef.current,
              dynamicBullets: true,
            }}
          >
            {imageList?.map((image, idx) => (
              <div class="swiper-wrapper">
                <SwiperSlide key={idx}>
                  <img src={image.imagePath} alt={`thumbnail-${idx + 1}`} />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>

          <button
            ref={bottomNextButtonRef}
            type="button"
            className="slide1_button_next"
          >
            <span className="sr-only">다음슬라이드</span>
          </button>
          <button
            ref={bottomPrevButtonRef}
            type="button"
            className="slide1_button_prev"
          >
            <span className="sr-only">이전슬라이드</span>
          </button>
          <div class="swiper-pagination" ref={thumbSwiperPaginationRef}></div>
        </div>

        <CustomPagination
          totalCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={(page) => {
            setCurrentPage(page);
          }}
        />
        {/*<!-- 팝업 닫을 경우 분모.popup의 .active 삭제 --> */}
      </CommonPopup>
      {/* <!-- //팝업 --> */}
      <Breadcrumb />
      {/* <!-- 컨텐츠 타이틀 영역 --> */}
      <div class="page-title-wrap" data-type="responsive">
        <h2 class="h-tit">page title</h2>
      </div>
      {/* <!-- //컨텐츠 타이틀 영역 --> */}
      {/* <!-- 컨텐츠 입력 영역 --> */}
      <div class="contents_area">
        <Button
          text={'팝업열기'}
          onClick={() => {
            setShowPopup(!showPopup);
          }}
        />
      </div>
      {/* <!-- //컨텐츠 입력 영역 --> */}
    </>
  );
}

export default App;
