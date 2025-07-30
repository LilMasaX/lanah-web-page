"use client"
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import ModalForm from "@/components/ModalForm/ModalForm";
import { formatCurrency } from "@/utils/currency";
import styles from './Cart.module.css';


export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const total = cart.reduce((sum, item) => sum + (item.precio || 0) * (item.amount || 1), 0);
  return (
    <section className={styles.cartPage}>
      <div className={styles.cartItems}>
        <h1>Carrito de compras</h1>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          cart.map((item, idx) => (
            <div key={`${item._id}-${idx}`}>
              <span>{item.nombre} x{item.amount}</span>
              <button onClick={() => removeFromCart(item._id)}>Eliminar uno</button>
            </div>
          ))
        )}
      </div>
      <div className="cart-total">
        <h1>Total:</h1>
        {cart.length === 0 ? (
          <p>0</p>
        ) : (
          <div>
            <span>{formatCurrency(total)} $</span>
          </div>
        )}
      </div>
      <div className="cart-actions">
        <button onClick={() => setIsModalOpen(true)} disabled={cart.length === 0}>
          Pagar
        </button>
        <button onClick={clearCart} disabled={cart.length === 0}>
          Vaciar carrito
        </button>
        <div>
        </div>
      </div>
      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}