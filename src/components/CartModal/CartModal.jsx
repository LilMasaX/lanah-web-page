"use client";
import { useEffect, useState } from "react";
import { X, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/utils/currency";
import ModalForm from "../ModalForm/ModalForm";

export default function CartModal({ isOpen, onClose, onCheckout }) {
  const { cart, removeFromCart, clearCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + (item.precio || 0) * (item.amount || 1), 0);

  const handleCheckout = () => {
    setIsModalOpen(true);
  }

  return (
    <>
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center p-4 md:p-6"
      onClick={() => { if (!isModalOpen) onClose(); }}
    >
      <div className="relative w-full max-w-lg md:max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#E76F51] via-[#F6B78D] to-[#FFD166] text-white">
          <h2 className="text-lg md:text-xl font-bold">Carrito de compras</h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/20 transition-colors" aria-label="Cerrar">
            <X size={22} />
          </button>
        </div>

        <div className="max-h-[60vh] md:max-h-[65vh] overflow-y-auto px-5 py-4 space-y-3">
          {cart.length === 0 ? (
            <p className="text-center text-gray-600 py-8">El carrito está vacío</p>
          ) : (
            cart.map((item) => (
              <div key={item._id} className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
                <div className="flex items-center gap-3 min-w-0">
                  {item.imagen && (
                    <img src={item.imagen} alt={item.nombre} className="w-14 h-14 object-cover rounded-lg" />
                  )}
                  <div className="min-w-0">
                    <p className="font-medium text-gray-800 truncate">{item.nombre}</p>
                    <p className="text-sm text-gray-500">x{item.amount || 1}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-gray-800">{formatCurrency((item.precio || 0) * (item.amount || 1))}</span>
                  <button onClick={() => removeFromCart(item._id)} className="p-2 rounded-lg text-red-600 hover:bg-red-50" aria-label="Eliminar">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="px-5 py-4 border-t border-gray-200 bg-white/70">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Total</span>
            <span className="text-xl font-extrabold text-gray-900">{formatCurrency(total)} $</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={handleCheckout} disabled={cart.length === 0} className="flex-1 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-br from-[#F29367] via-[#FF6F61] to-[#F6B78D] shadow-md hover:shadow-lg hover:scale-[1.01] transition disabled:opacity-50 disabled:hover:scale-100">
              Comprar
            </button>
            <button onClick={clearCart} disabled={cart.length === 0} className="px-5 py-3 rounded-xl font-semibold text-gray-700 bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition disabled:opacity-50">
              Vaciar carrito
            </button>
          </div>
        </div>
      </div>
    </div>
    <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}


