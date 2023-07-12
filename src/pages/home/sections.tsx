import {assets} from "../../assets/compressedAssets"

const HomeSection = () => {
    return ( <>
        <section className="min-h-[50%] pt-20 pb-10 md:px-20 px-12 md:grid grid-cols-2">
            <div className="left ">
                <div className=" relative line-border border-4 border-gray-200 ">
                    <div className="image w-full">
                        <img src={assets.Massage1} alt="sample" className="w-full relative -top-6 left-6" />
                    </div>
                </div>
            </div>
            <div className="right md:pl-16 mt-10 md:mt-0 grid place-content-center bg-primaryLight pr-3 ">
                <h2 className=" font-sans uppercase font-semibold text-2xl md:text-4xl text-secondaryLight pb-7 md:pb-10 ">ESB Luxury spa and resort</h2>
                <p className="text-secondaryLight md:pb-0 pb-5">Welcome to our luxury city spa, where tranquility and rejuvenation await you. Immerse yourself in a world of relaxation and pampering, designed to nurture your body and uplift your spirit. Our spa offers a wide range of services that aim to provide both a pleasurable experience and numerous benefits for your well-being. Allow us to take you on a journey of ultimate bliss and enhance your body's feel-good factor while helping you look your best.</p>
            </div>
        </section>
    </> );
}
 
export default HomeSection;