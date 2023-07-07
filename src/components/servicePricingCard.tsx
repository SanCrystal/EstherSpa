import { ServicePricingData } from "../interfaces/ui_interface";

const ServicePricingCard = (props:ServicePricingData) => {
    return ( 
        <div className="card relative group w-fit shadow-xl bg-primary/30 pb-10 mt-4">
            <div className="overlay  w-72 h-44 z-10 absolute group-hover:bg-primary/70 bg-secondary/50 transition-all duration-300"></div>
            <div className="image w-72 h-44 bg-cover relative ">
                <img src={props.image} alt="spa packages" className="w-full h-full object-cover" />
                <div className="absolute  w-72 h-44 top-0 grid place-content-center z-10 ">
                <span className="text-gray-100 group-hover:text-secondaryLight text-2xl font-bold uppercase  text-center">{props.serviceType}</span>
                </div>

            <div className="price ring-4 ring-secondaryLight w-20 h-20 rounded-full grid place-content-center font-bold text-2xl bg-primary/80 text-secondaryLight absolute z-10  -bottom-10 left-[34%]">$ {props.price}
            </div>
            </div>
            <div className="service-rendered mt-14 text-gray-100">
                {props.servicesRendered.map(((item:string,k:number)=><p key={k} className="py-4 border-b-2 border-primaryLight px-4">{item}</p>))}
            </div>
            <div className="w-full grid place-content-center">
            {
                (props.addToCart?.find((item:ServicePricingData)=>item.id == props.id && item.price == props.price && item.image == props.image && item.serviceType == props.serviceType)) ==undefined &&
                <button onClick={()=>props.setAddToCart!(
                    [...props.addToCart!,{   id:props.id,
                        image:props.image,
                        price:props.price,
                        servicesRendered:props.servicesRendered,
                        serviceType:props.serviceType
                    }]
                )} className="rounded py-2 px-3 text-secondaryLight bg-primary/80 mt-9 w-fit">Buy Now</button>
            }
            {
                (props.addToCart!.find((item:ServicePricingData)=>item.id == props.id && item.price == props.price && item.image == props.image && item.serviceType == props.serviceType)) &&
                <button onClick={()=>props.setAddToCart!(
                    props.addToCart!.filter((item:ServicePricingData)=>!(item.id == props.id && item.price == props.price && item.image == props.image && item.serviceType == props.serviceType))
                )} className="rounded py-2 px-3 text-secondaryLight bg-primary/80 mt-9 w-fit">Remove Order</button>
            }
            </div>
        </div>
);
}
 
export default ServicePricingCard;