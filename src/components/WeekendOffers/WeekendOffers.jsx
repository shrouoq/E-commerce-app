import Global from "../ItemCard/global";
import egg from '../../assets/egg.png';
import toast from '../../assets/toast.png';
import tea from '../../assets/tea.png';

export default function WeekendOffers() {
  return (
    <div className='pt-10 flex gap-x-7 justify-between max-xl:justify-center flex-wrap  max-xl:gap-7'>

        <Global  discound='Weekend Discount 10%' width='w-[370px]' hieght='h-[220px]'  pic={egg} color='#C2C2D3' title='Natural Eggs' subtitle='Eat one every day'/>

        <Global discound='Weekend Discount 40%' width='w-[370px]' hieght='h-[220px]'  pic={tea} color='#C2C2D3' title='Taste the Best' subtitle='Shine the morning'/>

        <Global discound='Weekend Discount 25%' width='w-[370px]' hieght='h-[220px]'  pic={toast} color='#C2C2D3' title='Ditch the Junk' subtitle='Breakfast made better'/>

    
    </div>
  )
}
