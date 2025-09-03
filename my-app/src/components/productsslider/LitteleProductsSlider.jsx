import "swiper/css";
import "./styles.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import LittleCard from "../ItemCard/LittleCard";

import {useSelector} from 'react-redux';

export default function LittleProductsSlider() {
const {data,categories} = useSelector(state => state.DataSlice);
  return (
    <div className="LittleProductsSlider mt-10">
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
        {
          categories.map((category,index) => {
            return (
              <SwiperSlide key={index}>
                  <LittleCard
                    pic={
                      data.find(el =>{
                        return el.category === category
                      }).image
                    } 
                    title= {category} 
                    num={
                      data.filter(el => {
                        return el.category === category
                      }).length
                    } 
                    link={`products/${category}`}
                  />
              </SwiperSlide>
            )
          })
        } 
      </Swiper>
    </div>
  );
}

