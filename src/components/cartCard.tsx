const CartCard = (props:{name:string,price:number,quantity:number,image:string,inview:[boolean,string],setInView:React.Dispatch<React.SetStateAction<[boolean,string]>>,handleTotal:()=>void,handleIncreaseQuantity:(item:{name:string,price:number,quantity:number,image:string})=>void, handleDecreaseQuantity:(item:{name:string,price:number,quantity:number,image:string})=>void}) => {

    return ( 
        <div className="flex w-full justify-around place-items-center text-secondaryLight  text-md font-semibold border-r border-b border-l border-primary/20">
        <div className=" w-[98%] flex justify-between place-items-center border-r border-primary/20 px-2">

        <img src={props.image} alt="item image"  className="h-10 w-14"/>
        <span  className="text-center block">{props.name}</span>
        <button onClick={()=>props.setInView([true,props.image])} className="bg-primary/30 py-1 px-3 rounded-sm text-md">view</button>
        </div>

        <span className=" block w-[40%] text-center border-r border-primary/20 p-2" >{props.price}</span>
        <div className="w-[60%]  text-center border-r border-primary/20 px-2 py-0.5 flex justify-around place-items-center"><button  onClick={()=>props.handleDecreaseQuantity({name:props.name,price:props.price,image:props.image,quantity:props.quantity})} className="bg-primary/30 py-1 px-5 rounded-sm text-2xl">-</button><span>{props.quantity}</span><button onClick={()=>props.handleIncreaseQuantity({name:props.name,price:props.price,image:props.image,quantity:props.quantity})} className="bg-primary/30 py-1 px-5 rounded-sm text-2xl">+</button></div>
        <span className="block w-[60%] text-center  border-primary/20 p-2">{Number(`${props.price * props.quantity}`??"0")}</span>
    </div>
     );
}
 
export default CartCard;