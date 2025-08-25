import { getProductos } from "@/actions/products/productos";
import CardProduct from "@/components/CardProduct/CardProduct";
import CuteCrochetBackground from "@/components/CuteCrochetBackground/CuteCrochetBackground";

export default async function ProductsPage() {
  const productos = await getProductos();
  console.log(productos);
  
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-50">
        <CuteCrochetBackground />
      </div>
      
      {/* Header de la página */}
      <div className="pt-32 pb-8 px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E76F51] text-center mb-4 drop-shadow-lg">
          Nuestros Productos
        </h1>
        <p className="text-lg md:text-xl text-[#8D5524] text-center max-w-2xl mx-auto leading-relaxed">
          Descubre nuestra colección de productos artesanales hechos con amor y dedicación
        </p>
      </div>

      {/* Contenedor de productos */}
      <div className="px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {productos.map((producto) => (
            <CardProduct
              key={producto._id.toString()}
              producto={producto}
            />
          ))}
        </div>
        
        {/* Mensaje si no hay productos */}
        {productos.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto shadow-lg">
              <p className="text-xl text-gray-600 font-medium">
                No hay productos disponibles en este momento.
              </p>
              <p className="text-gray-500 mt-2">
                ¡Vuelve pronto para ver nuestras nuevas creaciones!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

