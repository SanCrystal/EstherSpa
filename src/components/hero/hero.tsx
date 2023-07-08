import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,Pagination } from "swiper";
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs";

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";

import Spa from "../../assets/spa.jpg";
import Spa1 from "../../assets/spa1.jpg";
import Spa2 from "../../assets/spa2.jpg";
import Spa3 from "../../assets/spa3.jpg";
import Spa4 from "../../assets/spa4.jpg";
import Spa5 from "../../assets/spa5.jpg";
import Spa6 from "../../assets/spa6.jpg";
import ImageSwiper from "../imageSwiper";

const images = [
  {
    image:Spa,
    header:"Welcome to Four Point Spa - Where Bliss Awaits",
    subheader:"",
    text:"Discover a World of Tranquility and Rejuvenation",
  },
  {
    image:Spa1,
    header:"Welcome to Four Point Spa - Where Bliss Awaits",
    subheader:"",
    text:"Discover a World of Tranquility and Rejuvenation",
  },
  {
    image:Spa2,
    header:"Welcome to Four Point Spa - Where Bliss Awaits",
    subheader:"",
    text:"Discover a World of Tranquility and Rejuvenation",
  },
  {
    image:Spa3,
    header:"Welcome to Four Point Spa - Where Bliss Awaits",
    subheader:"",
    text:"Discover a World of Tranquility and Rejuvenation",
  },
  {
    image:Spa4,
    header:"Welcome to Four Point Spa - Where Bliss Awaits",
    subheader:"",
    text:"Discover a World of Tranquility and Rejuvenation",
  },
  {
    image:Spa5,
    header:"Welcome to Four Point Spa - Where Bliss Awaits",
    subheader:"",
    text:"Discover a World of Tranquility and Rejuvenation",
  },
  {
    image:Spa6,
    header:"Welcome to Four Point Spa - Where Bliss Awaits",
    subheader:"",
    text:"Discover a World of Tranquility and Rejuvenation",
  }
]


const Hero = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return ( <>
    <section className="relative">
    <div className="nav absolute z-20 flex justify-between w-full top-[50%]">
      <div ref={prevRef}>
           <BsFillArrowLeftCircleFill    className="swiper-button-prev text-secondaryLight text-3xl cursor-pointer"/>
      </div>
       <div ref={nextRef} >
              <BsFillArrowRightCircleFill className="swiper-button-next text-secondaryLight text-3xl cursor-pointer"/>
       </div>
        
    </div>
    <Swiper
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{
            601: { slidesPerView: 1 },
            1025: { slidesPerView: 1 },
          }}
          loop={true}

          navigation={{
            prevEl: prevRef.current!,
            nextEl: nextRef.current!,
            // nextEl: ".swiper-button-next",
            // prevEl: ".swiper-button-prev",
            enabled: true,
          }}
          onSwiper={(swiper) => {
            // Delay execution for the refs to be defined
            setTimeout(() => {
              // Override prevEl & nextEl now that refs are defined
              if(typeof swiper.params?.navigation != "boolean"){

                swiper.params.navigation!.prevEl = prevRef.current
                swiper.params.navigation!.nextEl = nextRef.current
                // Re-init navigation
                swiper.navigation.destroy()
                swiper.navigation.init()
                swiper.navigation.update()
              }
    
            },500)
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={true}
          className="mySwiper"
          
        >
            {
              images.map((item:{image:string,header:string,subheader:string,text:string},k:number)=><SwiperSlide > <ImageSwiper src={item.image} position={k%2==0?"left":"right"} header={item.header} subheader={item.subheader} text={item.text}/>  </SwiperSlide>)
            }
        </Swiper>
    </section>
    </> );
}

export default Hero;