"use client";
import { useState } from "react";
import styles from "./CardProduct.module.css";
import { formatCurrency } from "@/utils/currency";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export default function CardProduct({ producto}) {

  const { addToCart } = useCart ();

  return (
    <>
      <div className={`${styles.card} ${producto.stock < 5 ? styles.lowStock : ''}`}>
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          className={styles.imagen}
          onError={(e) => e.target.src = '/placeholder-product.jpg'}
        />
        <div className={styles.info}>
          <h3 className={styles.nombre}>{producto.nombre}</h3>
          <p className={styles.descripcion}>{producto.descripcion}</p>
          <p className={styles.precio}>{formatCurrency(producto.precio)}</p>
          <p className={styles.stock}>
            <span className={producto.stock < 3 ? styles.lowStockText : ''}>
              Stock: {producto.stock}
            </span>
          </p>
          <div className={styles.buttonGroup}>
            <button 
              onClick={() => {
                addToCart(producto);
                toast.success("¡Producto agregado al carrito!");
              }}
              className={styles.addProduct}
              aria-label="Añadir al Carrito"
            >
              Agregar al carrito
            </button>
            <button 
              // onClick={handleBuyNow}
              className={styles.buyButton}
              aria-label="Comprar Ahora"
            >
              Comprar Ahora
            </button>
          </div>
        </div>
      </div>
    </>
  );
}