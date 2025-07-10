import styles from './page.module.css';

export default function HomePage() {
  return (
    <section className={styles.landing}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <img src="/logo.png" alt="Lanah logo" className={styles.logo} />
          <h2 className={styles.title}>Bienvenidos a Lanah</h2>
          <p className={styles.subtitle}>Tienda artesanal de crochet hecha con amor.</p>
          <a href="/productos" className={styles.buttonLink}>
            <button className={styles.button}>Ver Productos</button>
          </a>
        </div>

        <div className={styles.heroImageContainer}>
          <img src="/Gato.png" alt="gato fondo" className={styles.heroImage} />
        </div>
      </section>


      <div className={styles.features}>
        <div className={styles.featureItem}>
          <img src="/crochet-icon.png" alt="Crochet" className={styles.featureIcon} />
          <h3>Hecho a Mano</h3>
          <p>Cada producto es único y hecho con dedicación.</p>
        </div>
        <div className={styles.featureItem}>
          <img src="/heart-icon.png" alt="Amor" className={styles.featureIcon} />
          <h3>Con Amor</h3>
          <p>Diseños pensados para ti y tus seres queridos.</p>
        </div>
        <div className={styles.featureItem}>
          <img src="/eco-icon.png" alt="Eco" className={styles.featureIcon} />
          <h3>Materiales Ecológicos</h3>
          <p>Comprometidos con el medio ambiente.</p>
        </div>
      </div>
    </section>

  );
}
