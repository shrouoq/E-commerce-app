import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from 'react-icons/fa';


export default function Heading(props) {
  return (

    <div className="my-10">
        <div className="text flex justify-between items-center max-xl:flex-col max-xl:items-center max-xl:text-center max-xl:gap-y-2">
      
            <div className="box">
                <p className="title dosis uppercase text-5 font-semibold text-black">{props.title}</p>
                <span className="text-lightGray text-sm font-normal">{props.subtitle}</span>
            </div>

            <div className='box w-[140px] h-10 dosis'>
                <NavLink to='shopping' className='block text-center leading-[40px] w-full h-full rounded-[30px] capitalize text-lightGray border-[1px] border-solid border-borderColor font-semibold text-md'>shop now <FaLongArrowAltRight className='inline' /></NavLink>
            </div>

        </div>
    </div>
  )
}
