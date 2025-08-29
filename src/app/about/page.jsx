"use client";
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-[#FFFDF9] min-h-screen font-['Poppins']">
      {/* Hero Section */}
      <section className="flex items-center mt-10 justify-between min-h-[80vh] px-[10%] relative">
        <div className="flex-1 max-w-[500px] z-10">
          <h1 className="bg-[#FFFDF9] font-['Poppins'] text-[3.5rem] text-[#FF6F61] text-left font-bold tracking-[1.2px] drop-shadow-lg mb-8 leading-tight">
            Sobre Nosotros
          </h1>
          <p className="text-[1.3rem] text-gray-600 leading-relaxed mt-4 font-normal">
            Descubre la historia detrás de cada puntada y el amor que tejemos en cada creación
          </p>
        </div>
        <div className="flex-1 relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#FADADD] to-[#D9F2E6]">
          <img 
            src="/about1.jpeg" 
            alt="Artesanía Lanah" 
            className="w-full h-full object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-[10%] bg-gradient-to-br from-[#FFFDF9] to-[#FADADD]">
        <div className="flex items-center gap-16 max-w-[1200px] mx-auto">
          <div className="flex-1">
            <h2 className="text-[#F29367] text-[2.5rem] mb-8 font-['Montserrat'] font-bold">Nuestra Historia</h2>
            <p className="text-[1.1rem] leading-relaxed text-gray-600 mb-6 text-justify">
              Lanah nació del amor por el crochet y la pasión por crear piezas únicas que 
              llenen de calidez los hogares de nuestros clientes. Cada puntada cuenta una 
              historia de dedicación, paciencia y cariño.
            </p>
            <p className="text-[1.1rem] leading-relaxed text-gray-600 mb-6 text-justify">
              Desde pequeños accesorios hasta piezas decorativas más elaboradas, cada 
              producto es creado pensando en la calidad y el detalle que mereces.
            </p>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden shadow-xl">
            <img src="/about2.jpeg" alt="Nuestro proceso artesanal" className="w-full h-[300px] object-cover" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-[10%] bg-[#FFFDF9]">
        <h2 className="text-[#F29367] text-[2.5rem] mb-12 font-['Montserrat'] font-bold text-center">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          <div className="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl mb-6">🧶</div>
            <h3 className="text-[#F29367] text-2xl mb-4 font-semibold">Artesanía Auténtica</h3>
            <p className="text-gray-600 leading-relaxed">Cada pieza es única, creada a mano con técnicas tradicionales y amor por el detalle.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl mb-6">💝</div>
            <h3 className="text-[#F29367] text-2xl mb-4 font-semibold">Hecho con Amor</h3>
            <p className="text-gray-600 leading-relaxed">Infundimos cada creación con el mismo cariño que ponemos en nuestros propios hogares.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl mb-6">🌱</div>
            <h3 className="text-[#F29367] text-2xl mb-4 font-semibold">Sostenibilidad</h3>
            <p className="text-gray-600 leading-relaxed">Utilizamos materiales de calidad que respetan el medio ambiente y perduran en el tiempo.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-[10%] bg-gradient-to-br from-[#D9F2E6] to-[#FFFDF9]">
        <h2 className="text-[#F29367] text-[2.5rem] mb-12 font-['Montserrat'] font-bold text-center">Nuestro Proceso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          <div className="bg-white p-10 rounded-3xl text-center shadow-lg relative">
            <div className="w-15 h-15 bg-gradient-to-br from-[#F6B78D] to-[#FADADD] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
            <h3 className="text-[#F29367] text-xl mb-4 font-semibold">Selección de Materiales</h3>
            <p className="text-gray-600 leading-relaxed">Elegimos cuidadosamente hilos de la mejor calidad para garantizar durabilidad y belleza.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl text-center shadow-lg relative">
            <div className="w-15 h-15 bg-gradient-to-br from-[#F6B78D] to-[#FADADD] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
            <h3 className="text-[#F29367] text-xl mb-4 font-semibold">Creación Artesanal</h3>
            <p className="text-gray-600 leading-relaxed">Cada pieza es tejida a mano, puntada por puntada, con técnicas que han pasado de generación en generación.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl text-center shadow-lg relative">
            <div className="w-15 h-15 bg-gradient-to-br from-[#F6B78D] to-[#FADADD] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
            <h3 className="text-[#F29367] text-xl mb-4 font-semibold">Control de Calidad</h3>
            <p className="text-gray-600 leading-relaxed">Revisamos cada detalle para asegurar que el producto final supere tus expectativas.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-[10%] bg-gradient-to-br from-[#FADADD] to-[#FFFDF9] text-center">
        <div>
          <h2 className="text-[#F29367] text-[2.5rem] font-['Montserrat'] font-bold mb-4">¿Listo para descubrir nuestras creaciones?</h2>
          <p className="text-gray-600 text-xl leading-relaxed mb-8">Explora nuestra colección y encuentra la pieza perfecta para tu hogar</p>
          <a href="/products" className="bg-gradient-to-r from-[#F6B78D] to-[#FADADD] text-white no-underline py-4 px-10 rounded-full text-lg font-bold inline-block shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F29367] hover:to-[#D9F2E6] hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
            Ver Productos
          </a>
        </div>
      </section>
    </div>
  );
} 