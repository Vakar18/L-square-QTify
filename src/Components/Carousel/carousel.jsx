import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";

export default ({ navId, data }) => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={7}
        spaceBetween={30}
        navigation={{ nextEl: `.arrow-right-${navId}`, prevEl: `.arrow-left-${navId}` }}
        virtual
      >
        {data.map((cardData) => (
          <SwiperSlide key={cardData.id}>
            <Card
              imgSrc={cardData.image}
              followersCount={cardData.follows}
              label={cardData.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className= {`arrow-left-${navId} arrow-left arrow`}>
        <img src="leftIcon.png" />
      </div>
      <div className={`arrow-right-${navId} arrow-right arrow`}>
        <img src="rightIcon.png" />
      </div>
    </div>
  );
};
