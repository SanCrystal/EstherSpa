import React,{Dispatch,SetStateAction} from "react";

export interface IButton {
    bgColor: string;
    rounded: string;
    text: string;
    children?: React.ReactNode;
    mt?:string;
    onClick?:()=>void;

}

export interface navitem{
    id?:number;
    title:string;
    link:string;
    subLink?:this[];
}

export interface serviceItems {
    id:number;
    name?:string;
    price:number;
    image?:string;
    details?:string;
    active?:boolean;
    setAddToCart?:(id:this[]) => void;
    addToCart?:this[];

}

export interface testimonial {
    id:number;
    name:string;
    job:string;
    image:string;
    review:string;
}

export interface ServicePricingData extends serviceItems {
    id:number;
    image:string;
    serviceType:string;
    price:number;
    servicesRendered:string[];
    setAddToCart?:Dispatch<SetStateAction< ServicePricingData[]>>;
    // addToCart?:this[]|serviceItems[];
}
export interface TeamMember {
    image:string,
    name:string,
    office:string
}
