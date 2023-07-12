import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,Pagination } from "swiper";
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs";

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import { assets } from "../../assets/compressedAssets";
import ImageSwiper from "../imageSwiper";

const images = [
  {
    image:assets.Spa,
    header:"Welcome to EFB BEAUTY SPA - Where Bliss Awaits",
    subheader:"A Haven of Tranquility, Awe-Inspiring Luxury",
    text:"Indulge in Pure Bliss and Serenity",
  },
  {
    image:assets.Spa1,
    header:"Welcome to EFB BEAUTY SPA - Revitalize Your Mind, Body, and Soul",
    subheader:"",
    text:"Experience Opulence and Rejuvenation Unparalleled",
  },
  {
    image:assets.Spa2,
    header:"Welcome to EFB BEAUTY SPA - Embrace Serenity, Awaken Your Inner Glow",
    subheader:"",
    text:"Escape to Tranquility, Embrace Unmatched Luxury",
  },
  {
    image:assets.Spa3,
    header:"Welcome to EFB BEAUTY SPA - Immerse Yourself in Utter Relaxation and Revitalization",
    subheader:"",
    text:"Elevate Your Senses, Embark on Exquisite Relaxation",
  },
  {
    image:assets.Spa4,
    header:"Welcome to EFB BEAUTY SPA - Where Indulgence Meets Unparalleled Pampering",
    subheader:"",
    text:"Discover the Epitome of Pampering Luxury",
  },
  {
    image:assets.Spa5,
    header:"Welcome to EFB BEAUTY SPA - Envelop Your Senses in Unparalleled Luxury",
    subheader:"",
    text:"Unwind, Recharge, and Radiate Inner Beauty",
  },
  {
    image:assets.Spa6,
    header:"Welcome to EFB BEAUTY SPA - Unveil the Essence of Timeless Elegance",
    subheader:"",
    text:"Luxuriate in Unforgettable Moments of Pure Bliss",
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
              images.map((item:{image:string,header:string,subheader:string,text:string},k:number)=><SwiperSlide  key={k}  > <ImageSwiper src={item.image} position={k%2==0?"left":"right"} header={item.header} subheader={item.subheader} text={item.text}/>  </SwiperSlide>)
            }
        </Swiper>
    </section>
    </> );
}

export default Hero;