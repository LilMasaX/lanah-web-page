import { Inter } from "next/font/google";
import "./styles/globals.css";
import AdminFooterLink from "../components/AdminFooterLink/AdminFooterLink";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/NavBar/NavBar";
import { Toaster } from "sonner";
 


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lanah - Tienda de Crochet",
  description: "Tienda artesanal de crochet hecha con amor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Toaster />
          <header>
            <div className="flex items-center justify-between px-6 py-4">
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
