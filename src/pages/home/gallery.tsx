import { useState } from "react";
import { photos,CustomImage } from "../../components/data/galleryData";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


const HomeGallery = () => {
    const [index, setIndex] = useState(-1);

    const handleClick = (index: number,) => setIndex(index);


    return ( <>
        <section className="pt-36 mx-5 md:mx-16 mb-10">
            <h1 className="font-pacifico text-5xl text-primary pb-3 font-extralight text-center">Explore</h1>
            <h2 className="text-2xl uppercase text-primary text-center  pb-16">Our Gallery</h2>
            <div className="card-products ">
                  <Gallery
        
                    images={photos}
                    onClick={handleClick}
                    enableImageSelection={false}
                />

            </div>
            <div>
                <Lightbox
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    slides={photos.map((photo:CustomImage )=>{
                        return{...photo,height:560,width:720}})}
                    index={index}
                />
            </div>
            <div className="scroll-to-packages md:flex gap-5 place-items-center mt-10 bg-primaryLight p-5 text-gray-200 grid">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ea aperiam voluptatum ratione pariatur voluptatibus! Doloribus aspernatur nulla esse cumque.</p>
                {/* <a text="View Packages" bgColor="bg-secondary" rounded="rounded-lg"/> */}
                <a href="#view-packages" className=" rounded-lg bg-secondary block py-1 px-3 text-center uppercase text-warmGray-50">View Packages</a>
            </div>
        </section>
    </> );
}
 
export default HomeGallery;

