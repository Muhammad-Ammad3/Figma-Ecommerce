import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import productData from "./ProductData";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [moreProduct, setMoreProduct] = useState(20);
    const [selectedCategory, setSelectedCategory] = useState("Living Room");

    useEffect(() => {
        setTimeout(() => {
            setProducts(productData); 
            setLoading(false);
        }, 1000);
    }, []);

    const showMoreProduct = () => {
        setMoreProduct(prevCount => prevCount + 20);
    };

    const filteredProducts = selectedCategory === "All" 
        ? products 
        : products.filter(product => product.category === selectedCategory);

    const categories = ["All", ...new Set(products.map(product => product.category))];

    return (
        <div className="container mx-auto px-4">
        {loading ? (
            <h1 className="text-4xl text-center">Loading....</h1>
        ) : (
            <div>
                <div className="flex justify-center mb-6 flex-wrap">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`mx-2 px-4 py-2 rounded transition duration-300 ${selectedCategory === category ? 'bg-yellow-700 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                
                <div className="flex flex-wrap justify-center my-6">
                    {filteredProducts.slice(0, moreProduct).map(data => (
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" key={data.id}>
                            <ProductCard data={data} />
                        </div>
                    ))}
                </div>
                {moreProduct < filteredProducts.length && (
                    <div className="my-4 text-center">
                        <button 
                            className="px-4 py-2 text-yellow-700 bg-transparent border border-yellow-700 w-44 hover:bg-yellow-700 hover:text-white transition duration-300" 
                            onClick={showMoreProduct}
                        >
                            Show More
                        </button>
                    </div>
                )}
            </div>
        )}
    </div>
    
    );
}

export default Products;
