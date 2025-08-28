"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { actualizarProducto } from "@/actions/products/editProduct";
import ProductForm from "../ProductForm/ProductForm";

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Editar Producto</h2>
          <button
            onClick={onClose}
            className="bg-transparent border-none text-2xl cursor-pointer text-gray-500 hover:text-gray-700 p-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            &times;
          </button>
        </div>

        {error && (
          <div className="text-red-600 bg-red-50 p-3 rounded border-l-4 border-red-600 mb-4">
            {error}
          </div>
        )}

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