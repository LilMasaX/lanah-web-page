import "./globals.css";
import AdminFooterLink from "../components/AdminFooterLink/AdminFooterLink";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/NavBar/NavBar";
import { Toaster } from "sonner";
import "@/components/NavBar/NavBar.css";

export const metadata = {
  title: "Lanah - Tienda de Crochet",
  description: "Tienda artesanal de crochet hecha con amor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Toaster position="top-center" richColors />
        <CartProvider>
          <header>
            <div className="header">
              <img src="/logo.png" alt="Lanah logo" className="logoH" />
              <Navbar />
            </div>
          </header>
          <main>{children}</main>
          <footer className="footer">
            <AdminFooterLink />
            2025 Lanah. Todos los derechos reservados.
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
