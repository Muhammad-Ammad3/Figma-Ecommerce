import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
    const [cartItem, setCartItem] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItem));
    }, [cartItem]);

    function addItemToCart(item) {
        setCartItem(prevCartItems => {
            const itemIndex = prevCartItems.findIndex(data => data.id === item.id);
            
            if (itemIndex === -1) {
                return [...prevCartItems, { ...item, quantity: 1 }];
            } else {
                const updatedCartItems = [...prevCartItems];
                updatedCartItems[itemIndex] = {
                    ...updatedCartItems[itemIndex],
                    quantity: updatedCartItems[itemIndex].quantity + 1,
                };
                return updatedCartItems;
            }
        });
    }
    function lessItemToCart(id) {
    const arr  =  cartItem;
    const itemIndex = cartItem.findIndex((data) => data.id == id)
    arr[itemIndex].quantity--;
    setCartItem([...arr]);
    }

    function removeItemFromCart(id) {
        setCartItem(prevCartItems => {
            return prevCartItems.filter(item => item.id !== id);
        });
    }

    function isItemAdded(id) {
        const itemIndex = cartItem.findIndex(data => data.id === id);
        return itemIndex === -1 ? null : cartItem[itemIndex];
    }

    return (
        <CartContext.Provider value={{ cartItem, addItemToCart, removeItemFromCart, isItemAdded,lessItemToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
