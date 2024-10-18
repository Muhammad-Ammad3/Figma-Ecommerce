
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Image } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Cart() {
    const { cartItem,removeItemFromCart,addItemToCart,lessItemToCart } = useContext(CartContext);
    const totalAmount = cartItem.reduce( (total,obj) =>  total + obj.quantity * obj.price , 0)    
    const totalQuantity = cartItem.reduce( (total,obj) =>  total + obj.quantity , 0)    
    return (
      
        <div className="container mx-auto my-5">
      <div>
        <Navbar/>
      </div>
         <div>
          
         </div>
            <div className="flex h-20 gap-2 my">
         <div className="flex flex-col items-center justify-center flex-grow p-2 border">
 <h1>Total Quantity</h1>
 <h1 className="mt-3 text-2xl font-semibold">{totalQuantity}</h1>
         </div>
         <div className="flex flex-col items-center justify-center flex-grow p-4 border">
 <h1>Total Amount</h1>
 <h1 className="mt-3 text-2xl font-semibold">{totalAmount}</h1>
         </div>     <div className="flex flex-col items-center justify-center flex-grow p-4 border">
 <h1>Check Out</h1>
         </div>
     </div>
             {cartItem && cartItem.length > 0 ? (
                cartItem.map((data) => (
            
<section className="overflow-hidden text-gray-600 body-font">
  <div className="container px-8 py-5 mx-auto">
    
    <div className="flex flex-wrap items-center mx-auto lg:w-4/5">
     <Image src={data.image} preview={false} height={250} width={250} className="object-cover object-center rounded lg:w-1/2 lg:h-auto "/>
      <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">

        <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
          {data.title} {`(${data.category})`}
        </h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="ml-3 text-gray-600">4 Reviews</span>
          </span>
          <span className="flex py-2 pl-3 ml-3 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">
        {data.description}
        </p>
        <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-100">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="w-6 h-6 border-2 border-gray-300 rounded-full focus:outline-none" />
            <button className="w-6 h-6 ml-1 bg-gray-700 border-2 border-gray-300 rounded-full focus:outline-none" />
            <button className="w-6 h-6 ml-1 bg-indigo-500 border-2 border-gray-300 rounded-full focus:outline-none" />
          </div>
          <div className="flex items-center ml-6">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="py-2 pl-3 pr-10 text-base border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="text-2xl font-medium text-gray-900 title-font">
            ${data.price}
          </span>
          <div className="flex items-center gap-4">
            <Button 
            onClick={()=> addItemToCart(data)}
            icon={<PlusOutlined/>} 
            className="rounded-full cursor-pointer ">
            </Button>
    <h1 className="text-xl font-bold">{data.quantity}</h1>
    <Button 
    danger
    onClick={()=> lessItemToCart(data.id)}
    icon={<MinusOutlined/>} 
    className="rounded-full cursor-pointer " 
    disabled={data.quantity <=1}>
      </Button>
  
</div>

          <button className="flex px-6 py-2 ml-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
            Add To Cart
          </button>
          <button onClick={()=> removeItemFromCart(data.id)} className="flex px-6 py-2 ml-auto text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600">
            Remove Item
          </button>
          <button className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

                ))
            ) : (
                <p className="text-center">No items in the cart.</p>
            )}
            
            <div className="container justify-center gap-4 py-12 text-center ">
                <h1 className="text-3xl font-semibold">Description</h1>
                <h1 className="text-3xl text-gray-400 ">Additional Information</h1>
            </div>
            <div className="container text-center">
              
                <p className="py-4 text-gray-400 ">Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active  stereo speaker takes the unmistakable look and <br /> sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                <p className="py-4 text-gray-400 ">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br /> speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br /> and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br /> to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                
            </div>
                <div className="flex gap-8 px-56 py-12">
                  
                <Image 
                className="bg-red-50 "
                preview={false}
                src="https://s3-alpha-sig.figma.com/img/b739/5be5/3f5927c3cf50e945c3e0f03b3206e810?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMK3eoWGXBCp2MEdJtHiQx7lcrTnxCGofwLlATgoTMELUl8q7swxw7Xk8k8goLo0s1sU1nX4xYaJb6airSn-WAthkOZXafpDfZKD4pHX9Oo4wxiQTnkUH~u0kliaQE00sPSTnXY8r5~1xG8vGRpVE35RtY-6bBnLfxIFttue7GTuaJrzGIVTguCt16bgi966JjlSOlmDpHmMtg-s1rk~slDZ5mnAkBCf2SXTdrQXjsP5Drgo1eaFnL4uADiYezgv7PpBmR4mijHdyvUqsuhSr0Hlq-HghhF1-WR4LkYSouFHZiNzsmsQTNlmHpBNvX~ZoSncEuH41VAnAG1qmX9ktw__"
                width={800}
                height={350}
                />
                <Image
                className="bg-red-50"
                preview={false}
                src="https://s3-alpha-sig.figma.com/img/b739/5be5/3f5927c3cf50e945c3e0f03b3206e810?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMK3eoWGXBCp2MEdJtHiQx7lcrTnxCGofwLlATgoTMELUl8q7swxw7Xk8k8goLo0s1sU1nX4xYaJb6airSn-WAthkOZXafpDfZKD4pHX9Oo4wxiQTnkUH~u0kliaQE00sPSTnXY8r5~1xG8vGRpVE35RtY-6bBnLfxIFttue7GTuaJrzGIVTguCt16bgi966JjlSOlmDpHmMtg-s1rk~slDZ5mnAkBCf2SXTdrQXjsP5Drgo1eaFnL4uADiYezgv7PpBmR4mijHdyvUqsuhSr0Hlq-HghhF1-WR4LkYSouFHZiNzsmsQTNlmHpBNvX~ZoSncEuH41VAnAG1qmX9ktw__"
                width={800}
                height={350}
                />
                </div>
            <div>
              <Footer/>
            </div>
            
        </div>
    );
}

export default Cart;
