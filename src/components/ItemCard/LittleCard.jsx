import { NavLink } from "react-router-dom";


export default function LittleCard(props){
    return(
        <NavLink to={props.link} className="card w-[235px] h-[242px] p-3 border-[1px] border-solid bg-transparent">
            <div className="pic h-[145px] p-3">
                <img src={props.pic} alt="pic" className="w-full h-full object-contain"/>
            </div>

            <p className="tit text-sm capitalize font-semibold text-black leading-[17px] py-3">{props.title}</p>

            <span className="font-normal text-sm capitalize text-lightGray">{props.num} items</span>
        </NavLink>
    )
} 