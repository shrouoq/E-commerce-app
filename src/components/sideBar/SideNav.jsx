import NavLinks from '../NavLinks'
import { MdClose } from 'react-icons/md';


export default function SideNav(props) {
  const isOpen = props.openNav || false;
  
  return (
    <div 
      className="
                absolute 
                top-0 
                left-0 
                bg-white
                w-[250px] 
                h-lvh z-30 
                shadow
                flex 
                flex-col 
                gap-3 
                dosis 
                uppercase 
                pt-12 
                px-4 
                text-mainColor 
                font-semibold 
                transition-transform 
                duration-300 
                ease-in-out"
      style={{
        transform: isOpen ? 'translateX(0)' : 'translateX(-250px)'
      }}
    >
        <MdClose className="absolute right-5 top-5 border-[1px] border-solid border-borderColor text-[30px] p-1 rounded-full text-mainColor cursor-pointer" onClick={props.handelClose} />                
        <NavLinks />
    </div>
  )
}
