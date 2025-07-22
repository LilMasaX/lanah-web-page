"use client";
import { useState } from "react";
import styles from "./cardProductAdmin.module.css";
import { Pencil, Trash2 } from "lucide-react";
import { formatCurrency } from "@/utils/currency";
import EditProductModal from "../EditProductModal/EditProductModal";

export default function CardProductAdmin({ producto, onDelete }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = async () => {
    if (confirm("¿Estás seguro de eliminar este producto?")) {
      try {
        await onDelete(producto._id);
      } catch (error) {
        console.error("Error al eliminar:", error);
        alert("No se pudo eliminar el producto");
      }
    }
  };

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
              onClick={() => setIsEditModalOpen(true)} 
              className={styles.editButton}
              aria-label="Editar producto"
            >
              <Pencil size={18} />
            </button>
            <button 
              onClick={handleDelete} 
              className={styles.deleteButton}
              aria-label="Eliminar producto"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <EditProductModal 
          producto={producto} 
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
    </>
  );
}