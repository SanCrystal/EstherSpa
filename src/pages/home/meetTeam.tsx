import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,Pagination } from "swiper";
import "swiper/css/effect-cards"
import "swiper/css/grid"
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs";
import { Members } from "../../components/data/teamData";
import PhotoCard from "../../components/photoCard";
import {TeamMember} from "../../interfaces/ui_interface"

const MeetTeam = () => {


    return ( <>
        <section className="pt-36 mx-5 md:mx-16 mb-10">
            <h1 className="font-pacifico text-5xl text-primary pb-3 font-extralight text-center">Meet</h1>
            <h2 className="text-2xl uppercase text-primary text-center  pb-16">Our Expert</h2>
            <div className="card-products relative flex place-items-center ">
                {/* {
                    Members.map((item:{image:string,name:string,office:string})=><PhotoCard image={item.image} name={item.name} office={item.office}/>)
                } */}

<BsFillArrowLeftCircleFill  className="swiper-button-prev text-secondaryLight text-3xl"/>
            <BsFillArrowRightCircleFill className="swiper-button-next text-secondaryLight text-3xl"/>
            
                <Swiper
                slidesPerView={1}
                spaceBetween={50}
                breakpoints={{
                    380:{ slidesPerView:1 },
                    601: { slidesPerView:1 },
                    1025: { slidesPerView:4 },
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
                    Members.map((item:TeamMember,k:number) =><SwiperSlide key={k}><PhotoCard image={item.image} name={item.name} office={item.office} key={k}/> </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </section>
    </> );
}
 
export default MeetTeam;

