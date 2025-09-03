import cake from '../../assets/cake.png';
import BestSellerCard from "../ItemCard/BestSellerCard";
import meatBalls from '../../assets/meatBalls.png';
import corn from '../../assets/corn.png';
import cheese from '../../assets/cheese.png';
import wings from '../../assets/wings.png';
import almond from '../../assets/almond.png';
import berries from '../../assets/berries.png';
import brocoli from '../../assets/broccle.png';
import greek from '../../assets/greek.png';
import Heading from "../Heading";



export default function BestSeller() {
  return (
    <div className='bestSeller'>

        <Heading title='Best Sellers' subtitle='Do not miss the current offers until the end of month.' />

        <div className="cards 
                        grid grid-cols-
                        justify-items-center
                        max-lg:gap-y-2
                        lg:grid-cols-2
                        xl:grid-cols-[1fr,300px,1fr]
                        mt-10
                    ">

            <div className="box
                            grid
                            max-sm:grid-cols-1
                            max-xl:gap-2
                            grid-cols-2
                            ">
                
                <BestSellerCard width='220px' pic={meatBalls} title='All Natural Italian-Style Chicken Meatballs' offer='22%'/>
                <BestSellerCard width='220px' pic={corn} title='Angie Boomchickapop Sweet & Salty Kettle Corn' offer='23%'/>
                <BestSellerCard width='220px' pic={cheese} title='Field Roast Chao Cheese Creamy Original' offer='19%'/>
                <BestSellerCard width='220px' pic={wings} title='Foster Farms Takeout Crispy Classic Buffalo…'/>

            </div>

            <div className="box w-[300px] h-[730px] relative border-y-[1px] border-solid max-xl:hidden">
                <img src={cake} alt="cake" className="absolute w-full h-full"/>
                
                <div className="text absolute top-[30px] left-[20px]">

                    <span className="text-darkRed text-[18px] font-light capitalize">delicious</span>
                    <p className="title text-[22px] text-black font-extralight capitalize py-1">The freshest of
                        <span className="font-semibold block">all products</span>
                    </p>
                    <span className="text-lightGray text-sm capitalize font-semibold">Just in Bacola</span>

                </div>
            </div>

            <div className="box
                            grid
                            max-sm:grid-cols-1
                            max-xl:gap-2
                            grid-cols-2
                            ">
                
                <BestSellerCard width='220px' pic={almond} title='Blue Diamond Almonds Lightly Salted'/>
                <BestSellerCard width='220px' pic={berries} title='Blueberries – 1 Pint Package' offer='11%'/>
                <BestSellerCard width='220px' pic={brocoli} title='Fresh Organic Broccoli Crowns' offer='28%'/>
                <BestSellerCard width='220px' pic={greek} title='Chobani Complete Vanilla Greek Yogurt' offer='18%'/>

            </div>

        </div>

    </div>
  )
}
