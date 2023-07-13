import { useCallback, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import CartCard from "../../components/cartCard";
import { ServicePricingData } from "../../interfaces/ui_interface";


const Cart = (props:{addToCart:ServicePricingData[],setAddToCart:React.Dispatch<React.SetStateAction<ServicePricingData[]>>}) => {
    const [modifyQuantity,setModifyQuantity] = useState<[ServicePricingData,number][]>(props.addToCart.map(item=>[item,1])); //populate initial state values in carts
    const [inview,setInView] = useState<[boolean,string]>([false,""]);
    const [total,setTotal] = useState<number>(modifyQuantity.map(item=> item[0].price * item[1] ).reduce((a,b)=>a + b, 0));

    //handle total price
    const handleTotal = useCallback((item:[ServicePricingData,number][])=>{
        const newTotal = item.map(item=> item[0].price * item[1] ).reduce((a,b)=>a + b, 0);
        //set total
        setTotal(newTotal);
    },[modifyQuantity]);

    //handle increasing|decreasing of quantity
    const handleIncreaseOrDecreaseQuantity = useCallback((item:{name:string,price:number,quantity:number,image:string,serviceType:string},type:string)=>{
        let curState = modifyQuantity;
        const itemArr = curState.find((i:[ServicePricingData,number])=> ((item.name === i[0].name||item.serviceType === i[0].serviceType) && item.price === i[0].price && item.image === i[0].image));

        const index = itemArr?curState.indexOf(itemArr):-1; //Ensure index is not negative| exist
        if (index != -1 && type=="inc") curState[index][1]++;
        if (index != -1 && type=="dec") curState[index][1] <= 0?0:curState[index][1]--;
    
        //update state
        setModifyQuantity(curState);
        //handle total
        handleTotal(curState);
    },[modifyQuantity,total]);

    //handle remove item from cart
    const handleRemoveItemFromCart = useCallback((item:{name:string,price:number,quantity:number,image:string,serviceType:string}) =>{
        const curState = props.addToCart.filter(i=>!((item.name === i.name||item.serviceType === i.serviceType) && item.price === i.price && item.image === i.image))

        const curQuantityState = modifyQuantity.filter(i=>!((item.name === i[0].name||item.serviceType === i[0].serviceType) && item.price === i[0].price && item.image === i[0].image))
        //update cart state
        props.setAddToCart(curState);
        //update quantity state
        setModifyQuantity(curQuantityState);
        //handle total
        handleTotal(curQuantityState);
    },[modifyQuantity,props.addToCart,handleTotal]);

    return (
    <>
    {inview[0] && <div className="fixed z-20 mx-[15%] mt-[4%] p-10 bg-primary/40 w-[70vw] h-[60vh]  ">
        
        <div className=" w-full bg-cover relative h-full">
        <button onClick={()=>setInView([false,""])} className="absolute right-4 -top-2 ring-4 rounded-md ring-red-500 "><AiOutlineClose className="font-semibold md:text-5xl text-3xl text-red-500"/></button>
            <img src={inview[1]} alt="inview image"  className="object-cover w-full h-full"/>
        </div>
        </div>}
    <div className="relative min-h-[70%] mt-10 overflow-x-scroll ">
        <div className="min-w-[80%] w-[60rem] m-auto  grid p ">
            <div className="header text-4xl font-bold text-primary/80  font-pacifico mb-6 m-auto px">Checkout</div>
                <div className="p-10 shadow-lg">
                    <div className="header grid grid-cols-6 font-medium text-xl text-primary border border-primary/20">
                        <h4 className="border-r border-primary/20 py-4 px-4  text-center col-span-3 " >Item(s)</h4>
                        <h4 className="border-r border-primary/20 py-4 px-4 text-center col-span-1">Price ($)</h4>
                        <h4 className="border-r border-primary/20 py-4 px-4 text-center grid-cols-1">Quantity</h4>
                        <h4 className=" py-4 px-4 text-center col-span-1">Total ($)</h4>
                    </div>
                    <div className="body-cart grid ">
                        
                        {
                            props.addToCart.length>0 && props.addToCart.map((item:ServicePricingData,k:number)=><CartCard key={k} price={item.price} name={item.name?item.name!:item.serviceType!} image={item.image} quantity={modifyQuantity[k][1]} inview={inview} setInView={setInView} handleIncreaseOrDecreaseQuantity={handleIncreaseOrDecreaseQuantity}  serviceType={item.serviceType} handleRemoveItemFromCart={handleRemoveItemFromCart}/>)
                        }
                        {
                            props.addToCart.length>0 && <>
                            <div className="total flex justify-end py-3 pt-4 font-extrabold text-lg text-primary">
                            <span className="mx-14">Grand Total</span>
                            <span>${total}</span>
                        </div>
                        <div className="checkout w-72 flex mx-auto justify-between">
                            <button className="px-4 py-2 rounded-md bg-green-600/70 text-secondaryLight animate-pulse">Checkout</button>
                            <button onClick={()=>{props.setAddToCart([])}} className="px-4 py-2 rounded-md bg-red-600/70 text-secondaryLight animate-pulse">Empty Cart</button>
                        </div>
         
                            </>
                        }
                        
                    </div>
                        {
                           props.addToCart.length==0 && <div className="flex place-items-center w-full h-44 justify-center text-lg text-secondaryLight">
                            <p className="text-center  ">No Items Recorded</p>
                           </div>
                        }
                        
                </div>
        </div>
    </div> 
    </>
     );
}
 
export default Cart;