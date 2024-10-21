import { AliwangwangOutlined, CheckCircleOutlined, ShopOutlined, TrophyOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Blog(){
    return(
<div>
    <div>
        <Navbar/>
    </div>
        <div className="container relative flex justify-between p-3">
    <img 
        className="w-full h-96 opacity-45" 
        src="https://dlifeinteriors.com/wp-content/uploads/2020/05/Living-room-design-3bhk-flat-kochi.jpg" 
        alt="" 
    />
    <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-medium text-black">
    Blog 
   </h1>
    <h1 className="absolute inset-0 flex items-center justify-center text-2xl font-normal text-black top-36">Home{'>'}
        <span className="text-gray-700">Blog</span>
    </h1>
</div>
<div className="container flex flex-wrap justify-around py-6 bg-purple-100">
    <div className="flex items-center">
        <TrophyOutlined className="text-5xl text-gray-950" />
        <div className="ml-6">
            <h1 className="text-xl font-semibold fpy-3 text-gray-950">High Quality</h1>
            <p className="text-gray-500">crafted from top materials</p>
        </div>
    </div>
    <div className="flex items-center">
        <CheckCircleOutlined className="text-5xl text-gray-950" />
        <div className="ml-6">
            <h1 className="text-xl font-semibold fpy-3 text-gray-950">Warranty Protection</h1>
            <p className="text-gray-500">over 2 year</p>
        </div>
    </div>
    <div className="flex items-center">
        <ShopOutlined className="text-5xl text-gray-950" />
        <div className="ml-6">
            <h1 className="text-xl font-semibold fpy-3 text-gray-950">Free Shipping</h1>
            <p className="text-gray-500">order over 150$</p>
        </div>
    </div>
    <div className="flex items-center">
        <AliwangwangOutlined className="text-5xl text-gray-950" />
        <div className="ml-6">
            <h1 className="text-xl font-semibold fpy-3 text-gray-950">24 / 7 Support</h1>
            <p className="text-gray-500">Dedicated support</p>
        </div>
    </div>
 
</div>
<div>
    <Footer/>
</div>
</div>
    )
}
export default  Blog;
