import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function HeroCarosel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}

      slidesPerView={1}
      loop={true}

      navigation={true}

      pagination={{
        clickable: true,
      }}

      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}

      className="mySwiper h-full"
    >
      <SwiperSlide>
        <img src="carousel-1.jpg" className="w-full h-full object-cover" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="carousel-2.jpg" className="w-full h-full object-cover" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="carousel-3.jpg" className="w-full h-full object-cover" />
      </SwiperSlide>

    </Swiper>
  );
}

export default HeroCarosel;
