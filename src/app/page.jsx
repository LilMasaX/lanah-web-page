"use client";
import { useState, useEffect } from 'react';
import styles from './page.module.css';
import SplitText from "@/components/SplitText/SplitText";

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/prueba1.png', '/prueba2.png', '/prueba3.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <section className={styles.landing}>
      <div>
        <SplitText
          text="Lanah representa el cariño y la dedicación que se tejen con hilos de amor y la dulzura felina en cada detalle."
          className={styles.splitText}
          delay={50}
          duration={0.1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
      <br></br>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <img src="/logo.png" alt="Lanah logo" className={styles.logo} />
          <h2 className={styles.title}>Bienvenidos a Lanah</h2>
          <p className={styles.subtitle}>Tienda artesanal de crochet hecha con amor.</p>
          <a href="/products" className={styles.buttonLink}>
            <button className={styles.button}>Ver Productos</button>
          </a>
        </div>
        <div className={styles.heroImageContainer}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagen ${index + 1}`}
              className={styles.heroImage}
              style={{
                opacity: index === currentImageIndex ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                position: 'absolute'
              }}
            />
          ))}
          <div className={styles.dotsContainer}>
            {images.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentImageIndex ? styles.activeDot : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>
      <br></br>
      <section>
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <img src="/prueba1.png" alt="Crochet" className={styles.featureIcon} />
            <h3>Hecho a Mano</h3>
            <p>Cada producto es único y hecho con dedicación.</p>
          </div>
          <div className={styles.featureItem}>
            <img src="/prueba3.png" alt="Amor" className={styles.featureIcon} />
            <h3>Con Amor</h3>
            <p>Diseños pensados para ti y tus seres queridos.</p>
          </div>
          <div className={styles.featureItem}>
            <img src="/prueba4.png" alt="Eco" className={styles.featureIcon} />
            <h3>Materiales Ecológicos</h3>
            <p>Comprometidos con el medio ambiente.</p>
          </div>
        </div>
      </section>
    </section>
  );
}