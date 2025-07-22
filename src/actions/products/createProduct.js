"use server";

import { connectDB } from "@/lib/mongodb";
import { Producto } from "@/models/producto";
import { revalidatePath } from "next/cache";
import cloudinary from "@/lib/cloudinary";

function uploadToCloudinary(buffer) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: "image",
        folder: "productos",
        public_id: `producto_${Date.now()}`,
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.secure_url);
        }
      }
    );
    stream.end(buffer);
  });
}

export async function createProducto(formData) {
  try {
    await connectDB();

    // Asegúrate de que formData es un objeto FormData válido
    if (!(formData instanceof FormData)) {
      throw new Error("Datos del formulario no válidos");
    }

    const nombre = formData.get("nombre");
    const descripcion = formData.get("descripcion");
    const precio = parseFloat(formData.get("precio"));
    const stock = parseInt(formData.get("stock"));
    const imageFile = formData.get("imagen");

    // Validaciones básicas
    if (!nombre || !descripcion || isNaN(precio) || isNaN(stock)) {
      return { error: "Todos los campos son requeridos" };
    }

    let imageUrl = "";

    if (imageFile && imageFile.size > 0) {
      try {
        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);
        imageUrl = await uploadToCloudinary(buffer);
      } catch (error) {
        console.error("Error subiendo la imagen:", error);
        return { error: "Error al subir la imagen" };
      }
    }

    const nuevoProducto = new Producto({
      nombre,
      descripcion,
      precio,
      stock,
      imagen: imageUrl || "",
    });

    await nuevoProducto.save();

    revalidatePath("/admin/products");
    return { success: true };
    
  } catch (error) {
    console.error("Error en createProducto:", error);
    return { error: error.message || "Error al crear el producto" };
  }
}