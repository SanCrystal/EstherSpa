import { serviceItems } from "../../interfaces/ui_interface";

const HomeServiceDetails = (props:serviceItems) => {
    return ( <>
        <div className="px-4">
            <div className="image pb-16 max-h-[40vh] w-[80vw] md:w-full  md:max-h-[60vh] bg-contain ">
                <img src={props.image} alt="services images" className="md:h-[60vh] h-[40vh] md:w-full w-full object-cover" />
            </div>
            <h1 className="font-medium text-3xl uppercase text-primary pt-4">{props.name} </h1>
            <h4 className="text-lg text-primary">${props.price} per head</h4>
            <p className="text-secondary pt-5">{props.details}</p>
        </div>
    </> );
}
 
export default HomeServiceDetails;