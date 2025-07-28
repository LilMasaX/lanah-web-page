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
        setCart((prev) => {
            const found = prev.find(item => item._id === product._id);
            if (found) {
                // Si ya está, aumenta la cantidad
                return prev.map(item =>
                    item._id === product._id
                        ? { ...item, amount: (item.amount || 1) + 1 }
                        : item
                );
            } else {
                // Si no está, lo agrega con cantidad 1
                return [...prev, { ...product, amount: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prev) => {
            const found = prev.find(item => item._id === productId);
            if (found && (found.amount || 1) > 1) {
                // Si hay más de uno, solo resta uno
                return prev.map(item =>
                    item._id === productId
                        ? { ...item, amount: item.amount - 1 }
                        : item
                );
            } else {
                // Si solo hay uno, lo elimina
                return prev.filter(item => item._id !== productId);
            }
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}