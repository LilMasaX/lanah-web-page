import Link from "next/link";
import styles from "./admin.module.css";

export default function AdminDashboard() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Panel de Administración</h1>

      <div className={styles.modules}>
        <Link href="/admin/productos" className={styles.card}>
          <h2>🧶 Productos</h2>
          <p>Administra tu catálogo, stock y fotos de los productos.</p>
        </Link>

        <Link href="/admin/pedidos" className={styles.card}>
          <h2>📦 Pedidos</h2>
          <p>Consulta los pedidos recientes y su estado.</p>
        </Link>
      </div>
    </main>
  );
}
