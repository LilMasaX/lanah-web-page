"use client";
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between pr-8 relative rounded-2xl shadow-[0_2px_20px_rgba(231,111,81,0.1)] border-b border-[rgba(231,111,81,0.2)] bg-gradient-to-br from-[#E76F51] via-[#F6B78D] to-[#FFD166] text-[var(--orange-soft)]">
      <button
        className="hidden md:block bg-gradient-to-br from-[var(--orange-soft)] to-[var(--peach-light)] text-white cursor-pointer z-10 text-[1.5rem] p-4 rounded-xl shadow-[0_4px_15px_rgba(231,111,81,0.3)] transition-transform duration-300 ease-out hover:scale-105 hover:shadow-[0_6px_20px_rgba(231,111,81,0.4)] md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className={`${menuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} flex items-center gap-8 rounded-2xl bg-gradient-to-br from-[var(--orange-soft)] to-[var(--peach-light)] p-4 shadow-[0_8px_32px_rgba(231,111,81,0.3)] border border-white/20 backdrop-blur transition-all duration-300 fixed md:static top-0 left-0 w-full md:w-auto h-screen md:h-auto flex-col md:flex-row justify-center z-10`}>
        <nav className="flex gap-8 flex-col md:flex-row items-center">
          <a className="text-white no-underline font-semibold text-[1.1rem] px-4 py-2 rounded-xl relative overflow-hidden transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5" href="/">Inicio</a>
          <a className="text-white no-underline font-semibold text-[1.1rem] px-4 py-2 rounded-xl relative overflow-hidden transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5" href="/about">Sobre Nosotros</a>
          <a className="text-white no-underline font-semibold text-[1.1rem] px-4 py-2 rounded-xl relative overflow-hidden transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5" href="/products">Productos</a>
        </nav>
        <a href="/cart" className="relative flex text-white transition-all duration-300 p-2 rounded-xl bg-white/10 border border-white/20 no-underline hover:bg-white/20 hover:-translate-y-0.5 hover:scale-105 shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
          <ShoppingCart size={20} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[linear-gradient(135deg,var(--coral)_0%,#5a5ae8_100%)] text-white rounded-full w-5 h-5 flex items-center justify-center text-[11px] font-bold border-2 border-white shadow-[0_2px_8px_rgba(103,103,242,0.4)] animate-pulse">{cart.length}</span>
          )}
        </a>
      </div>
    </header>
  );
}