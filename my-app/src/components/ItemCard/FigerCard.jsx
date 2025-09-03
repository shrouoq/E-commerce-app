
export default function FigerCard(props) {
  return (
    <div className="w-[370px] max-lg:w-full h-[380px] rounded-[5px] overflow-hidden">

        <div className="pic h-[250px]">
            <img src={props.pic} alt="pic" className="h-full w-full max-lg:object-cover"/>
        </div>

        <div className="tetx h-full p-2 flex flex-col">

            <span className="text-lightGray font-semibold dosis uppercase text-[13px]">Grocery</span>

            <p className="title my-4 text-[18px] font-semibold h-[48px] text-black">{props.title}</p>

            <div className="date font-medium text-sm flex gap-2">
                <p className="text-lightGray">Jan 13 2025</p>
                <p className="text-black">Sinan ISIK</p>
            </div>
        </div>

    </div>
  )
}
