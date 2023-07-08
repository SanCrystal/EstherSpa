import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,Pagination } from "swiper";
import "swiper/css/effect-cards"
import "swiper/css/grid"
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs";
import TestimonialCard from "../../components/testimonialCard";
import { testimonialData } from "../../components/data/testimonialData";
import { testimonial } from "../../interfaces/ui_interface";


const Testimonial = () => {
    return ( <>
        <section className="pt-36 mx-5 md:mx-16 ">
            <h1 className="font-pacifico text-5xl text-primary pb-3 font-extralight text-center">Testimonial</h1>
            <h2 className="text-2xl uppercase text-primary text-center  pb-16">Customer Reviews</h2>
            <div className="card-products flex place-items-center gap-6 justify-around relative">
            <div className="flex justify-between place-items-center absolute w-full z-10">
            <BsFillArrowLeftCircleFill  className="swiper-button-prev text-secondaryLight text-3xl"/>
            <BsFillArrowRightCircleFill className="swiper-button-next text-secondaryLight text-3xl"/>
            </div>

            
                <Swiper
                slidesPerView={1}
                spaceBetween={35}
                breakpoints={{
                    380:{ slidesPerView:1 },
                    601: { slidesPerView:1 },
                    1025: { slidesPerView: 3 },
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    enabled: true,
                }}

                
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                autoplay={true}
                className="mySwiper"
                >   
                    {
                    testimonialData.map((item:testimonial,k:number) =><SwiperSlide key={k} ><TestimonialCard  name={item.name} job={item.job} key={k} id={item.id} image={item.image} review={item.review}/> </SwiperSlide>)
                    }
                </Swiper>
                        
            </div>
        </section>
    </> );
}
 
export default Testimonial;