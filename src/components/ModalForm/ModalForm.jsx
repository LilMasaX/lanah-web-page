"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { X } from "lucide-react";


export default function ModalForm({ isOpen, onClose }) {
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    adress: "",
  });

  // const getWhatsappMessage = () => {
  //   const productos = cart.map(item => `${}`)
  // }

  const handleSendEmail = async () => {
    try {
      const res = await fetch('/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cart,
          formData: form
        })
      });
      if (res.ok) {
        toast.success("¡Pedido enviado por correo! Pronto te contactaremos.");
        clearCart();
        onClose();
      } else {
        toast.error("Error al enviar el pedido por correo.");
      }
    } catch (error) {
      toast.error("Error de conexión al enviar el pedido.");
    }
  };

  const handleSendWhatsApp = async () => {
    try {
      const res = await fetch('/api/send-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cart,
          formData: form
        })
      });
      
      if (res.ok) {
        const data = await res.json();
        
        if (data.method === 'link' && data.whatsappUrl) {
          // Abrir WhatsApp en nueva pestaña
          window.open(data.whatsappUrl, '_blank');
          toast.success("¡WhatsApp abierto! Completa el envío del mensaje.");
        } else {
          toast.success("¡Pedido enviado por WhatsApp! Pronto te contactaremos.");
        }
        
        clearCart();
        onClose();
      } else {
        toast.error("Error al enviar el pedido por WhatsApp.");
      }
    } catch (error) {
      toast.error("Error de conexión al enviar por WhatsApp.");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    const pedido = {
      cliente: form,
      productos: cart.map(p => ({ nombre: p.nombre, precio: p.precio, _id: p._id })),
      total: cart.reduce((sum, item) => sum + (item.precio || 0), 0)
    };

    // Aquí es donde enviarías el pedido a tu backend.
    // Por ahora, solo lo mostraremos en la consola.
    

    toast.success("¡Pedido realizado con éxito! Gracias por tu compra.");
    clearCart(); // Vaciamos el carrito
    onClose(); // Cerramos el modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center h-screen  p-4 md:p-6 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg md:max-w-xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#E76F51] via-[#F6B78D] to-[#FFD166] text-white">
          <h2 className="text-lg md:text-xl font-bold">Datos de envío</h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/20 transition-colors" aria-label="Cerrar">
            <X size={22} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="px-5 py-5 space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Nombre Completo</label>
              <input id="name" name="name" type="text" placeholder="Ej: Juan Pérez" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-white shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F29367]"/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">Numero de Teléfono</label>
              <input id="phone" name="phone" type="tel" placeholder="Ej: 3120945678" value={form.phone} onChange={handleChange} required className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-white shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F29367]"/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input id="email" name="email" type="email" placeholder="Ej: juan.perez@correo.com" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-white shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F29367]"/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="adress" className="text-sm font-medium text-gray-700">Dirección de Envío</label>
              <input id="adress" name="adress" type="text" placeholder="Ej: Calle Falsa 123, Ciudad" value={form.adress} onChange={handleChange} required className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-white shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F29367]"/>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button type="button" onClick={handleSendEmail} disabled={cart.length === 0} className="flex-1 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-br from-sky-500 to-blue-600 shadow-md hover:shadow-lg hover:scale-[1.01] transition disabled:opacity-50">
              Te contactamos!
            </button>
            <button type="button" onClick={handleSendWhatsApp} disabled={cart.length === 0} className="flex-1 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-md hover:shadow-lg hover:scale-[1.01] transition disabled:opacity-50">
              Enviar por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}