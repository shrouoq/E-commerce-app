import {NavLink} from 'react-router-dom';
import banner from '../assets/banner.png';
import { FaLongArrowAltRight } from 'react-icons/fa';




export default function Banner() {
  return (
    <div className='banner bg-[#F8EFEA] h-[105px] relative flex justify-between items-center max-lg:flex-col max-lg:justify-center max-lg:text-center max-lg:py-2 max-md:h-auto mt-10 px-5 gap-y-5' >
      
        <div className='box'>
            <p className='text-[#00B853] text-xl max-md:text-lg font-normal'><span className='font-semibold'>100% Secure delivery</span> without contacting the courier</p>
        </div>

        <img src={banner} alt='banner' className='absolute w-[25%] object-cover h-full right-[18%] max-lg:hidden'/> 

        <div className = 'w-[140px] h-10'>
          <NavLink to='shopping' className='dosis text-center block leading-[40px] w-full h-full bg-[#00B853] rounded-[30px] capitalize text-textWhite font-semibold text-md'>shop now <FaLongArrowAltRight className='inline' /></NavLink>
        </div>

    </div>

  
  )
}
