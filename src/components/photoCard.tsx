import { TeamMember } from "../interfaces/ui_interface";


const PhotoCard = (props:TeamMember) => {
    return (
        <div className="grid place-content-center">
            <div className="image w-52 h-52 rounded-full overflow-hidden ring-4 ring-gray-200">
                <img src={props.image} alt="team member" className="w-52 h-52" />
            </div>
            <div className="id mt-5 text-center font-semibold text-lg text-primary">
                <p className="font-bold text-xl">{props.name}</p>
                <p>{props.office}</p>
            </div>
        </div>
     );
}
 
export default PhotoCard;