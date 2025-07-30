"use client";
import { useState, useEffect } from 'react';
import styles from './about.module.css';
import SplitText from "@/components/SplitText/SplitText";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.splitTextContainer}>
            <SplitText
              text="Sobre Nosotros"
              delay={50}
              duration={0.5}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
            />
          </div>
          <p className={styles.heroSubtitle}>
            Descubre la historia detrás de cada puntada y el amor que tejemos en cada creación
          </p>
        </div>
        <div className={styles.heroImageContainer}>
          <img 
            src="/fondo-crochet.jpg" 
            alt="Artesanía Lanah" 
            className={styles.heroImage}
          />
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.storyContent}>
          <div className={styles.storyText}>
            <h2 className={styles.sectionTitle}>Nuestra Historia</h2>
            <p className={styles.storyParagraph}>
              Lanah nació del amor por el crochet y la pasión por crear piezas únicas que 
              llenen de calidez los hogares de nuestros clientes. Cada puntada cuenta una 
              historia de dedicación, paciencia y cariño.
            </p>
            <p className={styles.storyParagraph}>
              Desde pequeños accesorios hasta piezas decorativas más elaboradas, cada 
              producto es creado pensando en la calidad y el detalle que mereces.
            </p>
          </div>
          <div className={styles.storyImage}>
            <img src="/prueba1.png" alt="Nuestro proceso artesanal" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🧶</div>
            <h3>Artesanía Auténtica</h3>
            <p>Cada pieza es única, creada a mano con técnicas tradicionales y amor por el detalle.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>💝</div>
            <h3>Hecho con Amor</h3>
            <p>Infundimos cada creación con el mismo cariño que ponemos en nuestros propios hogares.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🌱</div>
            <h3>Sostenibilidad</h3>
            <p>Utilizamos materiales de calidad que respetan el medio ambiente y perduran en el tiempo.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <h2 className={styles.sectionTitle}>Nuestro Proceso</h2>
        <div className={styles.processSteps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Selección de Materiales</h3>
            <p>Elegimos cuidadosamente hilos de la mejor calidad para garantizar durabilidad y belleza.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Creación Artesanal</h3>
            <p>Cada pieza es tejida a mano, puntada por puntada, con técnicas que han pasado de generación en generación.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Control de Calidad</h3>
            <p>Revisamos cada detalle para asegurar que el producto final supere tus expectativas.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>¿Listo para descubrir nuestras creaciones?</h2>
          <p>Explora nuestra colección y encuentra la pieza perfecta para tu hogar</p>
          <a href="/products" className={styles.ctaButton}>
            Ver Productos
          </a>
        </div>
      </section>
    </div>
  );
} 