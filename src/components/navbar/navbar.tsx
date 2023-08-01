import { useState } from "react";
import {BsCart4,BsFillTelephoneOutboundFill} from "react-icons/bs"
import {AiOutlineClose} from "react-icons/ai";
import {FiMail} from "react-icons/fi";
import {GiHamburgerMenu} from "react-icons/gi";
import { navitem } from "../../interfaces/ui_interface";
import { navDataMain } from "../data/navData";
import NavItem from "./navItem";
import {ServicePricingData } from "../../interfaces/ui_interface";
import { assets } from "../../assets/compressedAssets";

const Navbar = (props:{addToCart:ServicePricingData[],setAddToCart:React.Dispatch<React.SetStateAction<ServicePricingData[]>>,handleCheckout:()=>void}) => {
    const [isOpen,setIsOpen]= useState<boolean>(false);
    console.log(props)

    return ( <>
<div className="hidden md:flex contact-header w-full flex-wrap items-center justify-end  pr-20 bg-secondaryLight gap-10">
        <span className="flex place-items-center gap-2 p-1">
            <FiMail/>
            <span>efb@gmail.com</span> 
        </span>
        <span className="flex place-items-center gap-2 p-1">
            <BsFillTelephoneOutboundFill className=""/>
           <span> +23409000000000</span></span>
</div>
<nav className=" border border-primary bg-primary dark:border-primary ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
    <a href="/" className="flex items-center">
        <img src={assets.Logo} className="h-8 mr-3" alt="efb Logo" />
        <span className="self-center text-2xl text-gray-100 font-semibold whitespace-nowrap dark:text-yellow-600/80">EFB BEAUTY SPA</span>
    </a>
    {
        !isOpen && 
        <GiHamburgerMenu onClick={()=>setIsOpen(()=>!isOpen)}  className="inline-flex items-center p-2 ml-3 rounded-lg md:hidden hover:bg-primaryDark focus:outline-none focus:ring-2 focus:ring-gray-200 text-secondaryLight text-5xl  dark:hover:bg-primaryDark dark:focus:ring-primaryLight z-30"/>
    }
    {
        isOpen && <AiOutlineClose onClick={()=>setIsOpen(()=>!isOpen)}  className="inline-flex items-center p-2 ml-3  rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 text-secondaryLight text-5xl  hover:bg-primaryDark dark:focus:ring-primaryLight z-30"/>
    }
    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-primary md:dark:bg-primary dark:border-primary">

      {
        navDataMain.map((item:navitem,k:number)=> <NavItem title={item.title} link={item.link} key={`${k}`} subLink={item.subLink}/>)
      }
       <li className="relative hover:cursor-pointer" onClick={()=>{props.handleCheckout();}}>
        <span className="counter bg-red-500 w-6 h-6 block text-center rounded-full absolute -right-5 -top-2">{props?.addToCart?.length??0}</span>
        <BsCart4 className="text-2xl text-secondaryLight "/>
       </li>
      </ul>
    </div>
  </div>


  {/* mobile nav */}
    
  <div className={`md:hidden w-[60%] relative -right-3   flex place-items-start  `}>
    <ul className={`flex flex-col font-medium p-4 pl-0  border   bg-primary border-primary absolute  ease-out transition-all duration-500 origin-right   ${isOpen?"translate-x-[60%] z-40 w-full opacity-100  ":"opacity-0 z-0 w-full translate-x-full"} `}>

    {
        navDataMain.map((item:navitem,k:number)=> <NavItem title={item.title} link={item.link} key={`${k}`} subLink={item.subLink}/>)
    }
    <li className="relative hover:cursor-pointer px-5 pt-2" onClick={()=>{props.handleCheckout();}}>
        <span className="counter bg-red-500 w-6 h-6 block text-center rounded-full absolute left-8 -top-1">{props?.addToCart?.length??0}</span>
        <BsCart4 className="text-2xl text-secondaryLight  "/>
    </li>
    </ul>
    </div>
</nav>

    </> );
}
 
export default Navbar;