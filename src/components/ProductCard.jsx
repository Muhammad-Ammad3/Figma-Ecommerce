import { Button, Image } from "antd";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ data }) {
    const { addItemToCart, isItemAdded } = useContext(CartContext);

    const itemAdded = isItemAdded(data.id) || {}; 

    const handleAddToCart = () => {
        try {
            addItemToCart(data);
        } catch (error) {
            console.error("Error adding item to cart:", error);
        }
    };



    return (
        <div className="ml-1">
        <div className="relative flex flex-col w-full max-w-xs p-4 mx-auto overflow-hidden transition-colors duration-300 bg-gray-100 rounded-lg shadow-md group">
            <Image
                preview={false}
                height={250}
                width={260}
                alt="ecommerce"
                className="object-cover w-full h-48 transition-transform duration-300 rounded-t-lg group-hover:scale-105"
                src={data.image}
            />
            <div className="flex flex-col flex-grow p-4 transition-colors duration-300">
                <h2 className="text-lg font-medium text-gray-900 title-font">
                    {data.category}
                </h2>
                <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
                    {data.title}
                </h3>
                <p className="mt-1 text-lg font-semibold text-gray-900">${data.price}</p>
                <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-50"></div>
                <Button 
                    className="absolute font-semibold text-yellow-700 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2 opacity-0 w-44 left-1/2 top-1/2 group-hover:opacity-100" 
                    onClick={handleAddToCart}
                >
                    {itemAdded.quantity ? `Added (${itemAdded.quantity})` : 'Add to Cart'}
                </Button>
            </div>
        </div>
    </div>
    
    
    );
}

export default ProductCard;
