import {BiSolidQuoteLeft} from "react-icons/bi"
import { testimonial } from "../interfaces/ui_interface";

const TestimonialCard = (props:testimonial) => {
    return (<>
        <div className="grid grid-cols-5 text-secondaryLight">
            <div className="holder relative col-span-1 top-[20%]">
                <div className="absolute">
                    <div className="image absolute w-24 h-28 md:w-32 md:h-36 bg-cover z-10">
                        <img src={props.image} alt="testimonial images"  className="w-24 h-28 md:h-36 md:w-32 object-cover"/>
                    </div>
                    <div className="line absolute w-24 h-28  md:w-32 md:h-36 ring-2 ring-primaryLight -left-3 top-3"></div>
                </div>
            </div>
            <div className="text shadow-lg bg-primaryLight shadow-primary col-span-4 pl-9 md:pl-14 p-5">
                <BiSolidQuoteLeft className="text-4xl mb-5"/>
                <p>{props.review}</p>
                <p className="mt-3 text-2xl font-semibold">{props.name}</p>
                <p className="font-medium font-pacifico">{props.job}</p>
            </div>
        </div>
    </>  );
}
 
export default TestimonialCard;