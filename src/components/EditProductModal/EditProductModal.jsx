"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { actualizarProducto } from "@/actions/products/editProduct";
import ProductForm from "../ProductForm/ProductForm";
import styles from "./EditProductModal.module.css";

export default function EditProductModal({ producto, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await actualizarProducto(producto._id, formData);
      
      if (result?.error) {
        setError(result.error);
      } else {
        onClose();
        router.refresh();
      }
    } catch (error) {
      setError("Error al actualizar el producto");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Editar Producto</h2>
          <button
            onClick={onClose}
            className={styles.closeButton}
            disabled={isSubmitting}
          >
            &times;
          </button>
        </div>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <ProductForm
          initialData={producto}
          onSubmit={handleSubmit}
          buttonText={isSubmitting ? "Guardando..." : "Guardar cambios"}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
}