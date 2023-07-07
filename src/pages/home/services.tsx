import { useState } from "react";
import ServiceItems from "../../components/serviceitems";
import { serviceItems } from "../../interfaces/ui_interface";
import { serviceData } from "./serviceData";
import Button from "../../components/button";
import HomeServiceDetails from "./serviceDetail";
import CircleCard from "../../components/cardCircle";

import { cirleCardData } from "../../components/data/circleCard";

const HomeServices = () => {
    const [currentService,setCurrentService] = useState<number>(1);
    return ( <>
        <section className="bg-secondaryLight pt-10 px-5 md:px-20 pb-5 md:pb-10  ">
            <h1 className="font-pacifico text-5xl text-primary pb-3 font-extralight text-center">Discover</h1>
            <h2 className="text-2xl uppercase text-primary pb-5 text-center">Exclusive services</h2>
            <div className="content mt-10 grid md:grid-cols-5 gap-5">
                <div className="left md:col-span-2   md:px-5 shadow-lg shadow-primaryDark/60 h-full col-span-3  md:mx-3 ">
                    <div className="services md:py-8 pb-2 grid  h-full ">
                        {
                            serviceData.map((item:serviceItems,k:number) =><ServiceItems setCurrentService={setCurrentService} id={item.id} key={k} text={item.name} price={item.price} active={currentService === item.id}/> )
                        }   
                        <Button bgColor="bg-red-400" rounded="rounded-sm" text="make appointment" mt="mt-5"/>
                    </div>
                    
                </div>

                <div className="right col-span-3">
                    {
                        serviceData.map((items:serviceItems,k:number)=>{
                            if(currentService == items.id){
                               return <HomeServiceDetails key={k} details={items.details} name={items.name} image={items.image} id={items.id} price={items.price}/>
                            }
                            return
                        }
                        )
                    }
                    
                </div>
            </div>
            
        </section>
        <section>   
            <div className="circle-cards mt-20 mx-auto w-full place-items-center md:px-16 flex flex-col md:flex-row gap-5 justify-evenly">
                {
                    cirleCardData.map((item:serviceItems,k:number)=><CircleCard id={item.id} key={k} image={item.image} name={item.name} price={item.price}/>)
                }
                    
            </div>
        </section>   
    </> );
}
 
export default HomeServices;