import styles from './card.module.css';

export default function Card({ producto, children }) {
  return (
    <div className={styles.card}>
      <img src={producto.imagen} alt={producto.nombre} className={styles.imagen} />
      <div className={styles.info}>
        <h3 className={styles.nombre}>{producto.nombre}</h3>
        <p className={styles.precio}>${producto.precio}</p>
        <p className={styles.stock}>Stock: {producto.stock}</p>
        {children}
      </div>
    </div>
  );
}