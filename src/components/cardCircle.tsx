import { serviceItems } from "../interfaces/ui_interface";

const CircleCard = (props:serviceItems) => {
    return (<>
    <div className="wrapper relative w-52 ">
    <div className="border-4 border-primarylight w-52 h-52 rounded-full overflow-hidden flex place-items-center flex-col relative">
            <div className="image bg-cover w-full aspect-square">
                <img src={props.image} alt="service image" className="object-cover w-52 h-44 "/>
            </div>
            <div className="name absolute bottom-0 h-16 bg-primary/60 w-full text-center uppercase text-secondaryLight">
                <span>{props.name}</span>
            </div>
           
        </div>
        <span className="absolute p-3 h-14 w-14 bg-primary/80 rounded-full text-secondaryLight border-4 border-secondaryLight/80 bottom-4 -right-7 ">${props.price}</span>
    </div>

    </>  );
}
 
export default CircleCard;