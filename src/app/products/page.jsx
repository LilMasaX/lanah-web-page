import { getProductos } from "@/actions/products/productos";
import CardProduct from "@/components/CardProduct/CardProduct";
import styles from "./products.module.css";

export default async function ProductsPage() {
  const productos = await getProductos();
  console.log(productos);
  
  return (
    <div>
      <h1>Productos</h1>
      <div className={styles.productsContainer}>
        {productos.map((producto) => (
          <CardProduct
            key={producto._id.toString()}
            producto={producto}
          />
        ))}
      </div>
    </div>
  );
}

