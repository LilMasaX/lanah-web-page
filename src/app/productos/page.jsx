const productos = [
  {
    id: 1,
    nombre: "Amigurumi Gatito",
    precio: 15,
    imagen: "/producto1.jpg",
  },
  {
    id: 2,
    nombre: "Monedero Crochet",
    precio: 8,
    imagen: "/producto2.jpg",
  },
];

export default function ProductosPage() {
  return (
    <section style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "2rem",
      padding: "2rem"
    }}>
      {productos.map((prod) => (
        <div key={prod.id} style={{
          background: "#fff",
          borderRadius: "8px",
          padding: "1rem",
          textAlign: "center"
        }}>
          <img src={prod.imagen} alt={prod.nombre} style={{ width: "100%", borderRadius: "8px" }} />
          <h3>{prod.nombre}</h3>
          <p>${prod.precio}</p>
          <button>Agregar al carrito</button>
        </div>
      ))}
    </section>
  );
}
