"use client";
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-6 py-4 rounded-2xl shadow-[0_2px_20px_rgba(231,111,81,0.1)] border-b border-[rgba(231,111,81,0.2)] bg-white/10 backdrop-blur-md">
      {/* Logo a la izquierda */}
      <div className="flex-shrink-0">
        <img 
          src="/logo.png" 
          alt="Lanah logo" 
          className="bg-gradient-to-br from-[#E76F51] via-[#F6B78D] to-[#FFD166] size-25 rounded-2xl shadow-lg " 
        />
      </div>

      {/* Navegación centrada horizontalmente - Desktop */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-8 rounded-2xl bg-gradient-to-br from-[var(--orange-soft)] to-[var(--peach-light)] p-4 shadow-[0_8px_32px_rgba(231,111,81,0.3)] border border-white/20 backdrop-blur">
          <a className="text-white no-underline font-semibold text-[1.1rem] px-4 py-2 rounded-xl relative overflow-hidden transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5" href="/">Inicio</a>
          <a className="text-white no-underline font-semibold text-[1.1rem] px-4 py-2 rounded-xl relative overflow-hidden transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5" href="/about">Sobre Nosotros</a>
          <a className="text-white no-underline font-semibold text-[1.1rem] px-4 py-2 rounded-xl relative overflow-hidden transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5" href="/products">Productos</a>
        </div>
      </div>

      {/* Carrito y botón de menú móvil a la derecha */}
      <div className="flex items-center gap-4">
        {/* Carrito */}
        <a 
          href="/cart" 
          className="relative flex text-white transition-all duration-300 p-3 rounded-xl bg-gradient-to-br from-[#E76F51] to-[#F6B78D] border border-white/20 no-underline hover:bg-white/20 hover:-translate-y-0.5 hover:scale-105 shadow-[0_6px_20px_rgba(231,111,81,0.3)] backdrop-blur"
        >
          <ShoppingCart size={25} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[linear-gradient(135deg,var(--coral)_0%,#5a5ae8_100%)] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold border-2 border-white shadow-[0_2px_8px_rgba(103,103,242,0.4)] animate-pulse">
              {cart.length}
            </span>
          )}
        </a>

        {/* Botón de menú móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden z-50 relative p-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setMenuOpen(false)}>
          <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-[var(--orange-soft)] to-[var(--peach-light)] p-8 shadow-[0_8px_32px_rgba(231,111,81,0.3)] border border-white/20 backdrop-blur">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <a 
                className="text-white no-underline font-semibold text-2xl px-6 py-4 rounded-xl relative overflow-hidden transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5" 
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                className="text-white no-underline font-semibold text-2xl px-6 py-4 rounded-xl relative overflow-hidden transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5" 
                href="/about"
                onClick={() => setMenuOpen(false)}
              >
                Sobre Nosotros
              </a>
              <a 
                className="text-white no-underline font-semibold text-2xl px-6 py-4 rounded-xl relative overflow-hidden transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5" 
                href="/products"
                onClick={() => setMenuOpen(false)}
              >
                Productos
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}