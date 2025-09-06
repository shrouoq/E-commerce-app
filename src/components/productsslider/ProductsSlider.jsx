// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import SliderCard from "../ItemCard/SliderCard";
// Import Swiper styles
import "swiper/css";
import "./styles.css";

import meat from '../../assets/meat.png';
import protin from '../../assets/protin.png';
import egg from '../../assets/eggs.png';
import soshi from '../../assets/soshi.png';
import goda from '../../assets/goda.png';

export default function ProductsSlider() {
  return (
    <div className="productsSlider">
      <Swiper watchSlidesProgress={true} 
              className="mySwiper !m-0 !p-0"
              rewind={false}
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                  320: { 
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                  1280: {
                    slidesPerView: 5,
                  },
                }}
      >
        <SwiperSlide>
          <SliderCard pic={meat} title='USDA Choice Angus Beef Stew Meat' offer='38%'/>
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard pic={protin} title='Warrior Blend Organic' offer='38%'/>
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard pic={soshi} title='Encore Seafoods Stuffed Alaskan Salmon' offer='15%'/>
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard pic={egg} title='Vital Farms Pasture-Raised Egg Bites Bacon & Cheddar' offer='14%'/>
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard pic={goda} title='Field Roast Chao Cheese Creamy Original' offer='10%'/>
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
