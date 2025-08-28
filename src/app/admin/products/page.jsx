import CardProductAdmin from "@/components/CardProductAdmin/cardProductAdmin";
import { getProductos } from "@/actions/products/productos";
import { deleteProduct } from "@/actions/products/deleteProduct";
import AddProductModal from "@/components/AddProductModal/AddProductModal";

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
      <div className="flex justify-end mt-35 mr-8">
        <AddProductModal />
      </div>
      <h1 className="text-3xl font-bold text-[#8D5524] mb-2 text-center">Productos</h1>
      <p className="text-base text-[#8D5524] mb-6 text-center">
        Administra tu catálogo, stock y fotos de los productos.
      </p>
      <div className="flex flex-wrap gap-8">
        {productos.length === 0 ? (
          <p className="text-gray-600 text-center w-full">No hay productos disponibles.</p>
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