import discoundCard from '../../assets/discound card.png';
import { AiOutlineMail } from 'react-icons/ai';


export default function TopFooter() {
  return (
    <div className="bg-primary">
      <div className="container mx-auto text-textWhite flex  max-xl:py-4">

        <div className="box flex-1 capitalize flex flex-col justify-center max-xl:items-center max-xl:text-center">
            <p className='font-light text-base  mb-3'><span className='underline'>$20 discount</span> for your first order</p>
            <h2 className='font-semibold text-[26px] max-sm:text-[23px] lowercase mb-3'>join our newsletter and get</h2>
            <p className="text-[13px] font-normal mb-3">join our email subscription now to get updates<br/>on pormotions and coupons</p>

            <div className='mail-box bg-textWhite rounde-[5px] flex h-[50px] items-center w-[450px] max-xs:w-auto p-1 rounded-[3px]'>

                <AiOutlineMail className='text-[#C2C2D3] mr-3 mt-1' />
                <input 
                    type="text" 
                    placeholder='your email address'
                    className='bg-transparent placeholder:text-[#C2C2D3] placeholder:text-[13px] w-[100%] '
                />
                <button className='bg-primary h-full px-2 rounded-[3px]'>subscribe</button>
                
            </div>
        </div>

        <div className="box flex-1 flex justify-start max-xl:hidden">
            <img src={discoundCard} alt="discoud-card" className='w-[85%]' />
        </div>

      </div>
    </div>
  )
}
