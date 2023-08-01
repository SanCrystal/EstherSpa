import { ServicePricingData } from "../../interfaces/ui_interface"
import { assets } from "../../assets/compressedAssets";


export const servicePricingData:ServicePricingData[] =[
    {
    id:1,
    image:assets.Facial,
    serviceType:"EFB Light",
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
    serviceType:"EFB Silver",
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
    serviceType:"EFB Gold",
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
    serviceType:"EFB Plantinum",
    price:199,
    servicesRendered:[
        "Body Hand and Foot Massage",
        "Nail Cutting And Styling",
        "Spa Therapy",
        "Hair Coloring",
        "Hydro-Theraphy"
    ]},
]