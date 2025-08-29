"use client";
import { useState } from "react";
import { formatCurrency } from "@/utils/currency";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export default function CardProduct({ producto}) {

  const { addToCart } = useCart ();

  return (
    <div className={`relative bg-gradient-to-br from-[#FFE5D0] to-[#F6B78D] rounded-2xl border-2 border-[#F4A261] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group ${producto.stock < 5 ? 'ring-2 ring-[#E76F51] ring-opacity-50' : ''}`}>
      {/* Etiqueta de bajo stock */}
      {producto.stock < 5 && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-[#E76F51] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            ÚLTIMAS UNIDADES
          </span>
        </div>
      )}
      
      {/* Imagen del producto */}
      <div className="p-4">
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          className="w-full h-48 object-contain bg-white rounded-xl p-4 group-hover:scale-105 transition-transform duration-300"
          onError={(e) => e.target.src = '/placeholder-product.jpg'}
        />
      </div>

      {/* Información del producto */}
      <div className="p-6 pt-0">
        <h3 className="text-xl font-bold text-[#8D5524] mb-2 truncate">
          {producto.nombre}
        </h3>
        
        <p className="text-sm text-[#8D5524] mb-4 line-clamp-3 leading-relaxed">
          {producto.descripcion}
        </p>
        
        <div className="flex justify-between items-center mb-4">
          <p className="text-2xl font-bold text-[#E76F51]">
            {formatCurrency(producto.precio)}
          </p>
          <p className={`text-sm font-medium ${producto.stock < 3 ? 'text-[#E76F51]' : 'text-[#F4A261]'}`}>
            Stock: {producto.stock}
          </p>
        </div>

        {/* Botones */}
        <div className="flex gap-3">
          <button 
            onClick={() => {
              addToCart(producto);
              toast.success("¡Producto agregado al carrito!");
            }}
            className="flex-1 bg-[#E76F51] hover:bg-[#D84315] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
            aria-label="Añadir al Carrito"
          >
            Agregar al carrito
          </button>
          
          <button 
            className="flex-1 bg-[#8D5524] hover:bg-[#6B4423] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
            aria-label="Comprar Ahora"
          >
            Comprar Ahora
          </button>
        </div>
      </div>
    </div>
  );
}