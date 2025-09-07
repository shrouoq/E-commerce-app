import milk from '../../assets/milk.png';
import yogurt from '../../assets/yogurt.png';
import Global from '../ItemCard/global';



export default function MilkProducts() {
  return (
    <div className='pt-10 flex gap-x-7 justify-center flex-wrap max-xl:gap-x-0 max-xl:gap-y-7'>

        <Global width='w-[570px]' hieght='h-[250px]'  pic={milk} color='darkRed' title={<>The freshest <br />milk products</>} subtitle='A family place for grocery'/>

        <Global width='w-[570px]' hieght='h-[250px]'  pic={yogurt} color='darkRed' title={<>Yogurt with<br />Delicious Fruit</>} subtitle='A family place for grocery'/>


    </div>
  )
}
