import {useEffect } from "react";
import { AiOutlineUp } from "react-icons/ai";
import {BsFacebook,BsInstagram,BsTwitter,BsTiktok,BsYoutube} from "react-icons/bs";
import Logo from "../../assets/logo.png"
import Links from "./links";
import { navDataMain } from "../data/navData";
import { navitem } from "../../interfaces/ui_interface";
const Footer = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return ( <>
    <footer className="mt-28">
        <div className="line w-full h-1 bg-primary relative mb-10"><AiOutlineUp  onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} className="font-extrabold text-3xl bg-primary text-secondaryLight rounded-full p-0.5 absolute right-[48%] -top-5  "/></div>
        <section className="px-10 ">
            <div className="first md:grid grid-cols-3 md:gap-16">
                <div className="holder-brief p-3">
                    <div className="mx-auto flex place-content-center md:place-content-start mb-4">
                        <a href="/" className="flex items-center bg-primaryLight  p-5">
                            <img src={Logo} className="h-8 mr-3 " alt="yoyo Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-secondaryLight text-secondaryLight">FOUR POINT SPA</span>
                        </a>
                    </div>
                    <p className="text-secondaryLight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam fugiat rem in vel accusamus sequi labore sapiente consequatur voluptatem velit animi nihil maiores, ipsa nisi eum aliquid autem voluptate dolorum, cum maxime, possimus impedit. Ipsa vitae possimus distinctio libero quibusdam pariatur aperiam fugiat, odio expedita cupiditate quisquam repellendus ab illo soluta accusamus, voluptatum aliquid voluptas maiores, mollitia harum repellat modi quam eos! Animi vitae maiores reprehenderit consectetur adipisci.</p>
                </div>

                <div className="useful-links">
                    <h2 className="font-bold text-2xl text-primary mt-6 mb-2 md:mb-10">Useful Links</h2>
                    <ul className="">
                        {
                            navDataMain?.map((item:navitem,k:number)=> <Links title={item.title} id={k} key={`${k}`} link={"#"} subLink={item.subLink}/>)
                        }   
                        <Links title="Gallery" id={12} key={12} link="/gallery" />   
                    </ul>
                </div>

                <div className="newsletter">
                <h2 className="font-bold text-2xl text-primary mt-6 mb-2 md:mb-10">NewsLetter</h2>
                <p className="pb-2 md:pb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa eum inventore quia soluta, maxime sequi.</p>
                <div className="inputmail mb-4">
                    <form className="flex">
                        <input type="email" name="email" id="email"  placeholder="yoyo@gmail.com" className="ring-2 ring-primary rounded-sm h-10 w-full px-3 py-2 dark:bg-primary/30 dark:text-gray-100"/>
                        <button type="submit" value={"Subscribe"} className="p-2 bg-primary text-secondaryLight relative ring-2 ring-primary">Subscribe</button>
                    </form>
                </div>
                </div>
            </div>
            <div className="link-socials md:flex justify-between md:mx-3 md:gap-5 pb-4 mt-6 md:mt-16">
                <div className="links flex mb-4 justify-between mx-5 md:mx-0 md:w-[18%]">
                    <a href="#"><BsFacebook  className="text-2xl mr-2 text-primary"/></a>
                    <a href="#"><BsTwitter className="text-2xl mr-2 text-primary"/></a>
                    <a href="#"><BsInstagram className="text-2xl mr-2 text-primary"/></a>
                    <a href="#"><BsTiktok className="text-2xl mr-2 text-primary"/></a>
                    <a href="#"><BsYoutube className="text-2xl mr-2 text-primary"/></a>
                </div>
                <div className="copyright">&copy;2023 Copyright YoYo Spa All rights reserved</div>
            </div>
        </section>
     
    </footer>
    </> );
}
 
export default Footer;