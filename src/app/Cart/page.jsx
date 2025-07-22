"use client"
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Carrito de compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cart.map((item) => (
          <div key={item._id}>
            <span>{item.nombre}</span>
            <button onClick={() => removeFromCart(item._id)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
}