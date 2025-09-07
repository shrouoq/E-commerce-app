import { useSelector } from 'react-redux';
import ProductCard from './../ItemCard/ProductCard';

export default function Offers() {

    const {data} = useSelector(state => state.DataSlice);


  return (
    <div className="offers">

        <div className="offers-box mt-10 flex justify-center gap-6 mb-10 max-xl:flex-col max-xl:items-center">

            <div className="box flex flex-col max-xl:text-center">
                <p className="title ml-auto max-xl:ml-0 text-[26px] text-[#233A95] font-light">Special Offers of the week!</p>
                <p className="font-normal text-[15px] text-[#9B9BB4]">Ut placerat, magna quis porttitor vulputate, magna nunc auctor ante.</p>
            </div>

            <div className="box flex items-center">
                <p className="bg-darkRed text-textWhite w-[56px] h-[60px] text-center leading-[60px] text-[24px] font-semibold rounded-[5px]">71</p>
                <span className="px-1">:</span>
                <p className="bg-darkRed text-textWhite w-[56px] h-[60px] text-center leading-[60px] text-[24px] font-semibold rounded-[5px]">14</p>
                <span className="px-1">:</span>
                <p className="bg-darkRed text-textWhite w-[56px] h-[60px] text-center leading-[60px] text-[24px] font-semibold rounded-[5px]">43</p>
                <span className="px-1">:</span>
                <p className="bg-darkRed text-textWhite w-[56px] h-[60px] text-center leading-[60px] text-[24px] font-semibold rounded-[5px]">16</p>
            </div>

        </div>

        <div className="cards flex justify-center  flex-wrap max-xl:gap-3">

            {
                data.map((product , index) => {
                    if(index < 5) {
                        return <ProductCard wid='w-[235px]' key={index} product={product} />
                    }
                    return null
                })
            }
            
        </div>

    </div>
  )
}
