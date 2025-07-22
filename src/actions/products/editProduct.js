"use server";
import { connectDB } from "@/lib/mongodb";
import { Producto } from "@/models/producto";
import { revalidatePath } from "next/cache";
import cloudinary from "@/lib/cloudinary";

export async function actualizarProducto(id, formData) {
  try {
    await connectDB();

    // Obtener producto actual primero
    const productoActual = await Producto.findById(id);
    if (!productoActual) {
      return { error: "Producto no encontrado" };
    }

    const rawFormData = {
      nombre: formData.get("nombre"),
      descripcion: formData.get("descripcion"),
      precio: parseFloat(formData.get("precio")),
      stock: parseInt(formData.get("stock")),
    };

    // Manejo de la imagen
    const imageFile = formData.get("imagen");
    let imageUrl = productoActual.imagen;

    if (imageFile && imageFile.size > 0) {
      // Eliminar imagen anterior si existe
      if (productoActual.imagen) {
        try {
          const urlParts = productoActual.imagen.split('/');
          const publicId = urlParts[urlParts.length - 1].split('.')[0];
          const fullPublicId = `productos/${publicId}`;
          await cloudinary.uploader.destroy(fullPublicId);
        } catch (error) {
          console.error("Error eliminando imagen anterior:", error);
        }
      }

      // Subir nueva imagen
      try {
        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const uploadResult = await new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              resource_type: "image",
              folder: "productos",
              public_id: `producto_${Date.now()}`,
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          );
          stream.end(buffer);
        });
        imageUrl = uploadResult.secure_url;
      } catch (error) {
        console.error("Error subiendo nueva imagen:", error);
        return { error: "Error al subir la nueva imagen" };
      }
    }

    // Actualizar el producto
    const productoActualizado = await Producto.findByIdAndUpdate(
      id,
      {
        ...rawFormData,
        imagen: imageUrl,
      },
      { new: true }
    );

    revalidatePath("/admin/products");
    return { success: true, producto: productoActualizado };
  } catch (error) {
    console.error("Error actualizando producto:", error);
    return { error: error.message || "Error al actualizar el producto" };
  }
}