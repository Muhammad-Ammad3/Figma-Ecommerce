import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import productData from "./ProductData";

function Products() {

    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [moreProduct, setMoreProduct] = useState(20);

    useEffect(() => {
        setTimeout(() => {
            setProducts(productData); 
            setLoading(false);
        }, 1000);
    }, []);

    const showMoreProduct = () => {
        setMoreProduct(prevCount => prevCount + 20);
    };

    return (
        <div className="container">
            {loading ? 
                <h1 className="text-4xl text-center">Loading....</h1>
                :
                <div>
                    <div className="flex flex-wrap my-6">
                        {products.slice(0, moreProduct).map((data) => (
                            <ProductCard data={data} key={data.id} />
                        ))}
                    </div>
                    {moreProduct < products.length && (
                        <div className="my-4 text-center">
                            <button 
                                className="px-4 py-2 text-yellow-700 border border-yellow-700 w-44 bg-tranlsparent hover:bg-gray-100" 
                                onClick={showMoreProduct}
                            >
                                Show More
                            </button>
                        </div>
                    )}
                </div>
            }
        </div>
    );
}


export default Products;
