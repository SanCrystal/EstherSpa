import { productData } from "../../components/data/productData";
import ProductCard from "../../components/productCard";
import { serviceItems ,ServicePricingData} from "../../interfaces/ui_interface";

const Products = (props:{addToCart:ServicePricingData[],setAddToCart:React.Dispatch<React.SetStateAction<ServicePricingData[]>>}) => {
    return ( <>
        <section className="pt-36">
            <h1 className="font-pacifico text-5xl text-primary pb-3 font-extralight text-center">Natural</h1>
            <h2 className="text-2xl uppercase text-primary text-center  pb-16">Our products</h2>
            <div className="card-products flex md:flex-row flex-col place-items-center gap-6 justify-around">
                {
                    productData.map((item:serviceItems,k:number)=><ProductCard price={item.price} name={item.name} id={item.id} addToCart={props.addToCart} setAddToCart={props.setAddToCart} key={k} image={item.image}/>)
                }  
            </div>
        </section>
    </> );
}
 
export default Products;