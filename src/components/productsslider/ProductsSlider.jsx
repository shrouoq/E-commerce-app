// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import SliderCard from "../ItemCard/SliderCard";
// Import Swiper styles
import "swiper/css";
import "./styles.css";

import { useSelector } from "react-redux";
import ProductCard from "../ItemCard/ProductCard";


export default function ProductsSlider() {

  let {data} = useSelector(state => state.DataSlice)

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
        

        {
          data.map((product,index) => {
            if(index > 13 && index < 29){
              return (
                <SwiperSlide key={index}>
                  <ProductCard product={product} wid="w-[235px]" tex='justify-center'/>
                </SwiperSlide>
              )
            }
            return null
          })
        }
      </Swiper>
    </div>
  );
}
