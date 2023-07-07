import {AiOutlineDown,AiOutlineUp} from "react-icons/ai"
import { useState } from "react";
import { navitem } from "../../interfaces/ui_interface";

const NavItem = (props:navitem) => {
    const [showContact,setShowContact] = useState<boolean>(false)
    return (<>
        {
            props.subLink?.length! > 0 && 
            <li className="relative md:p-0">
                <p onClick={()=>setShowContact(()=>!showContact)} className={` py-2 pl-5 pr-4 text-secondaryLight rounded hover:bg-primaryLight md:hover:bg-transparent md:border-0 md:hover:text-primaryLight md:p-0 dark:text-white md:dark:text-secondaryLight dark:hover:bg-primaryLight dark:hover:text-white md:dark:hover:bg-transparent flex place-items-center gap-1 hover:after:content-[''] hover:after:bg-primaryLight hover:after:w-full hover:after:h-full hover:after:absolute md:hover:after:absolute md:hover:after:w-0 md:hover:after:h-0`}>
              
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
                <ul className={`${showContact?'flex':'hidden'} w-[80%] md:w-44 md:pl-4  -right-4 md:left-[30%] absolute gap-3 flex-col font-medium mt-4 border  md:mt-5 md:border md:bg-white md:py-3 bg-primary md:dark:bg-primary border-primary z-20`}>
                    <li className="relative  ">
                        <a href={props.link} className="block py-2 pl-3  pr-4 text-secondaryLight  rounded md:hover:bg-transparent md:border-0 md:hover:text-primaryLight md:p-0 dark:text-white md:dark:text-secondaryLight hover:bg-primaryLight dark:hover:text-white md:dark:hover:bg-transparent hover:after:content-['']  hover:after:bg-primaryLight hover:after:mb-2 hover:after:w-full hover:after:absolute hover:after:h-full hover:after:top-0 z-10 md:hover:after:absolute md:hover:after:w-0 md:hover:after:h-0">{props.title}</a>
                    </li>
                    {
                        props.subLink!.map((item:navitem,k:number)=>     <li className="relative z-10" key={k}>
                        <a href={props.link} className="block py-2 pl-3 pr-4 text-secondaryLight rounded hover:bg-primaryLight md:hover:bg-transparent md:border-0 md:hover:text-primaryLight md:p-0 dark:text-white md:dark:text-secondaryLight dark:hover:bg-primaryLight dark:hover:text-white md:dark:hover:bg-transparent hover:after:content-[''] hover:after:bg-primaryLight hover:after:mb-2 hover:after:w-full hover:after:absolute hover:after:h-full hover:after:top-0 z-10 md:hover:after:absolute md:hover:after:w-0 md:hover:after:h-0">{item.title}</a>
                    </li>)
                    }
                </ul>
        </li>
        }
        {
            !props.subLink?.length && 
         <li className="relative">
            <a href={props.link} className="block py-2 pl-5 pr-4 text-secondaryLight  rounded hover:bg-primaryLight md:hover:bg-transparent md:border-0 md:hover:text-primaryLight md:p-0 dark:text-white md:dark:text-secondaryLight dark:hover:bg-primaryLight dark:hover:text-white md:dark:hover:bg-transparent hover:after:content-[''] hover:after:bg-primaryLight hover:after:mb-2 hover:after:w-full hover:after:absolute hover:after:h-full hover:after:top-0 md:hover:after:absolute md:hover:after:w-0 md:hover:after:h-0">{props.title}</a>
        </li>
        }
    </>  );
}
 
export default NavItem;