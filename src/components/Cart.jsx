import { AliwangwangOutlined, CheckCircleOutlined, ShopOutlined, TrophyOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProceedCart(){
    const { cartItem, removeItemFromCart, addItemToCart, lessItemToCart } = useContext(CartContext);
  const totalAmount = cartItem.reduce((total, obj) => total + obj.quantity * obj.price, 0);
  const totalQuantity = cartItem.reduce((total, obj) => total + obj.quantity, 0);
    return(
<div>
    <div>
        <Navbar />
    </div>

    <div className="container relative flex justify-center p-3">
        <img 
            className="w-full h-96 object-cover opacity-45" 
            src="https://dlifeinteriors.com/wp-content/uploads/2020/05/Living-room-design-3bhk-flat-kochi.jpg" 
            alt="" 
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-medium text-black">
            Cart 
        </h1>
        <h1 className="absolute inset-0 flex items-center justify-center text-2xl font-normal text-black top-36">
            Home{'>'}
            <span className="text-gray-700"> Cart</span>
        </h1>
    </div>

    <div className="flex h-20 gap-2 my-4 justify-center">
        <div className="text-xl font-semibold">Product</div>
    </div>

    <div className="container flex flex-wrap justify-around py-6 bg-pink-50">
        <div className="flex items-center p-5 max-w-xs">
            <TrophyOutlined className="text-5xl text-gray-950" />
            <div className="ml-6">
                <h1 className="text-xl font-semibold">High Quality</h1>
                <p className="text-gray-500">Crafted from top materials</p>
            </div>
        </div>
        <div className="flex items-center p-5 max-w-xs">
            <CheckCircleOutlined className="text-5xl text-gray-950" />
            <div className="ml-6">
                <h1 className="text-xl font-semibold">Warranty Protection</h1>
                <p className="text-gray-500">Over 2 years</p>
            </div>
        </div>
        <div className="flex items-center p-5 max-w-xs">
            <ShopOutlined className="text-5xl text-gray-950" />
            <div className="ml-6">
                <h1 className="text-xl font-semibold">Free Shipping</h1>
                <p className="text-gray-500">Order over $150</p>
            </div>
        </div>
        <div className="flex items-center p-5 max-w-xs">
            <AliwangwangOutlined className="text-5xl text-gray-950" />
            <div className="ml-6">
                <h1 className="text-xl font-semibold">24/7 Support</h1>
                <p className="text-gray-500">Dedicated support</p>
            </div>
        </div>
    </div>

    <div>
        <Footer />
    </div>
</div>

    )
}
export default  ProceedCart;
