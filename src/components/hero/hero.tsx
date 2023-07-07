
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs";
import Spa from "../../assets/spa.jpg";
import Spa1 from "../../assets/spa1.jpg";
import Spa2 from "../../assets/spa2.jpg";
import Spa3 from "../../assets/spa3.jpg";
import Spa4 from "../../assets/spa4.jpg";
import Spa5 from "../../assets/spa5.jpg";
import Spa6 from "../../assets/spa6.jpg";
import ImageSwiper from "../imageSwiper";


const Hero = () => {

    return ( <>
    <section className="relative">
    <div className="nav absolute z-10 flex justify-between w-full top-[50%]">
        <BsFillArrowLeftCircleFill   className="swiper-button-prev text-secondaryLight text-3xl"/>
        <BsFillArrowRightCircleFill className="swiper-button-next text-secondaryLight text-3xl"/>
    </div>
    <Swiper
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{
            601: { slidesPerView: 1 },
            1025: { slidesPerView: 1 },
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
{/*          
            
            <SwiperSlide ><img src={Spa1} />  </SwiperSlide>
            <SwiperSlide ><img src={Spa2} />  </SwiperSlide>
            <SwiperSlide ><img src={Spa3} />  </SwiperSlide>
            <SwiperSlide ><img src={Spa4} />  </SwiperSlide>
            <SwiperSlide ><img src={Spa5} />  </SwiperSlide>
            <SwiperSlide ><img src={Spa6} />  </SwiperSlide> */}
            <SwiperSlide > <ImageSwiper src={Spa} position={"left"} header={"Welcome to Four Point Spa - Where Bliss Awaits"} subheader={""} text={"Discover a World of Tranquility and Rejuvenation"}/>  </SwiperSlide>
           
            <SwiperSlide > <ImageSwiper src={Spa1} position={"right"} header={"Welcome to Four Point Spa - Where Bliss Awaits"} subheader={""} text={"Discover a World of Tranquility and Rejuvenation"}/>  </SwiperSlide>
           
            <SwiperSlide > <ImageSwiper src={Spa2} position={"left"} header={"Welcome to Four Point Spa - Where Bliss Awaits"} subheader={""} text={"Discover a World of Tranquility and Rejuvenation"}/>  </SwiperSlide>
           
            <SwiperSlide > <ImageSwiper src={Spa3} position={"right"} header={"Welcome to Four Point Spa - Where Bliss Awaits"} subheader={""} text={"Discover a World of Tranquility and Rejuvenation"}/>  </SwiperSlide>
           
            <SwiperSlide > <ImageSwiper src={Spa4} position={"left"} header={"Welcome to Four Point Spa - Where Bliss Awaits"} subheader={""} text={"Discover a World of Tranquility and Rejuvenation"}/>  </SwiperSlide>
            <SwiperSlide > <ImageSwiper src={Spa5} position={"right"} header={"Welcome to Four Point Spa - Where Bliss Awaits"} subheader={""} text={"Discover a World of Tranquility and Rejuvenation"}/>  </SwiperSlide>
            <SwiperSlide > <ImageSwiper src={Spa6} position={"left"} header={"Welcome to Four Point Spa - Where Bliss Awaits"} subheader={""} text={"Discover a World of Tranquility and Rejuvenation"}/>  </SwiperSlide>
           

 
        </Swiper>
    </section>
    </> );
}

export default Hero;