import "./globals.css";

export const metadata = {
  title: "Lanah - Tienda de Crochet",
  description: "Tienda artesanal de crochet hecha con amor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>
          <div className="header">
            <img src="/logo.png" alt="Lanah logo" className="logo" />
            <div className="logo">
              {}
            </div>
            <h1 className="title">Lanah</h1>
          </div>
          <nav className="nav">
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
