import { ServicePricingData } from "../../interfaces/ui_interface"
import Facial from "../../assets/facial.jpg"
import Massage1 from "../../assets/massage1.jpg";
import Massage2 from "../../assets/massage2.jpg";
import Facial3 from "../../assets/facial3.jpg"


export const servicePricingData:ServicePricingData[] =[
    {
    id:1,
    image:Facial,
    serviceType:"Yoyo Light",
    price:60,
    servicesRendered:[
        "Body Hand and Foot Massage",
        "Nail Cutting And Styling",
        "Spa Therapy",
        "Hair Coloring"
    ]},
    {
        id:2,
    image:Facial3,
    serviceType:"Yoyo Silver",
    price:80,
    servicesRendered:[
        "Body Hand and Foot Massage",
        "Nail Cutting And Styling",
        "Spa Therapy",
        "Hair Coloring"
    ]},
    {
    id:3,
    image:Massage1,
    serviceType:"Yoyo Gold",
    price:100,
    servicesRendered:[
        "Body Hand and Foot Massage",
        "Nail Cutting And Styling",
        "Spa Therapy",
        "Hair Coloring"
    ]},
    {
    id:4,
    image:Massage2,
    serviceType:"Yoyo Plantinum",
    price:199,
    servicesRendered:[
        "Body Hand and Foot Massage",
        "Nail Cutting And Styling",
        "Spa Therapy",
        "Hair Coloring"
    ]},
]