import FigerCard from "../ItemCard/FigerCard";
import iceCream from '../../assets/iceCream.png';
import water from '../../assets/water.png';
import Bon from '../../assets/bon.png';

export default function FigerSection() {
  return (
    <div className="my-10 flex justify-between flex-wrap max-xl:justify-center max-xl:gap-7">

      <FigerCard pic={Bon} title='But I must explain to you how all this mistaken idea'/>
      <FigerCard pic={water} title='But I must explain to you how all this mistaken idea'/>
      <FigerCard pic={iceCream} title='The Problem With Typefaces on the Web'/>
      
    </div>
  )
}
