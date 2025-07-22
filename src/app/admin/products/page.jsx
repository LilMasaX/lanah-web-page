import CardProductAdmin from "@/components/CardProductAdmin/cardProductAdmin";
import { getProductos } from "@/actions/products/productos";
import { deleteProduct } from "@/actions/products/deleteProduct";
import AddProductModal from "@/components/AddProductModal/AddProductModal";
import styles from "./AdminProducts.module.css";

export default async function AdminProductsPage() {
  const productos = await getProductos();

  const handleDelete = async (id) => {
    "use server";
    const result = await deleteProduct(id);
    if (!result.success) {
      // Puedes manejar el error aquí o mostrar un toast
      console.error(result.error);
    }
  };

  return (
    <main>
      <div className={styles.buttonAddProduct}>
        <AddProductModal />
      </div>
      <h1 className={styles.titulo}>Productos</h1>
      <p className={styles.descripcion}>
        Administra tu catálogo, stock y fotos de los productos.
      </p>
      <div className={styles.productosGrid}>
        {productos.length === 0 ? (
          <p>No hay productos disponibles.</p>
        ) : (
          productos.map((producto) => (
            <CardProductAdmin
              key={producto._id.toString()}
              producto={producto}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </main>
  );
}