import { serviceItems } from "../../interfaces/ui_interface";
import Facial from "../../assets/facial3.jpg"
import NailCare from "../../assets/nailcare2.jpg";
import BodyMassage from "../../assets/massage3.jpg";
import SkinCare from "../../assets/facial7.jpg";

export const cirleCardData:serviceItems[] = [
    {
        id:1,
        name:"skin care",
        price: 25,
        image:SkinCare
    },
    {
        id:2,
        name:"Body massage",
        price: 45,
        image:BodyMassage
    },
    {
        id:3,
        name:"Nail care",
        price: 15,
        image:NailCare

    },
    {
        id:4,
        name:"beauty care",
        price: 55,
        image:Facial
    },
]