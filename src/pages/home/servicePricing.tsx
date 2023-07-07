import ServicePricingCard from "../../components/servicePricingCard";
import { servicePricingData } from "../../components/data/servicePricingData";
import { ServicePricingData } from "../../interfaces/ui_interface";

const ServicePricing = (props:{addToCart:ServicePricingData[],setAddToCart:React.Dispatch<React.SetStateAction<ServicePricingData[]>>}) => {


    return ( <>
        <section className="pt-36 mx-5 md:mx-16 mb-10">
            <h1 className="font-pacifico text-5xl text-primary pb-3 font-extralight text-center">Amazing</h1>
            <h2 className="text-2xl uppercase text-primary text-center  pb-16">Service Pricing</h2>
            <div className="card-products md:flex md:justify-evenly grid place-content-center gap-5">

                {
                    servicePricingData.map((item:ServicePricingData,k:number)=><ServicePricingCard id={item.id} image={item.image} serviceType={item.serviceType} price={item.price} servicesRendered={item.servicesRendered} addToCart={props.addToCart} setAddToCart={props.setAddToCart} key={k}/>)
                }
            </div>

        </section>
    </> );
}
 
export default ServicePricing;

