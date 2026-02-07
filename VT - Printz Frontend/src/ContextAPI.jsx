import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MyContext = createContext(null);

const MyContextProvider = (props) => {
    const [cartCount, setCartCount] = useState(0);

    const fetchCartCount = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setCartCount(0);
            return;
        }
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/cart/get`, {
                headers: { "auth-token": token }
            });
            // Assuming res.data.items is the array of cart items
            // If the API returns the cart object with an items array:

            // GET /api/cart/get returns `user.cart` which is an array of items
            if (Array.isArray(res.data)) {
                setCartCount(res.data.length);
            } else if (res.data && Array.isArray(res.data.cart)) {
                setCartCount(res.data.cart.length);
            } else if (res.data && Array.isArray(res.data.items)) {
                setCartCount(res.data.items.length);
            }

        } catch (err) {
            console.error("Failed to fetch cart count", err);
            // If 401, maybe clear token? For now just set count 0
            setCartCount(0);
        }
    };

    useEffect(() => {
        fetchCartCount();
    }, []);

    const contextValue = {
        cartCount,
        setCartCount,
        fetchCartCount
    };

    return (
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    );
};

export default MyContextProvider;
