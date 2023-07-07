import {IButton} from "../interfaces/ui_interface"

const Button = (props:IButton) => {
    return (<>
        <button className={`${props.bgColor} ${props.rounded} ${props.mt} place-items-center w-fit mx-auto  flex justify-between p-3 px-7 dark:text-gray-100 hover:cursor-pointer uppercase text-sm`}>
            {props.children}
            <span>{props.text}</span>
        </button>
    </> );
}
 
export default Button;