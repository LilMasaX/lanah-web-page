"use client";
import { useState, useEffect } from "react";
import BlurText from "@/components/BlurText/BlurText";
import CuteCrochetBackground from "@/components/CuteCrochetBackground/CuteCrochetBackground";

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/prueba1.jpg", "/prueba2.jpg", "/prueba3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div className="relative min-h-screen overflow-x-hidden ">
      <div className="fixed inset-0 -z-50">
        <CuteCrochetBackground />
      </div>
      {/* Contenido */}
      <section className="grid items-center justify-center gap-4 p-10 font-sans relative z-10">

        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-center gap-8 min-h-[70vh] px-10 mt-18 ">
          <div className="max-w-lg p-12 text-center rounded-3xl bg-gradient-to-br from-[#E76F51] via-[#F6B78D] to-[#FFD166] backdrop-blur-lg border border-white/30 shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <img
              src="/logo.png"
              alt="Lanah logo"
              className="mx-auto mb-6 max-w-xs drop-shadow-md hover:scale-105 transition-transform"
            />
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-50 to-amber-50 mb-4">
              Bienvenidos a Lanah
            </h2>
            <p className="text-gray-600 mb-6">
              Tienda artesanal de crochet hecha con amor.
            </p>
            <a href="/products">
              <button className="px-10 py-4 rounded-3xl font-bold bg-gradient-to-br from-[#F29367] via-[#FF6F61] to-[#F6B78D] text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                Ver Productos
              </button>
            </a>
          </div>

          <div className="relative w-full lg:w-5xl h-[598px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#E76F51] via-[#F6B78D] to-[#FFD166] shadow-lg transition-transform duration-300 hover:scale-[1.02]">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Imagen ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover object-center rounded-xl transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}

            {/* Botones indicadores */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full border-2 border-white/80 transition-all duration-300 ${index === currentImageIndex
                      ? "bg-[#F29367] shadow-md"
                      : "bg-white/50"
                    }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Split Text */}
{/*         <section className=" h-11/12 px-8 py-10 bg-gradient-to-br from-[#F6B78D]/30 via-[#FFFDF9]/90 to-[#F6B78D]/30 backdrop-blur-2xl border border-white/30 text-center font-bold text-4xl text-[#FF6F61] shadow-lg transition-transform duration-300 hover:-translate-y-1 w-screen align-middle relative z-10">
          <BlurText
            text="Lanah representa el cariño y la dedicación que se tejen con hilos de amor y la dulzura felina en cada detalle."
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className=""
            textColors={["#ff6b6b", "#4ecdc4", "#ffe66d"]}
          />
        </section>
 */}

        {/* Custom Products Section */}
        <section className="flex flex-col lg:flex-row items-center justify-center gap-10 py-20 px-10 bg-gradient-to-br from-[#FFD166]/20 via-[#F6B78D]/30 to-[#E76F51]/20 backdrop-blur-lg border border-white/30 lg:w-screen rounded-2xl shadow-lg relative z-10">
          <div className="flex-1 max-w-2xl">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E76F51] to-[#FF6F61] mb-6">
                ¿Tienes algo especial en mente?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Creamos productos únicos y personalizados especialmente para ti. Desde amigurumis con diseños especiales hasta accesorios con tus colores favoritos. ¡Tu imaginación es nuestro límite!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-[#E76F51] to-[#FF6F61] rounded-full"></div>
                  <span className="text-gray-600">Diseños únicos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-[#F6B78D] to-[#FFD166] rounded-full"></div>
                  <span className="text-gray-600">Colores personalizados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-[#FF6F61] to-[#F29367] rounded-full"></div>
                  <span className="text-gray-600">Tamaños a medida</span>
                </div>
              </div>
              <button 
                className="group px-12 py-5 rounded-3xl font-bold bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                onClick={() => {
                  // Aquí irá tu lógica para WhatsApp
                  console.log('Contactar por WhatsApp');
                }}
              >
                <div className="flex items-center gap-3">
                  <svg 
                    className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
                  </svg>
                  <span>Contactar por WhatsApp</span>
                </div>
                {/* Efecto de ondas */}
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-3xl"></div>
              </button>
            </div>
          </div>
          
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-[#E76F51] to-[#F6B78D] shadow-md transform rotate-2 hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">Amigurumis</span>
                  </div>
                  <div className="w-full h-24 rounded-2xl bg-gradient-to-br from-[#FFD166] to-[#F6B78D] shadow-md transform -rotate-1 hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
                    <span className="text-gray-700 font-semibold text-sm">Accesorios</span>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="w-full h-24 rounded-2xl bg-gradient-to-br from-[#F29367] to-[#FF6F61] shadow-md transform rotate-1 hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">Decoración</span>
                  </div>
                  <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-[#F6B78D] to-[#FFD166] shadow-md transform -rotate-2 hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
                    <span className="text-gray-700 font-semibold text-sm">¡Y mucho más!</span>
                  </div>
                </div>
              </div>
              
              {/* Elemento decorativo flotante */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6F61] to-[#E76F51] opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD166] to-[#F6B78D] opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="flex flex-wrap justify-center gap-12 py-20 bg-gradient-to-br from-white/90 via-[#F8F6F0]/90 to-[#FFFDF9]/90 backdrop-blur-lg border border-white/30 lg:w-screen shadow-lg text-center relative z-10">
          <div className="max-w-xs p-8 rounded-2xl bg-white/90 backdrop-blur-md shadow-md transition-transform duration-300 hover:-translate-y-2">
            <img
              src="/prueba1.jpg"
              alt="Crochet"
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Hecho a Mano</h3>
            <p>Cada producto es único y hecho con dedicación.</p>
          </div>
          <div className="max-w-xs p-8 rounded-2xl bg-white/90 backdrop-blur-md shadow-md transition-transform duration-300 hover:-translate-y-2">
            <img
              src="/prueba2.jpg"
              alt="Amor"
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Con Amor</h3>
            <p>Diseños pensados para ti y tus seres queridos.</p>
          </div>
          <div className="max-w-xs p-8 rounded-2xl bg-white/90 backdrop-blur-md shadow-md transition-transform duration-300 hover:-translate-y-2">
            <img
              src="/prueba3.jpg"
              alt="Eco"
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Materiales Ecológicos</h3>
            <p>Comprometidos con el medio ambiente.</p>
          </div>
        </section>
      </section>
    </div>
  );
}