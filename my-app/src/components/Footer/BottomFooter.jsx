import { TbMilk } from 'react-icons/tb';
import { FaCaravan } from 'react-icons/fa6';
import { TbCircleDashedPercentage } from 'react-icons/tb';
import { AiOutlineDollar } from 'react-icons/ai';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Google from '../../assets/google.png';
import Store from '../../assets/store.png';
import Payment from '../../assets/payment.png';


export default function BottomFooter() {
  return (
    <div className='bg-bgColor'>
      <div className="container mx-auto bg-bgColor">
          
          <div className="top py-10 border-b-[1px] border-solid border-b-borderColor max-sm:hidden">
              <ul className='list-none grid gap-y-4 sm:grid-cols-2 lg:grid-cols-4'>
                
                <li className='flex flex-1 gap-2 items-center  capitalize text-[#202435] pl-4'><TbMilk className='text-[20px]'/> <span className='text-[13px] font-medium'>Everyday fresh products</span></li>
                <li className='flex flex-1 gap-2 items-center capitalize text-[#202435] pl-4 border-x-[1px] border-solid border-x-borderColor'><FaCaravan className='text-[20px]'/> <span className='text-[13px] font-medium'>free delivery for order over $70</span></li>
                <li className='flex flex-1 gap-2 items-center capitalize text-[#202435] pl-4 border-r-[1px] border-solid border-r-borderColor'><TbCircleDashedPercentage className='text-[20px]'/> <span className='text-[13px] font-medium'>daily mega discounts</span></li>
                <li className='flex flex-1 gap-2 items-center capitalize text-[#202435] pl-4'><AiOutlineDollar className='text-[20px]'/> <span className='text-[13px] font-medium'>best price on the market</span></li>
              
              </ul>
          </div>

          <div className="
                          py-10
                          middle
                          grid
                          gap-y-5
                          grid-cols-1          
                          sm:grid-cols-2       
                          lg:grid-cols-3       
                          xl:grid-cols-5       
                          justify-items-center
                        ">

            <div className="box">
              <p className="title dosis mb-4 uppercase font-semibold text-[15px] text-[#202435]">fruits&vegtables</p>
              <ul>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>fruits vegtables</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>herbs & seasoning</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>fresh fruits</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>cuts & sprouts</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>exotic fruits & veggin</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>packsged produce</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>party trys</li>
              </ul>
            </div>

            <div className="box">
              <p className="title dosis mb-4 uppercase font-semibold text-[15px] text-[#202435]">breakfast & dairy</p>
              <ul>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>milk & flavoured milk</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>butter and margarine</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>cheese</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>eggs substitutes</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>honey</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>marmalades</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>sour cream and dips</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>yogurt</li>
              </ul>
            </div>

            <div className="box">
              <p className="title dosis mb-4 uppercase font-semibold text-[15px] text-[#202435]">meat & seafood</p>
              <ul>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>breakfast sausage</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>dinner sausage</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>beef</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>chicken</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>sliced deli meat</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>shrimp</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>wild caught fillets</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>crab and shellfish</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>farm raised fillets</li>
              </ul>
            </div>

            <div className="box">
              <p className="title dosis mb-4 uppercase font-semibold text-[15px] text-[#202435]">beverages</p>
              <ul>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>water</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>sparkling water</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>soda & pop</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>coffee</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>milk & plant-based milk</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>tea & kombucha</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>dink boxes & pouches</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>craft beer</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>wine</li>
              </ul>
            </div>

             <div className="box">
              <p className="title dosis mb-4 uppercase font-semibold text-[15px] text-[#202435]">breads & bakery</p>
              <ul>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>milk & flavoured milk</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>butter and margarine</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>cheese</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>eggs substitutes</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>honey</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>marmalades</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>sour cream and dips</li>
                <li className='capitalize text-[13px] font-normal text-lightGray  cursor-pointer mb-2'>yogurt</li>
              </ul>
            </div> 
            
          </div>

      </div>

      <div className="bottom bg-white capitalize">

        <div className="container mx-auto">

          <div className="box flex justify-between max-lg:flex-col max-lg:items-center max-lg:gap-y-3 py-10 border-b-[1px] border-solid border-b-borderColor">

            <div className="right flex items-center gap-3">
              <div className="icon w-[42px] h-[42px] rounded-full border-[1px] border-solid border-borderColor flex justify-center items-center">
                <BsFillTelephoneOutboundFill className='text-black' />
              </div>

              <div className="text">
                <p className="num font-semibold text-black text-xl">8 800 555-55</p>
                <span className='text-[11px] text-lightGray font-normal capitalize'>working 8:00 - 22:00</span>
              </div>
            </div>

            <div className="left flex items-center max-md:flex-col gap-5">

              <div className="text flex flex-col">
                <p className='font-semibold text-sm text-black ml-auto'>download app on mobile :</p>
                <span className='font-normal text-xs text-lightGray lowercase'>15% discount on your  first purchase</span>
              </div>

              <div className="pics flex gap-3">
                <img src={Google} alt="google" className='w-[115px] h-[38px]'/>
                <img src={Store} alt="store" className='w-[115px] h-[38px]'/>
              </div>

              <div className="links flex gap-3">
                <span className='w-[34px] h-[34px] border border-solid border-borderColor  rounded-full flex justify-center items-center'>
                  <FaFacebookF className=' text-primary text-base' />
                </span>

                <span className='w-[34px] h-[34px] border border-solid border-borderColor  rounded-full flex justify-center items-center'>
                  <FaTwitter className=' text-primary text-base' />
                </span>
                
                <span className='w-[34px] h-[34px] border border-solid border-borderColor  rounded-full flex justify-center items-center'>
                  <FaInstagram className=' text-primary text-base' />
                </span>
              </div>

            </div>

          </div>

          <div className='box py-10 text-xs font-normal  capitalize text-lightGray flex justify-between max-xl:flex-col max-xl:items-center max-xl:gap-y-3 max-md:hidden'>
            
            <div>
              <p className='pt-1'>copyright 2025 &copy; all rights reserved by blackrise theme</p>
            </div>

            <div>
              <ul className='flex items-center gap-2'>
                <li>privacy policy</li>
                <li>terms and conditions</li>
                <li>cookie</li>
                <li><img src={Payment} alt="payment" /></li>
              </ul>
            </div>

          </div>

        </div>


      </div>
    </div>
  )
}
