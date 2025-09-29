import { createContext, useEffect, useState } from "react";

const WebContext = createContext();
export default WebContext;

export const WebContextProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(3);
    const [NumOfWishlistItems, setNumOfWishlistItems] = useState(0);
    const [NumOfCartItems, setNumOfCartItems] = useState(0);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [fetchItems, setFetchItems] = useState({
        limit: 20,
        skip: 10
    })
    const [totalProducts, setTotalProducts] = useState(null)
    const [isLogin, setIsLogin] = useState(false)
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        avatar: ""
    });
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const updateCartCount = () => {
        const newCart = JSON.parse(localStorage.getItem("cart")) || [];
        setNumOfCartItems(newCart.length);
    };

    const updateWishlistCount = () => {
        const newWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setNumOfWishlistItems(newWishlist.length);
    };


    useEffect(() => {
        const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
        const initialWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setNumOfCartItems(initialCart.length);
        setNumOfWishlistItems(initialWishlist.length);
    }, []);

    const openCart = () => {
        setIsCartOpen(prev => !prev);
    };

    return (
        <WebContext.Provider
            value={{
                isActive, setIsActive,
                page, setPage,
                totalPages, setTotalPages,
                NumOfWishlistItems, setNumOfWishlistItems, updateWishlistCount,
                NumOfCartItems, setNumOfCartItems, updateCartCount,
                isCartOpen, openCart,
                fetchItems, setFetchItems,
                totalProducts, setTotalProducts,
                isLogin, setIsLogin,
                userData, setUserData,
                isUserLoggedIn, setIsUserLoggedIn,
            }}
        >
            {children}
        </WebContext.Provider>
    );
};
