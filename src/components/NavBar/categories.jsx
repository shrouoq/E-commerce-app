import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


export default function Categories({open}) {

  const {categories} = useSelector(state => state.DataSlice) 

  return (
    <div className="w-[250px] bg-white  border-[1px] border-solid border-borderColor rounded-[5px] absolute top-[60px] overflow-hidden text-black left-[40px] transition-all duration-300 ease-in-out"
                    style={{maxHeight: open && '400px',
                            padding : open ? '12px' : '0',
                            border  : !open &&'none',
                            opacity : open ? 1 : 0,
                            pointerEvents : !open &&'none'
                    }}
    >
        <ul className="flex flex-col gap-4 text-center">
           

            {
              categories.map((category,index) => {
                return (
                <li key={index} className="dosis capitalize text-sm">
                  <NavLink to={`products/${category}`} className='py-[5px] px-[15px] rounded-[5px]'>{category}</NavLink>
                </li>
                )
              })
            }
            
        </ul>
    </div>
  )
}
