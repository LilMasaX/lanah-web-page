"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import styles from "./ModalForm.module.css";
import { toast } from "sonner";


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
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          &times;
        </button>
        <h2>Completa tus datos para el envío</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre Completo</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ej: Juan Pérez"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Numero de Teléfono</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Ej: 3120945678"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Ej: juan.perez@correo.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="adress">Dirección de Envío</label>
            <input
              id="adress"
              name="adress"
              type="text"
              placeholder="Ej: Calle Falsa 123, Ciudad"
              value={form.adress}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.buttonContainer}>
            <button 
              type="button" 
              className={styles.emailButton} 
              onClick={handleSendEmail}
              disabled={cart.length === 0}
            >
              Enviar por Email
            </button>
            <button 
              type="button" 
              className={styles.whatsappButton} 
              onClick={handleSendWhatsApp}
              disabled={cart.length === 0}
            >
              Enviar por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}