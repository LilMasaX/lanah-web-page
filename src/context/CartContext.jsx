"use client"
import { createContext, useContext, useState, useEffect } from "react";


const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider ({ children }) {
    const [cart, setCart] = useState([]);

    // 1. Cargar carrito desde localStorage al iniciar
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // 2. Guardar carrito en localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
    };

    const removeFromCart = (productId) => {
        setCart((prev) => prev.filter((item) => item._id !== productId));
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}