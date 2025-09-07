import { FaStar } from 'react-icons/fa6';
import { FaRegStar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function BestSellerCard(props) {
  return (
    <div className={`w-[220px] h-[365px] border-[1px] border-solid border-borderColor p-4`}>
    
            <NavLink>
                <div className="pic h-[163px] relative flex justify-center items-center">
                    <img src={props.pic} alt="coconut" className='w-[182px] h-[163px]'/>
                    {
                        props.offer &&<span className='absolute font-semibold text-xs leading-[24px] text-center bg-primary rounded-[4px] text-textWhite top-0 left-0 w-[45px] h-[24px]'>{props.offer}</span>
    
                    }
                </div>
            </NavLink>
    
            <div className="data text-center">
                <p className="title font-medium text-sm text-black capitalize ">{props.title}</p>
                <span className="suptitle block py-2 text-[#00B853] text-[11px] dosis font-medium uppercase">in stock</span>
    
                <div className="reviews flex justify-center items-center gap-2">
                    <ul className='flex text-[#FFCD00]'>
                        <li><FaStar className='w-[13px] h-[13px]' /></li>
                        <li><FaStar className='w-[13px] h-[13px]'/></li>
                        <li><FaStar className='w-[13px] h-[13px]'/></li>
                        <li><FaStar className='w-[13px] h-[13px]'/></li>
                        <li><FaRegStar className='w-[13px] h-[13px]'/></li>
                    </ul>
    
                    <span className='font-semibold text-[13px] text-lightGray'>1 review</span>
                </div>
    
                <div className="price py-2 flex gap-2 justify-center items-center">
                    {
                        props.offer && <div className="old text-[12px] line-through text-lightGray">$4.88</div>
    
                    }
                    <div className="new text-darkRed text-[14px] font-semibold">$3.88</div>
                </div>
    
                <div className="available text-sm capitalize font-normal">
                    the available products : <span className='text-[20px] font-semibold text-[#233A95]'>95</span>
                </div>
    
            </div>
    
            </div>
  )
}
