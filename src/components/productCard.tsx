import { serviceItems } from "../interfaces/ui_interface";

const ProductCard = (props:any) => {
    const removeFromCart = (item:serviceItems,items:serviceItems[]):serviceItems[]=>{
        const removed = items.filter(i=>!(i.id === item.id && i.name === item.name && i.price === item.price && i.image === item.image))
        return removed;
    }   
    return ( <>
        <div className="border-2 border-primary/80 w-fit p-3 group relative  group ">
            <div className="addtocart opacity-0 absolute group-hover:opacity-100 w-full h-full group-hover:bg-primary/60 top-0 left-0 z-10 grid place-content-center">
                {
                    !props.addToCart!.find((item:serviceItems)=>item.image === props.image && item.id == props.id && item.name == props.name) && 
                    <button className="place-items-center w-fit mx-auto  flex justify-between p-3 px-7 dark:text-gray-100 hover:cursor-pointer uppercase text-sm bg-primaryDark rounded animate-pulse duration-200 text-gray-100 ring-2 ring-primary" onClick={()=>props.setAddToCart!([...props.addToCart!,{
                        id:props.id,
                        price:props.price,
                        name:props.name,
                        image:props.image!
                    }])}>Add To Cart</button>
                }
                {
                    props.addToCart!.find((item:serviceItems)=>item.image === props.image && item.id == props.id && item.name == props.name) && 
                    <button className="place-items-center w-fit mx-auto  flex justify-between p-3 px-7 text-gray-100 dark:text-gray-100 hover:cursor-pointer uppercase text-sm bg-primaryDark rounded animate-pulse duration-200 ring-2 ring-primary " onClick={()=>props.setAddToCart!(removeFromCart({
                        id:props.id,
                        price:props.price,
                        name:props.name,
                        image:props.image!
                    },props.addToCart))}>Remove from Cart</button>
                }
            </div>
            <div className="image max-w-6xl bg-cover w-full ">
                <img src={props.image} alt={"product image" } className="w-56 object-cover h-72 scale-85 transition-all duration-200 group-hover:scale-105 "/>
            </div>
            <div className="text-center group-hover:scale-110 transition-all duration-200 group-hover:bg-secondaryLight">
                <h2 className="font-medium text-xl pt-4 text-primary">{props.name}</h2>
                <h4 className="font-normal text-xl  text-primary/75">${props.price}</h4>
            </div>
        </div>
    </> );
}
 
export default ProductCard;