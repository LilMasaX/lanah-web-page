"use client";
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <button
        className="hamburger-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className={`nav-content ${menuOpen ? "show" : ""}`}>
        <nav className="nav-links">
          <a href="/">Inicio</a>
          <a href="/products">Productos</a>
        </nav>
        <a href="/cart" className="cart-btn">
          <ShoppingCart size={20} />
          {cart.length > 0 && (
            <span className="cart-counter">{cart.length}</span>
          )}
        </a>
      </div>
    </header>
  );
}