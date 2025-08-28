"use client";
import { useState } from "react";
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
      <div className={`relative rounded-2xl border border-[#F4A261] bg-[#FFE5D0] text-[#8D5524] shadow-lg p-1 m-4 w-70 flex flex-col items-center transition-all duration-300 ease-in-out overflow-hidden hover:shadow-2xl hover:-translate-y-1 ${producto.stock < 5 ? 'after:content-["ÚLTIMAS_UNIDADES"] after:absolute after:top-4 after:-right-8 after:bg-[#E76F51] after:text-white after:px-8 after:py-1 after:text-xs after:rotate-45 after:origin-center after:font-bold after:tracking-wider hover:after:bg-[#d84315]' : ''}`}>
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          className="w-full h-45 rounded-xl mb-5 object-contain bg-white p-2 mix-blend-multiply transition-transform duration-300 ease-in-out group-hover:scale-105"
          onError={(e) => e.target.src = '/placeholder-product.jpg'}
        />
        <div className="w-full text-center">
          <h3 className="text-xl font-bold my-2 text-[#8D5524] whitespace-nowrap overflow-hidden text-ellipsis w-full">
            {producto.nombre}
          </h3>
          <p className="text-sm text-[#8D5524] my-2 line-clamp-3 min-h-[4.05em] leading-tight">
            {producto.descripcion}
          </p>
          <p className="text-xl font-bold my-3 text-[#E76F51]">
            {formatCurrency(producto.precio)}
          </p>
          <p className="text-sm text-[#F4A261] mb-5 font-medium">
            <span className={producto.stock < 3 ? 'text-red-600 font-semibold' : ''}>
              Stock: {producto.stock}
            </span>
          </p>
          <div className="flex justify-center gap-2 w-full mt-2">
            <button 
              onClick={() => setIsEditModalOpen(true)} 
              className="bg-transparent border-none cursor-pointer p-2 rounded-full transition-all duration-200 ease-in-out mx-1 inline-flex items-center justify-center text-[#8D5524] hover:bg-[rgba(141,85,36,0.1)] hover:scale-110"
              aria-label="Editar producto"
            >
              <Pencil size={18} />
            </button>
            <button 
              onClick={handleDelete} 
              className="bg-transparent border-none cursor-pointer p-2 rounded-full transition-all duration-200 ease-in-out mx-1 inline-flex items-center justify-center text-[#E76F51] hover:bg-[rgba(231,111,81,0.1)] hover:scale-110"
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