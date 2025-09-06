import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from 'react-icons/fa';


export default function Global(props) {
  return (
        <div className={`box relative rounded-[5px] overflow-hidden ${props.width} ${props.hieght} max-lg:w-full`}>

            <img src={props.pic} alt="alt" className='w-full h-full absolute z-10 max-lg:object-cover'/>

            <div className="text absolute z-20 h-full flex flex-col justify-center left-[30px] max-md:left-[50%] max-md:translate-x-[-50%] max-md:text-center">

                {
                  props.discound && <p className="dosis text-[#00B853] text-sm font-semibold">{props.discound}</p>
                }
                <p className="title font-semibold text-[25px] max-md:text-[20px] text-[#3E445A] tracking-[-1px] leading-[30px]" >{props.title}</p>
                <span className='text-xs text-lightGray my-3 '>{props.subtitle}</span>
                <div className = 'w-[140px] h-10 dosis'>
                    <NavLink to='shopping' className={`block text-center leading-[40px] w-full h-full rounded-[30px] capitalize text-textWhite font-semibold text-md`} style={{backgroundColor : props.color}}>shop now <FaLongArrowAltRight className='inline' /></NavLink>
                </div>
            
            </div>
        </div>
  )
}
