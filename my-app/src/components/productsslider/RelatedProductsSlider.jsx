import "swiper/css";
import "./styles.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RelatedProductCard from "../ItemCard/RelatedProductCard";

export default function RelatedProductsSlider({ category }) {
  const { data } = useSelector((state) => state.DataSlice);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    let filterdItems = data.filter((product) => product.category === category);
    setSelectedItems(filterdItems);
  }, [category, data]);

  return (
    <div className="RelatedProductsSlider mt-4">
      <Swiper
        watchSlidesProgress={true}
        className="mySwiper !m-0 !p-0"
        spaceBetween={15}
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
        {selectedItems.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <RelatedProductCard item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
