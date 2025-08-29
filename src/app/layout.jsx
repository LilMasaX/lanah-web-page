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
  keywords: ["crochet", "tejidos a mano", "artesanía", "tienda crochet", "Lanah"],
  authors: [{ name: "Lanah" }],
  creator: "Lanah",
  /* metadataBase: new URL("https://lanah.com"), */
  openGraph: {
    images: [
      {
        url: "/Pumpum.png", // He quitado "public" ya que en producción no existe esa carpeta
        width: 1200,
        height: 630,
        alt: "Lanah Tienda de Crochet",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} pt-24`}>
        <CartProvider>
          <Toaster 
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#FFF',
                color: '#333',
                border: '1px solid #E76F51',
              },
              duration: 4000,
            }}
          />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          
          {/* Footer mejorado */}
          <footer className="w-full py-8 bg-gradient-to-br from-[#E76F51] via-[#F6B78D] to-[#FFD166] backdrop-blur-lg text-center relative overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/50 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/30 rounded-full animate-pulse delay-500"></div>
            </div>
            
            <div className="relative z-10 max-w-6xl mx-auto px-4">
              {/* Redes sociales */}
              <div className="flex flex-col items-center gap-4 mb-6">
                <h3 className="font-bold text-xl text-white drop-shadow-md">
                  ¡Síguenos en nuestras redes sociales!
                </h3>
                
                <div className="flex gap-6 justify-center">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/lanah.crochet_?igsh=MXRsMThmNTdnbjY4bQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Síguenos en Instagram"
                    className="group bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-[#E1306C] hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white group-hover:text-white transition-colors"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 6.5h.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@lanah.crochet?_t=ZS-8zHqGbWfJRJ&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Síguenos en TikTok"
                    className="group bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-black hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-white group-hover:text-white transition-colors"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1Z"/>
                    </svg>
                  </a>

                  {/* WhatsApp (opcional) */}
                  <a
                    href="https://wa.me/1234567890" // 👈 Cambia por tu número de WhatsApp
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contáctanos por WhatsApp"
                    className="group bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-[#25D366] hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-white group-hover:text-white transition-colors"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Separador decorativo */}
              <div className="w-32 h-1 bg-white/30 rounded-full mx-auto mb-4"></div>

              {/* Links del admin */}
              <div className="mb-4">
                <AdminFooterLink />
              </div>

              {/* Copyright */}
              <div className="text-center">
                <p className="text-white/95 font-medium mb-2">
                  Creaciones artesanales hechas con amor 💕
                </p>
                <p className="text-sm text-white/80">
                  © 2025 Lanah. Todos los derechos reservados.
                </p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}