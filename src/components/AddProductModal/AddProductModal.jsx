"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./AddProductModal.module.css";
import ProductForm from "../ProductForm/ProductForm";
import { createProducto } from "@/actions/products/createProduct";

export default function AddProductModal() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const result = await createProducto(formData);
      
      if (result?.error) {
        setError(result.error);
      } else if (result?.success) {
        setOpen(false);
        router.refresh();
      }
    } catch (err) {
      setError("Error inesperado al procesar la solicitud");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className={styles.addButton}>
        Agregar producto
      </button>

      {open && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Agregar Nuevo Producto</h2>
              <button 
                onClick={() => !isSubmitting && setOpen(false)} 
                className={styles.closeButton}
                disabled={isSubmitting}
              >
                ✕
              </button>
            </div>

            {error && (
              <div className={styles.errorMessage}>
                {error}
              </div>
            )}

            <ProductForm
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      )}
    </>
  );
}