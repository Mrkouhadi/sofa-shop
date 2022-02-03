import {useState} from 'react';

const Accordion = ({content})=>{

    const [isOpen, setIsOpen] = useState({info:false, delivery:false});
    const openHandle=(type)=>{
      if(type === "info") return setIsOpen({info: !isOpen.info, delivery:false});
      if(type === "delivery") return setIsOpen({info:false, delivery:!isOpen.delivery});
    }

    return (
        <div className="flex flex-col w-full mt-2">
            <div className="flex flex-col ">
                <div className="flex justify-between border-b">
                    <h1 className="text-gray-900 font-bold fornt-bold text-sm "> ADDITIONAL INFORMATION</h1>
                    <i onClick={()=> openHandle("info")} className={`fas ${isOpen.info ? "fa-minus": " fa-plus"}  text-gray-400 text-sm font-bold cursor-pointer`}></i>
                </div>
                <div className={`transition-all ${isOpen.info && "opacity-100 py-4 "}`}>
                    <div className="bg-gray-400 mb-4">
                        {isOpen.info && content }
                    </div>
                </div>
            </div>

            <div className="flex flex-col ">
                <div className="flex justify-between border-b">
                    <h1 className="text-gray-900 fornt-bold text-sm font-bold "> ASSEMBLY & DELIVERY </h1>
                    <i onClick={()=> openHandle("delivery")} className={`fas ${isOpen.delivery ? "fa-minus": " fa-plus"}  text-gray-400 text-sm font-bold cursor-pointer`}></i>
                </div>
                <div className={`transition-all ${isOpen.delivery && "opacity-100 py-4 "}`}>
                    <div className="bg-gray-400 mb-4">
                        {isOpen.delivery && content }
                    </div>
                </div>
            </div>
    </div>
    )
}
export default Accordion;