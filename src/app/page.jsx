"use client";
import { useState, useEffect } from "react";
import CuteCrochetBackground from "@/components/CuteCrochetBackground/CuteCrochetBackground";
import CustomProductsSection from "@/components/CustomProductsSection/CustomProductsSection";

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/Tortuga.png", "/Plankton.png", "/Pumpum.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-50">
        <CuteCrochetBackground />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-34 sm:pt-32 lg:pt-40 pb-8 sm:pb-12 lg:pb-16 xl:pb-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 min-h-[60vh] sm:min-h-[70vh]">

            {/* Carrusel de imágenes */}
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg lg:flex-1 xl:max-w-2xl 2xl:max-w-4xl order-1 lg:order-2">
              <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square lg:min-h-[500px] xl:h-[600px] 2xl:h-[700px] xl:aspect-auto rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-[#E76F51] via-[#F6B78D] to-[#FFD166] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Producto ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* Indicadores */}
                <div className="absolute bottom-3 sm:bottom-5 xl:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 xl:gap-3 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 xl:w-4 xl:h-4 rounded-full border-2 border-white/80 transition-all duration-300 hover:scale-125 ${
                        index === currentImageIndex
                          ? "bg-[#F29367] shadow-md scale-110"
                          : "bg-white/50"
                      }`}
                      aria-label={`Ver imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Tarjeta de bienvenida */}
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg lg:flex-1 xl:max-w-xl order-2 lg:order-1">
              <div className="p-6 sm:p-8 lg:p-12 xl:p-16 text-center rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#E76F51] via-[#F6B78D] to-[#FFD166] backdrop-blur-lg border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full lg:min-h-[500px] lg:flex lg:flex-col lg:justify-center">
                <div className="mb-4 sm:mb-6 xl:mb-8">
                  <img
                    src="/logo.png"
                    alt="Lanah logo"
                    className="mx-auto w-32 sm:w-40 lg:w-48 xl:w-64 2xl:w-72 h-auto drop-shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-50 to-amber-50 mb-3 sm:mb-4 xl:mb-6">
                  Bienvenidos a Lanah
                </h1>

                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-4 sm:mb-6 xl:mb-8 leading-relaxed">
                  Tienda artesanal de crochet hecha con amor.
                </p>

                <a href="/products" className="inline-block">
                  <button className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 xl:py-5 text-sm sm:text-base lg:text-lg xl:text-xl rounded-2xl sm:rounded-3xl font-bold bg-gradient-to-br from-[#F29367] via-[#FF6F61] to-[#F6B78D] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                    Ver Productos
                  </button>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Custom Products Section */}
        <div className="w-full">
          <CustomProductsSection />
        </div>

        {/* Features Section */}
        <section className="w-full py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-white/90 via-[#F8F6F0]/90 to-[#FFFDF9]/90 backdrop-blur-lg border border-white/30 rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#E76F51] to-[#8D5524] mb-8 sm:mb-12">
                ¿Por qué elegir Lanah?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                <div className="group">
                  <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 text-center h-full flex flex-col">
                    <div className="mb-4 overflow-hidden rounded-lg sm:rounded-xl flex-shrink-0">
                      <img
                        src="/Tiburon.png"
                        alt="Productos hechos a mano"
                        className="w-full h-40 sm:h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#8D5524] mb-2 sm:mb-3">
                      Hecho a Mano
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
                      Cada producto es único y hecho con dedicación artesanal.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 text-center h-full flex flex-col">
                    <div className="mb-4 overflow-hidden rounded-lg sm:rounded-xl flex-shrink-0">
                      <img
                        src="/Flores.png"
                        alt="Productos hechos con amor"
                        className="w-full h-40 sm:h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#8D5524] mb-2 sm:mb-3">
                      Con Amor
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
                      Diseños pensados con cariño para ti y tus seres queridos.
                    </p>
                  </div>
                </div>

                <div className="group sm:col-span-2 lg:col-span-1 sm:mx-auto lg:mx-0 max-w-xs sm:max-w-none">
                  <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 text-center h-full flex flex-col">
                    <div className="mb-4 overflow-hidden rounded-lg sm:rounded-xl flex-shrink-0">
                      <img
                        src="/Gato.png"
                        alt="Materiales ecológicos"
                        className="w-full h-40 sm:h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#8D5524] mb-2 sm:mb-3">
                      Materiales Ecológicos
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
                      Comprometidos con el cuidado del medio ambiente.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
