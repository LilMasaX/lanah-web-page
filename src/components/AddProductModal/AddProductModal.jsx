"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
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
      <button 
        onClick={() => setOpen(true)} 
        className="bg-green-500 hover:bg-green-600 text-white border-none py-3 px-6 rounded cursor-pointer text-base transition-colors duration-300"
      >
        Agregar producto
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Agregar Nuevo Producto</h2>
              <button 
                onClick={() => !isSubmitting && setOpen(false)} 
                className="bg-transparent border-none text-2xl cursor-pointer text-gray-500 hover:text-gray-700 p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                ✕
              </button>
            </div>

            {error && (
              <div className="text-red-600 bg-red-50 p-3 rounded border-l-4 border-red-600 mb-4">
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