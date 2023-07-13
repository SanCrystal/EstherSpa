const CartCard = (props:{name:string,serviceType:string,price:number,quantity:number,image:string,inview:[boolean,string],setInView:React.Dispatch<React.SetStateAction<[boolean,string]>>,handleIncreaseOrDecreaseQuantity:(item:{name:string,price:number,quantity:number,image:string,serviceType:string},type:string)=>void,handleRemoveItemFromCart:(item:{name:string,price:number,quantity:number,image:string,serviceType:string})=>void}) => {
    
    return ( 
        <div className="grid grid-cols-6  justify-around place-items-center text-secondaryLight  text-md font-semibold border-r border-b border-l border-primary/20">
        <div className=" col-span-3 w-full flex justify-between place-items-center border-r border-primary/20 px-2">

            <img src={props.image} alt="item image"  className="h-10 w-14"/>
            <span  className="text-center block">{props.name}</span>
            <div className="flex justify-between gap-2">
                <button 
                onClick={()=>{props.handleRemoveItemFromCart({name:props.name,price:props.price,image:props.image,quantity:props.quantity,serviceType:props.serviceType})}} 
                className="bg-red-600/70 py-1 px-3 rounded-sm text-md">Remove</button>
                <button onClick={()=>props.setInView([true,props.image])} className="bg-primary/30 py-1 px-3 rounded-sm text-md">view</button>
            </div>
        </div>

        <span className=" block col-span-1  w-full text-center border-r border-primary/20 p-2" >{props.price}</span>
        <div className="col-span-1  w-full  text-center border-r border-primary/20 px-2 py-0.5 flex justify-around place-items-center">
            <button  
            onClick={()=>props.handleIncreaseOrDecreaseQuantity({name:props.name,price:props.price,image:props.image,quantity:props.quantity,serviceType:props.serviceType},"dec")} className="bg-primary/30 py-1 px-5 rounded-sm text-2xl">-</button>
                <span>{props.quantity}</span>
            <button onClick={()=>props.handleIncreaseOrDecreaseQuantity({name:props.name,price:props.price,image:props.image,quantity:props.quantity,serviceType:props.serviceType},"inc")} className="bg-primary/30 py-1 px-5 rounded-sm text-2xl">+</button>
        </div>
        <span className="block col-span-1 text-center  border-primary/20 p-2">{Number(`${props.price * props.quantity}`??"0")}</span>
    </div>
     );
}
 
export default CartCard;