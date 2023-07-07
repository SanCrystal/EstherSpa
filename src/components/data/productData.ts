import { serviceItems } from "../../interfaces/ui_interface";
import Botanica from "../../assets/products1.jpg"
import CocoOil from "../../assets/products3.jpg"
import BlackStone from "../../assets/products4.jpg"
import RestorativeHairMask from "../../assets/products5.jpg"

export const productData:serviceItems[] =[
    {
        id: 1,
        price:45,
        name:"Botanica Hydration",
        image:Botanica
    },
    {
        id: 2,
        price:40,
        name:"Coco Oil",
        image:CocoOil
    },
    {
        id: 3,
        price:20,
        name:"Black Stone",
        image:BlackStone
    },
    {
        id: 5,
        price:35,
        name:"Restorative Hair Mask",
        image:RestorativeHairMask
    },
]