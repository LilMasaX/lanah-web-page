import "./globals.css";

export const metadata = {
  title: "Lanah - Tienda de Crochet",
  description: "Tienda artesanal de crochet hecha con amor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header style={{
          background: "#F4A261",
          color: "#fff",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="/logo.png" alt="Lanah logo" style={{ height: "40px", marginRight: "10px" }} />
            <h1 style={{ margin: 0 }}>Lanah</h1>
          </div>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <a href="/">Inicio</a>
            <a href="/productos">Productos</a>
            <a href="/carrito">Carrito</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer style={{ textAlign: "center", padding: "1rem", background: "#FFE5D0", marginTop: "2rem" }}>
          © 2025 Lanah. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
