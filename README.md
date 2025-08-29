# Lanah Web

**Lanah Web** es una tienda online de productos artesanales de crochet, con funcionalidades de catálogo, carrito de compras, pedidos personalizados y administración. El proyecto está construido con **Next.js 15**, **React 19** y **Tailwind CSS 4**.

---

## ✨ Características principales

- **Catálogo de productos**: Visualiza productos con imágenes, descripciones y stock.
- **Carrito de compras**: Añade productos, ajusta cantidades y realiza pedidos.
- **Pedidos por WhatsApp y Email**: Envía tu pedido directamente al administrador vía WhatsApp o correo electrónico.
- **Pedidos personalizados**: Solicita productos a medida desde la web.
- **Panel de administración**: Agrega, edita y elimina productos fácilmente.
- **Animaciones y UI moderna**: Interfaz atractiva, responsiva y animada.
- **Notificaciones**: Feedback visual con toasts para acciones del usuario.

---

## 🛠️ Tecnologías utilizadas

- **Next.js 15** (App Router, API Routes)
- **React 19**
- **Tailwind CSS 4**
- **MongoDB & Mongoose** (persistencia de productos)
- **Nodemailer** (envío de emails)
- **Cloudinary** (gestión de imágenes)
- **Framer Motion & GSAP** (animaciones)
- **Lucide React** (iconos)
- **Sonner** (notificaciones)
- **ngrok** (testing local de webhooks)

---

## 🚀 Instalación y ejecución local

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/lanah-web.git
   cd lanah-web
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   Crea un archivo `.env.local` en la raíz del proyecto con el siguiente contenido:
   ```env
   # Número de WhatsApp del administrador (formato internacional, sin +, guiones ni espacios)
   ADMIN_PHONE=573001234567

   # Configuración de MongoDB
   MONGODB_URI=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/lanah

   # (Opcional) Configuración de email para producción
   # EMAIL_USER=tu-email@gmail.com
   # EMAIL_PASS=tu-contraseña-de-aplicación
   ```

4. **Ejecuta el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Abre la app en tu navegador:**
   ```
   http://localhost:3000
   ```

---

## 📦 Scripts útiles

- `npm run dev` — Inicia el servidor de desarrollo
- `npm run build` — Compila la aplicación para producción
- `npm start` — Inicia la app en modo producción
- `npm run lint` — Ejecuta el linter

---

## 📁 Estructura principal

```
src/
  app/                # Páginas y rutas API
  components/         # Componentes reutilizables
  context/            # Contextos de React (ej. carrito)
  actions/            # Lógica de negocio y acceso a datos
  utils/              # Utilidades y helpers
public/               # Imágenes y assets estáticos
```

---

## 📝 Notas

- **No subas tu archivo `.env.local` a repositorios públicos.**
- El envío de emails está simulado por consola, pero puedes integrarlo fácilmente con servicios como SendGrid o Gmail.
- El número de WhatsApp debe estar en formato internacional (ejemplo para Colombia: `573001234567`).

---

## 📸 Screenshots

> 

---

## 🧑‍💻 Autor

- [William Sotaquira](https://github.com/LilMasaX)

---

## 🔒 Licencia

Este proyecto es de **licencia cerrada**. El código fuente y los recursos aquí presentados son propiedad exclusiva del autor y no pueden ser copiados, redistribuidos ni utilizados con fines comerciales sin autorización expresa.
