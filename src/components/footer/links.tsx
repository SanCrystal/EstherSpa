import { useState } from "react";
import {AiOutlineDown,AiOutlineUp} from "react-icons/ai"
import { navitem } from "../../interfaces/ui_interface";

const Links = (props:navitem) => {
    const [showContact,setShowContact] = useState<boolean>(false)
    return ( <>
        {
            props.subLink?.length! > 0 && 
            // <a href="#" className="hover:cursor-pointer hover:text-primaryDark dark:hover:text-primaryLight">
            //     <span className="mb-2 font-medium text-lg">{props.title}</span>
            //     <span className="block w-full border border-dashed border-primary"></span>
            // </a>
                 <li className="relative md:py-1 ">
                 <p onClick={()=>setShowContact(()=>!showContact)} className={` py-2 pl-5 pr-4 text-primary rounded hover:bg-primaryLight md:hover:bg-transparent md:hover:text-primaryLight md:p-0 dark:text-primary md:dark:text-primary dark:hover:bg-primaryLight dark:hover:text-white md:dark:hover:bg-transparent flex place-items-center gap-1 hover:after:content-[''] hover:after:bg-primaryLight hover:after:w-full hover:after:h-full hover:after:absolute md:hover:after:absolute md:hover:after:w-0 md:hover:after:h-0 border-b  border-dashed border-primaryLight md:border-primaryLight md:pb-2`}>
               
                     <span className="z-10">{props.title}</span>
                     {
                         !showContact && 
                         <AiOutlineDown className="font-bold text-xl z-10"/>
                     }
                     {
                         showContact && 
                         <AiOutlineUp className="font-bold text-xl z-10"/>
                     }
                 </p>
                 <ul className={`${showContact?'flex':'hidden'} w-[80%] -right-4 absolute gap-3 flex-col font-medium mt-4 border border-primary md:mt-1 md:border bg-primary md:bg-white dark:bg-primary md:dark:bg-primary dark:border-primary z-20 `}>
                     <li className="relative border-b border-dashed border-primaryLight overflow-hidden">
                         <a href={props.link} className="block py-2 pl-3  pr-4 md:pl-3 text-secondaryLight rounded hover:bg-primaryLight md:hover:bg-transparent md:hover:text-primaryLight md:p-0 dark:text-white md:text-secondaryLight dark:hover:bg-primaryLight dark:hover:text-white md:dark:hover:bg-transparent hover:after:content-['']  hover:after:bg-primaryLight hover:after:mb-2 hover:after:w-full hover:after:absolute hover:after:h-full hover:after:top-0 z-10 md:hover:after:absolute md:hover:after:w-0 md:hover:after:h-0 ">{props.title}</a>
                     </li>
                     {
                         props.subLink!.map((item:navitem,k:number)=>     <li className="relative z-10 overflow-hidden" key={k}>
                         <a href={props.link} className="block py-2 pl-3 pr-4  md:pl-3 text-secondaryLight rounded hover:bg-primaryLight md:hover:bg-transparent md:border-0 md:hover:text-primaryLight md:p-0  md:text-secondaryLight dark:hover:bg-primaryLight dark:hover:text-white md:dark:hover:bg-transparent hover:after:content-[''] hover:after:bg-primaryLight hover:after:mb-2 hover:after:w-full hover:after:absolute hover:after:h-full hover:after:top-0 z-10 md:hover:after:absolute md:hover:after:w-0 md:hover:after:h-0">{item.title}</a>
                     </li>)
                     }
                 
                 </ul>
         </li>
        }
        {
            !props.subLink?.length && 
                <li className="relative">
                <a href={props.link} className="block py-2 pl-5 pr-4 text-primary rounded hover:bg-primaryLight md:hover:bg-transparent  md:hover:text-primaryLight md:p-0 dark:text-primary  dark:hover:bg-primaryLight dark:hover:text-white md:dark:hover:bg-transparent hover:after:content-[''] hover:after:bg-primaryLight hover:after:mb-2 hover:after:w-full hover:after:absolute hover:after:h-full hover:after:top-0 md:hover:after:absolute md:hover:after:w-0 md:hover:after:h-0 border-b border-dashed border-primaryLight md:pb-2">{props.title}</a>
            </li>
        }
    </> );
}
 
export default Links;