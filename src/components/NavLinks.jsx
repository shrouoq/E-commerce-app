import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { TbMeat } from 'react-icons/tb';
import { TbBrandCake } from 'react-icons/tb';
import { PiCoffee } from 'react-icons/pi';


export default function NavLinks() {
  return (
    <>
        <NavLink to='/' className='dosis flex gap-2 items-center h-10 rounded-[40px] w-fit leading-10 duration-200 px-3'>home <MdOutlineKeyboardArrowDown /></NavLink>
        <NavLink to='shopping' className=' dosis h-10 rounded-[40px] w-fit leading-10 duration-200 px-3'>shop</NavLink>
        <NavLink to='meat' className='dosis flex gap-2 items-center h-10 rounded-[40px] w-fit leading-10 duration-200 px-3'><TbMeat /> meat&seafood</NavLink>
        <NavLink to='bakeries' className='dosis flex gap-2 items-center h-10 rounded-[40px] w-fit leading-10 duration-200 px-3'><TbBrandCake /> bakery</NavLink>
        <NavLink to='beverages' className='dosis flex gap-2 items-center h-10 rounded-[40px] w-fit leading-10 duration-200 px-3'><PiCoffee /> beverages</NavLink>
        <NavLink to='blog' className=' dosis h-10 rounded-[40px] w-fit leading-10 duration-200 px-3'>blog</NavLink>
        <NavLink to='contact' className=' dosis h-10 rounded-[40px] w-fit leading-10 duration-200 px-3'>contact</NavLink>
    </>
  )
}
