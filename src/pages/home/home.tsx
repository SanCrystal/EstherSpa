import Hero from "../../components/hero/hero";
import HomeSection from "./sections";
import HomeServices from "./services";
import Products from "./products";
import Testimonial from "./testimonial";
import {ServicePricingData } from "../../interfaces/ui_interface";
import HomeGallery from "./gallery";
import MeetTeam from "./meetTeam";
import ServicePricing from "./servicePricing";
import ContactUs from "./contactus";



const Home = (props:{addToCart:ServicePricingData[],setAddToCart:React.Dispatch<React.SetStateAction<ServicePricingData[]>>}) => {
    return ( <>
        <Hero/> 
        <HomeSection/>
        <HomeServices/>
        <Products addToCart={props.addToCart} setAddToCart={props.setAddToCart} />
        <Testimonial/>
        <HomeGallery/>
        <MeetTeam/>
        <ServicePricing addToCart={props.addToCart} setAddToCart={props.setAddToCart}/>
        <ContactUs/>
    </> );
}
 
export default Home;