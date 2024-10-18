import { Button, Image } from "antd"
import Navbar from "./components/Navbar"
import productData from "./components/ProductData";
import ProductCard from "./components/ProductCard";
import { useEffect, useState } from "react";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";

function Home(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setProducts(productData); 
            setLoading(false);
        }, 1000);
    }, []);
    
    
    return (
<div className="container mx-auto max-w-screen-2xl">

<Navbar />

<div className="relative">
    <img
        className="w-full min-h-72"
        src="https://img.freepik.com/premium-photo/scandinavian-interior-mockup-wall-decal-background_1961-259.jpg"
    />
    <div className="absolute w-full p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:w-2/6 bg-orange-50">
        <h1 className="text-xl font-semibold text-black">New Arrival</h1>
        <span className="text-2xl font-bold text-yellow-300 md:text-5xl">Discover Our <br /> New Collection</span>
        <p className="font-semibold text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam <br />magnam rem dolores vitae nihil</p>
        <button className="w-40 h-10 mt-4 text-white bg-yellow-700">Buy Now</button>
    </div>
</div>

<div className="px-4 py-4 text-center">
    <h1 className="p-3 text-3xl font-bold text-gray-700">Browse The Range</h1>
    <p className="text-lg font-semibold text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
</div>

<div className="flex flex-wrap justify-center px-4 py-4 mx-auto my-5">
    {[
        {
            title: "Dining",
            img: "https://t3.ftcdn.net/jpg/03/15/92/90/360_F_315929063_g5W8lTdr75nSh4PS5FN8toL8ahFv6WId.jpg"
        },
        {
            title: "Living",
            img: "https://thumbs.dreamstime.com/b/blank-picture-frame-wall-minimalist-modern-living-room-interior-background-mock-up-scandinavian-style-d-rendering-194411874.jpg"
        },
        {
            title: "Bedroom",
            img: "https://www.decoraid.com/wp-content/uploads/2021/04/striped-bedroom-wallpaper-2206x2500.jpeg"
        }
    ].map((item, index) => (
        <div className="w-full p-2 text-center sm:w-1/3 md:w-1/4" key={index}>
            <Image
                className="w-full rounded-xl"
                width={300}
                height={450}
                preview={false}
                src={item.img}
            />
            <h1 className="text-xl font-bold text-gray-800">{item.title}</h1>
        </div>
    ))}
</div>

<div className="flex justify-center py-4 ">
    <h1 className="p-3 text-3xl font-bold text-gray-700">Our Products</h1>
</div>

<div className="bg-purple-100">
    {loading ? 
        <h1 className="text-4xl text-center">Loading....</h1>
        :
        <div className="flex flex-wrap justify-center m-6">
            {products.slice(0, 10).map((data) => (
                <ProductCard data={data} key={data.id} />
            ))}
        </div>
    }
</div>
<div>
            <ImageSlider />
        </div>

<div className="py-6 mx-auto text-center">
    <h1 className="text-xl font-semibold text-gray-600">Share your setup with</h1>
    <h1 className="py-4 text-5xl font-bold text-gray-800">#FuniroFurniture</h1>
</div>
<div className="container p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                    <img
                        className="object-cover w-full rounded-lg h-60"
                        src="https://plus.unsplash.com/premium_photo-1706140675031-1e0548986ad1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5ncm9vbXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Gallery Image 1"
                    />
                </div>
                <div className="col-span-1 sm:col-span-1 lg:col-span-2">
                    <img
                        className="object-cover w-full rounded-lg h-80"
                        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.1280.960.suffix/1689786863909.jpeg"
                        alt="Gallery Image 2"
                    />
                </div>
                <div className="col-span-1 sm:col-span-1 lg:col-span-1">
                    <img
                        className="object-cover w-full rounded-lg h-60"
                        src="https://st.hzcdn.com/simgs/97910d6b0407c3d1_14-0485/_.jpg"
                        alt="Gallery Image 3"
                    />
                </div>
                <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                    <img
                        className="object-cover w-full rounded-lg h-60"
                        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.1280.960.suffix/1689786863909.jpeg"
                        alt="Gallery Image 4"
                    />
                </div>
                <div className="col-span-1 sm:col-span-1 lg:col-span-2">
                    <img
                        className="object-cover w-full rounded-lg h-80"
                        src="https://hips.hearstapps.com/hmg-prod/images/living-room-2-left-663155189da31.jpg?crop=0.750xw:1.00xh;0,0&resize=980:*"
                        alt="Gallery Image 5"
                    />
                </div>
                <div className="col-span-1 sm:col-span-1 lg:col-span-1">
                    <img
                        className="object-cover w-full rounded-lg h-60"
                        src="https://hips.hearstapps.com/hmg-prod/images/melanie-pounds-mountain-brook-house-tour-living-room-fireplace-jpg-1623351404.jpg?crop=0.732xw:1.00xh;0.128xw,0&resize=1120:*"
                        alt="Gallery Image 6"
                    />
                </div>
            </div>
        </div>
<div>
    <Footer/>
</div>
</div>

    )
}
export default Home