import styles from './page.module.css';

export default function HomePage() {
  return (
    <section className={styles.landing}>
      <div className={styles.overlay}>
        <img src="/logo.png" alt="Lanah logo" className={styles.logo} />
        <h2 className={styles.title}>Bienvenidos a Lanah</h2>
        <p className={styles.subtitle}>Tienda artesanal de crochet hecha con amor.</p>
        <a href="/productos" className={styles.buttonLink}>
          <button className={styles.button}>Ver Productos</button>
        </a>
      </div>
    </section>
  );
}
