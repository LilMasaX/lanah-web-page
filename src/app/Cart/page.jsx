"use client"
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + (item.precio || 0), 0);
  return (
    <section>
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
      <div>
        <h1>Total:</h1>
        {cart.length === 0 ? (
          <p>0</p>
        ) : (
          <div>
            <span>{total} $</span>
          </div>
        )}
      </div>
      <div>
        <button disabled={cart.length === 0}>
          Pagar
        </button>
        <button onClick={() => clearCart()} disabled={cart.length === 0}>
          Vaciar carrito
        </button>
        <div>
          <button onClick={() => window.location.href = '/whatsapp'}>
            Contactar por WhatsApp
          </button>
        </div>
      </div>

    </section>
  );
}