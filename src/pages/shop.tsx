import { ServicePricingData } from "../interfaces/ui_interface";

const Shop = (props:{addToCart:ServicePricingData[],setAddToCart:React.Dispatch<React.SetStateAction<ServicePricingData[]>>}) => {
    return ( <>
    {
        <h1>{JSON.stringify(props)}</h1>
    }
    </> );
}
 
export default Shop;