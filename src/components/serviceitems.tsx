const ServiceItems = (props:any) => {
    return ( <>
        <div onClick={()=>props.setCurrentService(props.id)} className={`hover:cursor-pointer flex justify-between mx-5 py-5 font-bold border-b border-dashed  ${props.active?"text-red-400 border-red-400":"text-primary border-primary"}  relative`}>
            <span className="text-xl uppercase ">{props.text}</span>
            <span className="text-xl uppercase ">${props.price}</span>
        </div>
    </> );
}
 
export default ServiceItems;