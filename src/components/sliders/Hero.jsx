// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import hero from '../../assets/hero.png'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { BsSuitHeartFill } from 'react-icons/bs';

import {NavLink} from 'react-router-dom';




export default function Hero() {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#35AFA0',
          '--swiper-pagination-color': '#35AFA0',
          
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div slot="container-start" className="parallax-bg" style={{'background-image':`url(${hero})`,}}></div>

        <SwiperSlide className='dosis'>

          <div className="offer uppercase dosis font-semibold text-sm text-black tracking-[1px]">
            exclusive offer <span className='text-[#038E42] bg-gradient-to-r from-[#00B85333] to-[#20375800] px-4 py-2  w-[90px] h-[30px] rounded-[40px]'>20% off</span>
          </div>

          <div className="title  max-lg:text-[32px] dosis" data-swiper-parallax="-300">
            Specialists in the grocery store
          </div>

          <div className="subtitle" data-swiper-parallax="-200">
            Only this week. Dont miss
          </div>

          <div className="range text-black font-semibold">
            from <span className='dosis'>$7.99</span>
          </div>

          <div className = 'w-[140px] h-10'>
            <NavLink to='shopping' className='block leading-[40px] w-full h-full bg-primary rounded-[30px] capitalize text-textWhite font-semibold text-md'>shop now <FaLongArrowAltRight className='inline' /></NavLink>
          </div>

        </SwiperSlide>

        <SwiperSlide className='dosis'>

            <div className="offer uppercase dosis font-semibold text-sm text-black tracking-[1px]">
              exclusive offer <span className='text-[#038E42] bg-gradient-to-r from-[#00B85333] to-[#20375800] px-4 py-2  w-[90px] h-[30px] rounded-[40px]'>10% off</span>
            </div>

            <div className="title dosis max-lg:text-[32px] max-md:text-[25px]" data-swiper-parallax="-300">
              Dont miss our offers starting <span className='text-[#038E42] dosis px-4 py-2  w-[90px] h-[30px] rounded-[40px]'>30 Agust</span>
            </div>

            <div className = 'w-[140px] h-10'>
              <NavLink to='shopping' className='block leading-[40px] w-full h-full bg-primary rounded-[30px] capitalize text-textWhite font-semibold text-md'>shop now <FaLongArrowAltRight className='inline' /></NavLink>
            </div>

        </SwiperSlide>

        <SwiperSlide className='dosis'>
            
             <div className="offer uppercase dosis font-semibold text-sm text-black tracking-[1px]">
              exclusive offer <span className='text-[#038E42] bg-gradient-to-r from-[#00B85333] to-[#20375800] px-4 py-2  w-[90px] h-[30px] rounded-[40px]'>10% off</span>
            </div>

            <div className="title dosis max-lg:text-[32px] max-md:text-[25px]" data-swiper-parallax="-300">
              Fresh deals every day, just for you! <span className='text-[#038E42] dosis px-4 py-2  w-[90px] h-[30px] rounded-[40px]'><BsSuitHeartFill className='inline'/></span>
            </div>

            <div className = 'w-[140px] h-10'>
              <NavLink to='shopping' className='block leading-[40px] w-full h-full bg-primary rounded-[30px] capitalize text-textWhite font-semibold text-md'>shop now <FaLongArrowAltRight className='inline' /></NavLink>
            </div>
            
        </SwiperSlide>
        
        
      </Swiper>
    </>
  );
}




