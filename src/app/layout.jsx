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
      <body className={`${inter.className} pt-24`}>
        <CartProvider>
          <Toaster />
          <Navbar />
          <main>{children}</main>
          <footer className="w-full py-6 bg-gradient-to-br from-[#E76F51] via-[#F6B78D] to-[#FFD166] backdrop-blur-lg text-center text-amber-50">
            <AdminFooterLink />
            2025 Lanah. Todos los derechos reservados.
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
