"use client";
import { useState } from "react";
import { formatCurrency } from "@/utils/currency";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export default function CardProduct({ producto }) {
  const { addToCart } = useCart();
  const [isExpanded, setIsExpanded] = useState(false);

  // Función para truncar descripción
  const truncateText = (text, maxLength = 80) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  const handleCardClick = (e) => {
    // Evitar expansión si se hace click en botones
    if (e.target.closest('button')) return;
    
    if (!isExpanded) {
      // Forzar scroll al top y centrar en pantalla
      document.body.style.overflow = 'hidden';
      setIsExpanded(true);
    } else {
      document.body.style.overflow = 'unset';
      setIsExpanded(false);
    }
  };

  const handleOverlayClick = () => {
    document.body.style.overflow = 'unset';
    setIsExpanded(false);
  };

  return (
    <>
      {/* Overlay para cerrar la card expandida */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={handleOverlayClick}
        />
      )}

      {/* Overlay para cerrar la card expandida */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 flex items-center justify-center p-4"
          onClick={handleOverlayClick}
        >
          {/* Contenedor centrado para la card expandida */}
          <div 
            className="relative bg-gradient-to-br from-white/95 to-[#F8F6F0]/95 backdrop-blur-md rounded-3xl border border-[#F6B78D]/30 shadow-2xl w-full max-w-4xl xl:max-w-5xl max-h-[90vh] overflow-y-auto transition-all duration-500 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Badge de stock bajo para versión expandida */}
            {producto.stock < 5 && (
              <div className="absolute top-4 right-16 z-10">
                <span className="bg-gradient-to-r from-[#E76F51] to-[#D84315] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                  ¡Últimas {producto.stock}!
                </span>
              </div>
            )}

            {/* Botón cerrar para versión expandida */}
            <button
              onClick={handleOverlayClick}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-[#E76F51] hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Layout responsive para versión expandida */}
            <div className="flex flex-col lg:flex-row min-h-0">
              {/* Imagen del producto expandida */}
              <div className="lg:w-2/5 xl:w-1/2 p-6 xl:p-8 flex-shrink-0">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F8F6F0] to-white shadow-inner">
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre} 
                    className="w-full h-64 lg:h-80 xl:h-96 object-contain bg-white/50 p-4 transition-all duration-500"
                    onError={(e) => e.target.src = '/placeholder-product.jpg'}
                  />
                  {/* Gradiente decorativo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F6B78D]/10 to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Información del producto expandida */}
              <div className="lg:w-3/5 xl:w-1/2 p-6 xl:p-8 lg:py-8 xl:py-10 flex-1 min-w-0">
                <div className="space-y-4">
                  {/* Nombre */}
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E76F51] to-[#8D5524] break-words">
                    {producto.nombre}
                  </h3>
                  
                  {/* Precio y Stock */}
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-3xl xl:text-4xl font-bold text-[#E76F51]">
                        {formatCurrency(producto.precio)}
                      </p>
                      <p className={`text-sm font-medium mt-1 ${
                        producto.stock < 3 
                          ? 'text-[#E76F51] animate-pulse' 
                          : 'text-[#8D5524]/70'
                      }`}>
                        {producto.stock} disponibles
                      </p>
                    </div>
                    
                    {/* Badge de disponibilidad */}
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      producto.stock > 5 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : producto.stock > 0 
                          ? 'bg-amber-100 text-amber-700' 
                          : 'bg-red-100 text-red-700'
                    }`}>
                      {producto.stock > 5 ? 'Disponible' : producto.stock > 0 ? 'Pocas unidades' : 'Agotado'}
                    </span>
                  </div>
                  
                  {/* Descripción completa */}
                  <div className="space-y-2">
                    <p className="text-base lg:text-lg xl:text-xl text-[#8D5524]/80 leading-relaxed break-words">
                      {producto.descripcion}
                    </p>
                  </div>

                  {/* Botones expandidos */}
                  <div className="grid gap-3 lg:grid-cols-2 xl:gap-4 pt-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(producto);
                        toast.success("¡Agregado al carrito!", {
                          description: producto.nombre,
                          action: {
                            label: "Ver carrito",
                            onClick: () => console.log("Ir al carrito"),
                          },
                        });
                      }}
                      disabled={producto.stock === 0}
                      className="bg-gradient-to-r from-[#E76F51] to-[#F29367] hover:from-[#D84315] hover:to-[#E76F51] text-white font-semibold py-4 px-6 text-base lg:text-lg xl:py-5 xl:px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      aria-label="Añadir al Carrito"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
                        </svg>
                        <span>{producto.stock === 0 ? 'Agotado' : 'Agregar al carrito'}</span>
                      </div>
                    </button>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Comprar ahora:", producto.nombre);
                      }}
                      disabled={producto.stock === 0}
                      className="bg-gradient-to-r from-[#8D5524] to-[#6B4423] hover:from-[#6B4423] hover:to-[#5A3A1E] text-white font-semibold py-4 px-6 text-base lg:text-lg xl:py-5 xl:px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      aria-label="Comprar Ahora"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Comprar Ahora</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decoración de gradiente en el borde para versión expandida */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E76F51]/5 via-transparent to-[#F6B78D]/5 pointer-events-none rounded-3xl"></div>
          </div>
        </div>
      )}

      {/* Card normal (no expandida) */}
      <div 
        className={`relative bg-gradient-to-br from-white/95 to-[#F8F6F0]/95 backdrop-blur-md rounded-3xl border border-[#F6B78D]/30 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer hover:-translate-y-3 ${
          producto.stock < 5 ? 'ring-2 ring-[#E76F51]/50' : ''
        } ${isExpanded ? 'invisible' : 'visible'}`}
        onClick={handleCardClick}
      >
        {/* Badge de stock bajo para card normal */}
        {producto.stock < 5 && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-gradient-to-r from-[#E76F51] to-[#D84315] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
              ¡Últimas {producto.stock}!
            </span>
          </div>
        )}
        
        {/* Indicador de click para expandir */}
        <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <svg className="w-4 h-4 text-[#E76F51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>

        {/* Layout para card normal */}
        <div className="flex flex-col">
          {/* Imagen del producto */}
          <div className="p-5">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F8F6F0] to-white shadow-inner">
              <img 
                src={producto.imagen} 
                alt={producto.nombre} 
                className="w-full h-48 object-contain bg-white/50 p-4 group-hover:scale-110 transition-all duration-500"
                onError={(e) => e.target.src = '/placeholder-product.jpg'}
              />
              {/* Gradiente decorativo */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#F6B78D]/10 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Información del producto */}
          <div className="p-5 pt-2">
            <div className="space-y-4">
              {/* Nombre */}
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E76F51] to-[#8D5524] break-words">
                {producto.nombre}
              </h3>
              
              {/* Precio y Stock */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-2xl font-bold text-[#E76F51]">
                    {formatCurrency(producto.precio)}
                  </p>
                  <p className={`text-sm font-medium mt-1 ${
                    producto.stock < 3 
                      ? 'text-[#E76F51] animate-pulse' 
                      : 'text-[#8D5524]/70'
                  }`}>
                    {producto.stock} disponibles
                  </p>
                </div>
                
                {/* Badge de disponibilidad */}
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  producto.stock > 5 
                    ? 'bg-emerald-100 text-emerald-700' 
                    : producto.stock > 0 
                      ? 'bg-amber-100 text-amber-700' 
                      : 'bg-red-100 text-red-700'
                }`}>
                  {producto.stock > 5 ? 'Disponible' : producto.stock > 0 ? 'Pocas unidades' : 'Agotado'}
                </span>
              </div>
              
              {/* Descripción truncada */}
              <div className="space-y-2">
                <p className="text-sm text-[#8D5524]/80 leading-relaxed break-words">
                  {truncateText(producto.descripcion)}
                </p>
                
                {/* Indicador de más contenido */}
                {producto.descripcion.length > 80 && (
                  <p className="text-xs text-[#E76F51]/60 font-medium">
                    Haz click para ver más detalles →
                  </p>
                )}
              </div>

              {/* Botones para card normal */}
              <div className="grid gap-3 pt-4 grid-cols-1">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(producto);
                    toast.success("¡Agregado al carrito!", {
                      description: producto.nombre,
                      action: {
                        label: "Ver carrito",
                        onClick: () => console.log("Ir al carrito"),
                      },
                    });
                  }}
                  disabled={producto.stock === 0}
                  className="bg-gradient-to-r from-[#E76F51] to-[#F29367] hover:from-[#D84315] hover:to-[#E76F51] text-white font-semibold py-3 px-4 text-sm rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  aria-label="Añadir al Carrito"
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
                    </svg>
                    <span>{producto.stock === 0 ? 'Agotado' : 'Agregar al carrito'}</span>
                  </div>
                </button>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Comprar ahora:", producto.nombre);
                  }}
                  disabled={producto.stock === 0}
                  className="bg-gradient-to-r from-[#8D5524] to-[#6B4423] hover:from-[#6B4423] hover:to-[#5A3A1E] text-white font-semibold py-3 px-4 text-sm rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  aria-label="Comprar Ahora"
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Comprar Ahora</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decoración de gradiente en el borde para card normal */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E76F51]/5 via-transparent to-[#F6B78D]/5 pointer-events-none rounded-3xl"></div>
      </div>
    </>
  );
}