import Link from "next/link";

export default function AdminDashboard() {
  return (
    <main className="max-w-4xl mx-auto p-8 mt-10 font-sans">
      <h1 className="text-3xl mb-8 text-center">Panel de Administración</h1>

      <div className="flex flex-wrap gap-6 justify-center">
        <Link href="/admin/products" className="flex-1 min-w-[300px] border border-gray-300 rounded-xl p-6 no-underline text-inherit bg-gray-50 shadow-md transition-transform duration-200 hover:scale-105 hover:bg-gray-100">
          <h2 className="text-xl text-[#8D5524] font-semibold mb-2">🧶 Productos</h2>
          <p className="text-gray-600">Administra tu catálogo, stock y fotos de los productos.</p>
        </Link>

        <Link href="/admin/pedidos" className="flex-1 min-w-[300px] border border-gray-300 rounded-xl p-6 no-underline text-inherit bg-gray-50 shadow-md transition-transform duration-200 hover:scale-105 hover:bg-gray-100">
          <h2 className="text-xl text-[#8D5524] font-semibold mb-2">📦 Pedidos</h2>
          <p className="text-gray-600">Consulta los pedidos recientes y su estado.</p>
        </Link>
      </div>
    </main>
  );
}
