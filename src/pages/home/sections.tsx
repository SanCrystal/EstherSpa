import Product from "../../assets/massage2.jpg"

const HomeSection = () => {
    return ( <>
        <section className="min-h-[50%] pt-20 pb-10 md:px-20 px-12 md:grid grid-cols-2">
            <div className="left ">
                <div className=" relative line-border border-4 border-gray-200 ">
                    <div className="image w-full">
                        <img src={Product} alt="sample" className="w-full relative -top-6 left-6" />
                    </div>
                </div>
            </div>
            <div className="right md:pl-16 mt-10 md:mt-0 grid place-content-center bg-primaryLight pr-3 ">
                <h2 className=" font-sans uppercase font-semibold text-2xl md:text-4xl text-primary pb-7 md:pb-10 ">Yoyo Luxury spa and resort</h2>
                <p className="text-secondaryLight md:pb-0 pb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, repellendus fugiat reprehenderit laboriosam vel autem, numquam similique expedita facilis veniam omnis mollitia animi, illo placeat sint perferendis! Optio fugiat quas fuga ad dolorem dolores natus consequatur est doloribus assumenda, tempore dicta deleniti ratione commodi consequuntur? Iure dolorum impedit consequatur numquam.</p>
            </div>
        </section>
    </> );
}
 
export default HomeSection;