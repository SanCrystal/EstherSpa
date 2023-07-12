import { ServicePricingData } from "../../interfaces/ui_interface"
import { assets } from "../../assets/compressedAssets";
import Facial from "../../assets/facial.jpg"
import Massage1 from "../../assets/massage1.jpg";
import Massage2 from "../../assets/massage2.jpg";
import Facial3 from "../../assets/facial3.jpg"


export const servicePricingData:ServicePricingData[] =[
    {
    id:1,
    image:assets.Facial,
    serviceType:"ESB Light",
    price:60,
    servicesRendered:[
        "Body Hand and Foot Massage",
        "Nail Cutting And Styling",
        "Spa Therapy",
        "Hair Coloring"
    ]},
    {
        id:2,
    image:assets.Facial3,
    serviceType:"ESB Silver",
    price:80,
    servicesRendered:[
        "Body Hand and Foot Massage",
        "Nail Cutting And Styling",
        "Spa Therapy",
        "Hair Coloring"
    ]},
    {
    id:3,
    image:assets.Massage1,
    serviceType:"ESB Gold",
    price:100,
    servicesRendered:[
        "Body Hand and Foot Massage",
        "Nail Cutting And Styling",
        "Spa Therapy",
        "Hair Coloring"
    ]},
    {
    id:4,
    image:assets.Massage2,
    serviceType:"ESB Plantinum",
    price:199,
    servicesRendered:[
        "Body Hand and Foot Massage",
        "Nail Cutting And Styling",
        "Spa Therapy",
        "Hair Coloring",
        "Hydro-Theraphy"
    ]},
]