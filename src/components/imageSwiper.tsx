const ImageSwiper = (props:any) => {
    return (<>
        <div className="w-[100vw] h-[90vh] relative ">
            <div className={`${props.position =="right"?"hero-right-clip":"hero-left-clip"} image-overlay absolute w-full h-full bg-primaryLight opacity-[35%] flex`}>
            
            </div>
            <div className={`${props.position =="right"?"place-content-end md:pl-32 px-10 ":"place-content-start md:pl-16 px-10"} absolute w-full h-full flex place-items-center text-gray-100 top-24`}>
                <div className={`md:w-[55%]`}>
                <h1 className="text-5xl font-extrabold pb-2  bg-brown-400 ">{props.header}</h1>
                <h4  className="text-2xl font-extrabold pb-2 font-sans">{props.subheader}</h4>
                <p  className="text-xl font-bold">{props.text}</p>
                </div>
                
            </div>
            <img src={props.src} alt="swiper spa"  className="h-full object-cover w-full"/>
        </div>
        </>  );
}
 
export default ImageSwiper;