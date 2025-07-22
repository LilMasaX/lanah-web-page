"use client";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="nav">
      <a href="/">Inicio</a>
      <a href="/products">Productos</a>
      <a href="/cart" style={{ position: "relative" }} aria-label="Carrito">
        <ShoppingCart size={24} />
        {cart.length > 0 && (
          <span style={{
            position: "absolute",
            top: -5,
            right: -5,
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px"
          }}>
            {cart.length}
          </span>
        )}
      </a>
    </nav>
  );
}