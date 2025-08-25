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
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#F29367] to-[#FF6F61] mb-4">
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

          <div className="relative w-full lg:w-3/5 h-[598px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#E76F51] via-[#F6B78D] to-[#FFD166] shadow-lg transition-transform duration-300 hover:scale-[1.02]">
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
        <section className=" h-11/12 px-8 py-10 bg-gradient-to-br from-[#F6B78D]/30 via-[#FFFDF9]/90 to-[#F6B78D]/30 backdrop-blur-2xl border border-white/30 text-center font-bold text-4xl text-[#FF6F61] shadow-lg transition-transform duration-300 hover:-translate-y-1 w-screen align-middle relative z-10">
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

        {/* Features Section */}
        <section className="flex flex-wrap justify-center gap-12 px-4 py-20 bg-gradient-to-br from-white/90 via-[#F8F6F0]/90 to-[#FFFDF9]/90 backdrop-blur-lg border border-white/30 rounded-2xl shadow-lg text-center relative z-10">
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
