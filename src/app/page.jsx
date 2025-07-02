export default function HomePage() {
  return (
    <section style={{
      textAlign: "center",
      padding: "4rem 1rem"
    }}>
      <img src="/logo.png" alt="Lanah logo" style={{ maxWidth: "200px", marginBottom: "1rem" }} />
      <h2>Bienvenidos a Lanah</h2>
      <p>Tienda artesanal de crochet hecha con amor.</p>
      <a href="/productos">
        <button>Ver Productos</button>
      </a>
    </section>
  );
}
