import React from "react";

const Input = (props:{label:string ,type:string,id:number,required:boolean,refI?:React.RefObject<HTMLInputElement>,refT?: React.RefObject<HTMLTextAreaElement>}) => {
    return ( <div>
        {props.type==="textarea" && <div className="py-2 flex flex-col gap-1 text-secondaryLight ">
            <label htmlFor={`${props.label}`}>{props.label} {props.required?<span className='text-red-500'>(required *)</span>:""}</label>
            <textarea name={`${props.label}`} id={props.label+"_"+props.id} cols={30}rows={10} className="p-3 dark:bg-primary/30 dark:text-secondaryLight ring-2 ring-primary/50 rounded-sm" required ref={props.refT}></textarea>
         </div>}
        {props.type==="text" && <div className="py-2 flex flex-col gap-1 text-secondaryLight">
            <label htmlFor={`${props.label}`}>{props.label} {props.required?<span className='text-red-500'>(required *)</span>:""}</label>
            <input name={`${props.label}`} id={props.label+"_"+props.id} type="text" required className="p-3 dark:bg-primary/30 dark:text-secondaryLight ring-2 ring-primary/50 rounded-sm" ref={props.refI}/>
         </div>}
        {props.type==="email" && <div className="py-2 flex flex-col gap-1 text-secondaryLight">
            <label htmlFor={`${props.label}`}>{props.label}  {props.required?<span className='text-red-500'>(required *)</span>:""}</label>
            <input name={`${props.label}`} id={props.label+"_"+props.id} type="email" required className="p-3 dark:bg-primary/30   dark:text-secondaryLight ring-2 ring-primary/50 rounded-sm" ref={props.refI}/>
         </div>}
    </div>);
}
 
export default Input;