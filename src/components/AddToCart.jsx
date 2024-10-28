import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Image } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import ProductData from "./ProductData";
import { Link } from "react-router-dom";
import ProductComparision from "./productComaprision";

function Cart() {
  const { cartItem, removeItemFromCart, addItemToCart, lessItemToCart } = useContext(CartContext);
  const totalAmount = cartItem.reduce((total, obj) => total + obj.quantity * obj.price, 0);
  const totalQuantity = cartItem.reduce((total, obj) => total + obj.quantity, 0);

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const categories = [...new Set(cartItem.map(item => item.category))];
    
    const filteredRelatedProducts = ProductData.filter(product => categories.includes(product.category));
    setRelatedProducts(filteredRelatedProducts);
  }, [cartItem]);

  return (
<div className="container mx-auto my-5">
    <Navbar />
    <div className="flex flex-col lg:flex-row h-auto gap-2 my-4">
        <div className="flex flex-col items-center justify-center flex-grow p-4 border">
            <h1 className="text-lg font-semibold">Total Quantity</h1>
            <h1 className="mt-3 text-2xl font-semibold">{totalQuantity}</h1>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow p-4 border">
            <h1 className="text-lg font-semibold">Total Amount</h1>
            <h1 className="mt-3 text-2xl font-semibold">${totalAmount}</h1>
        </div>
        <Link to={'/Checkout'} className="flex flex-col items-center justify-center flex-grow p-4 border">
            <h1 className="text-lg font-semibold">Check Out</h1>
        </Link> 
    </div>

    {cartItem && cartItem.length > 0 ? (
        cartItem.map((data) => (
            <section className="overflow-hidden text-gray-600 body-font" key={data.id}>
                <div className="container px-8 py-5 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center mx-auto lg:w-4/5">
                        <Image 
                            src={data.image} 
                            preview={false} 
                            height={250} 
                            width={250} 
                            className="object-cover object-center rounded lg:w-1/2 lg:h-auto" 
                        />
                        <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
                            <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                                {data.title} {`(${data.category})`}
                            </h1>
                            <p className="leading-relaxed">{data.description}</p>
                            <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-100">
                                <span className="text-2xl font-medium text-gray-900 title-font">${data.price}</span>
                                
                                <div className="flex items-center gap-4 ml-auto">
                                    <Button onClick={() => addItemToCart(data)} icon={<PlusOutlined />} />
                                    <h1 className="text-xl font-bold">{data.quantity}</h1>
                                    <Button 
                                        danger 
                                        onClick={() => lessItemToCart(data.id)} 
                                        icon={<MinusOutlined />} 
                                        disabled={data.quantity <= 1} 
                                    />
                                    <button 
                                        onClick={() => removeItemFromCart(data.id)} 
                                        className="flex items-center w-32 px-4 py-2 text-yellow-700 transition duration-200 border border-yellow-700 rounded-lg hover:bg-yellow-700 hover:text-white"
                                    >
                                        Remove Item
                                    </button>
                                    <Link to={'/comparison'}>
                                        <button 
                                            onClick={ProductComparision} 
                                            className="flex items-center w-32 px-4 py-2 text-yellow-700 transition duration-200 border border-yellow-700 rounded-lg hover:bg-yellow-700 hover:text-white"
                                        >
                                            + Compare
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ))
    ) : (
        <p className="text-center">No items in the cart.</p>
    )}

    <div className="max-w-6xl mx-auto p-5">
        <div className="flex flex-col md:flex-row justify-center mb-5 gap-12">
            <h1 className="text-3xl font-normal">Description</h1>
            <h1 className="text-3xl font-normal text-gray-400">Additional Information</h1>
        </div>
        <div className="mb-5 text-gray-400 py-6">
            <p className="mb-2">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        <div className="flex flex-wrap justify-between">
            <img className="w-full md:w-1/2 mb-4" src="https://s3-alpha-sig.figma.com/img/b739/5be5/3f5927c3cf50e945c3e0f03b3206e810?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMK3eoWGXBCp2MEdJtHiQx7lcrTnxCGofwLlATgoTMELUl8q7swxw7Xk8k8goLo0s1sU1nX4xYaJb6airSn-WAthkOZXafpDfZKD4pHX9Oo4wxiQTnkUH~u0kliaQE00sPSTnXY8r5~1xG8vGRpVE35RtY-6bBnLfxIFttue7GTuaJrzGIVTguCt16bgi966JjlSOlmDpHmMtg-s1rk~slDZ5mnAkBCf2SXTdrQXjsP5Drgo1eaFnL4uADiYezgv7PpBmR4mijHdyvUqsuhSr0Hlq-HghhF1-WR4LkYSouFHZiNzsmsQTNlmHpBNvX~ZoSncEuH41VAnAG1qmX9ktw__" alt="Kilburn Speaker" />
            <img className="w-full md:w-1/2 mb-4" src="https://s3-alpha-sig.figma.com/img/b739/5be5/3f5927c3cf50e945c3e0f03b3206e810?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMK3eoWGXBCp2MEdJtHiQx7lcrTnxCGofwLlATgoTMELUl8q7swxw7Xk8k8goLo0s1sU1nX4xYaJb6airSn-WAthkOZXafpDfZKD4pHX9Oo4wxiQTnkUH~u0kliaQE00sPSTnXY8r5~1xG8vGRpVE35RtY-6bBnLfxIFttue7GTuaJrzGIVTguCt16bgi966JjlSOlmDpHmMtg-s1rk~slDZ5mnAkBCf2SXTdrQXjsP5Drgo1eaFnL4uADiYezgv7PpBmR4mijHdyvUqsuhSr0Hlq-HghhF1-WR4LkYSouFHZiNzsmsQTNlmHpBNvX~ZoSncEuH41VAnAG1qmX9ktw__" alt="Kilburn Speaker" />
        </div>
    </div>

    <div className="py-10 bg-gray-100">
        <h1 className="mb-8 text-4xl font-bold text-center text-primary">Related Products</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {relatedProducts.slice(0, 4).map((data) => (
                <ProductCard data={data} key={data.id} className="transition-transform duration-200 hover:scale-105" />
            ))}
        </div>
    </div>

    <Footer />
</div>

  );
}

export default Cart;
